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
import AllBook from './Components/AllBook/AllBook.jsx';
import BorrowedBook from './Components/BorrowedBook/BorrowedBook.jsx';
import TotalAllBooks from './Components/TotalAllBooks/TotalAllBooks.jsx';
import BookDetails from './Components/AddBook/BookDetails.jsx';
import AboutUs from './Components/AboutUs/AboutUs.jsx';
import UpdateBook from './Components/UpdateBook/UpdateBook.jsx';
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
        path: '/allBook',
        element: <PrivateRoutes><AllBook></AllBook></PrivateRoutes>,
        loader: () => fetch('http://localhost:5000/allBooks')
      },
      {
        path: '/borrowedBook',
        element: <PrivateRoutes><BorrowedBook></BorrowedBook></PrivateRoutes>
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
      },
      {
        path: '/aboutUs',
        element: <AboutUs></AboutUs>
      },
      {
        path: '/updateBook/:id',
        element: <PrivateRoutes><UpdateBook></UpdateBook></PrivateRoutes>,
        loader: ({ params }) => fetch(`http://localhost:5000/allBooks/${params.id}`)
      },
      {
        path: '/totalAllBooks/:category',
        element: <PrivateRoutes><TotalAllBooks></TotalAllBooks></PrivateRoutes>,
        loader: () => fetch('http://localhost:5000/allBooks')
      },
      {
        path: '/bookDetails/:id',
        element: <BookDetails></BookDetails>,
        loader: ({ params }) => fetch(`http://localhost:5000/allBooks/${params.id}`)
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
