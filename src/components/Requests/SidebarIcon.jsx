import React from 'react';

function SidebarIcon({ src, alt }) {
  return (
    <img loading="lazy" src={src} alt={alt} className="mt-8 aspect-[1.37] fill-white w-[33px]" />
  );
}

export default SidebarIcon;