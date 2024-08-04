import React, { useState } from 'react';
import { useTranslation, getI18n } from 'react-i18next';
import logo from '../../assets/logo PNG-01 1.png';
import { Link } from 'react-router-dom';
import UserDropdown from './UserDropdown';
import LanguageDropdown from './LangDropdown';

const Navbar = () => {
    const { t } = useTranslation();
    const [isAuthenticated, setIsAuthenticated] = useState(localStorage.getItem('token') == null ? false : true);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const i18n = getI18n(); // Get the i18n instance

    const currentLanguage = i18n.language; // This gives you the current language code

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <div className="relative bg-white">
            <div className={`container mx-auto px-4 lg:px-12 py-3 flex justify-between items-center  ${currentLanguage === 'ar' ? 'flex-row-reverse' : 'flex-row'}`}>
                <div className={`flex items-center w-full xl:w-1/4  ${currentLanguage === 'ar' ? 'xl:justify-end flex-row-reverse' : 'xl:justify-start'} justify-between`}>
                    <img src={logo} alt="Majex International" className="w-1/4 xl:w-1/2 h-auto" />
                    <button className="xl:hidden text-gray-500 focus:outline-none" onClick={toggleSidebar}>
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                        </svg>
                    </button>
                </div>
                <div className={`hidden text-sm xl:text-base xl:flex xl:items-center ${currentLanguage==='ar'? 'xl:flex-row-reverse' : ''}`}>
                    <Link to="#" className="hover:text-red-600 font-bold px-2 py-2">{t('home')}</Link>
                    <Link to="#" className="hover:text-red-600 font-bold px-2 py-2">{t('priceOrder')}</Link>
                    <Link to="#" className="hover:text-red-600 font-bold px-2 py-2">{t('requests')}</Link>
                    <Link to="#" className="hover:text-red-600 font-bold px-2 py-2">{t('shipments')}</Link>
                    <Link to="#" className="hover:text-red-600 font-bold px-2 py-2">{t('shopNow')}</Link>
                    <Link to="#" className="hover:text-red-600 font-bold px-2 py-2">{t('services')}</Link>
                </div>
                <div className="hidden xl:flex items-center space-x-4 relative">
                    <UserDropdown isAuthenticated={isAuthenticated} dir={currentLanguage === 'ar' ? 'l' : 'r'}/>
                    <LanguageDropdown dir={currentLanguage === 'ar' ? 'l' : 'r'} />
                </div>
            </div>

            <div
                className={
                    `fixed inset-y-0 ${currentLanguage === 'ar' ? 'right-0' : 'left-0'} transform ${isSidebarOpen ? 'translate-x-0' : currentLanguage === 'ar' ? 'translate-x-full' : '-translate-x-full'} transition-transform duration-300 ease-in-out bg-white w-64 shadow-lg z-50`
                }
            >
                <div className={`flex justify-between items-center p-4 border-b ${currentLanguage === 'ar' ? 'flex-row-reverse' : ''}`}>
                    <img src={logo} alt="Majex International" className="w-20 h-auto" />
                    <button className="text-gray-500 focus:outline-none" onClick={toggleSidebar}>
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                        </svg>
                    </button>
                </div>
                <div className={`flex flex-col mt-4 space-y-4 ${currentLanguage === 'ar' ? 'text-right' : ''}`}>
                    <Link to="#" className="hover:text-red-600 font-bold py-2 px-4">{t('home')}</Link>
                    <Link to="#" className="hover:text-red-600 font-bold py-2 px-4">{t('priceOrder')}</Link>
                    <Link to="#" className="hover:text-red-600 font-bold py-2 px-4">{t('requests')}</Link>
                    <Link to="#" className="hover:text-red-600 font-bold py-2 px-4">{t('shipments')}</Link>
                    <Link to="#" className="hover:text-red-600 font-bold py-2 px-4">{t('shopNow')}</Link>
                    <Link to="#" className="hover:text-red-600 font-bold py-2 px-4">{t('services')}</Link>
                </div>
                <div className={`flex items-center space-x-4 p-4 ${currentLanguage==='ar'? 'justify-end':''}`}>
                    <UserDropdown isAuthenticated={isAuthenticated}  dir={currentLanguage === 'ar' ? 'r' : 'l'}/>
                    <LanguageDropdown dir={currentLanguage === 'ar' ? 'r' : 'l'}/>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
