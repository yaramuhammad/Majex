import React from 'react';

function FormField({ label, placeholder, iconSrc }) {
  return (
    <div className="mb-4 w-full">
      <label className="font-semibold" htmlFor={label.toLowerCase().replace(' ', '-')}>
        {label}
      </label>
      <div className="flex gap-5 justify-between items-start px-7 py-7 mt-2 w-full text-sm whitespace-nowrap bg-white rounded-xl border border-solid border-stone-900 border-opacity-10 text-neutral-600 text-opacity-70 max-md:flex-wrap max-md:pr-5 max-md:max-w-full">
        <input
          type="text"id={label.toLowerCase().replace(' ', '-')}
          placeholder={placeholder}
          className="bg-transparent outline-none"
          aria-label={label}
        />
        <img loading="lazy" src={iconSrc} alt="" className="shrink-0 aspect-square w-[30px]" />
      </div>
    </div>);
}

export default FormField;