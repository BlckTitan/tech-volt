import React from 'react'
import Navigation from '@/component/navigation/Navigation';
import Footer from '@/component/footer/Footer';
import { BreadcrumbSeparator } from '@/components/ui/breadcrumb'
import ThumbsCarousel from '../../component/thumbsCarousel/ThumbsCarousel';

export default function ProductDetails() { 

    const subLink = [
        { link: '/', icon: <BreadcrumbSeparator/>, linkName: 'Home' },
        { link: '/shop', icon: <BreadcrumbSeparator/>, linkName: 'Shop' },
        { link: '/productDetails', icon: <BreadcrumbSeparator/>, linkName: 'Product Details' }
    ] 

  return (
    <section className='w-full h-fit flex flex-col justify-between'>
        <Navigation subLink={subLink}/>

        {/* Product details header page */}
        <header className='w-full h-fit xl:h-30 flex flex-col xl:flex-row !p-2 xl:!p-0 justify-center items-center bg-background-gray'>
            <div className='w-full xl:w-9/12 h-fit flex flex-col xl:flex-row justify-between items-start '>

                <section className='w-full xl:w-1/2 h-full flex items-center'>
                    <p className='text-lg xl:text-2xl font-bold text-left'>7Kg Front Load Washing Machine, Inverter Direct Drive, Middle Black</p>
                </section>

                <section className='w-full xl:w-1/2 h-full flex flex-col xl:flex-row justify-start xl:justify-end items-center xl:items-center !mt-4 xl:mt-0'>
                    <div className='w-full xl:w-fit text-end'>
                        <p className='font-semibold text-xl'>₹26490.00</p>  
                        <p className='text-lg'> 
                            MRP (Inclusive of all taxes) 
                            <strike className='!mx-3'> ₹40990.00 </strike> 
                            <span className='text-green-600'>Save ₹14500.00</span>
                        </p>
                    </div>

                    <div className='w-full xl:w-fit flex justify-center xl:justify-center items-center xl:items-center'>
                        <button className='action-button bg-red-500 xl:!ml-2 '>Add to Cart</button>
                    </div>

                </section>
            </div>
        </header>
        
        <section className='w-full h-fit  !px-2 xl:!px-0 !py-2 xl:!py-6 xl:h-[calc(100vh-13rem) bg-white flex flex-col xl:flex-row justify-center items-center'>
        
            <div className='w-full xl:w-9/12 h-fit flex flex-col xl:flex-row justify-between items-start '>

            <main className='w-full h-full flex flex-col xl:flex-row xl:justify-between xl:items-start'>
                {/* product information section */}
                <section className='w-full xl:w-1/2 h-full flex flex-col justify-center items-center'>
                    <ThumbsCarousel/>
                </section>
                <section className='w-full xl:w-1/2 h-full flex '>
                2
                </section>
            </main>

            </div>

        </section>

        <Footer/>

    </section> 
  )
}
