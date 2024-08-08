import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';
import img15 from '../../assets/Vector (11).png';

function Profile() {
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    password: '',
    mobileNumber: '',
    whatsappNumber: '',
    interests: '',
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get('https://logistics-solution-wheat.vercel.app/api/user/me', {
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': `Bearer ${token}`,
          },
        });
        const data = response.data;
        setUserData({
          name: data.name || '',
          email: data.email || '',
          password: '**********',
          mobileNumber: data.mobileNumber || '',
          whatsappNumber: data.whatsappNumber || '',
          interests: data.interests || '',
        });
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="grid grid-cols-5 h-screen">
      <div className="col-span-3 h-full p-5">
        <div className="flex items-center space-x-4 py-4">
          <div>
            <i className="fa-regular fa-user fa-2xl"></i>

          </div>
          <div className="w-3/4">
            <span className="text-gray-800 font-bold text-3xl">{userData.name}</span>
          </div>
        </div>
        <form className="space-y-4">
          {[
            { label: 'Name', value: userData.name, type: 'text', placeholder: 'Enter your name' },
            { label: 'Email', value: userData.email, type: 'email', placeholder: 'Enter your email' },
            { label: 'Password', value: userData.password, type: 'password', placeholder: 'Enter your password' },
            { label: 'Mobile Number', value: userData.mobileNumber, type: 'tel', placeholder: 'Enter your mobile number' },
            { label: 'WhatsApp Number', value: userData.whatsappNumber, type: 'tel', placeholder: 'Enter your WhatsApp number' },
            { label: 'Interests', value: userData.interests, type: 'text', placeholder: 'Enter your interests' }
          ].map((field, index) => (
            <div key={index} className="flex flex-col space-y-2">
              <label className="text-custom-red font-semibold">{field.label}</label>
              <div className="relative">
                <input
                  type={field.type}
                  value={field.value}
                  placeholder={field.placeholder}
                  className="border border-gray-300 rounded-lg py-3 w-full pr-10 bg-gray-100"
                  readOnly
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
