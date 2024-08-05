import React from 'react';
import { Link } from 'react-router-dom';

import '@fortawesome/fontawesome-free/css/all.min.css';
import bar from "../../assets/1.png";
import user from '../../assets/Customer.png';
import home from '../../assets/Vector.png';
import img2 from '../../assets/2.png';
import img3 from '../../assets/Vector (2).png';
import img4 from '../../assets/Vector (3).png';
import img5 from '../../assets/Vector (4).png';
import img6 from '../../assets/Vector (5).png';
import img7 from '../../assets/Vector (6).png';
import img8 from '../../assets/Vector (7).png';
import img9 from '../../assets/Vector (9).png';
import img10 from '../../assets/1713419057Facebook_PNG 1.png';
import img11 from '../../assets/Instagram_logo_2016 1.png';
import img12 from '../../assets/Logo_of_Twitter 1.png';
import img13 from '../../assets/tiktok-app-icon-logo-0F5AD7AE01-seeklogo 1.png';
import img14 from '../../assets/Telegram_logo 1.png';
import img15 from '../../assets/Checking boxes-bro 1.png';
import img16 from '../../assets/Line 3.png';
import img17 from '../../assets/Line 3 (1).png';
import arabicImage from '../../assets/Vector (8).png';

function Request() {
  const items = [
    { img: home, text: 'Home', link: '/route1' },
    { img: img2, text: 'Price/Order', link: '/route2' },
    { img: img3, text: 'Requests', link: '/route3' },
    { img: img4, text: 'Shipments', link: '/route4' },
    { img: img5, text: 'Cart', link: '/route5' },
    { img: img6, text: 'Orders', link: '/route6' },
    { img: img7, text: 'Warehouse', link: '/route7' },
    { img: img8, text: 'Contact', link: '/route8' },
  ];

  return (
    <div className="flex h-screen">
      {/* Sidebar 1/6 width */}
      <div className="w-1/6 bg-custom-red h-full p-5 pt-8 rounded-tr-xl">
        {/* Sidebar content here */}
        <div className="w-100 pt-3 flex space-x-4">
          <div className='pt-3'>
            <img src={bar} alt="bar" />
          </div>
          <div className='pb-8'>
            <img src={user} alt="user" />
          </div>
        </div>

        {/* Additional content with 8 items */}
        {items.map((item, index) => (
          <div key={index} className="w-full flex items-center space-x-4 py-2 pb-3">
            <div className="w-1/4">
              <img src={item.img} alt={item.text} />
            </div>
            <div className="w-3/4">
              <Link to={item.link} className="text-white no-underline">
                {item.text}
              </Link>
            </div>
          </div>
        ))}

        {/* Arabic image and text */}
        <div className="w-full flex items-center space-x-4 py-2 pt-4 mt-11">
          <div className="w-1/2">
            <img src={arabicImage} alt="Arabic text" />
          </div>
          <div className="w-1/2">
            <span className="text-white">العربية</span>
          </div>
        </div>
        <div className="w-full flex items-center space-x-4 py-2 pt-4 mb-7">
          <div className="w-1/2">
            <Link to="/logout" className="text-white no-underline">
              Logout
            </Link>
          </div>
          <div className="w-1/2">
            <img src={img9} alt="Logout icon" />
          </div>
        </div>

        {/* Images in a single line */}
        <div className="w-full flex items-center space-x-4 ">
          {[img10, img11, img12, img13, img14].map((img, index) => (
            <div key={index} className="w-1/5">
              <img src={img} alt={`img-${index}`} className="w-full h-auto" />
            </div>
          ))}
        </div>
      </div>

      {/* Main content 5/6 width */}
      <div className="w-5/6 h-full flex flex-col p-5">
        <h2 className='pt-7 font-bold'>Requests</h2>
        <p style={{ color: '#4B4B4B' }} className='pt-5'>Find anything you want to request from any store in China.</p>
        <div className="flex justify-between items-center mt-2">
          <div className="flex flex-col items-center w-1/2 ">
            <span className="font-bold text-custom-red">Current</span>
            <img src={img16} alt="Current" className="mt-1" />
          </div>
          <div className="flex flex-col items-center w-1/2">
            <span className="font-bold">History</span>
            <img src={img17} alt="History" className="mt-1" />
          </div>
        </div>

        {/* Center image */}
        <div className="flex flex-col items-center mt-1">
          <img src={img15} alt="Central" />
          <div className="flex flex-col items-center">
            <span className='font-bold mb-2'>Add your request now!</span>
            <span style={{ color: '#4B4B4B' }}>Find anything you want to request from any store in china</span>
          </div>
          <Link to="/addrequest">
            <button className="mt-4 px-20 py-3 bg-custom-red text-white rounded">
              Go to Add Request
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Request;
