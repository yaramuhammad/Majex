import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation, getI18n } from 'react-i18next';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

const validationSchema = Yup.object({
    productName: Yup.string().required('Product name is required'),
    quantity: Yup.number().positive('Quantity must be greater than 0').required('Quantity is required'),
    shipmentType: Yup.string().oneOf(['over air', 'over sea'], 'Invalid shipment type').required('Shipment type is required'),
    link: Yup.string().url('Invalid URL').required('Link is required'),
    color: Yup.string().required('Color is required'),
    targetPrice: Yup.number().positive('Target price must be greater than 0').required('Target price is required'),
    weight: Yup.number().positive('Weight must be greater than 0').required('Weight is required'),
});

const MultipleRequest = () => {
    const { t } = useTranslation();
    const i18n = getI18n();
    const currentLanguage = i18n.language;
    const [uploadedImage, setUploadedImage] = useState(null);
    const [isDragging, setIsDragging] = useState(false);

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

    const handleSubmit = async (values, { setSubmitting }) => {
        try {
            const data = new FormData();
            for (const key in values) {
                if (values.hasOwnProperty(key)) {
                    data.append(key, values[key]);
                }
            }
            if (uploadedImage) {
                const blob = await fetch(uploadedImage).then(res => res.blob());
                const file = new File([blob], 'image.png', { type: 'image/png' });
                data.append('image', file);
            }
            data.append('requestType', 'single');
            for (let [key, value] of data.entries()) {
                console.log(key, value);
            }

            const response = await axios.post('https://logistics-solution-wheat.vercel.app/api/request/', data, {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`,
                    'Content-Type': 'multipart/form-data',
                    'Accept': 'application/json'
                },
            });

            console.log('Request successful:', response.data);
        } catch (error) {
            console.error('Error making request:', error);
        } finally {
            setSubmitting(false);
        }
    };


    return (
        <div className={`py-10 lg:p-0 grid grid-cols-1 md:grid-cols-5 h-full ${currentLanguage === 'ar' ? 'text-right' : ''}`}>
            <div className={`col-span-1 md:col-span-5 h-full flex flex-col p-5 ${currentLanguage === 'ar' ? 'text-right' : ''}`}>
                <div className={`flex flex-col md:flex-row justify-evenly mt-4 ${currentLanguage === 'ar' ? 'md:flex-row-reverse' : ''}`}>
                    <div className="w-full md:w-1/4 text-center mb-4 md:mb-0 md:ml-10 border-b-2 border-black">
                        <Link to='/add-request'>
                            <p className="text-lg md:text-2xl font-bold ">{t('addRequest.title')}</p>
                        </Link>
                    </div>
                    <div className="w-full md:w-1/4 text-center border-b-2 border-red-900">
                        <p className="text-lg md:text-2xl font-bold text-custom-red">{t('addRequest.uploadMultipleProducts')}</p>
                    </div>
                </div>

                <Formik
                    initialValues={{
                        productName: '',
                        quantity: '',
                        note: '',
                        shipmentType: 'over air',
                        link: '',
                        color: '',
                        targetPrice: '',
                        weight: '',
                    }}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}
                >
                    {({ setFieldValue, values, isSubmitting }) => (
                        <Form className='md:px-24 mt-10'>
                            <div className={`flex flex-col md:flex-row ${currentLanguage === 'ar' ? 'md:flex-row-reverse' : ''} mb-5`}>
                                <div className={`w-full md:w-2/3 ${currentLanguage === 'ar' ? 'items-end' : 'items-start'} flex flex-col`}>
                                    <label className="block mb-2 text-2xl font-semibold">
                                        {t('addRequest.productImage')} <span className="text-sm text-gray-500 font-light">{t('addRequest.onlyOneImage')}</span>
                                    </label>
                                    <div
                                        className={`w-full md:w-52 h-40 border-dashed border-2 rounded-lg flex justify-center items-center bg-white ${isDragging ? 'border-blue-500' : 'border-gray-300'}`}
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
                                            onChange={(event) => {
                                                handleFileChange(event);
                                                setFieldValue('image', event.currentTarget.files[0]);
                                            }}
                                        />
                                    </div>
                                </div>

                                <div className={`mt-5 md:mt-0 ${currentLanguage === 'ar' ? 'text-right' : ''}`}>
                                    <h4 className="my-8 text-2xl font-semibold">{t('addRequest.shipmentType')}</h4>
                                    <div className="flex flex-col md:flex-row md:justify-between">
                                        <button
                                            type="button"
                                            onClick={() => setFieldValue('shipmentType', 'over air')}
                                            className={`font-bold text-md rounded-xl mb-2 md:mb-0 md:mr-2 px-4 py-2 border ${values.shipmentType === 'over air' ? 'primary-bg text-white' : 'bg-white text-black'}`}
                                        >
                                            {t('addRequest.overAir')}
                                        </button>
                                        <button
                                            type="button"
                                            onClick={() => setFieldValue('shipmentType', 'over sea')}
                                            className={`font-bold text-md rounded-xl px-4 py-2 border ${values.shipmentType === 'over sea' ? 'primary-bg text-white' : 'bg-white text-black'}`}
                                        >
                                            {t('addRequest.overSea')}
                                        </button>
                                    </div>
                                    <ErrorMessage name="shipmentType" component="div" className="text-red-500" />
                                </div>
                            </div>

                            <div className="flex flex-col md:flex-row mb-5">
                                <Field type="text" name="productName" placeholder={t('addRequest.product')} className={`w-full md:w-1/2 p-2 border rounded-2xl border-gray-400 ${currentLanguage === 'ar' ? 'text-right' : 'text-left'} mb-2 md:mb-0 md:mr-2`} />
                                <ErrorMessage name="productName" component="div" className="text-red-500" />
                                <Field type="text" name="link" placeholder={t('addRequest.productLink')} className={`w-full md:w-1/2 p-2 border rounded-2xl border-gray-400 ${currentLanguage === 'ar' ? 'text-right' : 'text-left'}`} />
                                <ErrorMessage name="link" component="div" className="text-red-500" />
                            </div>

                            <div className="flex flex-col md:flex-row mb-5">
                                <Field type="number" name="quantity" placeholder={t('addRequest.quantity')} className={`w-full md:w-1/2 p-2 border rounded-2xl border-gray-400 ${currentLanguage === 'ar' ? 'text-right' : 'text-left'} mb-2 md:mb-0 md:mr-2`} />
                                <ErrorMessage name="quantity" component="div" className="text-red-500" />
                                <Field type="text" name="targetPrice" placeholder={t('addRequest.targetPrice')} className={`w-full md:w-1/2 p-2 border rounded-2xl border-gray-400 ${currentLanguage === 'ar' ? 'text-right' : 'text-left'}`} />
                                <ErrorMessage name="targetPrice" component="div" className="text-red-500" />
                            </div>

                            <div className="flex flex-col md:flex-row mb-5">
                                <Field type="text" name="weight" placeholder={t('addRequest.weight')} className={`w-full md:w-1/2 p-2 border rounded-2xl border-gray-400 ${currentLanguage === 'ar' ? 'text-right' : 'text-left'} mb-2 md:mb-0 md:mr-2`} />
                                <Field type="text" name="color" placeholder={t('addRequest.color')} className={`w-full md:w-1/2 p-2 border rounded-2xl border-gray-400 ${currentLanguage === 'ar' ? 'text-right' : 'text-left'}`} />
                                <ErrorMessage name="color" component="div" className="text-red-500" />
                            </div>

                            <Field as="textarea" name="note" placeholder={t('addRequest.note')} className={`w-full p-2 border rounded-2xl border-gray-400 ${currentLanguage === 'ar' ? 'text-right' : 'text-left'} mb-5`} />
                            <ErrorMessage name="note" component="div" className="text-red-500" />

                            <button type="submit" className="primary-bg text-white p-4 text-lg w-full md:w-1/2 m-auto rounded-xl block" disabled={isSubmitting}>
                                {t('addRequest.confirmRequest')}
                            </button>
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    );
};

export default MultipleRequest;
