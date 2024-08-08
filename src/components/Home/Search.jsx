import React from 'react';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './../../index.css'

const Search = () => {
    return (
        <div className="relative mx-4 sm:mx-8 md:mx-16">
            <img
                src={require('../../assets/hero.png')}
                alt="Background"
                className="w-full object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center">
                <div className="flex w-full justify-center">
                    <div className="w-11/12 sm:w-4/5 md:w-2/3 lg:w-1/2 flex justify-center items-center bg-white px-4 sm:px-8 py-4 rounded-2xl shadow-lg">
                        <FontAwesomeIcon
                            icon={faSearch}
                            size="xl"
                            className="mr-2 text-gray-500"
                        />
                        <input
                            type="text"
                            placeholder="Track Your Order"
                            className="inputSearch p-2 sm:p-4 rounded-l-lg w-full border-none outline-none focus:border-red-800 active:outline-none"
                        />
                        <button className="primary-bg text-white px-4 sm:px-6 py-2 rounded-lg">
                            Track
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Search;
