
import React from 'react';
import { Link } from 'react-router-dom';

import '@fortawesome/fontawesome-free/css/all.min.css';
import img15 from '../../assets/Vector (11).png';
import Sidebar from '../Sidebar/Sidebar';

function Profile() {

  return (
    <div className="grid grid-cols-6 h-screen">
      <Sidebar/>

      <div className="col-span-3 h-full p-5">
        <div className="flex items-center space-x-4 py-4">
          <div>
            <img src={img15} alt="Example" className="w-full h-auto" />
          </div>
          <div className="w-3/4">
            <span className="text-gray-800 font-bold text-3xl">Example Text</span>
          </div>
        </div>
        <form className="space-y-4">
          {[
            { label: 'Name', type: 'text', placeholder: 'Enter your name' },
            { label: 'Email', type: 'email', placeholder: 'Enter your email' },
            { label: 'Password', type: 'password', placeholder: 'Enter your password' },
            { label: 'Mobile Number', type: 'tel', placeholder: 'Enter your mobile number' },
            { label: 'WhatsApp Number', type: 'tel', placeholder: 'Enter your WhatsApp number' },
            { label: 'Interests', type: 'text', placeholder: 'Enter your interests' }
          ].map((field, index) => (
            <div key={index} className="flex flex-col space-y-2">
              <label className="text-custom-red font-semibold">{field.label}</label>
              <div className="relative">
                <input
                  type={field.type}
                  placeholder={field.placeholder}
                  className="border border-gray-300 rounded-lg py-3 w-full pr-10"
                />
                <Link to="/edit" className="absolute right-3 top-1/2 transform -translate-y-1/2">
                  <i className="fa-regular fa-pen-to-square w-6 h-6 cursor-pointer primary-color fa-xl"></i>
                </Link>
              </div>
            </div>
          ))}
        </form>
      </div>

      <div className="col-span-2 h-full p-5">
        <div className='mt-10'></div>
        <div className='p-10'></div>

        <div className='bg-[#f3f3f3] flex px-5 py-3 rounded-lg'>
          <div className="w-1/2 pr-2">
            <div className="flex flex-col items-center">
              <img src={require('./../../assets/crown.png')} alt="package-logo" className="mb-2" />
              <div className="text-left">
                <p className="text-custom-red font-bold">VIP PACKAGES</p>
                <p className="text-gray-800 font-bold">1875.00 SAR</p>
              </div>
            </div>
          </div>
          <div className="w-1/2 pl-2 pt-5 mt-2">
            <div className="flex flex-col items-center">
              <p className="text-gray-800 font-bold">Subscription Plan</p>
              <p className="text-gray-800">3 months left</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;

