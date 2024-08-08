import React from 'react';
import { Link } from 'react-router-dom';
import Sidebar from '../Sidebar/Sidebar';  // Adjust the path as needed
import img15 from '../../assets/Checking boxes-bro 1.png';
import img16 from '../../assets/Line 3.png';
import img17 from '../../assets/Line 3 (1).png';

function Request() {
  return (
    <div className="grid grid-cols-6 h-screen">
      {/* Sidebar 1/6 width */}
      <Sidebar />

      {/* Main content 5/6 width */}
      <div className="col-span-5 h-full flex flex-col p-5">
        <h2 className='pt-7 font-bold'>Requests</h2>
        <p style={{ color: '#4B4B4B' }} className='pt-5'>Find anything you want to request from any store in China.</p>
        <div className="grid grid-cols-2 mt-2 gap-4">
          <div className="flex flex-col items-center">
            <span className="font-bold text-custom-red">Current</span>
            <img src={img16} alt="Current" className="mt-1" />
          </div>
          <div className="flex flex-col items-center">
            <span className="font-bold">History</span>
            <img src={img17} alt="History" className="mt-1" />
          </div>
        </div>

        {/* Center image */}
        <div className="flex flex-col items-center mt-1">
          <img src={img15} alt="Central" />
          <div className="flex flex-col items-center">
            <span className='font-bold mb-2'>Add your request now!</span>
            <span style={{ color: '#4B4B4B' }}>Find anything you want to request from any store in china</span>
          </div>
          <Link to="/addrequest">
            <button className="mt-4 px-20 py-3 bg-custom-red text-white rounded">
              Go to Add Request
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Request;
