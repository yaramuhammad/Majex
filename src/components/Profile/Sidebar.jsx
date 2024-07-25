import React from 'react';
import SidebarItem from './SidebarItem';
import SocialIcons from './SocialIcons';
import LanguageSelector from './LanguageSelector';

const sidebarItems = [
  { icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/b60aa7afa8cf490b132cd8e9f367e79f1b597a104d8a25ca84f4502b9d2d140d?apiKey=c0c1015bdf244f35b229acc2f6e2fa63&&apiKey=c0c1015bdf244f35b229acc2f6e2fa63', label: 'Home' },
  { icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/231c53608dae7565d0ee7445c6bbb9f8523e6d1ad76c745af9b9dff413aa4903?apiKey=c0c1015bdf244f35b229acc2f6e2fa63&&apiKey=c0c1015bdf244f35b229acc2f6e2fa63', label: 'Price/Order' },
  { icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/7f7ee3184dd6ed8347ddd4ff98769c0336a297fa2d057a7fed1f6b4ced27d45f?apiKey=c0c1015bdf244f35b229acc2f6e2fa63&&apiKey=c0c1015bdf244f35b229acc2f6e2fa63', label: 'Requests' },
  { icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/63332c7e104b81e023d1fddbb7a58e26c78885bb31136e4fe00bae079e2fda93?apiKey=c0c1015bdf244f35b229acc2f6e2fa63&&apiKey=c0c1015bdf244f35b229acc2f6e2fa63', label: 'Shipments' },
  { icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/e2c9d4e48410d1a95bb8313230b8762104fb6abbd440f35657ca3ca73c78fea0?apiKey=c0c1015bdf244f35b229acc2f6e2fa63&&apiKey=c0c1015bdf244f35b229acc2f6e2fa63', label: 'Cart' },
  { icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/48f3062944059ba92028d8bf75ba740c547344d9074eb890ffb725b0f77f863e?apiKey=c0c1015bdf244f35b229acc2f6e2fa63&&apiKey=c0c1015bdf244f35b229acc2f6e2fa63', label: 'Orders' },
  { icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/63d01afd3812c4ce73bf744c17afb4932c932f5e5f8a491ddbaa9fde0793f74c?apiKey=c0c1015bdf244f35b229acc2f6e2fa63&&apiKey=c0c1015bdf244f35b229acc2f6e2fa63', label: 'WareHouse' },
  { icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/7d57b782f2ee30010ce7c83e757f8eb884cf4bf1f090b068dcd26f1da8836117?apiKey=c0c1015bdf244f35b229acc2f6e2fa63&&apiKey=c0c1015bdf244f35b229acc2f6e2fa63', label: 'Contact' },
];

function Sidebar() {
  return (
    <aside className="flex flex-col items-start py-16 pr-20 pl-6 bg-red-800 rounded-none max-w-[262px]">
      <header className="flex gap-2 ml-3">
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/842b9c5646b87e2e149a7d2ec29c1bfb809dd9618b56ef990c84c8399e041fbc?apiKey=c0c1015bdf244f35b229acc2f6e2fa63&&apiKey=c0c1015bdf244f35b229acc2f6e2fa63" alt="" className="shrink-0 my-auto aspect-[1.43] fill-white w-[33px]" />
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/63ea7e8b9aefb295922476dab8935c3458a3d4c2bce75503c2b7fdf05820004d?apiKey=c0c1015bdf244f35b229acc2f6e2fa63&&apiKey=c0c1015bdf244f35b229acc2f6e2fa63" alt="" className="shrink-0 aspect-[1.1] w-[55px]" />
      </header>
      <nav className="flex gap-5 mt-12">
        <div className="flex flex-col items-center self-start px-1.5 pb-20">
          {sidebarItems.map((item, index) => (
            <SidebarItem key={index} icon={item.icon} label={item.label} />
          ))}
        </div>
      </nav>
      <LanguageSelector />
      <SocialIcons />
    </aside>
  );
}

export default Sidebar;