import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className="flex h-screen">
            <div className="w-1/2 bg-cover border-r-2 border-black" style={{
                backgroundImage: `url('/assets/images 1.png')`,
                backgroundPosition: 'center'
            }}>
                <div className="flex justify-center items-center h-full">
                    <img src="/assets/logo PNG-01 1.png" alt="Majex International" className="w-1/2" />
                </div>
            </div>
            <div className="w-1/2 flex justify-center items-center bg-white">
                <div className="w-3/4">
                    <h2 className="text-2xl font-bold text-center my-16">Hey, There!</h2>
                    <div className="flex justify-evenly mt-4">
                        <Link to='/login' className="primary-color border-b-2 primary-underline">Login</Link>
                        <Link to='/Register' className="ml-8 text-gray-600 border-b-2 border-black">Sign up</Link>
                    </div>
                    <form className="mt-8">
                        <input type="email" placeholder="Email" className="px-4 rounded-2xl w-full p-2 border-2 border-gray-300 focus:border-red-600 outline-none" />
                        <input type="password" placeholder="Password" className="px-4 rounded-2xl w-full p-2 mt-8 border-2 border-gray-300 focus:border-red-600 outline-none" />
                        <div className="flex justify-between items-center mt-4">
                            <a href="#" className="primary-color">Forgot your password?</a>
                        </div>
                        <button className="primary-bg text-white px-4 py-2 rounded my-16 w-full rounded-xl">Login</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
