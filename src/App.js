import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './layout/Main';
import Signin from './components/Signin';
import Signup from './components/Signup';
import Courses from './components/Courses/Courses';
import Info from './components/Courses/Info';
import PrivateRout from './PrivateRoter/PrivateRout';
import CheckOut from './components/CheckOut';

function App() {
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
    }

  ])


  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>


    </div>
  );
}

export default App;