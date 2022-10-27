import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './layout/Main';
import Signin from './components/Signin';
import Signup from './components/Signup';
import Courses from './components/Courses/Courses';
import Info from './components/Courses/Info';
import PrivateRout from './PrivateRoter/PrivateRout';
import CheckOut from './components/CheckOut';

import React, {createContext, useState} from 'react';
import ReactSwitch from 'react-switch';
import Blog from './components/Blog';
export const ThemeContext = createContext(null);



function App() {
  const [theme, setTheme] = useState("dark");
  const toogleTheme =()=>{
    setTheme(curr => (curr === "dark" ? "light" : "dark") )
  }


  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
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
          loader: () => fetch('http://localhost:5000/books/')
        },
        {
          path: '/books/:id',
          element: <Courses></Courses>,
          loader: ({ params }) => fetch(`http://localhost:5000/books/${params.id}`)
        },
        {
          path: '/books/boi/:id',
          element: <Info></Info>,
          loader: ({ params }) => fetch(`http://localhost:5000/books/boi/${params.id}`)
        },
        {
          path:'/checkout/:id',
          element:<PrivateRout><CheckOut></CheckOut></PrivateRout>,
          loader: ({ params }) => fetch(`http://localhost:5000/books/boi/${params.id}`)        
        },       
      ]
    },
    {
      path: "*",
      element: <div> <h1>Page is not found</h1></div>
    }

  ])


  return (
    <ThemeContext.Provider value={{theme, setTheme}}>
    <div className="App" id={theme}>
      <ReactSwitch onChange={toogleTheme} checked={theme === "dark"}></ReactSwitch>
      {/* <button className="btn btn-primary my-3" onChange={toogleTheme} checked={theme === "dark"}>change</button> */}
      <RouterProvider router={router}></RouterProvider>
    </div></ThemeContext.Provider>
  );
}

export default App;