import React from 'react';
import headsetImage from '../../assets/customercare.png';
import bestPriceImage from './../../assets/bestprice.png'
import clockImage from './../../assets/alltime.png';
import checkImage from './../../assets/check.png';

const CustomerService = () => {
  return (
    <div className='mx-auto px-16 my-32'>
      <div className="flex flex-col items-center p-4">
        <div className="flex items-center space-x-4 mb-4 flex-col lg:flex-row">
          <img src={headsetImage} alt="Customer Service" className="rounded-full mb-10" />
          <p className="font-medium text-2xl lg:text-3xl mb-10">
            Promptly addressing customer needs, offering clear communication, and resolving issues effectively. It
            prioritizes a positive customer experience through empathy, responsiveness, and a commitment to exceeding
            expectations, fostering lasting relationships.
          </p>
        </div>
        <div className="flex items-center space-x-4 mb-4 flex-col-reverse lg:flex-row">
          <p className="font-medium text-2xl lg:text-3xl mb-10">Services are available 24 hours a day and 7 days a week to provide customers with a high level of comfort.</p>
          <img src={clockImage} alt="24/7 Service" className=' mb-10' />
        </div>
        <div className="flex items-center space-x-4 mb-4 flex-col lg:flex-row">
          <img src={bestPriceImage} alt="Best Price" className=' mb-10'/>
          <p className="font-medium text-2xl lg:text-3xl mb-10">Services are available 24 hours a day and 7 days a week to provide customers with a high level of comfort.</p>
        </div>
        <div className="flex flex-col md:flex-row w-full mt-10">
          <div className="flex flex-col items-center mx-10 mb-24 md:w-1/3 w-full">
            <img src={checkImage} alt="Fastest Service" />
            <p className="font-medium text-2xl mt-2 text-center">Fastest Service</p>
          </div>
          <div className="flex flex-col items-center mx-10 mb-24 md:w-1/3 w-full">
            <img src={checkImage} alt="Affordable Prices" />
            <p className="font-medium text-2xl mt-2 text-center">Affordable Prices</p>
          </div>
          <div className="flex flex-col items-center mx-10 md:w-1/3 w-full">
            <img src={checkImage} alt="Safety and Security" />
            <p className="font-medium text-2xl mt-2 text-center">Safety and Security</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerService;
