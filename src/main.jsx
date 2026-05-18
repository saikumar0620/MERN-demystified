import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import "./index.css"
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ProfilePage from './pages/ProfilePage.jsx'
import TodoAppPages from './components/TodoAppPages.jsx'
import Loginpage from './pages/Loginpage.jsx'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import RegisterUserPage from './pages/RegisterUserPage.jsx'
import Homepage from './pages/Homepage.jsx'
// Change this to match the exact file name you verified in Step 1
import AdminDashboardLayout from './pages/Admin/AdminDashboardLayout.jsx';

import Overview from './pages/Admin/Overview.jsx'
import Admincourses from './pages/Admin/Admincourses.jsx'
import AdminQuizes from './pages/Admin/AdminQuizes.jsx'
import AdminTransactions from './pages/Admin/AdminTransactions.jsx'
import { QueryClientProvider } from '@tanstack/react-query'
import queryClient from './utils/queryClient.js'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import Counter from './pages/Admin/CounterPage.jsx'

import { Provider } from "react-redux"
import { store } from './app/store.js'
import ProductPage from './pages/ProductPage.jsx'
import CartPage from './pages/CartPage.jsx'
import CounterPage from './pages/Admin/CounterPage.jsx'


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Homepage />
      },
      {
        path: "profile",
        element: <ProfilePage />
      },
      {
        path: "todo",
        element: <TodoAppPages />
      },

      {
        path: "counter",
        element: <CounterPage />
      },

      {
        path: "products",
        element: <ProductPage />
      },
      {
        path: "cart",
        element: <CartPage />
      }
    ]
  },


  {
    path: "/admin-dashboard",
    element: <AdminDashBoardLayout />,
    children: [
      {
        index: true,
        element: <Overview />
      },
      {
        path: "courses",
        element: <Admincourses />
      },
      {
        path: "quizes",
        element: <AdminQuizes />
      },
      {
        path: "transactions",
        element: <AdminTransactions />
      },
    ]
  },
  {
    path: "/register",
    element: <RegisterUserPage />
  },
  {
    path: "/login",
    element: <Loginpage />,
  }


])

const rootDiv = document.getElementById('root');
createRoot(rootDiv).render(
  <>
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>


      <ReactQueryDevtools initialIsOpen={false} />
      <ToastContainer />
    </QueryClientProvider>
  </>
);
