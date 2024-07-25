import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import '@fortawesome/fontawesome-free/css/all.min.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import ContactPage from './components/ContactUs/ContactPage.jsx';
import ProfilePage from './components/ProfilePage/ProfilePage.jsx';
import RequestPage from './components/Requests/RequestPage.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router basename="/Majex">
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path='/profile' element={<ProfilePage />} />,
      <Route path='/request' element={<RequestPage />} />,
      <Route path='/contact' element={<ContactPage />} />,
    </Routes>
  </Router>,
);

