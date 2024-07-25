import React from 'react';

function SidebarItem({ icon, label }) {
  return (
    <>
      <img loading="lazy" src={icon} alt="" className="mt-8 aspect-[1.2] fill-white w-[29px]" />
      <div className="mt-7 text-sm leading-7 text-white whitespace-nowrap">{label}</div>
    </>
  );
}

export default SidebarItem;