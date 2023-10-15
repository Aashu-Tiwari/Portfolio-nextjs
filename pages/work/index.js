import WorkSlider from '../../components/WorkSlider'
import Bulb from '../../components/Bulb'
import Circles from '../../components/Circles'
import { motion } from 'framer-motion';
import {fadeIn} from '../../variants'


const Work = () => {
  return <div className='h-full bg-primary/30 py-36 flex items-center'>
    <Circles/>
    <div className='container mx-auto'>
      <div className='flex flex-col xl:flex-row gap-x-8'>
        <div className='text-center flex xl:w-[30vw] flex-col lg:text-left mb-4 xl:mb-0 '>
          <motion.h2 variants={fadeIn('up', 0.3)} initial="hidden" animate="show" exit="hidden" className='h2 xl:mt-20 text-lg mt-60 xl:text-[3rem]'>My Work <span className='text-accent '>.</span></motion.h2>
          <motion.p variants={fadeIn('up', 0.4)} initial="hidden" animate="show" exit="hidden" className='mb-4 max-w-[400px] mx-auto lg:mx-0 text-xs xl:text-lg'>In my work, I am dedicated to delivering innovative, user-centric solutions that push the boundaries of technology. I specialize in crafting robust and scalable web applications,or websites providing both frontend and backend development services. </motion.p>
        </div>
        <motion.div variants={fadeIn('down', 0.6)} initial="hidden" animate="show" exit="hidden" className='w-full xl:max-w-[65%]'>
        <WorkSlider/>
        </motion.div>
      </div>

    </div>
    <Bulb/>

  </div>;
};

export default Work;
