import React from 'react';

const Service = [
    { title: 'User Experience Design (UED)',
         description: 'Designing intuitive and user-friendly interfaces to improve customer satisfaction and engagement.',
          icon: 'images/UIUX.jpeg' 
    },

    { title: 'Application Development', 
    description: 'Building cross-platform applications tailored to client needs for web and mobile.', 
    icon: 'images/Appl.jpeg' },

    { title: 'Web Design', 
        description: 'Designing modern and responsive websites that provide seamless digital experiences.',
         icon: 'images/Hom.jpeg' },

    { title: 'Graphic Design', 
        description: 'Creating visually appealing graphics, layouts, and illustrations to communicate ideas effectively.',
         icon: 'images/Graphics.jpeg' },

    { title: 'Android Development',
         description: 'Developing powerful, scalable, and user-friendly Android mobile applications.', 
         icon: 'images/Android.jpeg' },

    { title: 'Brand Design', 
        description: 'Building strong and consistent brand identities through logos, colors, and visual storytelling.',
         icon: 'images/Brand.jpeg' },
];

const Services = () => {
    return (
        <div
            id="Services"
            className="  bg-white py-2 px-4 sm:px-6 lg:px-16"
        >
            <h2 className="text-center text-4xl md:text-5xl text-[#FFD93D] font-bold font-Volkhov mb-15 ">
                SERVICES
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-12">
                {Service.map((service, index) => (
                    <div
                        key={index}
                        className=" bg-[#FFD93D]/10 bg-whie p-6 rounded-xl h- shadow-lg text-center hover:shadow-lg transition-transform transform hover:scale-105"
                    >
                        {/* Common image styling here */}
                        <img 
                            src={service.icon} 
                            alt={service.title}
                            className="w-full h-48 object-cover rounded-md mb-6" 
                        />

                        <h3 className="text-2xl font-semibold  mb-2">
                            {service.title}
                        </h3>
                        <p className="text-gray-500 text-md pb-2">
                            {service.description}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Services;

