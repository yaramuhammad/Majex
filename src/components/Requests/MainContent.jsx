import React from 'react';
import RequestTabs from './RequestTabs';

function MainContent() {
  return (
    <main className="flex flex-col ml-5 w-[79%] max-md:ml-0 max-md:w-full">
      <div className="flex flex-col self-stretch px-5 my-auto text-3xl font-semibold max-md:mt-10 max-md:max-w-full">
        <h1 className="text-black max-md:max-w-full">Requests</h1>
        <p className="mt-6 text-2xl text-neutral-600 text-opacity-70 max-md:max-w-full">
          Find anything you want to request from any store in china
        </p>
        <div className="flex flex-col items-center pl-16 mt-11 font-bold max-md:pl-5 max-md:mt-10 max-md:max-w-full">
          <RequestTabs />
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/ff68fc7ce40abfdb04ac94617a8bc5fa166a6a418b8474e919cdaa2ade5608fa?apiKey=c0c1015bdf244f35b229acc2f6e2fa63&&apiKey=c0c1015bdf244f35b229acc2f6e2fa63" alt="Request illustration" className="mt-4 max-w-full aspect-square w-[379px]" />
          <h2 className="mt-5 ml-8 text-black max-md:max-w-full">
            Add your request now!
          </h2>
          <p className="mt-4 ml-8 text-2xl font-light text-neutral-600 text-opacity-70 max-md:max-w-full">
            Find anything you want to request from any store in china
          </p>
          <button className="px-16 py-7 mt-20 ml-8 max-w-full font-semibold text-center text-white bg-red-800 rounded-xl shadow-xl w-[629px] max-md:px-5 max-md:mt-10">
            + Add new request
          </button>
        </div>
      </div>
    </main>
  );
}

export default MainContent;