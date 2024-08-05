import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import '@fortawesome/fontawesome-free/css/all.min.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import Contact from './components/Contact/Contact.jsx';
import Profile from './components/Profile/Profile.jsx';
import Request from './components/Request/Request.jsx';
import './i18n';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router basename="/Majex">
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path='/profile' element={<Profile />} />,
      <Route path='/request' element={<Request />} />,
      <Route path='/contact' element={<Contact />} />,
    </Routes>
  </Router>,
);

