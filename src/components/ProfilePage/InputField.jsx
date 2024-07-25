import React from 'react';

function InputField({ label, value, icon }) {
  return (
    <>
      <label htmlFor={label.toLowerCase()} className="mt-2.5 text-base font-semibold text-red-800 max-md:max-w-full">
        {label}
      </label>
      <div className="flex gap-5 justify-between items-start py-7 pr-8 pl-4 mt-7 max-w-full text-sm whitespace-nowrap bg-white rounded-xl border border-solid border-stone-900 border-opacity-10 text-neutral-600 text-opacity-70 w-[537px] max-md:flex-wrap max-md:pr-5">
        <input
          type="text"
          id={label.toLowerCase()}
          value={value}
          className="bg-transparent border-none outline-none"
          aria-label={label}
        />
        <img loading="lazy" src={icon} alt="" className="shrink-0 aspect-square w-[30px]" />
      </div>
    </>
  );
}

export default InputField;