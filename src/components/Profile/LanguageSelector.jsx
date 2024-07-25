import React from 'react';

function LanguageSelector() {
  return (
    <div className="flex flex-wrap gap-3 content-start pr-3 mt-24 text-base leading-7 text-white">
      <div className="flex flex-col">
        <div className="flex gap-3 font-medium whitespace-nowrap">
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/26945f73087e2bc463e4fc3e4925e498cb0fe2a47800956076d0fa3190e04616?apiKey=c0c1015bdf244f35b229acc2f6e2fa63&&apiKey=c0c1015bdf244f35b229acc2f6e2fa63" alt="" className="shrink-0 self-start w-6 aspect-square fill-white" />
          <div>العربية</div>
        </div>
        <div className="mt-4">Log Out</div>
      </div>
      <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/eb1c92c201fdc5e2fa6a46953cbf758d67000642a806dc1c23b57c3ccfbe439e?apiKey=c0c1015bdf244f35b229acc2f6e2fa63&&apiKey=c0c1015bdf244f35b229acc2f6e2fa63" alt="" className="shrink-0 self-start w-6 aspect-square fill-white" />
    </div>
  );
}

export default LanguageSelector;