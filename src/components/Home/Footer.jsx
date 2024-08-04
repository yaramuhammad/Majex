import React from 'react';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-black text-white py-10">
            <div className="mx-auto px-4 lg:px-16">
                <div className="flex flex-col-reverse lg:flex-row items-start lg:items-stretch">
                    <div className='w-full lg:w-3/4 mb-8 lg:mb-0 px-10 lg:p-0 mt-10'>
                        <h2 className="text-2xl font-bold">Your trusted partner in logistics</h2>
                        <p className='text-md mt-4 lg:w-1/2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ornare cursus sed nunc eget dictum  Sed ornare cursus sed nunc eget dictumd nunc eget dictum  Sed ornare cursus sed nunc eget dictum .</p>
                        <form className='bg-white w-full lg:w-1/2 px-4 my-4 flex items-center'>
                            <FontAwesomeIcon
                                icon={faSearch}
                                size="xl"
                                className='text-gray-400'
                            />
                            <input type="text" className='border-none outline-none w-full ml-2' placeholder='Search' />
                        </form>
                        <div className='flex space-x-4 lg:justify-start justify-evenly'>
                            <Link to="#"><img src={require('../../assets/facebook.png')} alt="facebook" /></Link>
                            <Link to="#"><img src={require('../../assets/Instagram.png')} alt="instagram" /></Link>
                            <Link to="#"><img src={require('../../assets/Twitter.png')} alt="twitter" /></Link>
                            <Link to="#"><img src={require('../../assets/tiktok.png')} alt="tiktok" /></Link>
                            <Link to="#"><img src={require('../../assets/Telegram.png')} alt="telegram" /></Link>
                        </div>
                    </div>
                    <div className="w-full lg:w-1/4 flex flex-col lg:flex-col items-center lg:justify-evenly min-h-max">
                        <h2 className='text-2xl'>Majex</h2>
                        <Link to="#" className="text-white mt-5 hover:text-red-600 text-base">Home</Link>
                        <Link to="#" className="text-white mt-5 hover:text-red-600 text-base">Requests</Link>
                        <Link to="#" className="text-white mt-5 hover:text-red-600 text-base">Price / Order</Link>
                        <Link to="#" className="text-white mt-5 hover:text-red-600 text-base">Contact</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
