import './App.css';
import Register from './components/Register';
import {RouterProvider, createBrowserRouter } from 'react-router-dom';
import Login from './components/Login';



const router = createBrowserRouter(
  [
    {path: '/login', element: <Login />, },
    {path: '/register', element: <Register />, }
  
  ])

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
