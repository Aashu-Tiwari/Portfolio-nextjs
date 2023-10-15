// data
const workSlides = {
  slides: [
    {
      images: [
        {
          title: 'Animation',
          path: '/thumb1.jpg',
        },
        {
          title: 'Canvas',
          path: '/thumb2.jpg',
        },
        {
          title: 'ReactJs',
          path: '/thumb3.jpg',
        },
        {
          title: 'NextJs',
          path: '/thumb4.jpg',
        },
      ],
    },
    {
      images: [
        {
          title: 'Static Landing Pages',
          path: '/thumb4.jpg',
        },
        {
          title: 'MERN stack project',
          path: '/thumb1.jpg',
        },
        {
          title: 'Awwarded',
          path: '/thumb2.jpg',
        },
        {
          title: 'Payment Gateway',
          path: '/thumb3.jpg',
        },
      ],
    },
  ],
};

// icons
import {Swiper,SwiperSlide} from 'swiper/react'
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/pagination'
import Image from 'next/image';
import Link from 'next/link';


import {Pagination} from 'swiper'
// data

import {BsArrowRight} from 'react-icons/bs'


const WorkSlider = () => {
  return <Swiper
  spaceBetween={10}
  Pagination={{
    clickable:true
  }}
  modules={{Pagination}}
  className='h-[280px] sm:h-[480px]'
  >
    {
      workSlides.slides.map((slide,index)=>{
        return( 
        <SwiperSlide key={index}>
          <Link href='https://github.com/Aashu-Tiwari?tab=repositories'><div className='grid grid-cols-2 grid-rows-2 gap-4 cursor-pointer'>
            {slide.images.map((image,index)=>{
              return(
                <div className='relative rounded-lg overflow-hidden flex items-center justify-center group ' key={index}>
                <div className='w-[250px] xl:w-[350px] flex items-center justify-center relative overflow-hidden group xl:h-[200px] h-[130px]'>
                  <Image src={image.path} width={500} height={300} alt=''/>
                  <div className='absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-700'></div>
                  <div className='absolute bottom-0 translate-y-full group-hover:-translate-y-10 group-hover:xl:-translate-y-20 transition-all duration-300'>
                    <div className='flex items-center gap-x-2 text-[13px] tracking-[0.2rem] '>
                      <div className='delay-100'>{image.title}</div>
                      <div className='translate-y-[500%] group:hover:translate-y-0 transition-all duration-300 delay-150'>title part 2</div>
                      <div className='text-xl'><BsArrowRight/></div>
                    </div>
                  </div>
                </div>
                </div>
              )
            })}
          </div>
          </Link>
        </SwiperSlide>
        )
      })
    }

    Service Slider</Swiper>;
};

export default WorkSlider;

