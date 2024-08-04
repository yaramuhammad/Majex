import React, { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const LanguageDropdown = ({dir}) => {
    const { i18n } = useTranslation();
    const [showDropdown, setShowDropdown] = useState(false);
    const dropdownRef = useRef(null);

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

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng)
          .then(() => {
            setShowDropdown(false);
          })
    };

    return (
        <div className="relative" ref={dropdownRef} style={{zIndex:"99999"}}>
            <div
                className="flex items-center space-x-2 border border-gray-500 px-4 py-2 rounded-2xl hover:text-red-600 hover:border-red-600 cursor-pointer"
                onClick={toggleDropdown}
            >
                <span className="text-xs">{i18n.language === 'zh' ? '中文' : i18n.language === 'en' ? 'En' : 'Ar'}</span>
            </div>
            {showDropdown && (
                <div className={`absolute ${dir==='r'? 'right-0' : 'left-0'} mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg`}>
                    <div onClick={() => changeLanguage('ar')} className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Ar</div>
                    <div onClick={() => changeLanguage('en')} className="block px-4 py-2 text-gray-800 hover:bg-gray-100">En</div>
                    <div onClick={() => changeLanguage('zh')} className="block px-4 py-2 text-gray-800 hover:bg-gray-100">中文</div>
                </div>
            )}
        </div>
    );
};

export default LanguageDropdown;
