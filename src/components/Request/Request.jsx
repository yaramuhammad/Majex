import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Sidebar from '../Sidebar/Sidebar';
import img15 from '../../assets/Checking boxes-bro 1.png';
import RequestCard from './RequestCard';
import toast from 'react-hot-toast';
import Loading from '../Loading';

function CurrentRequests() {
  const { t } = useTranslation();
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchRequests = async () => {
    setLoading(true);
    try {
      const token = localStorage.getItem('token');
      const response = await axios.get('https://logistics-solution-wheat.vercel.app/api/user/me', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const filteredRequests = response.data.requests.filter(request => request.status !== 'completed');
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

  const handleDelete = async (requestId) => {
    try {
      await axios.delete(`https://logistics-solution-wheat.vercel.app/api/request/${requestId}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      });
      toast.success('Request deleted successfully');
      fetchRequests();
    } catch (error) {
      toast.error('Failed to delete request');
      console.error(error);
    }
  };

  return (
    <div className="grid grid-cols-6 h-screen">
      <Sidebar />

      <div className="col-span-5 h-full flex flex-col p-5">
        <h2 className='pt-7 font-bold text-2xl'>{t('requestsTitle')}</h2>
        <p style={{ color: '#4B4B4B' }} className='pt-2 text-lg'>
          {t('requestsDescription')}
        </p>

        <div className="flex justify-evenly mt-4">
          <div className="w-1/4 text-center ml-10 border border-b-2 border-red-900 border-r-0 border-l-0 border-t-0">
            <p className="text-2xl font-bold text-custom-red">{t('current')}</p>
          </div>
          <div className="w-1/4 text-center ml-10 border border-b-2 border-black border-r-0 border-l-0 border-t-0">
            <Link to='/request/history'>
              <p className="text-2xl font-bold">{t('history')}</p>
            </Link>
          </div>
        </div>

        {loading ? (
          <Loading />
        ) : requests.length > 0 ? (
          <div className="flex flex-col mt-10">
            {requests.map((request) => (
              <RequestCard key={request._id} request={request} onDelete={() => handleDelete(request._id)} />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center mt-10">
            <img src={img15} alt="Central" className="mb-5" />
            <div className="flex flex-col items-center text-center">
              <span className='font-bold text-xl mb-2'>{t('addRequestPrompt')}</span>
              <span style={{ color: '#4B4B4B' }} className="text-lg">
                {t('addRequestDescription')}
              </span>
            </div>
            <Link to="/addrequest">
              <button className="mt-6 px-12 py-3 bg-custom-red text-white rounded text-lg">
                {t('addNewRequestButton')}
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default CurrentRequests;
