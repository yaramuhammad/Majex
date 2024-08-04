import React, { useState } from 'react';
import logo from '../../assets/logo PNG-01 1.png';
import { Link } from 'react-router-dom';
import UserDropdown from './UserDropdown';
import LanguageDropdown from './LangDropdown';

const Navbar = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(localStorage.getItem('token') == null ? false : true);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <div className="relative bg-white">
            <div className="container mx-auto px-4 lg:px-12 py-3 flex justify-between items-center">
                <div className="flex items-center justify-between w-full xl:w-1/4">
                    <img src={logo} alt="Majex International" className="w-1/4 xl:w-1/2 h-auto" />
                    <button className="xl:hidden text-gray-500 focus:outline-none" onClick={toggleSidebar}>
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                        </svg>
                    </button>
                </div>
                <div className="hidden text-sm xl:text-base xl:flex xl:items-center xl:space-x-4">
                    <Link to="#" className="hover:text-red-600 font-bold py-2">Home</Link>
                    <Link to="#" className="hover:text-red-600 font-bold py-2">Price / Order</Link>
                    <Link to="#" className="hover:text-red-600 font-bold py-2">Requests</Link>
                    <Link to="#" className="hover:text-red-600 font-bold py-2">Shipments</Link>
                    <Link to="#" className="hover:text-red-600 font-bold py-2">Shop Now</Link>
                    <Link to="#" className="hover:text-red-600 font-bold py-2">Services</Link>
                </div>
                <div className="hidden xl:flex items-center space-x-4 relative">
                    <UserDropdown isAuthenticated={isAuthenticated} />
                    <LanguageDropdown />
                </div>
            </div>
            <div className={`fixed inset-y-0 left-0 transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out bg-white w-64 shadow-lg z-50`}>
                <div className="flex justify-between items-center p-4 border-b">
                    <img src={logo} alt="Majex International" className="w-20 h-auto" />
                    <button className="text-gray-500 focus:outline-none" onClick={toggleSidebar}>
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                        </svg>
                    </button>
                </div>
                <div className="flex flex-col mt-4 space-y-4">
                    <Link to="#" className="hover:text-red-600 font-bold py-2 px-4">Home</Link>
                    <Link to="#" className="hover:text-red-600 font-bold py-2 px-4">Price / Order</Link>
                    <Link to="#" className="hover:text-red-600 font-bold py-2 px-4">Requests</Link>
                    <Link to="#" className="hover:text-red-600 font-bold py-2 px-4">Shipments</Link>
                    <Link to="#" className="hover:text-red-600 font-bold py-2 px-4">Shop Now</Link>
                    <Link to="#" className="hover:text-red-600 font-bold py-2 px-4">Services</Link>
                </div>
                <div className="flex items-center space-x-4 p-4">
                    <UserDropdown isAuthenticated={isAuthenticated} />
                    <LanguageDropdown />
                </div>
            </div>
        </div>
    );
};

export default Navbar;
