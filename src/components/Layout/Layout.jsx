import { Outlet } from "react-router-dom";
import Sidebar from '../Sidebar/Sidebar';
import { getI18n } from "react-i18next";

function Layout() {
    const i18n = getI18n();
    const currentLanguage = i18n.language;

    if (currentLanguage === 'ar') {
        return (
            <div className='grid grid-cols-6 h-screen'>
                <div className='col-span-5 h-full flex flex-col'>
                    <Outlet />
                </div>
                <Sidebar />
            </div>
        )
    }

    return (
        <div className='grid grid-cols-6 h-screen'>
            <Sidebar />

            <div className='col-span-5 h-full flex flex-col'>
                <Outlet />
            </div>
        </div>
    )
}

export default Layout;