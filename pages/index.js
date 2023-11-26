import Image from "next/image";
import ParticlesContainer from '../components/ParticlesContainer'
import Projectbtn from '../components/ProjectsBtn'
import Avatar from '../components/Avatar'

import {motion} from 'framer-motion'

import {fadeIn} from '../variants'


const Home = () => {
  return (
  <div className='bg-primary/60 h-full'>
    <div className='w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10'>
      <div className='text-center flex flex-col justify-center xl:pt-40 xl:text-left h-full container mx-auto '>
        <motion.h1 variants={fadeIn('down', 0.3)} initial='hidden' animate='show' exit='hidden'  className='h1 text-[30px] sm:text-[40px] mt-[70px] sm:mt-0'>
          Hi,<br />I&apos;M Aashu <br />
          <span className="text-accent">Web Developer</span>
        </motion.h1>
        <motion.p variants={fadeIn('down', 0.3)} initial='hidden' animate='show' exit='hidden' className=' xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16 sm:text-lg text-[12px]'>
                I&apos;m a web developer driven by a passion for creating captivating online experiences. With expertise in HTML, CSS, JavaScript, and a focus on clean, efficient code, I bring digital visions to life. Explore my portfolio and let&apos;s collaborate on your next project.
        </motion.p>
        <div className='flex justify-center xl:hidden relative'>
          <Projectbtn/>
        </div>
        <motion.div variants={fadeIn('down', 0.4)} initial='hidden' animate='show' exit='hidden' className='hidden xl:flex'>
          <Projectbtn/>
        </motion.div>
      </div>
    </div >
    <div className='w-[1200px] h-full absolute right-0 bottom-0 '>
    <div className="bg-none xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge translate-z-0">
    </div>
    {/* {particles} */}
    <div>
      <ParticlesContainer/>
    </div>

    {/* Avatar image  */}
    <motion.div  variants={fadeIn('up', 0.5)} initial='hidden' animate='show' transition={{duration:1, ease:"easeInOut"}} exit='hidden' className='w-full h-full max-w-[737px] max-h-[678px] absolute  -bottom-32 lg:bottom-0 lg:right-[15%] top-[150px]'>
      <Avatar/>
    </motion.div>
    </div>
  </div>
  );
};

export default Home;
