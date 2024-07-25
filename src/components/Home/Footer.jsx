import React from 'react';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-black text-white py-10">
            <div className="container mx-auto px-16">
                <div className="flex items-stretch">
                    <div className='w-3/4'>
                        <h2 className="text-2xl font-bold">Your trusted partner in logistics</h2>
                        <p className='text-md mt-4 w-1/2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ornare cursus sed nunc eget dictum  Sed ornare cursus sed nunc eget dictumd nunc eget dictum  Sed ornare cursus sed nunc eget dictum  </p>
                        <form className='bg-white w-1/2 px-4 my-4'>
                            <FontAwesomeIcon
                                icon={faSearch}
                                size="xl"
                                className='text-gray-400'
                            />
                            <input type="text" className='border-none outline-none' placeholder='Search' />
                        </form>
                        <div className='flex space-x-4'>
                            <Link><img src={require('../../assets/facebook.png')} alt="facebook" /></Link>
                            <Link><img src={require('../../assets/Instagram.png')} alt="instagram" /></Link>
                            <Link><img src={require('../../assets/Twitter.png')} alt="twitter" /></Link>
                            <Link><img src={require('../../assets/tiktok.png')} alt="tiktok" /></Link>
                            <Link><img src={require('../../assets/Telegram.png')} alt="telegram" /></Link>
                        </div>
                    </div>
                    <div className="flex flex-col w-1/4 justify-evenly min-h-max">
                        <h2 className='text-2xl'>Majex</h2>
                        <Link to="#" className="text-white hover:text-red-600 text-base">Home</Link>
                        <Link to="#" className="text-white hover:text-red-600 text-base">Requests</Link>
                        <Link to="#" className="text-white hover:text-red-600 text-base">Price / Order</Link>
                        <Link to="#" className="text-white hover:text-red-600 text-base">Contact</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
