import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import AuthSidePanel from './AuthSidePanel';
import toast from 'react-hot-toast';
import { ThreeDots } from 'react-loader-spinner';
import axios from 'axios';

const Register = () => {
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            password: '',
            password2: '',
            mobileNumber: '',
            whatsappNumber: '',
            termsAndConditionsAgreed: false,
        },
        validationSchema: Yup.object({
            name: Yup.string().required('Name is required'),
            email: Yup.string().email('Invalid email address').required('Email is required'),
            password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
            password2: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match').required('Password Confirmation is required'),
            mobileNumber: Yup.string().required('Mobile number is required'),
            termsAndConditionsAgreed: Yup.boolean().oneOf([true], 'You must accept the terms and conditions').required('You must accept the terms and conditions'),
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
                    toast.success('Registered Successfully');
                    navigate('/home');
                } catch (error) {
                    if (error.response && error.response.data) {
                        setErrors(error.response.data.errors);
                    } else {
                        toast.error('An error occurred. Please try again.');
                    }
                } finally {
                    setIsLoading(false);
                }
            },
        });

    return (
        <div className="flex h-screen">
            <AuthSidePanel />
            <div className="w-1/2 flex justify-center items-center bg-white">
                <div className="w-3/4">
                    <h2 className="text-2xl font-bold text-center mb-12">Hey, There!</h2>
                    <div className="flex justify-evenly mt-4">
                        <Link to="/login" className="text-gray-600 border-b-2 border-black">Login</Link>
                        <Link to="/register" className="ml-8 primary-color border-b-2 primary-underline">Sign up</Link>
                    </div>
                    <form onSubmit={formik.handleSubmit} className="mt-8">
                        <input
                            type="text"
                            placeholder="Name"
                            {...formik.getFieldProps('name')}
                            className={`px-4 rounded-2xl w-full p-2 border-2 ${formik.touched.name && formik.errors.name ? 'border-red-600' : 'border-gray-300'} focus:border-red-600 outline-none`}
                        />
                        {formik.touched.name && formik.errors.name ? (
                            <div className="text-red-600 text-xs">{formik.errors.name}</div>
                        ) : null}

                        <input
                            type="email"
                            placeholder="Email"
                            {...formik.getFieldProps('email')}
                            className={`px-4 rounded-2xl w-full p-2 mt-4 border-2 ${formik.touched.email && formik.errors.email ? 'border-red-600' : 'border-gray-300'} focus:border-red-600 outline-none`}
                        />
                        {formik.touched.email && formik.errors.email ? (
                            <div className="text-red-600 text-xs">{formik.errors.email}</div>
                        ) : null}

                        <input
                            type="password"
                            placeholder="Password"
                            {...formik.getFieldProps('password')}
                            className={`px-4 rounded-2xl w-full p-2 mt-4 border-2 ${formik.touched.password && formik.errors.password ? 'border-red-600' : 'border-gray-300'} focus:border-red-600 outline-none`}
                        />
                        {formik.touched.password && formik.errors.password ? (
                            <div className="text-red-600 text-xs">{formik.errors.password}</div>
                        ) : null}

                        <input
                            type="password"
                            placeholder="Password Confirmation"
                            {...formik.getFieldProps('password2')}
                            className={`px-4 rounded-2xl w-full p-2 mt-4 border-2 ${formik.touched.password2 && formik.errors.password2 ? 'border-red-600' : 'border-gray-300'} focus:border-red-600 outline-none`}
                        />
                        {formik.touched.password2 && formik.errors.password2 ? (
                            <div className="text-red-600 text-xs">{formik.errors.password2}</div>
                        ) : null}

                        <input
                            type="phone"
                            placeholder="Mobile Number"
                            {...formik.getFieldProps('mobileNumber')}
                            className={`px-4 rounded-2xl w-full p-2 mt-4 border-2 ${formik.touched.mobileNumber && formik.errors.mobileNumber ? 'border-red-600' : 'border-gray-300'} focus:border-red-600 outline-none`}
                        />
                        {formik.touched.mobileNumber && formik.errors.mobileNumber ? (
                            <div className="text-red-600 text-xs">{formik.errors.mobileNumber}</div>
                        ) : null}

                        <input
                            type="phone"
                            placeholder="Whatsapp Number"
                            {...formik.getFieldProps('whatsappNumber')}
                            className={`px-4 rounded-2xl w-full p-2 mt-4 border-2 ${formik.touched.whatsappNumber && formik.errors.whatsappNumber ? 'border-red-600' : 'border-gray-300'} focus:border-red-600 outline-none`}
                        />
                        {formik.touched.whatsappNumber && formik.errors.whatsappNumber ? (
                            <div className="text-red-600 text-xs">{formik.errors.whatsappNumber}</div>
                        ) : null}

                        <div className="flex justify-between mt-4">
                            <label htmlFor="termsAndConditionsAgreed" className="text-gray-600">
                                You agree to our
                                <span className='primary-color'> terms</span> and
                                <span className='primary-color'> conditions</span>
                            </label>
                            <input
                                type="checkbox"
                                id="termsAndConditionsAgreed"
                                {...formik.getFieldProps('termsAndConditionsAgreed')}
                                className={`form-checkbox text-red-600 text-xs border-gray-300 rounded focus:ring-red-500 ${formik.touched.termsAndConditionsAgreed && formik.errors.termsAndConditionsAgreed ? 'border-red-600' : 'border-gray-300'}`}
                            />
                        </div>
                        {formik.touched.termsAndConditionsAgreed && formik.errors.termsAndConditionsAgreed ? (
                            <div className="text-red-600 text-xs">{formik.errors.termsAndConditionsAgreed}</div>
                        ) : null}

                        <button type="submit" className={isLoading ? "primary-bg mt-8 w-full text-white px-4 py-4 rounded-xl flex justify-center" : "primary-bg mt-8 w-full text-white px-4 py-2 rounded-xl flex justify-center"}>
                            {isLoading ? <ThreeDots
                                visible={true}
                                height="10"
                                width="80"
                                color="white"
                                radius="1"
                            /> : 'Sign up'}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;
