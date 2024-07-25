import './App.css';
import Register from './components/Auth/Register';
import { RouterProvider, createBrowserRouter, createHashRouter } from 'react-router-dom';
import Login from './components/Auth/Login';
import { Toaster } from 'react-hot-toast';

import RequestPage from './components/Requests/RequestPage';
import ContactPage from './components/ContactUs/ContactPage';
import ProfilePage from './components/ProfilePage/ProfilePage';


const router = createBrowserRouter(
  [
    { path: '/login', element: <Login />, },
    { path: '/register', element: <Register />, },
    { path: '/profile', element: <ProfilePage/>, },
    { path: '/request', element: <RequestPage/>, },
    { path: '/contact', element: <ContactPage/>, },
    






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
