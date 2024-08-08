import { Link } from 'react-router-dom';
import { getI18n } from 'react-i18next';

function SocialMediaIcons() {
    const i18n = getI18n();
    const currentLanguage = i18n.language;
    
    return (
        <div className='flex space-x-4 lg:justify-start justify-evenly'>
            <Link to="#" className={`${currentLanguage === 'ar' ? 'ml-4' : ''}`}><img src={require('../../assets/facebook.png')} alt="facebook" /></Link>
            <Link to="#"><img src={require('../../assets/Instagram.png')} alt="instagram" /></Link>
            <Link to="#"><img src={require('../../assets/Twitter.png')} alt="twitter" /></Link>
            <Link to="#"><img src={require('../../assets/tiktok.png')} alt="tiktok" /></Link>
            <Link to="#"><img src={require('../../assets/Telegram.png')} alt="telegram" /></Link>
        </div>
    );
}

export default SocialMediaIcons;