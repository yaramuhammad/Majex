import React, { useEffect, useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';  // Adjust the path as needed
import img1 from '../../assets/Price-Increase-Strategy-1024x659 2.png';

function Warehouse() {
    const [warehouseData, setWarehouseData] = useState(null);

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            fetch('https://logistics-solution-wheat.vercel.app/api/warehouse/66a4a18d19c0b138d7e2797e', {
                headers: {
                    Authorization: `Bearer ${token}`, 
                },
            })
                .then(response => response.json())
                .then(data => {
                    console.log('Fetched warehouse data:', data);
                    setWarehouseData(data.warehouse); 
                })
                .catch(error => console.error('Error fetching warehouse data:', error));
        }
    }, []);

    return (
        <div className="grid grid-cols-6 h-screen">
            <Sidebar />

            <div className="col-span-5 h-full flex flex-col">
                <div className="relative"> 
                    <img src={img1} alt="Warehouse" className="w-full object-cover" />
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="bg-white rounded-lg shadow-lg px-32 py-7">
                            <span className="text-center text-gray-800 font-bold">China WareHouse</span>
                        </div>
                    </div>
                </div>
                <div className="p-5 space-y-4">
                    {warehouseData ? (
                        <div className="bg-white p-6 rounded-lg shadow-md">
                        <p className="text-lg font-semibold mt-2"><strong className='text-custom-red'>User Identify :</strong> {warehouseData._id}</p>

                            <p className="text-lg font-semibold mt-2 "><strong className='text-custom-red'>Country:</strong> {warehouseData.country}</p>
                            <p className="text-lg font-semibold mt-2"><strong className='text-custom-red'>City:</strong> {warehouseData.city}</p>
                            <p className="text-lg font-semibold mt-2"><strong className='text-custom-red'>District:</strong> {warehouseData.district}</p>
                            <p className="text-lg font-semibold mt-2"><strong className='text-custom-red'>Street:</strong> {warehouseData.street}</p>
                            <p className="text-lg font-semibold mt-2"><strong className='text-custom-red'>Building:</strong> {warehouseData.building}</p>
                            <p className="text-lg font-semibold mt-2"><strong className='text-custom-red'>Phone:</strong> {warehouseData.phone}</p>
                            <p className="text-lg font-semibold mt-2"><strong className='text-custom-red'>Warehouse No:</strong> {warehouseData.warehouseNo}</p>
                            <p className="text-lg font-semibold mt-2"><strong className='text-custom-red'>Address English:</strong> {warehouseData.addressEnglish}</p>
                            <p className="text-lg font-semibold mt-2"><strong className='text-custom-red'>Address China:</strong> {warehouseData.addressChina}</p>
                           
                        </div>
                    ) : (
                        <p className="text-center text-gray-500">Loading warehouse data...</p>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Warehouse;
