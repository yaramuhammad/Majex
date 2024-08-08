import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import AuthSidePanel from './AuthSidePanel';
import toast from 'react-hot-toast';
import { ThreeDots } from 'react-loader-spinner';
import axios from 'axios';
import { useTranslation, getI18n } from 'react-i18next';

const Login = () => {
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();
    const { t } = useTranslation();
    const i18n = getI18n();
    const currentLanguage = i18n.language;

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: Yup.object({
            email: Yup.string().email(t('Invalid email address')).required(t('Email is required')),
            password: Yup.string().min(6, t('Password must be at least 6 characters')).required(t('Password is required')),
        }),
        onSubmit: async (values, { setErrors }) => {
            setIsLoading(true);
            try {
                const response = await axios.post('https://logistics-solution-wheat.vercel.app/login', values, {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });
                const data = response.data;
                localStorage.setItem('token', data.token);
                toast.success(t('Logged in Successfully'));
                navigate('/');
            } catch (error) {
                if (error.response && error.response.data) {
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
        <div className={`flex h-screen ${currentLanguage === 'ar' ? 'flex-row-reverse' : ''}`}>
            <AuthSidePanel />
            <div className="w-1/2 flex justify-center items-center bg-white">
                <div className="w-3/4">
                    <h2 className={`text-2xl font-bold text-center mb-12 ${currentLanguage === 'ar' ? 'text-right' : ''}`}>{t('Hey, There!')}</h2>
                    <div className={`flex justify-evenly mt-4 ${currentLanguage === 'ar' ? 'flex-row-reverse' : ''}`}>
                        <Link to="/login" className={`primary-color border-b-2 primary-underline ${currentLanguage === 'ar' ? 'ml-8' : ''}`}>{t('Login')}</Link>
                        <Link to="/register" className={`text-gray-600 border-b-2 border-black ${currentLanguage === 'ar' ? 'ml-8' : ''}`}>{t('Sign up')}</Link>
                    </div>
                    <form onSubmit={formik.handleSubmit} className="mt-8">
                        <input
                            type="email"
                            placeholder={t('Email')}
                            {...formik.getFieldProps('email')}
                            className={`px-4 rounded-2xl w-full p-2 border-2 ${formik.touched.email && formik.errors.email ? 'border-red-600' : 'border-gray-300'} focus:border-red-600 outline-none ${currentLanguage === 'ar' ? 'text-right' : ''}`}
                        />
                        {formik.touched.email && formik.errors.email ? (
                            <div className={`text-red-600 text-xs ${currentLanguage === 'ar' ? 'text-right' : ''}`}>{formik.errors.email}</div>
                        ) : null}

                        <input
                            type="password"
                            placeholder={t('Password')}
                            {...formik.getFieldProps('password')}
                            className={`px-4 rounded-2xl w-full p-2 mt-4 border-2 ${formik.touched.password && formik.errors.password ? 'border-red-600' : 'border-gray-300'} focus:border-red-600 outline-none ${currentLanguage === 'ar' ? 'text-right' : ''}`}
                        />
                        {formik.touched.password && formik.errors.password ? (
                            <div className={`text-red-600 text-xs ${currentLanguage === 'ar' ? 'text-right' : ''}`}>{formik.errors.password}</div>
                        ) : null}

                        <div className={`flex justify-between items-center mt-4 ${currentLanguage === 'ar' ? 'flex-row-reverse' : ''}`}>
                            <Link to="" className={`primary-color ${currentLanguage === 'ar' ? 'text-right' : ''}`}>{t('Forgot your password?')}</Link>
                        </div>

                        <button type="submit" className={isLoading ? "primary-bg mt-8 w-full text-white px-4 py-4 rounded-xl flex justify-center" : "primary-bg mt-8 w-full text-white px-4 py-2 rounded-xl flex justify-center"}>
                            {isLoading ? <ThreeDots
                                visible={true}
                                height="10"
                                width="80"
                                color="white"
                                radius="1"
                            /> : t('Login')}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
