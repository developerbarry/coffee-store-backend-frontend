import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root.jsx';
import AddCoffee from './components/Pages/AddCoffee.jsx';
import Home from './components/Pages/Home.jsx';
import UpdateCoffee from './components/Pages/UpdateCoffee.jsx';
import Error from './components/Pages/Error.jsx';
import SignUp from './components/Pages/SignUp.jsx';
import Login from './components/Pages/Login.jsx';
import AuthProvider from './providers/AuthProvider/AuthProvider.jsx';
import Users from './components/Pages/Users.jsx';
// import Home from './components/Pages/Home.jsx';

const router = createBrowserRouter(
  [
    {
      path: '/',
      errorElement: <Error />,
      element: <Root />,
      children: [
        {
          index: true,
          element: <Home />
          // loader: () => fetch('https://server-liard-beta.vercel.app/coffees')  //HydrateFallback error
        },
        {
          path: 'add-coffee',
          element: <AddCoffee />
        },
        {
          path: 'update-coffee/:id/edit',
          element: <UpdateCoffee />,
          loader: ({ params }) => fetch(`https://server-liard-beta.vercel.app/coffees/${params.id}`)
        },
        {
          path: 'sign-up',
          element: <SignUp />
        },
        {
          path: 'log-in',
          element: <Login />
        },
        {
          path: 'users',
          element: <Users />,
          loader: () => fetch('https://server-liard-beta.vercel.app/users')
        }
      ]
    },


  ],
  {
    future: {
      v7_startTransition: true,
      v7_relativeSplatPath: true,
      v7_fetcherPersist: true,
      v7_normalizeFormMethod: true,
      v7_partialHydration: true,
      v7_skipActionErrorRevalidation: true,
    },
  }
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider
        router={router}
        future={{
          v7_startTransition: true,
        }}
      />
    </AuthProvider>
  </StrictMode>,
)
