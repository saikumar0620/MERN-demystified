import React from 'react'
import { Link, Outlet } from 'react-router'

const AdminDashBoardLayout = () => {
  return (
  <div className="flex h-screen w-full bg-slate-50 p-6 text-slate-900">
    <aside className="flex w-72 flex-col gap-8 rounded-3xl bg-white p-6 shadow-sm border border-slate-100">
      <div className="flex items-center gap-3 px-2">
        <div className="h-10 w-10 rounded-xl bg-blue-600 flex items-center justify-center">
          <img className="h-6 w-6 object-contain invert" src="" alt="" />
        </div>
        <span className="text-xl font-bold tracking-tight">Dashboard</span>
      </div>

      <nav className="flex flex-col gap-2">
        <Link 
          to="/admin-dashboard/courses" 
          className="flex items-center rounded-xl px-4 py-3 text-sm font-semibold text-slate-600 transition-all hover:bg-blue-50 hover:text-blue-600"
        >
          Courses
        </Link>
        <Link 
          to="/admin-dashboard/quizes" 
          className="flex items-center rounded-xl px-4 py-3 text-sm font-semibold text-slate-600 transition-all hover:bg-blue-50 hover:text-blue-600"
        >
          Quizzes
        </Link>
        <Link 
          to="/admin-dashboard/transactions" 
          className="flex items-center rounded-xl px-4 py-3 text-sm font-semibold text-slate-600 transition-all hover:bg-blue-50 hover:text-blue-600"
        >
          Transactions
        </Link>
      </nav>
    </aside>

    <main className="flex-1 overflow-auto px-6">
      <div className="h-full rounded-3xl bg-white p-8 shadow-sm border border-slate-100">
        <Outlet />
      </div>
    </main>
  </div>
);
}

export default AdminDashBoardLayout