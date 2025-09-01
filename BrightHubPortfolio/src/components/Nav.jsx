import React from 'react';

function Nav() {
  return (
    <div className="fixed w-full top-0 left-0 z-50   flex justify-center">
      <nav className="backdrop-blur-md  bg-white/5 border border-gray-600/30 my-9 px-10 py-4 rounded-4xl max-w-2xl shadow-lg">
        <div className="flex justify-center gap-14">
          <a href="#home" className="text-[#C084FC] hover:text-[#C084FC]/50 transition-colors duration-300 text-lg">
            Home
          </a>
          <a href="#about" className=" text-[#C084FC] hover:text-[#C084FC]/50 transition-colors duration-300 text-lg">
            About
          </a>
          <a href="#Services" className="text-[#C084FC] hover:text-[#C084FC]/50 transition-colors duration-300 text-lg">
            Services
          </a>
          {/* <a href="#projects" className="text-[#C084FC] hover:text-[#C084FC] transition-colors duration-300 text-lg"> */}
            {/* Projects */}
          {/* </a> */}
          <a href="#contact" className="text-[#C084FC] hover:text-[#C084FC] transition-colors duration-300 text-lg">
            Contact
          </a>
        </div>
      </nav>
    </div>
  );
}

export default Nav;