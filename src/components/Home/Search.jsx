import React from 'react';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Search = () => {
    return (
        <div className="relative mx-16">
            <img
                src={require('../../assets/hero.png')}
                alt="Background"
                className="w-full h-auto object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center">
                <div className="flex w-full justify-center">
                    <div className='w-80 md:w-1/2 flex justify-center  items-center bg-white px-8 py-4 rounded-2xl'>
                        <FontAwesomeIcon
                            icon={faSearch}
                            size="xl"
                        />
                        <input
                            type="text"
                            placeholder="Track Your Order"
                            className="p-4 rounded-l-lg w-full border-none outline-none"
                        />
                        <button className="primary-bg text-white px-6 py-2 rounded-lg">
                            Track
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Search;
