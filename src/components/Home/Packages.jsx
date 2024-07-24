import React from 'react';

const packages = [
    {
        title: 'Free package',
        price: 'Unlimited',
        features: [
            'Sourcing products and obtaining quotes from suppliers.',
            'Order product samples.',
            'Consult about import and export, certificates, etc.',
            'Warehouse free 4 days',
            'Air freight charges 36 SAR per kilo',
            'Commission 10%',
            'Sea freight starts from 1500 for 1 CBM.'
        ],
        backgroundColor: 'bg-gradient-to-t from-[#E1D3A2] to-[#FAF4DF]',
        icon: require('./../../assets/lock.png'),
    },
    {
        title: 'Plus package',
        price: '500.00 SAR',
        features: [
            'Sourcing products and getting quotes from suppliers.',
            'Follow up production.',
            'Customize and design products and packages.',
            'Offer private brand solutions.',
            'General quality check.',
            'Free warehouse 20 days.',
            'Air freight at 34 riyals per kilo.',
            '1350 riyals sea for 1 CBM.',
            'Commission 9~7%'
        ],
        backgroundColor: 'bg-gradient-to-t from-[#B5A095]  to-[#FFEDE3]',
        icon: require('./../../assets/plus.png'),
    },
    {
        title: 'VIP packages',
        price: '1875.00 SAR',
        features: [
            'Follow up production.',
            'Sourcing products and obtaining quotations from suppliers.',
            'Customized products and packages.',
            'Offer private brand solutions.',
            'Professional product photography for e-commerce. FBA, FBN',
            'Quality check.',
            'Month free warehouse and product assembly.',
            'Arrange door-to-door delivery via courier.',
            '33 riyals air freight per kilo.',
            '1300 Saudi riyals for sea freight for CBM',
            'Commission 7~5%'
        ],
        backgroundColor: 'bg-gradient-to-t from-[#D8D5EA] to-[#ffffff]',
        icon: require('./../../assets/crown.png'),
    }
];

const Packages = () => {
    return (
        <div className="container mx-auto px-16 py-10">
            <div className="flex flex-col items-center mb-10">
                <img src={require('../../assets/fire.png')} alt="fire" className="w-16 h-16" />
                <h2 className="text-4xl font-bold">Ready to start crossing borders!</h2>
            </div>
            <p className="text-center text-2xl mb-8">For supporting different people’s needs in China importing business, we offered 3 plans to meet all your needs</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {packages.map((pkg, index) => (
                    <div key={index}
                        style={{ borderTopRightRadius: "12.5rem" }}
                        className={`grid flex-col pt-24 pb-10 px-12 rounded-lg shadow-md text-center border-2 ${pkg.backgroundColor}`}>
                        <div className="flex justify-center mb-4">
                            <img src={pkg.icon} alt={pkg.icon} />
                        </div>
                        <h2 className="text-xl font-semibold mb-2">{pkg.title}</h2>
                        <p className="text-2xl font-semibold mb-4 primary-color">{pkg.price}</p>
                        <ul className="text-left mb-4 space-y-2 list-disc">
                            {pkg.features.map((feature, idx) => (
                                <li key={idx} className=''>{feature}</li>
                            ))}
                        </ul>
                        <button className="mt-4 primary-bg text-white py-2 px-8 rounded-lg place-self-center">Get Started</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Packages;
