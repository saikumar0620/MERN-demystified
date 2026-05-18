



import React from 'react'
import useUserStore from '../stores/useUserStore'
import { Link } from 'react-router'

const AppHeader = () => {
  const currentUser = useUserStore((state) => state.user)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200/60 bg-white/70 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">

        <div className="flex items-center gap-10">
          <Link
            to="/"
            className="group flex items-center gap-2 text-xl font-black tracking-tight"
          >
            <span className="bg-gradient-to-br from-blue-600 via-blue-500 to-indigo-600 bg-clip-text text-transparent transition-opacity group-hover:opacity-80">
              St. MERN
            </span>
          </Link>

          <nav className="hidden items-center gap-1 rounded-full border border-slate-200/50 bg-slate-100/50 p-1 md:flex">
            <Link
              to="/"
              className="rounded-full px-4 py-1.5 text-sm font-medium text-slate-600 transition-all hover:bg-white hover:text-blue-600 hover:shadow-sm active:scale-95"
            >
              Home
            </Link>
            <Link
              to="/todo"
              className="rounded-full px-4 py-1.5 text-sm font-medium text-slate-600 transition-all hover:bg-white hover:text-blue-600 hover:shadow-sm active:scale-95"
            >
              Todo
            </Link>
            <Link
              to="/counter"
              className="rounded-full px-4 py-1.5 text-sm font-medium text-slate-600 transition-all hover:bg-white hover:text-blue-600 hover:shadow-sm active:scale-95"
            >
              Counter
            </Link>
            {/* <Link
              to="/counters"
              className="rounded-full px-4 py-1.5 text-sm font-medium text-slate-600 transition-all hover:bg-white hover:text-blue-600 hover:shadow-sm active:scale-95"
            >
              Counters
            </Link> */}
            <Link
              to="/products"
              className="rounded-full px-4 py-1.5 text-sm font-medium text-slate-600 transition-all hover:bg-white hover:text-blue-600 hover:shadow-sm active:scale-95"
            >
              products
            </Link>

            <Link
              to="/cart"
              className="rounded-full px-4 py-1.5 text-sm font-medium text-slate-600 transition-all hover:bg-white hover:text-blue-600 hover:shadow-sm active:scale-95"
            >
              My cart
            </Link>


            <Link
              to="/profile"
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-white px-6 py-2.5 text-sm font-bold text-slate-700 shadow-md ring-1 ring-slate-200 transition-all duration-300 ease-out hover:text-blue-600 hover:shadow-lg hover:ring-blue-300 active:scale-95 active:shadow-inner"
            >
              <span className="absolute inset-0 z-0 bg-gradient-to-r from-blue-50 to-indigo-50 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></span>

              <span className="relative z-10 flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-4 w-4 transition-transform duration-300 group-hover:rotate-12"
                >
                  <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z" clipRule="evenodd" />
                </svg>
                Profile
              </span>
            </Link>
          </nav>
        </div>

        <div className="flex items-center gap-3">
          {currentUser?.$id && currentUser?.labels?.includes("admin") && (
            <Link
              to="/admin-dashboard"
              className="hidden rounded-lg bg-amber-50 px-4 py-2 text-xs font-bold uppercase tracking-wider text-amber-700 ring-1 ring-inset ring-amber-700/10 transition-colors hover:bg-amber-100 sm:block"
            >
              Admin
            </Link>
          )}

          {!currentUser?.$id ? (
            <Link
              to="/login"
              className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-5 py-2 text-sm font-semibold text-white shadow-lg shadow-blue-500/25 transition-all hover:bg-blue-700 hover:shadow-blue-500/35 active:scale-[0.98]"
            >Sign In

            </Link>
          ) : (
            <div className="h-8 w-8 rounded-full bg-gradient-to-tr from-blue-500 to-indigo-600 p-0.5 shadow-inner">
              {/* <div className="h-full w-full rounded-full bg-white transition-opacity hover:opacity-90" /> */}
            </div>
          )}
        </div>

      </div>
    </header>
  );

}
export default AppHeader