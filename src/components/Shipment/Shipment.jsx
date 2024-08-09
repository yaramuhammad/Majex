import React from 'react';
import { Link } from 'react-router-dom';
import img15 from '../../assets/Drone Delivery-rafiki 1.png';

function Shipment() {
  return (
    <div className="grid grid-cols-5 h-screen">
  
      <div className="col-span-5 h-full flex flex-col p-5">
        <h2 className='pt-7 font-bold'>Shipments</h2>
        <p style={{ color: '#4B4B4B' }} className='pt-5'>Find anything you want to request from any store in China.</p>
       

        {/* Center image */}
        <div className="flex flex-col items-center mt-6">
          <img src={img15} alt="Central" />
          <div className="flex flex-col items-center">
            <span className='font-bold mb-2'>Add Your Shipment</span>
            <span style={{ color: '#4B4B4B' }}>Ship anything you want from china.</span>
          </div>
          <Link to="/addshipment">
            <button className="mt-4 px-20 py-3 bg-custom-red text-white rounded">
              + Add New Shipment
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Shipment;
