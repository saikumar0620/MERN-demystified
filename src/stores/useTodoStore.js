import {create} from 'zustand'
const useTodoStore=create((set)=>({
  todos:[],
  createTodos:(newTodo)=>(set((state)=>({todos:[...state.todos,newTodo]})))
}))




export default useTodoStore;