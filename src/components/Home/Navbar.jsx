import React, { useState } from 'react';
import logo from '../../assets/logo PNG-01 1.png';
import { Link } from 'react-router-dom';
import UserDropdown from './UserDropdown';
import LanguageDropdown from './LangDropdown';

const Navbar = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(localStorage.getItem('token') == null ? false : true);

    return (
        <nav className="bg-white">
            <div className="container mx-auto px-36 py-3">
                <div className="flex justify-between items-center">
                    <img src={logo} alt="Majex International" className="w-1/6" />
                    <div className="flex space-x-4">
                        <Link to="#" className="hover:text-red-600 font-bold">Home</Link>
                        <Link to="#" className="hover:text-red-600 font-bold">Price / Order</Link>
                        <Link to="#" className="hover:text-red-600 font-bold">Requests</Link>
                        <Link to="#" className="hover:text-red-600 font-bold">Shipments</Link>
                        <Link to="#" className="hover:text-red-600 font-bold">Shop Now</Link>
                        <Link to="#" className="hover:text-red-600 font-bold">Services</Link>
                    </div>
                    <div className="flex items-center space-x-4 relative">
                        <UserDropdown isAuthenticated={isAuthenticated} />
                        <LanguageDropdown />
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
