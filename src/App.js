import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './layout/Main';
import Signin from './components/Signin';
import Signup from './components/Signup';
import Courses from './components/Courses';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children:[
        {
          path: '/Signin',
          element: <Signin></Signin>
        },        
        {
          path: '/Signup',
          element: <Signup></Signup>
        },
        {
          path: '/Courses',
          element: <Courses></Courses>
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
