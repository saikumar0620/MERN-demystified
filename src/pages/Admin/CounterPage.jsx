import React, { useReducer } from 'react';

// 1. Initial State here we have a count property initialized to 0
const initialState = { count: 0 };


function reducer(state, action) {
  switch (action.type) {
    case 'increment': 
    return { count: state.count + 1 };
    case 'decrement': 
    return { count: state.count - 1 };
    case 'reset': 
    return { count: 0 };
    default: throw new Error("Unsupported action");
  }
}


 export default function Counter() {

  const [state, dispatch] = useReducer(reducer, initialState);

 return (
  <div className="flex min-h-[300px] items-center justify-center bg-slate-50 p-8">
    <div className="flex flex-col items-center gap-8 rounded-3xl bg-white p-10 shadow-xl shadow-slate-200 ring-1 ring-slate-100">
      <div className="flex flex-col items-center gap-1">
        <span className="text-sm font-semibold uppercase tracking-wider text-slate-400">Current Balance</span>
        <p className="text-6xl font-black tabular-nums text-slate-800">
          {state.count}
        </p>
      </div>

      <div className="flex items-center gap-4">
        <button 
          onClick={() => dispatch({ type: 'decrement' })}
          className="flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-100 text-2xl font-bold text-slate-600 transition-all hover:bg-red-50 hover:text-red-500 active:scale-95"
        >
          −
        </button>
        
        <button 
          onClick={() => dispatch({ type: 'reset' })}
          className="rounded-2xl bg-slate-900 px-8 py-4 font-bold text-white transition-all hover:bg-slate-800 hover:shadow-lg active:scale-95"
        >
          Reset
        </button>

        <button 
          onClick={() => dispatch({ type: 'increment' })}
          className="flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-100 text-2xl font-bold text-slate-600 transition-all hover:bg-green-50 hover:text-green-600 active:scale-95"
        >
          +
        </button>
      </div>
    </div>
  </div>
);
}
