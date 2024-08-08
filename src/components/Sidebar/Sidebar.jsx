import React from 'react';
import { Link } from 'react-router-dom';
import SocialMediaIcons from '../Home/SocialMediaIcons';
import SidebarLang from '../SidebarLang';
import { logout } from '../../logout';
import { useTranslation } from 'react-i18next';

const Sidebar = () => {
  const { t } = useTranslation();

  const items = [
    { img: "fa-solid fa-house", text: t('Home'), link: '/' },
    { img: "fa-solid fa-tag", text: t('PriceOrder'), link: '/route2' },
    { img: "fa-solid fa-boxes-packing", text: t('Requests'), link: '/request' },
    { img: "fa-solid fa-box", text: t('Shipments'), link: '/shipment' },
    { img: "fa-solid fa-cart-shopping", text: t('Cart'), link: '/route5' },
    { img: "fa-solid fa-basket-shopping", text: t('Orders'), link: '/route6' },
    { img: "fa-solid fa-warehouse", text: t('Warehouse'), link: '/warehouse' },
    { img: "fa-solid fa-headset", text: t('Contact'), link: '/route8' },
  ];

  return (
    <div className="col-span-1 bg-custom-red h-full p-5 pt-8 rounded-tr-xl">
      <div className="w-100 pt-6 flex space-x-4 pb-12">
        <i className="fa-solid fa-bars text-white fa-2xl"></i>
        <i className="fa-regular fa-user text-white fa-2xl"></i>
      </div>

      {items.map((item, index) => (
        <Link to={item.link} className="text-white no-underline" key={index}>
          <div className="w-full flex items-center space-x-4 py-4 pb-3">
            <div className="w-1/4">
              <i className={item.img + ' text-white fa-lg'}></i>
            </div>
            <div className="w-3/4">
              {item.text}
            </div>
          </div>
        </Link>
      ))}

      <div className="w-full flex items-center space-x-4 py-2 pt-4 mt-11">
        <div>
          <i className="fa-solid fa-earth-americas text-white fa-lg"></i>
        </div>
        <div>
          <span className="text-white">
            <SidebarLang />
          </span>
        </div>
      </div>

      <button onClick={() => { logout() }} className="text-white no-underline w-full">
        <div className="w-full flex items-center space-x-4 py-2 pt-4 mb-7">
          <div>
            <i className="fa-solid fa-arrow-right-from-bracket text-white fa-lg"></i>
          </div>
          <div className="w-1/2">
            {t('Logout')}
          </div>
        </div>
      </button>

      <SocialMediaIcons />
    </div>
  );
};

export default Sidebar;
