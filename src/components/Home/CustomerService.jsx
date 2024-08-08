import React from 'react';
import headsetImage from '../../assets/customercare.png';
import bestPriceImage from './../../assets/bestprice.png';
import clockImage from './../../assets/alltime.png';
import checkImage from './../../assets/check.png';
import { useTranslation, getI18n } from 'react-i18next';

const CustomerService = () => {
  const { t } = useTranslation();
  const i18n = getI18n();
  const currentLanguage = i18n.language;

  // Define a conditional class for text alignment
  const textAlignClass = currentLanguage === 'ar' ? 'text-right' : 'text-left';

  return (
    <div className='mx-auto px-16 my-32'>
      <div className="flex flex-col items-center p-4">
        <div className={`flex items-center space-x-4 mb-4 flex-col lg:flex-row ${textAlignClass}`}>
          <img src={headsetImage} alt={t('description')} className="rounded-full mb-10" />
          <p className={`font-medium text-2xl lg:text-3xl mb-10`}>
            {t('description')}
          </p>
        </div>
        <div className={`flex items-center space-x-4 mb-4 flex-col-reverse lg:flex-row ${textAlignClass}`}>
          <p className={`font-medium text-2xl lg:text-3xl mb-10`}>{t('availability')}</p>
          <img src={clockImage} alt={t('availability')} className='mb-10' />
        </div>
        <div className={`flex items-center space-x-4 mb-4 flex-col lg:flex-row ${textAlignClass}`}>
          <img src={bestPriceImage} alt={t('availability')} className='mb-10' />
          <p className={`font-medium text-2xl lg:text-3xl mb-10`}>{t('availability')}</p>
        </div>
        <div className="flex flex-col md:flex-row w-full mt-10">
          <div className="flex flex-col items-center mx-10 mb-24 md:w-1/3 w-full">
            <img src={checkImage} alt={t('fastestService')} />
            <p className={`font-medium text-2xl mt-2 text-center ${textAlignClass}`}>{t('fastestService')}</p>
          </div>
          <div className="flex flex-col items-center mx-10 mb-24 md:w-1/3 w-full">
            <img src={checkImage} alt={t('affordablePrices')} />
            <p className={`font-medium text-2xl mt-2 text-center ${textAlignClass}`}>{t('affordablePrices')}</p>
          </div>
          <div className="flex flex-col items-center mx-10 md:w-1/3 w-full">
            <img src={checkImage} alt={t('safetyAndSecurity')} />
            <p className={`font-medium text-2xl mt-2 text-center ${textAlignClass}`}>{t('safetyAndSecurity')}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerService;
