import './App.css';
import Register from './components/Auth/Register';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Login from './components/Auth/Login';
import { Toaster } from 'react-hot-toast';


const router = createBrowserRouter(
  [
    { path: '/login', element: <Login />, },
    { path: '/register', element: <Register />, }

  ])

function App() {
  return (
    <>
      <RouterProvider router={router} />
      <Toaster
        position='bottom-right'
        toastOptions={{
          success: {
            style: {
              background: '#28a745',
              color: '#fff',
            },
          },
          error: {
            style: {
              background: '#dc3545',
              color: '#fff',
            },
          },
        }}
      />
    </>
  );
}

export default App;
