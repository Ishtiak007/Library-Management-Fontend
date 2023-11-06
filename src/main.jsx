import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainLayout from './Components/MainLayout/MainLayout.jsx';
import ErrorPage from './Components/ErrorPage/ErrorPage.jsx';
import Home from './Components/Home/Home.jsx';
import LoginPage from './Components/LoginPage/LoginPage.jsx';
import RegisterPage from './Components/RegisterPage/RegisterPage.jsx';
import AuthProvider from './Components/Provider/AuthProvider.jsx';
import AddBook from './Components/AddBook/AddBook.jsx';
import PrivateRoutes from './Components/PrivateRoutes/PrivateRoutes.jsx';
import Category from './Components/Category/Category.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/addBook',
        element: <PrivateRoutes><AddBook></AddBook></PrivateRoutes>
      },
      {
        path: '/login',
        element: <LoginPage></LoginPage>
      },
      {
        path: '/category',
        element: <Category></Category>
      },
      {
        path: '/register',
        element: <RegisterPage></RegisterPage>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
