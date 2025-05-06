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
        
        <section className='w-full h-fit !py-6 xl:h-[calc(100vh-13rem) bg-white flex flex-col xl:flex-row justify-center items-center !px-6 xl:!px-0'>
        
            <div className='w-full xl:w-9/12 h-fit flex flex-col xl:flex-row justify-between items-start '>

            <main className='w-full xl:w-9/12'>
            gjg
            </main>

            </div>

        </section>

        <Footer/>

    </section> 
  )
}
