import React from 'react';
import img1 from '../../assets/Group 318.png'; // Replace with actual image paths
import img2 from '../../assets/Group 1171275016.png'; // Replace with actual image paths
import img3 from '../../assets/Service 24_7-pana 1.png'; // Replace with actual image path
import Footer from './../Home/Footer';

const Contact = () => {
  return (
    <>
      <div className="flex flex-col h-screen">
        {/* Main Content */}
        <div className="flex flex-1 flex-col lg:flex-row h-4/6">
          {/* Left Half */}
          <div className="w-full lg:w-1/2 flex flex-col items-center justify-center p-5">
            <div className="flex flex-col items-center">
              <h2 className="text-4xl font-bold mb-8">Contact Us</h2>
              <div className="flex flex-col space-y-4 w-full max-w-md">
                <div className="flex items-center justify-center bg-custom-red text-white px-4 rounded-md">
                  <img src={img1} alt="Wechat" className="" />
                </div>
                <div className="flex items-center justify-center bg-custom-red text-white px-4 rounded-md">
                  <img src={img2} alt="Whatsapp" className=" " />
                </div>
              </div>
            </div>
          </div>

          {/* Right Half */}
          <div className="w-full lg:w-1/2 flex items-center justify-center p-5">
            <img src={img3} alt="24/7 Service" className="w-full max-w-lg" />
          </div>
        </div>

        {/* Footer */}
        <div className="h-2/6">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Contact;
