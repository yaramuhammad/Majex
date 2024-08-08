import React, { useEffect, useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import img1 from '../../assets/Price-Increase-Strategy-1024x659 2.png';
import { useTranslation, getI18n } from 'react-i18next';
import Loading from '../Loading';

function Warehouse() {
    const [warehouseData, setWarehouseData] = useState(null);
    const [loading, setLoading] = useState(true);
    const { t } = useTranslation();
    const i18n = getI18n();
    const currentLanguage = i18n.language;

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
                    setLoading(false);
                })
                .catch(error => {
                    console.error('Error fetching warehouse data:', error);
                    setLoading(false);
                });
        }
    }, []);

    const fieldStyle = `text-lg font-semibold mt-2 flex ${currentLanguage === 'ar' ? 'flex-row-reverse' : ''}`;
    const labelStyle = `text-custom-red ${currentLanguage === 'ar' ? 'ml-3' : 'mr-3'}`;

    return (
        <div className='grid grid-cols-6 h-screen'>
            <Sidebar />

            <div className={`col-span-5 h-full flex flex-col ${currentLanguage === 'ar' ? 'text-right' : ''}`}>
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
                        <Loading />
                    ) : warehouseData ? (
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <div className={fieldStyle}>
                                <p className={labelStyle}>
                                    {currentLanguage === 'ar' ? ':' : ''}
                                    {t('User Identify')}
                                    {currentLanguage !== 'ar' ? ':' : ''}
                                </p>
                                <p>{warehouseData._id}</p>
                            </div>
                            <div className={fieldStyle}>
                                <p className={labelStyle}>{t('Country')}:</p> {warehouseData.country}
                            </div>
                            <div className={fieldStyle}>
                                <p className={labelStyle}>{t('City')}:</p> {warehouseData.city}
                            </div>
                            <div className={fieldStyle}>
                                <p className={labelStyle}>{t('District')}:</p> {warehouseData.district}
                            </div>
                            <div className={fieldStyle}>
                                <p className={labelStyle}>{t('Street')}:</p> {warehouseData.street}
                            </div>
                            <div className={fieldStyle}>
                                <p className={labelStyle}>{t('Building')}:</p> {warehouseData.building}
                            </div>
                            <div className={fieldStyle}>
                                <p className={labelStyle}>{t('Phone')}:</p> {warehouseData.phone}
                            </div>
                            <div className={fieldStyle}>
                                <p className={labelStyle}>{t('Warehouse No')}:</p> {warehouseData.warehouseNo}
                            </div>
                            <div className={fieldStyle}>
                                <p className={labelStyle}>{t('Address English')}:</p> {warehouseData.addressEnglish}
                            </div>
                            <div className={fieldStyle}>
                                <p className={labelStyle}>{t('Address China')}:</p> {warehouseData.addressChina}
                            </div>
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
