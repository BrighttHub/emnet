
import React from 'react';

function About() {
  return (
    <div className="text-black px-3 py-8 md:px-20 md:py-2  min-h-screen">
      <h1 className="font-bold text-4xl md:text-5xl text-[#FFD93D] font-Volkhov  text-center ">ABOUT US</h1>
      

      <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-10">
        

           <div className="w-full md:w-1/2 flex justify-center relative">
          {/* <div className="absolute top-6 right-6 w-[80%] h-[100%] border-4 border-cyan-500 rounded-md z-0 hidden md:block"></div> */}
          <img 
            src="/images/col.jpg" 
            alt="Emnet Befkadu" 
            className="relative  mt-8 z-10 w-[500px] md:w-[800px]  object-cover" 
          />
        </div>
        {/* Text Section */}
        <div className="w-full md:w-1/2">
          <p className="text-gray-500 text-justify leading-relaxed text-base lg:mt-19 md:text-lg">
      HomTec delivers world-class digital solutions in web development, UI/UX design, and technology services. We help startups and businesses build responsive websites, intuitive apps, and scalable digital products that drive growth.

      Our network of skilled designers, developers, and tech professionals ensures you get the right expertise for your unique project needs. Whether you’re launching a startup, scaling your business, or exploring AI-driven solutions, we provide flexible, innovative, and tailored support.

       At the same time, we create opportunities for freelancers and consultants to work on exciting projects worldwide, building portfolios while collaborating with global brands.
          </p>
        </div>

        {/* Image Section with border */}
       

      </div>
    </div>
  );
}

export default About;
