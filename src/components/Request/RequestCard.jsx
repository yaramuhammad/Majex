import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';


function RequestCard({ request, onDelete }) {
    const { t } = useTranslation();



    return (
        <div key={request._id} className="flex justify-between items-center bg-white shadow-lg p-4 mb-4 rounded-2xl w-full">
            <div className='py-5 px-2'>
                <span className="text-white font-semibold bg-[#4184D2] px-4 py-2 rounded">
                    {request.status.charAt(0).toUpperCase() + request.status.slice(1)}
                </span>
                <p className="font-bold text-lg mt-8 mb-2">{request.productName}</p>
                <p className='text-[#4B4B4B]'>{new Date(request.createdAt).toLocaleString()}</p>
                {request.link && <a href={request.link} className="text-[#4184D2]">{request.link}</a>}
            </div>
            <div className='max-w-xs px-16'>
                <img src={request.media.publicUrl} alt={request.productName} />
                <div className="flex items-center justify-between w-full">
                    <Link to={`/request/details/${request._id}`} className="primary-color text-xl ">
                        {t('Details')}
                    </Link>
                    <button className="primary-color text-xl " onClick={()=>{onDelete(request.id)}}>
                        <i className="fa-solid fa-trash mr-2"></i>
                        {t('Delete')}
                    </button>
                </div>
            </div>
        </div>
    )
}
export default RequestCard;
