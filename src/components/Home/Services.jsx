import React from 'react';
import image1 from './../../assets/service1.png';
import image2 from './../../assets/service1.png';

const services = [
  { title: 'Freight Air', description: 'We excel in express transportation options at discounted prices.', image: image1 },
  { title: 'Freight Sea', description: 'Develop our shipping service or shipping to the port of the customer’s country', image: image2 },
  { title: 'Warehousing', description: 'One of the services that we are proud to offer to our success partners and valued customers', image: image1 },
  { image: image2 }
];

const Services = () => {
  return (
    <div className="container mx-auto px-16 py-10">
      <div className="grid grid-cols-1 md:grid-cols-2">
        {services.map((service, index) => (
          <div key={index} className="relative">
            <img
              src={service.image}
              alt={service.title}
              className="w-full "
            />
            <div className="absolute inset-0 flex flex-col justify-center items-center bg-opacity-50 p-6 ">
              <div className={service.title ? 'max-h-min bg-white px-12 py-6 text-xl font-bold' : ''}>
                <h2 className="text-xl font-bold">{service.title}</h2>
                <p>{service.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
