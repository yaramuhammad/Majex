import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation ,getI18n} from 'react-i18next';

function PricesDropdownn() {
    const { t } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="relative inline-block">
            <button onClick={toggleDropdown} className="hover:text-primary font-bold px-2 py-2">
                {t('navbar.shipmentPrices')}
            </button>
            {isOpen && (
                <div
                style={{zIndex:"9999999999999"}}
                 className='absolute bottom-8 xl:top-[100%] xl:bottom-auto mt-2 w-48 bg-white border rounded shadow-lg'>
                    <Link to="/lcl/sea" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
                        {t("navbar.lcl")}
                    </Link>
                    <Link to="/fcl/large" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
                        {t("navbar.fcl")}
                    </Link>
                </div>
            )}
        </div>
    );
}

export default PricesDropdownn;
