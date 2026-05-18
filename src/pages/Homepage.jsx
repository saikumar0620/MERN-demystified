import React from 'react';
import { ArrowRight, Sparkles, ListTodo, Shield, Layers } from 'lucide-react';
import { Link } from 'react-router';

const Homepage = () => {
  return (
    <div className="min-h-screen bg-slate-50 overflow-hidden relative">
      {/* Organic Background Blobs for a premium vibe */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-[-10%] left-[-5%] w-[500px] h-[500px] bg-blue-200 rounded-full mix-blend-multiply filter blur-[120px] opacity-50" />
        <div className="absolute top-[20%] right-[-5%] w-[400px] h-[400px] bg-amber-200 rounded-full mix-blend-multiply filter blur-[100px] opacity-40" />
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-24 pb-24 md:pt-32">
        {/* Hero Section */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 text-xs font-semibold text-slate-700 mb-8 shadow-sm tracking-wide uppercase">
            <Sparkles size={14} className="text-blue-500" />
            <span>Handcrafted Workspace</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-black tracking-tight text-slate-900 leading-[1.05] mb-6">
            Organize your life. <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-amber-600">
              Without the noise.
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-xl leading-relaxed font-medium">
            A deliberately minimal MERN stack workspace. We stripped away the bloat so you can focus exclusively on what actually matters—getting things done.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 items-start">
            <Link 
              to="/todo" 
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-slate-900 text-white font-bold rounded-2xl shadow-lg hover:bg-slate-800 hover:shadow-xl hover:-translate-y-0.5 transition-all w-full sm:w-auto"
            >
              Open Todo App
              <ArrowRight size={18} />
            </Link>
            <Link 
              to="/profile" 
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-white text-slate-700 font-bold rounded-2xl border border-slate-200 hover:bg-slate-50 hover:border-slate-300 transition-all w-full sm:w-auto shadow-sm"
            >
              My Profile
            </Link>
          </div>
        </div>

        {/* Bento Grid Features */}
        <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2 bg-white rounded-3xl p-8 border border-slate-200 shadow-sm relative overflow-hidden group hover:border-blue-200 transition-colors">
            <div className="relative z-10">
              <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-6 border border-blue-100 shadow-sm">
                <ListTodo size={28} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3 tracking-tight">Frictionless task management</h3>
              <p className="text-slate-600 max-w-md text-lg">
                Built on React Query for instant optimistic UI updates. When you check off a task, it registers immediately. No spinners, no waiting.
              </p>
            </div>
            {/* Decorative background icon */}
            <div className="absolute -right-6 -bottom-6 p-8 opacity-[0.03] group-hover:opacity-[0.06] transition-opacity duration-500 transform group-hover:scale-110">
              <ListTodo size={200} />
            </div>
          </div>

          <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm relative overflow-hidden group hover:border-amber-200 transition-colors">
            <div className="relative z-10">
              <div className="w-14 h-14 bg-amber-50 text-amber-600 rounded-2xl flex items-center justify-center mb-6 border border-amber-100 shadow-sm">
                <Shield size={28} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3 tracking-tight">Appwrite Secured</h3>
              <p className="text-slate-600 text-lg">
                Your data is locked down securely using Appwrite's robust backend authentication.
              </p>
            </div>
            <div className="absolute -right-4 -bottom-4 p-8 opacity-[0.03] group-hover:opacity-[0.06] transition-opacity duration-500 transform group-hover:scale-110">
              <Shield size={160} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Homepage;