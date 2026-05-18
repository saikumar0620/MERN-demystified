import { create } from "zustand"

const useUserStore = create ((set) => ({
  user:null,
  setUser:(currentUser)=>set({user:currentUser}),
  logout:()=>set({user:null}) 
}))

export default useUserStore;