
import React from 'react';
import { FaPhoneAlt } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';

import Footer from './Footer';

function Contact() {
  return (
    <div className='text-black max-w-6xl mx-auto mt-19 px-4 py-15'>
      <h1 className='text-4xl md:text-5xl text-[#FFD93D]  font-Volkhov text-center mb-10 font-bold'>CONTACT US</h1>
      <div className='flex flex-col md:flex-row gap-10'>
        <div className='md:w-1/2 space-y-6'>
          <h3 className='text-2xl font-semibold'>Get in Touch with Us</h3>
          <p className='  text-gray-800 leading-relaxed'>
            Have a question, project idea, or just want to say hello? Our
             team at BrightHub is here to help. Fill out the form below or
              reach out to us via email or phone, and we’ll get back to you 
              as soon as possible.
          </p>

          <div className='space-y-4'>
            <p className='flex items-center gap-2'>
              <FaPhoneAlt className="text-[#FFD93D] " /> 
              <span>+237679184456</span>
            </p>
            
            <p className='flex items-center gap-2'>
              <HiOutlineMail className="text-[#FFD93D] " /> 
              <span>wamomackbright7@gmail.com</span>
            </p>
            
            <p className='flex items-center gap-2'>
              <span>📍</span>
              <span>Yaounde, Cameroon</span>
            </p>
          </div>
        </div>

        <div className='md:w-1/2'>
          <form className='space-y-6'>
            <input 
              type="text" 
              placeholder='Name' 
              className='w-full p-3 rounded-lg bg-[#FFD93D]/10 focus:outline-none focus:ring-2 focus:ring-[#FFD93D]'
            />
            
            <input 
              type="email" 
              placeholder='Email' 
              className='w-full p-3 rounded-lg  bg-[#FFD93D]/10 focus:outline-none focus:ring-2 focus:ring-[#FFD93D]'
            />
            
            <textarea 
              placeholder='Message' 
              rows="5"
              className='w-full p-3 rounded-lg bg-[#FFD93D]/10 focus:outline-none focus:ring-2 focus:ring-[#FFD93D]'
            ></textarea>
            
            <button 
              type="submit"
              className='px-6 py-3 bg-[#FFD93D] text-black rounded hover:bg-cyan-600 transition-colors font-medium'
            >
              Send
            </button>
          </form>
        </div>
      </div>
     <Footer/>
    </div>
  );
}

export default Contact;