import React from 'react'
import Navigation from '@/component/navigation/Navigation';
import Footer from '@/component/footer/Footer';
import { BreadcrumbSeparator } from '@/components/ui/breadcrumb'

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
        <header className='w-full h-30 flex justify-center items-center bg-background-gray'>
            <div className='w-full xl:w-9/12 h-fit flex flex-col xl:flex-row justify-between items-start '>

                <section className='w-1/2 h-full'>
                    <p className='text-lg xl:text-2xl font-bold'>7Kg Front Load Washing Machine, Inverter Direct Drive, Middle Black</p>
                </section>

                <section className='w-1/2 h-full flex justify-end items-center'>
                    <div className='text-end'>
                        <p className='font-semibold text-xl'>₹26490.00</p>  
                        <p className='text-lg'> 
                            MRP (Inclusive of all taxes) 
                            <strike className='!mx-3'> ₹40990.00 </strike> 
                            <span className='text-green-600'>Save ₹14500.00</span>
                        </p>
                    </div>

                    <button className='action-button bg-red-500 !ml-2'>Add to Cart</button>

                </section>
            </div>
        </header>
        
        <section className='w-full h-fit !py-6 xl:h-[calc(100vh-13rem) bg-white flex flex-col xl:flex-row justify-center items-center !px-6 xl:!px-0'>
        
            <div className='w-full xl:w-9/12 h-fit flex flex-col xl:flex-row justify-between items-start '>

            <main className='w-full xl:w-9/12'>
            </main>

            </div>

        </section>

        <Footer/>

    </section> 
  )
}
