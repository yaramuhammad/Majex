import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Sidebar from './Sidebar';
import ProfileForm from './ProfileForm';

function Profile() {
  return (
    <div className="container-fluid">
      <div className="row min-vh-100">
        {/* Sidebar */}
        <div className="col-md-3 p-0">
          <Sidebar />
        </div>

        {/* Main Content */}
        <div className="col-md-6 me-7 ">
          <ProfileForm />
        </div>
      </div>
    </div>
  );
}

export default Profile;
