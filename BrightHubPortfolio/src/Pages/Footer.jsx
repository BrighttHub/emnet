import react from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa';
function Footer(){
    return(
        <div>
         <footer>
          <div className='flex gap-6 mt-20 justify-center  pt-30 '>
            
             <p className='text-lg '> © 2025 BrightHub </p>
            
               {/* <a href="https://github.com/Emnet19" target='_blank' rel="noopener noreferrer"><FaGithub className="text-3xl hover:text-gray-700" /></a> */}
               <a href="https://www.linkedin.com/company/homtec/posts/?feedView=all" target='_blank' rel="noopener noreferrer"><FaLinkedin className="text-3xl text-[#FFD93D]  hover:text-blue-600" /></a>
               
               </div>
      </footer>
      </div>
    )
}
export default Footer;