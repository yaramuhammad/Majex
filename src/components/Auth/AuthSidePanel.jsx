import React from 'react';

const AuthSidePanel = () => {
    return (
        <div className="w-1/2 border-r-2 border-black relative">
            <div className="absolute inset-0">
                <img
                    src={require('../../assets/images 1.png')}
                    alt="Background"
                    className="w-full h-full object-cover"
                />
            </div>
            <div className="relative flex justify-center items-center h-full">
                <img src={require('../../assets/logo PNG-01 1.png')} alt="Majex International" className="w-1/2" />
            </div>
        </div>
    );
};

export default AuthSidePanel;
