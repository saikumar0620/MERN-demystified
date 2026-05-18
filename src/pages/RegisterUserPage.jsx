
import PrimaryButton from '../components/Primarybutton'
import { Link } from 'react-router'
import AppwriteAccount from '../Appwrite-services/AppwriteAccount'
import { useReducer } from 'react'

import { useNavigate } from 'react-router'
import { Bounce, toast } from 'react-toastify'


const initialState = {
  name: "",
  email: "",
  password: "",
  conformPassword: "",
  isSubmitting: false,
  error:null
}

function reducer(state, action) {
  switch (action.type) {
    case "SET_FIELD":
      return {...state,[action.field]: action.value}
    case "SUBMIT_START":
      return {...state,isSubmitting: true,error:null}
    case "SUBMIT_SUCCESS":
      return {...state,isSubmitting: false,error:null}
    case "SUBMIT_ERROR":
      return {...state,isSubmitting: false,error: action.error}
    default:
      return state;
  }
}
const RegisterUserPage = () => {
  const [state, dispatch] = useReducer(reducer, initialState)
  const navigate = useNavigate()
  const appwriteAccount = new AppwriteAccount()

  const registerNewUser = async (event) => {
    try {
      event.preventDefault();
      dispatch({type: "SUBMIT_START"})

      const newUserData = {name: state.name,email: state.email,password: state.password}
      const newuserResponse = await appwriteAccount.createNewUser(newUserData)
      if (newuserResponse?.$id) {
        dispatch({type: "SUBMIT_SUCCESS"})
        navigate("/login")
      }
      console.log(newuserResponse)
    } catch (error) {
      dispatch({type: "SUBMIT_ERROR", error: error.message})
      toast.error('Registration failed: ' + error.message, {
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
  }
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4">
      <div className="w-full max-w-md transform transition-all duration-300 animate-in fade-in zoom-in duration-500">
        <form 
          className="bg-white/10 backdrop-blur-lg border border-white/20 p-8 rounded-3xl shadow-2xl flex flex-col gap-5" 
          onSubmit={registerNewUser}>
          <div className="text-center mb-2">
            <h1 className="text-2xl font-bold text-white tracking-tight">Create Account</h1>
            <p className="text-slate-300 text-sm mt-2">Join us </p>
          </div>

          <div className="flex flex-col gap-4">
            <input 
              className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
              onChange={(event) => dispatch({type: "SET_FIELD", field: "name", value: event.target.value})} 
              value={state.name} 
              type="text" 
              placeholder="Full Name.." 
              required />
            
            <input 
              className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
              onChange={(event) => dispatch({type: "SET_FIELD", field: "email", value: event.target.value})} 
              value={state.email} 
              type="email" 
              placeholder="@Email Address..." 
              required />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input 
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                onChange={(event) => dispatch({type: "SET_FIELD", field: "password", value: event.target.value})} 
                value={state.password} 
                type="password" 
                placeholder="Password.." 
                required />
              <input 
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                onChange={(event) => dispatch({type: "SET_FIELD", field: "conformPassword", value: event.target.value})} 
                value={state.conformPassword} 
                type="password" 
                placeholder="Confirm your password..." 
                required />
            </div>
          </div>

          <PrimaryButton 
            type="submit" 
            className="w-full py-3 bg-gradient-to-r from-purple-400 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white font-semibold rounded-xl shadow-lg hover:shadow-purple-500/25 transform hover:-translate-y-0.5 active:scale-95 transition-all"
            disabled={state.isSubmitting}
          >
            {state.isSubmitting ? "Creating an Account..." : "Create An Account"}
          </PrimaryButton>

          <div className="text-center mt-2">
            <p className="text-slate-400 text-sm">
              Already a User?{' '}
              <Link to="/login" className="text-purple-400 font-medium hover:text-purple-300 transition-colors underline-offset-4 hover:underline">
                Log In
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  )
}


export default RegisterUserPage










// before used code 

// const RegisterUserPage = () => {
//   const [name, setName] = React.useState("")
//   const [email, setEmail] = React.useState("")
//   const [password, setpassword] = React.useState("")
//   const [conformPassword, setConformPassword] = React.useState("")
//   const navigate = useNavigate()
//   const appwriteAccount = new AppwriteAccount()

//   const registerNewUser = async (event) => {
//     try {
//       event.preventDefault();

//       const newUserData = {
//         name,
//         email,
//         password
//       }
//       const newuserResponse = await appwriteAccount.createNewUser(newUserData)
//       if (newuserResponse?.$id) {
//         navigate("/login")

//       }
//       console.log(newuserResponse)
//     } catch (error) {
//       toast.error('successfully done', {
//         position: "top-right",
//         autoClose: 5000,
//         hideProgressBar: false,
//         closeOnClick: false,
//         pauseOnHover: true,
//         draggable: true,
//         progress: undefined,
//         theme: "light",
//         transition: Bounce,
//       });


//     } finally {
//       console.log("finally");
//     }
//   }

//   // return (
//   //   <div className='h-screen w-screen bg-red-400 flex items-center justify-center'>
//   //     <form className='bg-white p-3 rounded-2xl flex flex-col gap-3' onSubmit={registerNewUser}>
//   //       <input onChange={(event) => setName(event.target.value)} value={name} type="text" placeholder='enter your name...' required />
//   //       <input onChange={(event) => setEmail(event.target.value)} value={email} type="email" placeholder='enter your email..' required />
//   //       <input onChange={(event) => setpassword(event.target.value)} value={password} type="password" placeholder='enter your password..' required />
//   //       <input onChange={(event) => setConformPassword(event.target.value)} value={conformPassword} type="password" placeholder='re-enter your password..' required />
//   //       <p>Already an User?
//   //         <Link to="/login" className="text-blue-400 flex-col hover:underline hover:italic">Log In</Link>
//   //       </p>
//   //       <PrimaryButton type="submit">
//   //         Register
//   //       </PrimaryButton>

//   //     </form>

//   //   </div>
//   // )


//   //designing the UI of register page

//   return (
//   <div className="min-h-screen w-full bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4">
//     <div className="w-full max-w-md transform transition-all duration-300 animate-in fade-in zoom-in duration-500">
//       <form 
//         className="bg-white/10 backdrop-blur-lg border border-white/20 p-8 rounded-3xl shadow-2xl flex flex-col gap-5" 
//         onSubmit={registerNewUser}
//       >
//         <div className="text-center mb-2">
//           <h1 className="text-3xl font-bold text-white tracking-tight">Create Account</h1>
//           <p className="text-slate-300 text-sm mt-2">Join us to start your journey</p>
//         </div>

//         <div className="flex flex-col gap-4">
//           <input 
//             className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
//             onChange={(event) => setName(event.target.value)} 
//             value={name} 
//             type="text" 
//             placeholder="Full Name" 
//             required 
//           />
          
//           <input 
//             className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
//             onChange={(event) => setEmail(event.target.value)} 
//             value={email} 
//             type="email" 
//             placeholder="Email Address" 
//             required 
//           />

//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//             <input 
//               className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
//               onChange={(event) => setpassword(event.target.value)} 
//               value={password} 
//               type="password" 
//               placeholder="Password" 
//               required 
//             />
//             <input 
//               className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
//               onChange={(event) => setConformPassword(event.target.value)} 
//               value={conformPassword} 
//               type="password" 
//               placeholder="Confirm" 
//               required 
//             />
//           </div>
//         </div>

//         <PrimaryButton 
//           type="submit" 
//           className="w-full py-3 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white font-semibold rounded-xl shadow-lg hover:shadow-purple-500/25 transform hover:-translate-y-0.5 active:scale-95 transition-all"
//         >
//           Create Free Account
//         </PrimaryButton>

//         <div className="text-center mt-2">
//           <p className="text-slate-400 text-sm">
//             Already a member?{' '}
//             <Link to="/login" className="text-purple-400 font-medium hover:text-purple-300 transition-colors underline-offset-4 hover:underline">
//               Log In
//             </Link>
//           </p>
//         </div>
//       </form>
//     </div>
//   </div>
// )
// }

// export default RegisterUserPage
