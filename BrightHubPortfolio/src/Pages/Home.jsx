





import { motion } from 'framer-motion';
import Nav from '../components/Nav';

function Home() {
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.3,
        duration: 0.8,
        ease: "easeOut",
      },
    }),
  };

  const imageVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.9,
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="bg- text-black min-h-screen ">
      <Nav />

      <div className="container mx-auto px-19 py-35 flex flex-col-reverse md:flex-row items-center justify-between gap-10">
        
        {/* Text Section */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <motion.h2
            className="text-5xl text[#C084FC] sm:text-4xl font-bol font-Volkhov"
            initial="hidden"
            animate="visible"
            custom={0}
            variants={textVariants}
          >
            Welcome To <span className="text-[#FFD93D]/100 text-6xl">BrightHub</span>
          </motion.h2>

          <motion.h2
            className="mt-4 lg:text- sm:text-xl font-Lato text-gray-500"
            initial="hidden"
            animate="visible"
            custom={1}
            variants={textVariants}
          >
             forward-thinking company dedicated in Crafting Digital Experiences That Work.
            We build websites that don’t just look amazing they perform. From sleek designs to seamless functionality, BrightHub delivers custom web solutions that help your business grow online.
           Innovative, reliable, and results driven your digital success starts here.
          </motion.h2>


          <motion.div
            initial="hidden"
            animate="visible"
            custom={3}
            variants={textVariants}
          >
            <button
  onClick={() => document.getElementById("Services").scrollIntoView({ behavior: "smooth" })}
  className="rounded-2xl px-11 py-4 mt-6 bg-[#FFD93D] text-black font-semibold font-inter text-lg shadow-md hover:bg-[#FFD93D]/50 transition-all duration-300"
>
  Start Exploring
</button>

          </motion.div>
        </div>

        {/* Image Section */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={imageVariants}
          whileHover={{ scale: 1.02 }}
          className="w-full md:w-1/2 flex justify-center relative"
        >
          {/* <div className="absolute top-6 right-6 w-[80%] h-[80%] border-4 border-cyan-500 rounded-lg z-0 hidden md:block"></div> */}
          <img
            src="images/co.jpg"
            alt="Emnet Befkadu"
            className="relative mt-15 z-10  w-[380px] h-100 sm:w-[350px] md:w-[800px] object-cover"
          />
        </motion.div>
      </div>
    </div>
  );
}

export default Home;
