import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
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
                    <h2 className="text-2xl font-bold text-center mb-12">Hey, There!</h2>
                    <div className="flex justify-evenly mt-4">
                        <Link to="/login" className="text-gray-600 border-b-2 border-black">Login</Link>
                        <Link to="/register" className="ml-8 primary-color border-b-2 primary-underline">Sign up</Link>
                    </div>
                    <form className="mt-8">
                        <input type="text" placeholder="Name" className="px-4 rounded-2xl w-full p-2 border-2 border-gray-300 focus:border-red-600 outline-none" />
                        <input type="email" placeholder="Email" className="px-4 rounded-2xl w-full p-2 mt-4 border-2 border-gray-300 focus:border-red-600 outline-none" />
                        <input type="password" placeholder="Password" className="px-4 rounded-2xl w-full p-2 mt-4 border-2 border-gray-300 focus:border-red-600 outline-none" />
                        <input type="password" placeholder="Retype Password" className="px-4 rounded-2xl w-full p-2 mt-4 border-2 border-gray-300 focus:border-red-600 outline-none" />
                        <input type="phone" placeholder="Mobile Number" className="px-4 rounded-2xl w-full p-2 mt-4 border-2 border-gray-300 focus:border-red-600 outline-none" />
                        <input type="phone" placeholder="Whatsapp Number" className="px-4 rounded-2xl w-full p-2 mt-4 border-2 border-gray-300 focus:border-red-600 outline-none" />

                        <div className="flex justify-between mt-4">
                            <label htmlFor="terms" className="text-gray-600">You agree to our
                                <span className='primary-color'>
                                    &nbsp;terms
                                </span>
                                &nbsp;and
                                <span className='primary-color'>
                                    &nbsp;conditions
                                </span>
                            </label>
                            <input type="checkbox" id="terms" className="form-checkbox text-red-600 border-gray-300 rounded focus:ring-red-500"
                            />
                        </div>
                        <button className="primary-bg mt-16 w-full text-white px-4 py-2 rounded-xl">Sign up</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;
