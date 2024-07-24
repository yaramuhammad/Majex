import React from 'react';

const stats = [
    { value: 28, label: 'Shipments', image: require('../../assets/Plane.png') },
    { value: 159, label: 'Requests', image: require('../../assets/requests.png') },
    { value: 0, label: 'Products', image: require('../../assets/products.png') }
];

const Stats = () => {
    return (
        <div className="container mx-auto px-16 py-10">
            <div className="flex justify-center">
                {stats.map((stat, index) => (
                    <div key={index} className="text-center gray-bg mx-4 w-1/3 py-10 rounded-3xl text-4xl font-bold flex flex-col justify-center items-center">
                        <img className='mb-8' src={stat.image} alt={stat.label} />
                        <p>{stat.value}</p>
                        <p>{stat.label}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Stats;
