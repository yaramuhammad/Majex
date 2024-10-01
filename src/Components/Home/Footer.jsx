import React from 'react';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import SocialMediaIcons from './SocialMediaIcons';
import { useTranslation } from 'react-i18next';

const Footer = () => {
    const { t } = useTranslation();
    return (
        <footer className='bg-black text-white py-10'>
            <div className="mx-auto px-4 lg:px-16">
                <div className={`flex flex-col-reverse lg:flex-row items-start lg:items-stretch`}>
                    <div className='w-full lg:w-3/4 mb-8 lg:mb-0 px-10 lg:p-0 mt-24 lg:mt-4'>
                        <h2 className="text-2xl font-bold">{t('footer.footerTitle')}</h2>
                        <p className='text-md mt-4 lg:w-1/2'>{t('footer.footerDescription')}</p>
                        <form className='bg-white w-full lg:w-1/2 px-4 my-10 flex items-center py-3 text-black rounded'>
                            <FontAwesomeIcon
                                icon={faSearch}
                                size="xl"
                                className='text-gray-400'
                            />
                            <input type="text" className='border-none outline-none w-full ml-2 rtl:mr-2' placeholder={t('footer.searchPlaceholder')} />
                        </form>
                        <SocialMediaIcons/>
                    </div>
                    <div className="w-full lg:w-1/4 flex flex-col lg:flex-col items-center lg:justify-evenly min-h-max">
                        <h2 className='text-2xl'>{t('footer.majex')}</h2>
                        <Link to="/" className="text-white mt-5 hover:text-red-600 text-base">{t('footer.home')}</Link>
                        <Link to="/requests" className="text-white mt-5 hover:text-red-600 text-base">{t('footer.requests')}</Link>
                        <Link to="#" className="text-white mt-5 hover:text-red-600 text-base">{t('footer.priceOrder')}</Link>
                        <Link to="/contact" className="text-white mt-5 hover:text-red-600 text-base">{t('footer.contact')}</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
