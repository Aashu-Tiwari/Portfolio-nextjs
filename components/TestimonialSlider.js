// testimonial data
export const testimonialData = [
  {
    image: '/t-avt-1.png',
    name: 'Anne Smith',
    position: 'Customer',
    message:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum expedita odit beatae, cupiditate saepe quam officia aut placeat quas neque!',
  },
  {
    image: '/t-avt-2.png',
    name: 'Jane Doe',
    position: 'Customer',
    message:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum expedita odit beatae, cupiditate saepe quam officia aut placeat quas neque!',
  },
  {
    image: '/t-avt-3.png',
    name: 'Jhon Doe',
    position: 'Customer',
    message:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum expedita odit beatae, cupiditate saepe quam officia aut placeat quas neque!',
  },
];

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


const testimonialSlider = () => {
  return <Swiper
  spaceBetween={10}
  Pagination={{
    clickable:true
  }}
  modules={{Pagination}}
  className='h-[280px] sm:h-[480px]'
  >
    {
      testimonialSlider.map((person,index)=>{
        return( 
        <SwiperSlide key={index}>

        </SwiperSlide>
        )
      })
    }

    </Swiper>;
};

export default testimonialSlider;


