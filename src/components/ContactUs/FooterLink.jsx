import React from 'react';

function FooterLink({ icon, text }) {
  return (
    <div className="flex gap-2.5 py-2.5 mt-6 whitespace-nowrap">
      <img loading="lazy" src={icon} alt="" className="shrink-0 self-start aspect-square w-[18px]" />
      <div>{text}</div>
    </div>
  );
}

export default FooterLink;