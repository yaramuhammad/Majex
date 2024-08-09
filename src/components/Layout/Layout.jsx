import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../Sidebar/Sidebar';
import { useTranslation } from 'react-i18next';

function Layout() {
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language;
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => setSidebarOpen(!isSidebarOpen);

  return (
    <div className="grid grid-cols-6 h-screen lg:overflow-hidden">
      <button 
        className={`fixed p-3 py-10 z-50 lg:hidden w-full block shadow bg-white ${currentLanguage==='ar'? ' text-right' : 'text-left'}`} 
        onClick={toggleSidebar}>
        <i className="fa-solid fa-bars fa-2xl"></i>
      </button>

      {currentLanguage === 'ar' ? (
        <>
          <div className="col-span-6 h-full flex flex-col py-16 lg:py-0 lg:overflow-y-auto lg:col-span-5">
            <Outlet />
          </div>
          <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
        </>
      ) : (
        <>
          <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
          <div className="col-span-6 h-full flex flex-col py-16 lg:py-0  lg:overflow-y-auto lg:col-span-5">
            <Outlet />
          </div>
        </>
      )}
    </div>
  );
}

export default Layout;
