
import { useNavigate } from 'react-router';
import useUserStore from '../stores/useUserStore'
import AppwriteAccount from '../Appwrite-services/AppwriteAccount';
import { useQuery } from '@tanstack/react-query';
import{fetchAllTodos} from'../components/TodosListing.jsx'

const ProfilePage = () => {
  const currentUser=useUserStore((state)=>state.user)
  console.log(currentUser)
  const navigate=useNavigate();
  const appWriteAccount=new AppwriteAccount();

   const {data: todos, isLoading, isPending: isTodosPending, isFetching, error} = useQuery({
        queryKey: ["todos"],
        queryFn: fetchAllTodos
    })
    // console.log("profile page redered")

  const handleLogout=async()=>{
    try {
      const result=await appWriteAccount.logOutCurrentUser();
      console.log(result);
      if(!result?.message){
        navigate("/login")
      }

    } catch (error) {
      console.error(error);
    }
  }
  // return (
  //   <div>
  //     {currentUser?.name} <br />
  //     <button className='text-white hover:italic hover:underline bg-red-500 p-3 border-3' onClick={handleLogout}>Logout</button>
      
  //   </div>
  // )


  // design 2
//   return (
//   <div className="flex flex-col items-center justify-center gap-4 p-8 bg-gray-50 rounded-xl shadow-sm border border-gray-200 max-w-sm mx-auto">
//     <div className="flex flex-col items-center gap-1">
//       <span className="text-xs font-semibold uppercase tracking-wider text-gray-400">Current User</span>
//       <h2 className="text-xl font-bold text-gray-800">{currentUser?.name || "Guest"}</h2>
//     </div>

//     <button 
//       className="w-full py-2.5 px-6 text-sm font-medium text-white bg-red-600 rounded-lg transition-all duration-200 
//      hover:bg-red-700 hover:shadow-md active:scale-95 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2" 
//       onClick={handleLogout}
//     >
//       Logout
//     </button>
//   </div>
// )



//design -3
return (<div className="group relative mx-auto max-w-sm overflow-hidden rounded-2xl border border-white/20 bg-white/80 p-[1px] shadow-2xl backdrop-blur-xl transition-all duration-500 hover:shadow-red-500/10">
  <div className="absolute inset-0 bg-gradient-to-br from-gray-100 via-transparent to-red-50/50 opacity-50" />
  
  <div className="relative flex flex-col items-center justify-center gap-6 rounded-[15px] bg-white p-8">
    <div className="relative">
      <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-red-600 to-orange-400 opacity-20 blur-sm group-hover:opacity-40 transition-opacity" />
      <div className="relative flex h-16 w-16 items-center justify-center rounded-full bg-gray-50 text-2xl font-bold text-gray-800 border border-gray-100 shadow-inner">
        {currentUser?.name?.charAt(0) || "G"}
      </div>
    </div>

    <div className="flex flex-col items-center gap-1.5">
      <span className="inline-flex items-center rounded-full bg-red-50 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-widest text-red-600 ring-1 ring-inset ring-red-500/20">
        Active Session
      </span>
      <h2 className="bg-gradient-to-b from-gray-900 to-gray-600 bg-clip-text text-2xl font-black tracking-tight text-transparent">
        {currentUser?.name || "Guest User"}
      </h2>
      <p className="text-xs text-gray-400 font-medium">
        {currentUser?.email || "No account linked"}
      </p>
    </div>

    <button 
      onClick={handleLogout}
      className="group/btn relative w-full overflow-hidden rounded-xl bg-gray-900 px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-red-600 active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
    >
      <span className="relative z-10 flex items-center justify-center gap-2">
        Sign Out
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4 transition-transform group-hover/btn:translate-x-1">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75" />
        </svg>
      </span>
    </button>
  </div>
</div>)

}

export default ProfilePage


