import { Outlet } from "react-router-dom";
import Sidebar from '../Sidebar/Sidebar';
import { useTranslation } from "react-i18next";

function Layout() {
    const { i18n } = useTranslation();
    const currentLanguage = i18n.language;

    return (
        <div className='grid grid-cols-6 h-screen'>
            {currentLanguage === 'ar' ? (
                <>
                    <div className='col-span-5 h-full flex flex-col'>
                        <Outlet />
                    </div>
                    <Sidebar />
                </>
            ) : (
                <>
                    <Sidebar />
                    <div className='col-span-5 h-full flex flex-col'>
                        <Outlet />
                    </div>
                </>
            )}
        </div>
    );
}

export default Layout;
