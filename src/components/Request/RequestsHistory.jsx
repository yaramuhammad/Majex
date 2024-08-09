import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useTranslation, getI18n } from 'react-i18next'; 
import img15 from '../../assets/Checking boxes-bro 1.png';
import Loading from '../Loading';

function RequestsHistory() {
    const { t } = useTranslation();
    const [requests, setRequests] = useState([]);
    const [loading, setLoading] = useState(true);
    const i18n = getI18n();
    const currentLanguage = i18n.language;

    const fetchRequests = async () => {
        setLoading(true);
        try {
            const token = localStorage.getItem('token');
            const response = await axios.get('https://logistics-solution-wheat.vercel.app/api/user/me', {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            const filteredRequests = response.data.requests.filter(request => request.status === 'completed');
            setRequests(filteredRequests);
        } catch (error) {
            console.error('Error fetching requests:', error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchRequests();
    }, []);

    return (
        <div className="grid grid-cols-1 md:grid-cols-5 h-full md:h-screen">
            <div className={`col-span-1 md:col-span-5 h-full flex flex-col p-5 w-full ${currentLanguage==='ar'? 'text-right' : ''}`}>
                <h2 className="pt-7 font-bold text-xl md:text-2xl">{t('requestsTitle')}</h2>
                <p style={{ color: '#4B4B4B' }} className="pt-2 text-base md:text-lg">
                    {t('requestsDescription')}
                </p>

                <div className={`flex flex-col md:flex-row justify-evenly mt-4 ${currentLanguage==='ar'? 'md:flex-row-reverse' : ''}`}>
                    <div className="w-full md:w-1/4 text-center mb-4 md:mb-0 md:ml-10 border-b-2 border-black">
                        <Link to='/request'>
                            <p className="font-bold text-lg md:text-2xl">{t('current')}</p>
                        </Link>
                    </div>
                    <div className="w-full md:w-1/4 text-center border-b-2 border-red-900">
                        <p className="font-bold text-lg md:text-2xl primary-color">{t('history')}</p>
                    </div>
                </div>

                {loading ? (
                    <Loading />
                ) : requests.length > 0 ? (
                    <div className="flex flex-col mt-10">
                        {requests.map((request) => (
                            <div key={request._id} className="bg-white shadow-md rounded-lg p-4 mb-4">
                                <h3 className="text-lg md:text-xl font-semibold">{request.title}</h3>
                                <p className="text-gray-600 text-base">{request.description}</p>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="flex flex-col items-center mt-10">
                        <img src={img15} alt="Central" className="mb-5 w-full max-w-xs md:max-w-md" />
                        <div className="flex flex-col items-center text-center">
                            <span className="font-bold text-lg md:text-xl mb-2">{t('addRequestPrompt')}</span>
                            <span style={{ color: '#4B4B4B' }} className="text-base md:text-lg">
                                {t('addRequestDescription')}
                            </span>
                        </div>
                        <Link to="/addrequest">
                            <button className="mt-6 px-8 md:px-12 py-2 md:py-3 bg-custom-red text-white rounded text-base md:text-lg">
                                {t('addNewRequestButton')}
                            </button>
                        </Link>
                    </div>
                )}
            </div>
        </div>
    );
}

export default RequestsHistory;
