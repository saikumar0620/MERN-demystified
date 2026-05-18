import { useState } from "react"
import { Link, useNavigate } from "react-router"


import PrimaryButton from "../components/Primarybutton"
import AppwriteAccount from "../Appwrite-services/AppwriteAccount"
import { Bounce, toast } from "react-toastify"

const Loginpage = () => {
  const [email, setEmail] = useState("")
  const [password, setpassword] = useState("")


  const appwriteAccount = new AppwriteAccount()
  const navigate = useNavigate()

  const loginUser = async (event) => {
    try {
      event.preventDefault();

      const loginData = {
        email,
        password
      }
      const loginResponse = await appwriteAccount.logInWithEmailAndPassword(loginData)
      console.log(loginResponse)
      navigate("/")
      toast.success('user login successfully', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });

    } catch (error) {
      console.error(error);


    } finally {
      console.log("finally");
    }
  }

  return (
    <div className="min-h-screen w-full bg-slate-950 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

      <form
        className="relative z-10 w-full max-w-md bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-3xl flex flex-col gap-6 shadow-2xl"
        onSubmit={loginUser}
      >
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-bold text-white tracking-tight">Welcome back</h1>
          <p className="text-slate-400 text-sm">Enter your credentials to access your account</p>
        </div>

        <div className="flex flex-col gap-4">
          <input
            onChange={(event) => setEmail(event.target.value)}
            value={email}
            type="email"
            placeholder="Email address"
            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all"
            required
          />
          <input
            onChange={(event) => setpassword(event.target.value)}
            value={password}
            type="password"
            placeholder="Password"
            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all"
            required
          />
        </div>

        <PrimaryButton type="submit" className="w-full py-3 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-xl transition-colors shadow-lg shadow-blue-500/20">
          Sign In
        </PrimaryButton>

        <p className="text-center text-slate-400 text-sm">
          New here?{' '}
          <Link to="/register" className="text-blue-400 font-medium hover:text-blue-300 transition-colors">
            Create an account
          </Link>
        </p>
      </form>
    </div>
  )
}

export default Loginpage




