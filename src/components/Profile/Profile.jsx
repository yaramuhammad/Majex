import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Loading from './../Loading';
import { useTranslation, getI18n } from 'react-i18next';

function Profile() {
  const { t } = useTranslation();
  const i18n = getI18n();
  const currentLanguage = i18n.language; 

  const [userData, setUserData] = useState({
    name: '',
    email: '',
    password: '',
    mobileNumber: '',
    whatsappNumber: '',
    interests: '',
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get('https://logistics-solution-wheat.vercel.app/api/user/me', {
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': `Bearer ${token}`,
          },
        });
        const data = response.data;
        setUserData({
          name: data.name || '',
          email: data.email || '',
          password: '**********',
          mobileNumber: data.mobileNumber || '',
          whatsappNumber: data.whatsappNumber || '',
          interests: data.interests || '',
        });
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-5 h-full lg:h-screen">
      <div className={`lg:col-span-3 p-10 ${currentLanguage==='ar'? 'order-2' : ''}`}>
        <div className={`flex flex-col lg:flex-row items-center lg:space-x-4 py-4 ${currentLanguage==='ar'? 'flex-row-reverse space-x-reverse' : ''}`}>
          <div className="mb-4 lg:mb-0">
            <i className="fa-regular fa-user fa-2xl"></i>
          </div>
          <div>
            <span className="text-gray-800 font-bold text-2xl lg:text-3xl">{userData.name}</span>
          </div>
        </div>
        <form className="space-y-4">
          {[
            { label: t('name'), value: userData.name, type: 'text', placeholder: t('enterName') },
            { label: t('email'), value: userData.email, type: 'email', placeholder: t('enterEmail') },
            { label: t('password'), value: userData.password, type: 'password', placeholder: t('enterPassword') },
            { label: t('mobileNumber'), value: userData.mobileNumber, type: 'tel', placeholder: t('enterMobileNumber') },
            { label: t('whatsappNumber'), value: userData.whatsappNumber, type: 'tel', placeholder: t('enterWhatsappNumber') },
            { label: t('interests'), value: userData.interests, type: 'text', placeholder: t('enterInterests') }
          ].map((field, index) => (
            <div key={index} className="flex flex-col space-y-2">
              <label className={`text-custom-red font-semibold ${currentLanguage==='ar'? ' text-right' : ''}`}>{field.label}</label>
              <div className="relative">
                <input
                  type={field.type}
                  value={field.value}
                  placeholder={field.placeholder}
                  className={`border border-gray-300 rounded-lg py-3 w-full bg-gray-100  ${currentLanguage==='ar'? ' text-right pl-10' : 'pr-10'}`}
                  readOnly
                />
                <Link to="/edit" className={`absolute right-3 top-1/2 transform -translate-y-1/2  ${currentLanguage==='ar'? ' left-3' : ''}`}>
                  <i className="fa-regular fa-pen-to-square w-6 h-6 cursor-pointer primary-color fa-xl"></i>
                </Link>
              </div>
            </div>
          ))}
        </form>
      </div>

      <div className="lg:col-span-2 h-full p-5">
        <div className="mt-10 "></div>
        <div className="p-10"></div>

        <div className={`bg-[#f3f3f3] flex flex-col lg:flex-row lg:items-end px-5 py-3 rounded-lg ${currentLanguage==='ar'? 'flex-row-reverse' : ''}`}>
          <div className="w-full lg:w-1/2 pr-0 lg:pr-2 mb-4 lg:mb-0">
            <div className="flex flex-col items-center">
              <img src={require('./../../assets/crown.png')} alt="package-logo" className="mb-2" />
              <div className="text-left">
                <p className="text-custom-red font-bold">{t('vipPackages')}</p>
                <p className="text-gray-800 font-bold">1875.00 SAR</p>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2 pl-0 lg:pl-2">
            <div className="flex flex-col items-center">
              <p className="text-gray-800 font-bold">{t('subscriptionPlan')}</p>
              <p className="text-gray-800">{t('monthsLeft')}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
