import { useEffect } from 'react'
import AppwriteAccount from './Appwrite-services/AppwriteAccount'
import useUserStore from './stores/useUserStore';
import { Outlet, useNavigate } from 'react-router-dom';
import AppHeader from './components/AppHeader';

const appWriteAccount = new AppwriteAccount();

function App() {
  const setUser = useUserStore((state) => state.setUser)
  const navigate = useNavigate();

  const getCurrentUser = async () => {
    try {
      const currentUser = await appWriteAccount.getCurrentUser();
      console.log(currentUser)
      setUser(currentUser);

    } catch (error) {
      console.error(error);
      navigate("/login")
    }
  }
  useEffect(() => {
    getCurrentUser();
  }, [])
  return (
    <div>
      <AppHeader />
      <main className='h-[92vh] '>
        <Outlet />
      </main>

    </div>
  )
}

export default App;
