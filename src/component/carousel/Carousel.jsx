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
import { MdArrowRightAlt } from 'react-icons/md';

export default function CarouselComponent() {
  const data = [
    { id: 1, 
      image: image1 , 
      title: 'Sony 59" AMOLED TV – Redefining Entertainment', 
      shortDescription: 'Experience the best of entertainment with the Sony 59" AMOLED TV.',
      description: 'Experience the best of entertainment with the Sony 59" AMOLED TV. With a 4K resolution, this TV offers a stunning visual experience. The 59" screen size ensures that you can enjoy your favorite movies and shows in the best quality. The TV also comes with a built-in sound system that delivers an immersive audio experience. Whether you are watching movies, playing games, or listening to music, the Sony 59" AMOLED TV is the perfect choice for you.'
    },
    {
      id: 2,
      image: image2,
      title:  'ThyNod Oven – Precision Cooking at Its Finest',
      shortDescription: 'Transform your culinary adventures with the ThyNod Oven — a perfect blend of innovation, performance, and style.',
      description: 'Transform your culinary adventures with the ThyNod Oven — a perfect blend of innovation, performance, and style. Designed for home chefs who seek versatility and precision, this oven delivers exceptional results with every dish.'
    },
    { id: 3, 
      image: image3 , 
      title: 'TechniVorm Coffee Maker – Perfect Brew, Every Time', 
      shortDescription: 'Start your day with a rich, flavorful cup brewed to perfection using the TechniVorm Coffee Maker.',
      description: 'Start your day with a rich, flavorful cup brewed to perfection using the TechniVorm Coffee Maker. Renowned for its precision and durability, this coffee maker is designed for true coffee enthusiasts who value quality in every sip.'
    },
    {
      id: 4,
      image: image4,
      title:  'HiSense Washing Machine – Smart Cleaning, Superior Caret',
      shortDescription: 'Keep your clothes fresh and spotless with the HiSense Washing Machine.',
      description: 'Keep your clothes fresh and spotless with the HiSense Washing Machine, a perfect combination of advanced technology and user-friendly features. Designed to handle daily laundry needs with efficiency and care, it ensures your garments look their best, wash after wash.'
    }
  ]
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
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          className='w-full h-full md:h-11/12 md:rounded-lg'
        >
          {
            data && data.map((item, index) => (
              <SwiperSlide className='' key={index}>
                <div className='w-full h-full flex !justify-center items-center'>
                  <Image 
                    src={item.image} 
                    alt='image1'
                    className='carousel-image'
                  />
                  <div className='w-8/12 md:w-4/12 h-fit bg-black absolute left-8 text-white !p-4'>
                    <h1 className='text-xl font-bold md:text-2xl font-stretch-ultra-expanded tracking-wide !mb-2'>{item.title}</h1>
                    <p className='text-sm'>{item.shortDescription}</p>
                    <a href="http://#" className='w-fit !mt-4 flex items-center text-sm text-white bg-red-400 !px-4 !py-2 rounded-md hover:bg-red-500'>
                      Buy Now
                      <span className='!ml-2 text-xl'>
                        <MdArrowRightAlt />
                      </span>
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            ))
          }
        </Swiper>
      </div>
    </section>
  )
}