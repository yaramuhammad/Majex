import { Outlet } from "react-router-dom";
import Sidebar from '../Sidebar/Sidebar';

function Layout()
{
    return (
        <div className='grid grid-cols-6 h-screen'>
            <Sidebar />

            <div className='col-span-5 h-full flex flex-col'>
                <Outlet/>
            </div>
        </div>
    )
}

export default Layout;