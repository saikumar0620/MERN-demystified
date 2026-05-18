import { useState } from 'react'
import { Loader, Trash2 } from "lucide-react"

import AppWriteTablesDb from '../Appwrite-services/AppWriteTablesDb'
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';

const appwriteTableDb = new AppWriteTablesDb();

export const fetchAllTodos = async () => {
  try {
    const data = await appwriteTableDb.getAllRecords(import.meta.env.VITE_APPWRITE_DB_ID, import.meta.env.VITE_APPWRITE_TODOS_TABLE_ID);
    return data;
  } catch (error) {
    console.error(error)
  }
}
const TodosListing = () => {
  const queryClient = useQueryClient();

  const { data: todos, isLoading, isFetching, isPending: isTodosPending, error } = useQuery({
    queryKey: ["todos"],
    queryFn: fetchAllTodos,
  })

  const deleteMutation = useMutation({
    mutationFn: async (todoId) => {
      return await appwriteTableDb.deleteRecord(
        import.meta.env.VITE_APPWRITE_DB_ID, 
        import.meta.env.VITE_APPWRITE_TODOS_TABLE_ID, 
        todoId
      );
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    }
  });

  if (isTodosPending) {
    return <h1 className='text-5xl flex items-center gap-3'>
      <Loader />
      Todos are 1st time Loading...</h1>
  }

   if (isLoading) {
    return (
    <h1 className='text-5xl'>
      
      Todos are Loading...</h1>)
  }


  if (error) {
    return <h1>Error fetching todos</h1>
  }


  return (
  <div className='max-w-2xl mx-auto p-6 space-y-6'>
    {(isLoading || isFetching) && (
      <div className='flex items-center justify-center p-8'>
        <div className='animate-pulse flex flex-col items-center gap-2'>
          <div className='w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin' />
          <p className='text-slate-500 font-medium'>
            {isLoading ? 'Loading tasks...' : 'Updating...'}
          </p>
        </div>
      </div>
    )}

    {error && (
      <div className='p-4 bg-red-50 border border-red-200 rounded-xl'>
        <p className='text-red-600 text-center font-medium'>Failed to load todos. Please try again.</p>
      </div>
    )}

    <div className='grid gap-4'>
      {todos?.map((todo) => (
        <article 
          key={todo?.$id} 
          className='group relative bg-white p-5 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all duration-200 flex justify-between items-start'
        >
          <div className='flex flex-col gap-1'>
            <h2 className='text-xl font-bold text-slate-800 group-hover:text-blue-600 transition-colors'>
              {todo?.text_title}
            </h2>
            <p className='text-slate-600 leading-relaxed'>
              {todo?.description || "No description available"}
            </p>
          </div>
          <button
            onClick={(e) => {
              e.preventDefault();
              deleteMutation.mutate(todo?.$id);
            }}
            disabled={deleteMutation.isPending}
            className='p-2 text-slate-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors disabled:opacity-50 flex-shrink-0'
            aria-label='Delete todo'
          >
            <Trash2 size={20} />
          </button>
          <div className='absolute left-0 top-0 h-full w-1 bg-blue-500 rounded-l-2xl opacity-0 group-hover:opacity-100 transition-opacity' />
        </article>
      ))}
    </div>
  </div>
)
}

export default TodosListing