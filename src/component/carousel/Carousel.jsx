'use client'


import Image from 'next/image';
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y, Autoplay} from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './carousel.css';

// carousel images
import image1 from '../../../public/img/electronics-1-unsplash.webp'
import image2 from '../../../public/img/electronics-2-unsplash.webp' 
import image3 from '../../../public/img/electronics-3-unsplash.webp'
import image4 from '../../../public/img/electronics-4-unsplash.webp' 

export default function CarouselComponent() {
 
  return (
    <section className='carousel-container flex justify-center items-center !pt-4 md:!pt-0'>
      {/* added paddint top to test the carousel display */}
      <div className='w-11/12 md:w-9/12 bg-white'>
        <Swiper
          // install Swiper modules
          modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
          spaceBetween={50}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          autoplay={{ delay: 1000, disableOnInteraction: false }}
          className='w-full h-full md:h-11/12 '
        >
          <SwiperSlide>
            <div className='w-full h-full flex !justify-center items-center'>
              <Image 
                src={image1} 
                alt='image1'
                className='object-cover object-center'
              />
            </div>
          </SwiperSlide>

          <SwiperSlide className='text-center'>
            <div className='w-full h-full flex !justify-center items-center'>
              <Image 
                src={image2} 
                alt='image2' 
                className='object-cover object-center'
              />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className='w-full h-full flex !justify-center items-center'>
              <Image 
                src={image3} 
                alt='image3' 
              />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className='w-full h-full flex !justify-center items-center'>
              <Image 
                src={image4} 
                alt='image4' 
                className='object-cover object-center'
              />
            </div>
          </SwiperSlide>
          ...
        </Swiper>
      </div>
    </section>
  )
}