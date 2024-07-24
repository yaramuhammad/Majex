import React from 'react';
import headsetImage from '../../assets/customercare.png';
import bestPriceImage from './../../assets/bestprice.png'
import clockImage from './../../assets/alltime.png';
import checkImage from './../../assets/check.png';

const CustomerService = () => {
  return (
    <div className='container mx-auto px-16 my-32'>
      <div className="flex flex-col items-center p-4">
        <div className="flex items-center space-x-4 mb-4">
          <img src={headsetImage} alt="Customer Service" className=" rounded-full" />
          <p className="text-3xl">
            Promptly addressing customer needs, offering clear communication, and resolving issues effectively. It
            prioritizes a positive customer experience through empathy, responsiveness, and a commitment to exceeding
            expectations, fostering lasting relationships.
          </p>
        </div>
        <div className="flex items-center space-x-4 mb-4">
          <p className="font-medium text-3xl">Services are available 24 hours a day and 7 days a week to provide customers with a high level of comfort.</p>
          <img src={clockImage} alt="24/7 Service" />
        </div>
        <div className="flex items-center space-x-4 mb-4">
          <img src={bestPriceImage} alt="Best Price" />
          <p className="font-medium text-3xl">Services are available 24 hours a day and 7 days a week to provide customers with a high level of comfort.</p>
        </div>
        <div className="flex">
          <div className="flex flex-col items-center mx-24">
            <img src={checkImage} alt="Fastest Service" />
            <p className="font-medium text-2xl mt-2">Fastest Service</p>
          </div>
          <div className="flex flex-col items-center mx-24">
            <img src={checkImage} alt="Affordable Prices" />
            <p className="font-medium text-2xl mt-2">Affordable Prices</p>
          </div>
          <div className="flex flex-col items-center mx-24">
            <img src={checkImage} alt="Safety and Security" />
            <p className="font-medium text-2xl mt-2">Safety and Security</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerService;
