import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './layout/Main';
import Signin from './components/Signin';
import Signup from './components/Signup';
import Courses from './components/Courses/Courses';
import Info from './components/Courses/Info';
import PrivateRout from './PrivateRoter/PrivateRout';
import CheckOut from './components/CheckOut';

import React from 'react';

import Blog from './components/Blog';
import Home from './Home';



function App() {
  

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          element: <Home></Home>
        },
        {
          path: '/Home',
          element: <Home></Home>
        },
        {
          path: '/Signin',
          element: <Signin></Signin>
        },
        {
          path: '/Signup',
          element: <Signup></Signup>
        },
        {
          path: '/Blog',
          element: <Blog></Blog>
        },
        {
          path: '/books',
          element: <Courses></Courses>,
          loader: () => fetch('https://assignment-10-server-dusky-three.vercel.app/books/')
        },
        {
          path: '/books/:id',
          element: <Courses></Courses>,
          loader: ({ params }) => fetch(`https://assignment-10-server-dusky-three.vercel.app/books/${params.id}`)
        },
        {
          path: '/books/boi/:id',
          element: <Info></Info>,
          loader: ({ params }) => fetch(`https://assignment-10-server-dusky-three.vercel.app/books/boi/${params.id}`)
        },
        {
          path: '/checkout/:id',
          element: <PrivateRout><CheckOut></CheckOut></PrivateRout>,
          loader: ({ params }) => fetch(`https://assignment-10-server-dusky-three.vercel.app/books/boi/${params.id}`)
        },
      ]
    },
    {
      path: "*",
      element: <div> <h1>Page is not found</h1></div>
    }

  ])


  return (
   
      <div className="App">
        {/* <button className="btn btn-primary my-3" onChange={toogleTheme} checked={theme === "dark"}>change</button> */}
        <RouterProvider router={router}></RouterProvider>
      </div>
  );
}

export default App;