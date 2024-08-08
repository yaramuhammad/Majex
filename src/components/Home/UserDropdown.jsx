import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { logout } from '../../logout';
import { useTranslation } from 'react-i18next';

const UserDropdown = ({ isAuthenticated, dir }) => {
    const [showDropdown, setShowDropdown] = useState(false);
    const dropdownRef = useRef(null);
    const { t } = useTranslation();

    const toggleDropdown = () => {
        setShowDropdown(!showDropdown);
    };

    const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setShowDropdown(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className="relative" ref={dropdownRef} style={{ zIndex: "99999" }}>
            <FontAwesomeIcon
                icon={faUserCircle}
                size="xl"
                className="hover:text-red-600 cursor-pointer"
                onClick={toggleDropdown}
            />
            {showDropdown && (
                <div className={`absolute ${dir === 'r' ? 'right-0' : 'left-0'} mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg`}>
                    {isAuthenticated ? (
                        <>
                            <Link to="/profile" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                                {t('Profile')}
                            </Link>
                            <button
                                type="button"
                                className="w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-100"
                                onClick={() => { logout() }}
                            >
                                {t('Logout')}
                            </button>
                        </>
                    ) : (
                        <>
                            <Link to="/register" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                                {t('Register')}
                            </Link>
                            <Link to="/login" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                                {t('Login')}
                            </Link>
                        </>
                    )}
                </div>
            )}
        </div>
    );
};

export default UserDropdown;
