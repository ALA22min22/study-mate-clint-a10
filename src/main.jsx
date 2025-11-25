import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Root from './router/root.jsx';
import Home from './pages/Home/Home.jsx';
import FindPartners from './pages/Find-Partners/FindPartners.jsx';
import MyConnections from './pages/My-Connections/MyConnections.jsx';
import Profile from './pages/Profile/Profile.jsx';
import CreatePartner from './pages/Create-Partner/CreatePartner.jsx';
import DetailsTP from './pages/Home/DetailsTP.jsx';
import Authentication from './router/Authentication.jsx';
import Register from './pages/Register/Register.jsx';

import Login from './pages/Login/Login.jsx';
import AuthProvider from './Provider/AuthProvider.jsx';
import PrivateRoute from './Provider/PrivateRoute.jsx';
import FindPartnerDetails from './pages/Find-Partners/FindPartnerDetails.jsx';
import Update from './pages/My-Connections/Update.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        Component: Home
      },
      {
        path: "/top-partner-details/:id",
        loader: ({ params }) => fetch(`http://localhost:3000/top-partners/${params.id}`),
        element: <PrivateRoute>
          <DetailsTP></DetailsTP>
        </PrivateRoute>
      },
      {
        path: "Find-Partners",
        element: <PrivateRoute>
          <FindPartners></FindPartners>
        </PrivateRoute>

      },
      {
        path: "Find-Partners/:id",
        // loader: ({ params }) => fetch(`http://localhost:3000/user/${params.id}`),
        element: <PrivateRoute>
          <FindPartnerDetails></FindPartnerDetails>
        </PrivateRoute>
      },


      {
        path: "Create-Partner",
        element: <PrivateRoute>
          <CreatePartner></CreatePartner>
        </PrivateRoute>
      },
      {
        path: "My-Connections",
        element: <PrivateRoute>
          <MyConnections></MyConnections>
        </PrivateRoute>
      },
      {
        path: "update/:id",
        loader: ({ params }) => fetch(`http://localhost:3000/request/${params.id}`),
        element: <PrivateRoute>
          <Update></Update>
        </PrivateRoute>
      }
    ]
  },
  {
    path: "auth",
    Component: Authentication,
    children: [
      {
        path: "/auth/login",
        Component: Login
      },
      {
        path: "/auth/Register",
        Component: Register
      }
    ]
  }
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />,

    </AuthProvider>
  </StrictMode>,
)
