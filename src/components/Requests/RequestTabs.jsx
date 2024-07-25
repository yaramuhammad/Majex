import React from 'react';

function RequestTabs() {
  return (
    <div className="flex gap-5 self-stretch whitespace-nowrap max-md:flex-wrap max-md:pr-5 max-md:max-w-full">
      <div className="flex flex-col flex-1 text-red-800">
        <div className="self-center">current</div>
        <div className="shrink-0 mt-4 h-0.5 bg-red-800 border-2 border-red-800 border-solid" />
      </div>
      <div className="flex flex-col flex-1 text-stone-900">
        <div className="self-center">History</div>
        <div className="shrink-0 mt-3 h-0.5 border-2 border-solid bg-stone-900 border-stone-900" />
      </div>
    </div>
  );
}

export default RequestTabs;