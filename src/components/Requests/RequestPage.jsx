import React from 'react';
import Sidebar from './Sidebar';
import MainContent from './MainContent';

function RequestPage() {
  return (
    <div className="bg-white">
      <div className="flex gap-5 max-md:flex-col">
        <div className="flex flex-col w-[21%] max-md:ml-0 max-md:w-full">
          <Sidebar />
        </div>
        <MainContent />
      </div>
    </div>
  );
}

export default RequestPage;