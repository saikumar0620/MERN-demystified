
import { useState } from 'react';
import AppwriteTablesDB from '../Appwrite-services/AppWriteTablesDb';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { Bounce, toast } from 'react-toastify';

const TodosEditor = () => {
    const [todoText, setTodoText] = useState("");
    const appwriteTablesDb = new AppwriteTablesDB();
    const queryClient = useQueryClient()

    const createNewTodo = async () => {
        const newTodoData = await appwriteTablesDb.createTable(import.meta.env.VITE_APPWRITE_DB_ID, import.meta.env.VITE_APPWRITE_TODOS_TABLE_ID, { text_title: todoText });
        console.log(newTodoData);
        return newTodoData;
    }

    const mutation = useMutation({
        mutationFn: createNewTodo,
        onSuccess: () => {
            // invalidate the cache and refetch the todos
            queryClient.invalidateQueries({ queryKey: ['todos'] });
            setTodoText("");
            toast.success("New todo has been added, successfully!", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce,
            });
        },
        onError: (error) => {
            console.error(error);
            toast.error(error.message, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce,
            });
        }
    })

    const handleTodoSubmission = async (event) => {
        event.preventDefault();
        // trigger the mutation: CREATE/POST
        mutation.mutate();
    }

   return (
    <div className="w-full max-w-lg mx-auto p-6 bg-white/80 backdrop-blur-xl rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-slate-100">
        <form className="group flex flex-col sm:flex-row gap-3" onSubmit={handleTodoSubmission}>
            <div className="relative flex-grow">
                <input
                    className="peer w-full bg-slate-50 border-2 border-transparent text-slate-800 p-4 pl-12 rounded-2xl outline-none focus:bg-white focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 transition-all duration-300 placeholder:text-slate-400"
                    value={todoText}
                    onChange={(event) => setTodoText(event.target.value)}
                    type="text"
                    placeholder="Add a new task..."
                />
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 peer-focus:text-indigo-300 transition-colors duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="12" y1="5" x2="12" y2="19"></line>
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                    </svg>
                </div>
            </div>
            <button
                className="relative overflow-hidden bg-indigo-600 hover:bg-indigo-700 active:scale-95 disabled:bg-slate-300 disabled:scale-100 disabled:cursor-not-allowed text-white font-bold rounded-2xl px-8 py-4 shadow-lg shadow-indigo-200 transition-all duration-300"
                type="submit"
                disabled={!todoText.trim()}
            >
                <span className="relative z-10">Add Task</span>
            </button>
        </form>

        {mutation.isError && (
            <div className="mt-4 flex items-center gap-2 p-3 bg-red-50 border border-red-100 rounded-xl animate-in fade-in slide-in-from-top-2">
                <svg className="text-red-500" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="12" y1="8" x2="12" y2="12"></line>
                    <line x1="12" y1="16" x2="12.01" y2="16"></line>
                </svg>
                <p className="text-sm text-red-600 font-semibold">
                    {mutation.error.message}
                </p>
            </div>
        )}
    </div>
)
}

export default TodosEditor
