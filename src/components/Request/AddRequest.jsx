import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation, getI18n } from 'react-i18next';

const AddRequest = () => {
    const { t } = useTranslation();
    const i18n = getI18n();
    const currentLanguage = i18n.language;
    const [shipmentType, setShipmentType] = useState('');
    const [uploadedImage, setUploadedImage] = useState(null);
    const [isDragging, setIsDragging] = useState(false);

    const handleShipmentTypeChange = (type) => {
        setShipmentType(type);
    };

    const handleImageUpload = (file) => {
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setUploadedImage(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleDrop = (event) => {
        event.preventDefault();
        event.stopPropagation();
        setIsDragging(false);

        const file = event.dataTransfer.files[0];
        handleImageUpload(file);
    };

    const handleDragOver = (event) => {
        event.preventDefault();
        event.stopPropagation();
        setIsDragging(true);
    };

    const handleDragLeave = () => {
        setIsDragging(false);
    };

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        handleImageUpload(file);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle form submission
    };

    return (
        <div className={`grid grid-cols-1 md:grid-cols-5 h-full md:h-screen lg:py-0 py-10 ${currentLanguage === 'ar' ? 'text-right' : ''}`}>
            <div className={`col-span-1 md:col-span-5 h-full flex flex-col p-5 w-full ${currentLanguage === 'ar' ? 'text-right' : ''}`}>
                <div className={`flex flex-col md:flex-row justify-evenly mt-4 ${currentLanguage === 'ar' ? 'md:flex-row-reverse' : ''}`}>
                    <div className="w-full md:w-1/4 text-center mb-4 md:mb-0 md:ml-10 border-b-2 border-red-900">
                        <p className="text-lg md:text-2xl font-bold text-custom-red">{t('addRequest.title')}</p>
                    </div>
                    <div className="w-full md:w-1/4 text-center border-b-2 border-black">
                        <Link to=''>
                            <p className="text-lg md:text-2xl font-bold">{t('addRequest.uploadMultipleProducts')}</p>
                        </Link>
                    </div>
                </div>

                <form onSubmit={handleSubmit} className='md:px-24 mt-10'>
                    <div className="flex justify-start mb-5">
                        <div className='w-2/3'>
                            <label className="block mb-2 text-2xl font-semibold">
                                {t('addRequest.productImage')} <span className="text-sm text-gray-500 font-light">{t('addRequest.onlyOneImage')}</span>
                            </label>
                            <div
                                className={`w-52 h-40 border-dashed border-2 rounded-lg flex justify-center items-center bg-white ${isDragging ? 'border-blue-500' : 'border-gray-300'}`}
                                onDrop={handleDrop}
                                onDragOver={handleDragOver}
                                onDragLeave={handleDragLeave}
                            >
                                {uploadedImage ? (
                                    <img src={uploadedImage} alt="Uploaded" className="w-full h-full object-cover rounded-lg" />
                                ) : (
                                    <span>{t('addRequest.dropImageOr')} <label htmlFor="imageUpload" className="primary-color cursor-pointer">{t('addRequest.browse')}</label></span>
                                )}
                                <input
                                    id="imageUpload"
                                    type="file"
                                    accept="image/*"
                                    className="hidden"
                                    onChange={handleFileChange}
                                />
                            </div>
                        </div>

                        <div>
                            <h4 className="my-8 text-2xl font-semibold">{t('addRequest.shipmentType')}</h4>
                            <div className="mt-2">
                                <button
                                    type="button"
                                    onClick={() => handleShipmentTypeChange('over air')}
                                    className={`font-bold text-md rounded-xl mr-2 px-4 py-2 border ${shipmentType === 'over air' ? 'primary-bg text-white' : 'bg-white text-black'}`}
                                >
                                    {t('addRequest.overAir')}
                                </button>
                                <button
                                    type="button"
                                    onClick={() => handleShipmentTypeChange('over sea')}
                                    className={`font-bold text-md rounded-xl px-4 py-2 border ${shipmentType === 'over sea' ? 'primary-bg text-white' : 'bg-white text-black'}`}
                                >
                                    {t('addRequest.overSea')}
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-between mb-5">
                        <input type="text" placeholder={t('addRequest.product')} className="w-1/2 p-2 border rounded-2xl border-gray-400 mr-2" />
                        <input type="text" placeholder={t('addRequest.productLink')} className="w-1/2 p-2 border rounded-2xl border-gray-400" />
                    </div>

                    <div className="flex justify-between mb-5">
                        <input type="number" placeholder={t('addRequest.quantity')} className="w-1/2 p-2 border rounded-2xl border-gray-400 mr-2" />
                        <input type="text" placeholder={t('addRequest.targetPrice')} className="w-1/2 p-2 border rounded-2xl border-gray-400" />
                    </div>

                    <div className="flex justify-between mb-5">
                        <input type="text" placeholder={t('addRequest.weight')} className="w-1/2 p-2 border rounded-2xl border-gray-400 mr-2" />
                        <input type="text" placeholder={t('addRequest.color')} className="w-1/2 p-2 border rounded-2xl border-gray-400" />
                    </div>

                    <textarea placeholder={t('addRequest.note')} className="w-full p-2 border rounded-2xl border-gray-400 mb-5"></textarea>

                    <button type="submit" className="primary-bg text-white p-4 text-lg w-1/2 m-auto rounded-xl block">
                        {t('addRequest.confirmRequest')}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AddRequest;
