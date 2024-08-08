import React, { useEffect, useState } from 'react';
import Sidebar from '../Sidebar/Sidebar'; 
import img1 from '../../assets/Price-Increase-Strategy-1024x659 2.png';
import { useTranslation } from 'react-i18next'; 
import Loading from '../Loading';

function Warehouse() {
    const [warehouseData, setWarehouseData] = useState(null);
    const [loading, setLoading] = useState(true);
    const { t } = useTranslation(); 

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
                    setLoading(false);  // Set loading to false after data is fetched
                })
                .catch(error => {
                    console.error('Error fetching warehouse data:', error);
                    setLoading(false);  // Set loading to false on error
                });
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
                            <span className="text-center text-gray-800 font-bold">{t('China WareHouse')}</span>
                        </div>
                    </div>
                </div>
                <div className="p-5 space-y-4">
                    {loading ? (
                        <Loading/>
                    ) : warehouseData ? (
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <p className="text-lg font-semibold mt-2"><span className='text-custom-red'>{t('User Identify')}:</span> {warehouseData._id}</p>
                            <p className="text-lg font-semibold mt-2"><span className='text-custom-red'>{t('Country')}:</span> {warehouseData.country}</p>
                            <p className="text-lg font-semibold mt-2"><span className='text-custom-red'>{t('City')}:</span> {warehouseData.city}</p>
                            <p className="text-lg font-semibold mt-2"><span className='text-custom-red'>{t('District')}:</span> {warehouseData.district}</p>
                            <p className="text-lg font-semibold mt-2"><span className='text-custom-red'>{t('Street')}:</span> {warehouseData.street}</p>
                            <p className="text-lg font-semibold mt-2"><span className='text-custom-red'>{t('Building')}:</span> {warehouseData.building}</p>
                            <p className="text-lg font-semibold mt-2"><span className='text-custom-red'>{t('Phone')}:</span> {warehouseData.phone}</p>
                            <p className="text-lg font-semibold mt-2"><span className='text-custom-red'>{t('Warehouse No')}:</span> {warehouseData.warehouseNo}</p>
                            <p className="text-lg font-semibold mt-2"><span className='text-custom-red'>{t('Address English')}:</span> {warehouseData.addressEnglish}</p>
                            <p className="text-lg font-semibold mt-2"><span className='text-custom-red'>{t('Address China')}:</span> {warehouseData.addressChina}</p>
                        </div>
                    ) : (
                        <p className="text-center text-gray-500">{t('Error loading data')}</p>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Warehouse;
