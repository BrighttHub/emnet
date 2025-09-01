// import React from 'react';

// const Service = [
//     { title: 'User Experiance Design(UED)', description: 'Fish & Shellfish dishes', icon: <img src='images/UIUX.jpeg '/>},
//     { title: 'Graphic Design', description: 'Vegan Meals', icon: <img src='images/Graphics.jpeg'className='w-90 h-80'/> },
//     { title: 'Brand Design', description: 'Sweet Treats', icon: <img src='images/Brand.jpeg' className='w-90 h-80'/> },
//     { title: 'Web Design', description: 'Craft & Local Brews', icon:  <img src='images/Hom.jpeg'/>  },
//     { title: 'Android Development', description: 'Italian Dishes', icon: <img src='images/Android.jpeg'/> },
//     { title: 'Application Development', description: 'Fresh and Healthy', icon: <img src='images/Appl.jpeg'/> },
//     // { title: 'Web Development', description: 'Cheesy Goodness', icon: '🍕' },
//     // { title: 'Cocktails', description: 'Refreshing Drinks', icon: '🍹' },
// ];

// const Services = () => {
//     return (
//         <div
//             id="Services"
//             className="bg-white py-12 px-4 sm:px-6 lg:px-16"
//         >
//             <h2 className="text-center text-4xl md:text-5xl text-[#C084FC] font-bold mb-10 ">
//                 Category
//             </h2>

//             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 w-220 h-90 gap-8">
//                 {Service.map((Services, index) => (
//                     <div
//                         key={index}
//                         className="bg-white p-6 rounded-xl     h-110 shadow-lg text-center hover:shadow-lg transition-transform transform hover:scale-105"
//                     >
//                         <div className="text-xl   mb-6 ">{Services.icon}</div>
//                         <h3 className="text-xl font-semibold text-black mb-2">
//                             {Services.title}
//                         </h3>
//                         <p className="text-gray-600 text-sm">
//                             {Services.description}
//                         </p>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default Services;



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
            className="bg-white py-12 px-4 sm:px-6 lg:px-16"
        >
            <h2 className="text-center text-4xl md:text-5xl text-[#C084FC] font-bold mb-10">
                Category
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
                {Service.map((service, index) => (
                    <div
                        key={index}
                        className="bg-white p-6 rounded-xl h-85 shadow-lg text-center hover:shadow-lg transition-transform transform hover:scale-105"
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

