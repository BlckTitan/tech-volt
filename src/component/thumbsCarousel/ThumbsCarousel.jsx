'use client'
import React, { useState } from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
// import required modules
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';

export default function ThumbsCarousel() {

    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const [activeCarouselImage, setActiveCarouselImage] = useState('Nature 1');

    const data = [
        {id: 1, img: "https://swiperjs.com/demos/images/nature-1.jpg", title: "Nature 1"},
        {id: 2, img: "https://swiperjs.com/demos/images/nature-2.jpg", title: "Nature 2"},
        {id: 3, img: "https://swiperjs.com/demos/images/nature-3.jpg", title: "Nature 3"},
        {id: 4, img: "https://swiperjs.com/demos/images/nature-4.jpg", title: "Nature 4"},
    ]
    
  return (
    <div className='w-full xl:w-[600px] h-fit'>
      <Swiper
        style={{
          '--swiper-navigation-color': '#fff',
          '--swiper-pagination-color': '#fff',
        }}
        loop={true}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >
        {
            // slider images
            data.map((item, index) => (
                <SwiperSlide key={index}>
                    <img 
                        src={item.img} 
                        alt={item.title} 
                        className='w-full h-[500px] xl:h-[650px] object-cover'
                    />
                </SwiperSlide>
            ))
        }

      </Swiper>

      <Swiper
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper !py-4"
      >
         {
            // slider thumbnail images
            data.map((item, index) => (
                <SwiperSlide key={index} className=''>
                    <img src={item.img} alt={item.title} className='w-42 h-30 object-cover rounded-md' />
                </SwiperSlide>
            ))
        }
      </Swiper>
    </div>
  )
}
