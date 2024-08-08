import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import AuthSidePanel from './AuthSidePanel';
import toast from 'react-hot-toast';
import { ThreeDots } from 'react-loader-spinner';
import axios from 'axios';
import { useTranslation, getI18n } from 'react-i18next';

const Register = () => {
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();
    const { t } = useTranslation();
    const i18n = getI18n();
    const currentLanguage = i18n.language;


    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            password: '',
            password2: '',
            mobileNumber: '',
            whatsappNumber: '',
            termsAndConditionsAgreed: false,
            language: '',
        },
        validationSchema: Yup.object({
            name: Yup.string().required(t('Name is required')),
            email: Yup.string().email(t('Invalid email address')).required(t('Email is required')),
            password: Yup.string().min(6, t('Password must be at least 6 characters')).required(t('Password is required')),
            password2: Yup.string().oneOf([Yup.ref('password'), null], t('Passwords must match')).required(t('Password Confirmation is required')),
            mobileNumber: Yup.string().required(t('Mobile number is required')),
            termsAndConditionsAgreed: Yup.boolean().oneOf([true], t('You must accept the terms and conditions')).required(t('You must accept the terms and conditions')),
            language: Yup.string().required(t('Language is required')),
        }),
        onSubmit: async (values, { setErrors }) => {
            setIsLoading(true);
            try {
                const response = await axios.post('https://logistics-solution-wheat.vercel.app/register', values, {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });

                const data = response.data;
                localStorage.setItem('token', data.token);
                toast.success(t('Registered Successfully'));
                navigate('/');
            } catch (error) {
                if (error.response && error.response.data) {
                    console.log(error.response.data.errors);
                    setErrors(error.response.data.errors);
                } else {
                    toast.error(t('An error occurred. Please try again.'));
                }
            } finally {
                setIsLoading(false);
            }
        },
    });

    return (
        <div className={`flex h-screen ${currentLanguage==='ar'?'flex-row-reverse' : ''}`}>
            <AuthSidePanel />
            <div className="w-1/2 flex justify-center items-center bg-white">
                <div className="w-3/4">
                    <h2 className="text-2xl font-bold text-center mb-12">{t('Hey, There!')}</h2>
                    <div className={`flex justify-evenly mt-4 ${currentLanguage === 'ar' ? 'flex-row-reverse' : ''}`}>
                        <Link to="/login" className="text-gray-600 border-b-2 border-black">{t('Login')}</Link>
                        <Link to="/register" className="ml-8 primary-color border-b-2 primary-underline">{t('Sign up')}</Link>
                    </div>
                    <form onSubmit={formik.handleSubmit} className="mt-8">
                        <input
                            type="text"
                            placeholder={t('Name')}
                            {...formik.getFieldProps('name')}
                            className={`${currentLanguage==='ar'?'text-right' : ''} px-4 rounded-2xl w-full p-2 border-2 ${formik.touched.name && formik.errors.name ? 'border-red-600' : 'border-gray-300'} focus:border-red-600 outline-none`}
                        />
                        {formik.touched.name && formik.errors.name ? (
                            <div className={`text-red-600 text-xs ${currentLanguage==='ar'?'text-right' : ''}`}>{formik.errors.name}</div>
                        ) : null}

                        <input
                            type="email"
                            placeholder={t('Email')}
                            {...formik.getFieldProps('email')}
                            className={`${currentLanguage==='ar'?'text-right' : ''} px-4 rounded-2xl w-full p-2 mt-4 border-2 ${formik.touched.email && formik.errors.email ? 'border-red-600' : 'border-gray-300'} focus:border-red-600 outline-none`}
                        />
                        {formik.touched.email && formik.errors.email ? (
                            <div className={`text-red-600 text-xs ${currentLanguage==='ar'?'text-right' : ''}`}>{formik.errors.email}</div>
                        ) : null}

                        <input
                            type="password"
                            placeholder={t('Password')}
                            {...formik.getFieldProps('password')}
                            className={`${currentLanguage==='ar'?'text-right' : ''} px-4 rounded-2xl w-full p-2 mt-4 border-2 ${formik.touched.password && formik.errors.password ? 'border-red-600' : 'border-gray-300'} focus:border-red-600 outline-none`}
                        />
                        {formik.touched.password && formik.errors.password ? (
                            <div className={`text-red-600 text-xs ${currentLanguage==='ar'?'text-right' : ''}`}>{formik.errors.password}</div>
                        ) : null}

                        <input
                            type="password"
                            placeholder={t('Password Confirmation')}
                            {...formik.getFieldProps('password2')}
                            className={`${currentLanguage==='ar'?'text-right' : ''} px-4 rounded-2xl w-full p-2 mt-4 border-2 ${formik.touched.password2 && formik.errors.password2 ? 'border-red-600' : 'border-gray-300'} focus:border-red-600 outline-none`}
                        />
                        {formik.touched.password2 && formik.errors.password2 ? (
                            <div className={`text-red-600 text-xs ${currentLanguage==='ar'?'text-right' : ''}`}>{formik.errors.password2}</div>
                        ) : null}

                        <input
                            type="phone"
                            placeholder={t('Mobile Number')}
                            {...formik.getFieldProps('mobileNumber')}
                            className={`${currentLanguage==='ar'?'text-right' : ''} px-4 rounded-2xl w-full p-2 mt-4 border-2 ${formik.touched.mobileNumber && formik.errors.mobileNumber ? 'border-red-600' : 'border-gray-300'} focus:border-red-600 outline-none`}
                        />
                        {formik.touched.mobileNumber && formik.errors.mobileNumber ? (
                            <div className={`text-red-600 text-xs ${currentLanguage==='ar'?'text-right' : ''}`}>{formik.errors.mobileNumber}</div>
                        ) : null}

                        <input
                            type="phone"
                            placeholder={t('Whatsapp Number')}
                            {...formik.getFieldProps('whatsappNumber')}
                            className={`${currentLanguage==='ar'?'text-right' : ''} px-4 rounded-2xl w-full p-2 mt-4 border-2 ${formik.touched.whatsappNumber && formik.errors.whatsappNumber ? 'border-red-600' : 'border-gray-300'} focus:border-red-600 outline-none`}
                        />
                        {formik.touched.whatsappNumber && formik.errors.whatsappNumber ? (
                            <div className={`text-red-600 text-xs ${currentLanguage==='ar'?'text-right' : ''}`}>{formik.errors.whatsappNumber}</div>
                        ) : null}

                        <div className="mt-4">
                            <select
                                id="language"
                                {...formik.getFieldProps('language')}
                                className={`${currentLanguage==='ar'?'text-right' : ''} px-4 py-2 rounded-2xl w-full border-2 ${formik.touched.language && formik.errors.language ? 'border-red-600' : 'border-gray-300'} focus:border-red-600 outline-none`}
                            >
                                <option value="" disabled selected>{t('Preferred Language')}</option>
                                <option value="english">{t('En')}</option>
                                <option value="chinese">{t('中文')}</option>
                                <option value="arabic">{t('Ar')}</option>
                            </select>
                            {formik.touched.language && formik.errors.language ? (
                                <div className={`text-red-600 text-xs ${currentLanguage==='ar'?'text-right' : ''}`}>{formik.errors.language}</div>
                            ) : null}
                        </div>

                        <div className={`flex justify-between mt-4 ${currentLanguage==='ar'?'flex-row-reverse' : ''}`}>
                            <label htmlFor="termsAndConditionsAgreed" className="text-gray-600">
                                {t('You agree to our')}
                                <span className='primary-color'> {t('terms')}</span> {t('and')}
                                <span className='primary-color'> {t('conditions')}</span>
                            </label>
                            <input
                                type="checkbox"
                                id="termsAndConditionsAgreed"
                                {...formik.getFieldProps('termsAndConditionsAgreed')}
                                className={
                                    ` form-checkbox text-red-600 text-xs border-gray-300 rounded focus:ring-red-500 ${formik.touched.termsAndConditionsAgreed && formik.errors.termsAndConditionsAgreed ? 'border-red-600' : 'border-gray-300'}`}
                            />
                        </div>
                        {formik.touched.termsAndConditionsAgreed && formik.errors.termsAndConditionsAgreed ? (
                            <div className={`text-red-600 text-xs ${currentLanguage==='ar'?'text-right' : ''}`}>{formik.errors.termsAndConditionsAgreed}</div>
                        ) : null}

                        <button type="submit" className={isLoading ? "primary-bg mt-8 w-full text-white px-4 py-4 rounded-xl flex justify-center" : "primary-bg mt-8 w-full text-white px-4 py-2 rounded-xl flex justify-center"}>
                            {isLoading ? <ThreeDots
                                visible={true}
                                height="10"
                                width="80"
                                color="white"
                                radius="1"
                            /> : t('Sign up')}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;
