import React from 'react';

function ContactButton({ icon, text, bgColor }) {
  return (
    <div className={`flex gap-5 px-14 py-2.5 mt-20 whitespace-nowrap ${bgColor} rounded-xl max-md:flex-wrap max-md:px-5 max-md:mt-10`}>
      <img loading="lazy" src={icon} alt="" className="shrink-0 aspect-square w-[77px]" />
      <div className="flex-auto my-auto">{text}</div>
    </div>
  );
}

export default ContactButton;