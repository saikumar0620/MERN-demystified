import React from 'react'
import TodosEditor from './TodosEditor'
import TodosListing from './TodosListing'

const TodoAppPages = () => {
  return (
  <div className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8">
    <div className="max-w-md mx-auto bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-100 p-8 flex flex-col gap-8">
      <div className="text-center">
        <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Task Manager</h1>
        <p className="text-slate-500 text-sm mt-1">Stay organized and focused</p>
      </div>
      
      <div className="flex flex-col gap-6">
        <TodosEditor />
        <div className="h-px bg-slate-100 w-full" />
        <TodosListing />
      </div>
    </div>
  </div>
)
}

export default TodoAppPages