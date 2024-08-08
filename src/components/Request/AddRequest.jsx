import React from 'react';
import { useFormik } from 'formik';
import Sidebar from '../Sidebar/Sidebar';
import axios from 'axios';
import img16 from '../../assets/Line 3.png';
import img17 from '../../assets/Line 3 (1).png';
// Add your image for the button here

function AddRequest() {
    const formik = useFormik({
        initialValues: { product: '', productLink: '', quantity: '', note: '', weight: '', color: '' },
        onSubmit: async (values) => {
            // This function is now unused. Handle submit in handleConfirmRequest.
        }
    });

    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        // File handling logic if needed
        console.log('Selected file:', file);
    };

    const handleConfirmRequest = async () => {
        const formData = new FormData();
        formData.append('product', formik.values.product);
        formData.append('productLink', formik.values.productLink);
        formData.append('quantity', formik.values.quantity);
        formData.append('note', formik.values.note);
        formData.append('weight', formik.values.weight);
        formData.append('color', formik.values.color);

        // Check if a file was uploaded
        const fileInput = document.querySelector('input[type="file"]');
        if (fileInput && fileInput.files.length > 0) {
            formData.append('file', fileInput.files[0]);
        }

        // Log FormData contents for debugging
        for (let [key, value] of formData.entries()) {
            console.log(`${key}: ${value}`);
        }

        try {
            const response = await axios.post('https://logistics-solution-wheat.vercel.app/api/request/', formData, {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`,
                    'Content-Type': 'multipart/form-data'
                }
            });
            console.log('Response:', response.data);
        } catch (error) {
            console.error('Error submitting form:', error.response ? error.response.data : error.message);
        }
    };

    return (
        <>
            <div className="grid grid-cols-6 h-screen">
                {/* Sidebar 1/6 width */}
                <Sidebar />

                {/* Main content area */}
                <div className="col-span-5 p-4">
                    <div className="grid grid-cols-6 gap-4">
                        {/* Column 2 */}
                        <div className="col-span-3 flex flex-col items-start p-4">
                            <h1 className="text-xl font-bold mb-4 text-custom-red">Add Request</h1>
                            <img src={img16} alt="Decorative Line" className="mb-4" />
                            <input
                                type="file"
                                onChange={handleImageUpload}
                                className="mb-4 rounded py-4"
                            />
                            <form className="w-full" onSubmit={(e) => e.preventDefault()}>
                                <div className="mb-4">
                                    <label className="block mb-2">Product</label>
                                    <input
                                        type="text"
                                        {...formik.getFieldProps('product')}
                                        className="border border-gray-300 rounded-lg py-3 w-full"
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="block mb-2">Product Link</label>
                                    <input
                                        type="text"
                                        {...formik.getFieldProps('productLink')}
                                        className="border border-gray-300 rounded-lg py-3 w-full"
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="block mb-2">Quantity</label>
                                    <input
                                        type="number"
                                        {...formik.getFieldProps('quantity')}
                                        className="border border-gray-300 rounded-lg py-3 w-full"
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="block mb-2">Note</label>
                                    <textarea
                                        {...formik.getFieldProps('note')}
                                        className="border border-gray-300 rounded-lg py-3 w-full"
                                    />
                                </div>
                            </form>
                        </div>

                        {/* Column 3 */}
                        <div className="col-span-2 flex flex-col items-center p-4 mb-3">
                            <h2 className="text-xl font-bold mb-4">Multiple Request</h2>
                            <img src={img17} alt="Decorative Line" className="mb-4" />
                            <div className="mb-4 py-4">
                                <h2 className="text-lg font-bold mb-2">Shipment Type</h2>
                                <div className="flex space-x-4 mb-4">
                                    <button
                                        type="button"
                                        className="text-black px-4 py-2 rounded-lg border-2 border-black"
                                    >
                                        over air
                                    </button>
                                    <button
                                        type="button"
                                        className="text-black px-4 py-2 rounded-lg border-2 border-black"
                                    >
                                        over sea
                                    </button>
                                </div>
                            </div>
                            <div className="mb-4">
                                <label className="mb-2">Weight</label>
                                <input
                                    type="number"
                                    {...formik.getFieldProps('weight')}
                                    className="border border-gray-300 rounded-lg py-3 px-14 w-full"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="mb-2">Color</label>
                                <input
                                    type="text"
                                    {...formik.getFieldProps('color')}
                                    className="border border-gray-300 rounded-lg py-3 px-16 w-full"
                                />
                            </div>
                        </div>

                        {/* Column 5 */}
                        <div className="col-span-5 flex items-center justify-center p-4">
                            <button
                                type="button"
                                onClick={handleConfirmRequest}
                                className="px-10 flex items-center justify-center p-4 bg-custom-red text-white rounded-lg shadow-lg hover:bg-red-600 transition duration-300 ease-in-out"
                            >
                                Confirm Request
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default AddRequest;
