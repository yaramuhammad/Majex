import React from 'react';
import SidebarIcon from './SidebarIcon';
import SidebarLink from './SidebarLink';

const sidebarIcons = [
  { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/b60aa7afa8cf490b132cd8e9f367e79f1b597a104d8a25ca84f4502b9d2d140d?apiKey=c0c1015bdf244f35b229acc2f6e2fa63&&apiKey=c0c1015bdf244f35b229acc2f6e2fa63", alt: "Home icon" },
  { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/231c53608dae7565d0ee7445c6bbb9f8523e6d1ad76c745af9b9dff413aa4903?apiKey=c0c1015bdf244f35b229acc2f6e2fa63&&apiKey=c0c1015bdf244f35b229acc2f6e2fa63", alt: "Price/Order icon" },
  { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/7f7ee3184dd6ed8347ddd4ff98769c0336a297fa2d057a7fed1f6b4ced27d45f?apiKey=c0c1015bdf244f35b229acc2f6e2fa63&&apiKey=c0c1015bdf244f35b229acc2f6e2fa63", alt: "Requests icon" },
  { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/63332c7e104b81e023d1fddbb7a58e26c78885bb31136e4fe00bae079e2fda93?apiKey=c0c1015bdf244f35b229acc2f6e2fa63&&apiKey=c0c1015bdf244f35b229acc2f6e2fa63", alt: "Shipments icon" },
  { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/e2c9d4e48410d1a95bb8313230b8762104fb6abbd440f35657ca3ca73c78fea0?apiKey=c0c1015bdf244f35b229acc2f6e2fa63&&apiKey=c0c1015bdf244f35b229acc2f6e2fa63", alt: "Cart icon" },
  { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/48f3062944059ba92028d8bf75ba740c547344d9074eb890ffb725b0f77f863e?apiKey=c0c1015bdf244f35b229acc2f6e2fa63&&apiKey=c0c1015bdf244f35b229acc2f6e2fa63", alt: "Orders icon" },
  { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/63d01afd3812c4ce73bf744c17afb4932c932f5e5f8a491ddbaa9fde0793f74c?apiKey=c0c1015bdf244f35b229acc2f6e2fa63&&apiKey=c0c1015bdf244f35b229acc2f6e2fa63", alt: "Warehouse icon" },
  { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/7d57b782f2ee30010ce7c83e757f8eb884cf4bf1f090b068dcd26f1da8836117?apiKey=c0c1015bdf244f35b229acc2f6e2fa63&&apiKey=c0c1015bdf244f35b229acc2f6e2fa63", alt: "Contact icon" }
];

const sidebarLinks = [
  "Home", "Price/Order", "Requests", "Shipments", "Cart", "Orders", "WareHouse", "Contact"
];

function Sidebar() {
  return (
    <nav className="flex flex-col grow items-start py-16 pr-20 pl-7 mx-auto w-full bg-red-800 rounded-none max-md:px-5 max-md:mt-10">
      <div className="flex gap-2 ml-3 max-md:ml-2.5">
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/842b9c5646b87e2e149a7d2ec29c1bfb809dd9618b56ef990c84c8399e041fbc?apiKey=c0c1015bdf244f35b229acc2f6e2fa63&&apiKey=c0c1015bdf244f35b229acc2f6e2fa63" alt="Logo part 1" className="shrink-0 my-auto aspect-[1.43] fill-white w-[33px]" />
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/63ea7e8b9aefb295922476dab8935c3458a3d4c2bce75503c2b7fdf05820004d?apiKey=c0c1015bdf244f35b229acc2f6e2fa63&&apiKey=c0c1015bdf244f35b229acc2f6e2fa63" alt="Logo part 2" className="shrink-0 aspect-[1.1] w-[55px]" />
      </div>
      <div className="flex gap-5 mt-12 max-md:mt-10">
        <div className="flex flex-col items-center self-start px-2 pb-20 max-md:hidden">
          {sidebarIcons.map((icon, index) => (
            <SidebarIcon key={index} src={icon.src} alt={icon.alt} />
          ))}
        </div>
        <div className="flex flex-col pb-20 text-sm leading-7 text-white whitespace-nowrap">
          {sidebarLinks.map((link, index) => (
            <SidebarLink key={index} text={link} />
          ))}
        </div>
      </div>
      <div className="flex flex-wrap gap-3 content-start pr-4 mt-24 text-base leading-7 text-white max-md:mt-10">
        <div className="flex flex-col">
          <div className="flex gap-3 font-medium whitespace-nowrap">
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/26945f73087e2bc463e4fc3e4925e498cb0fe2a47800956076d0fa3190e04616?apiKey=c0c1015bdf244f35b229acc2f6e2fa63&&apiKey=c0c1015bdf244f35b229acc2f6e2fa63" alt="Language icon" className="shrink-0 self-start w-6 aspect-square fill-white" />
            <div>العربية</div>
          </div>
          <div className="mt-4">Log Out</div>
        </div>
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/eb1c92c201fdc5e2fa6a46953cbf758d67000642a806dc1c23b57c3ccfbe439e?apiKey=c0c1015bdf244f35b229acc2f6e2fa63&&apiKey=c0c1015bdf244f35b229acc2f6e2fa63" alt="Logout icon" className="shrink-0 self-start w-6 aspect-square fill-white" />
      </div>
      <div className="flex gap-3 mt-20 max-md:pr-5 max-md:mt-10">
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/22178eb57e7988a872c6992bfb8388add7fad1f76a4bb6c5a723f4d55d8379e6?apiKey=c0c1015bdf244f35b229acc2f6e2fa63&&apiKey=c0c1015bdf244f35b229acc2f6e2fa63" alt="Social icon 1" className="shrink-0 aspect-[1.1] w-[22px]" />
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/49781d59a1db0f43af548c43d5b300b00a30efc4668e2cdb195d6fe0f7951f18?apiKey=c0c1015bdf244f35b229acc2f6e2fa63&&apiKey=c0c1015bdf244f35b229acc2f6e2fa63" alt="Social icon 2" className="shrink-0 aspect-[1.1] w-[22px]" />
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/2bc663ee045815c2c4b9c2e1b8d4a0211181d6789f9149397c45e92bf82b87c1?apiKey=c0c1015bdf244f35b229acc2f6e2fa63&&apiKey=c0c1015bdf244f35b229acc2f6e2fa63" alt="Social icon 3" className="shrink-0 self-start aspect-[1.3] w-[22px]" />
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/05eb667c1bfadc819207380d7b4b4226bd153424999901e075ad5d0ef146b6f3?apiKey=c0c1015bdf244f35b229acc2f6e2fa63&&apiKey=c0c1015bdf244f35b229acc2f6e2fa63" alt="Social icon 4" className="shrink-0 aspect-[1.1] w-[22px]" />
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/722264d05303fc7896b1b094a84393350c82e04eeb3855ef3a97604c8cb37966?apiKey=c0c1015bdf244f35b229acc2f6e2fa63&&apiKey=c0c1015bdf244f35b229acc2f6e2fa63" alt="Social icon 5" className="shrink-0 aspect-[1.1] w-[22px]" />
      </div>
    </nav>
  );
}

export default Sidebar;