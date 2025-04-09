'use client'

import React from 'react';

import Navigation from '@/component/navigation/Navigation';
import Footer from '@/component/footer/Footer';

import { BreadcrumbSeparator } from '@/components/ui/breadcrumb'
import Image from 'next/image'

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle, } from "@/components/ui/card";

// image import
import AC from '../../../public/img/image-AC.webp'
import washingMachine from '../../../public/img/image-washing-machine.webp'
import refrigerator from '../../../public/img/refrigerator.webp'
import { Button } from '@/components/ui/button'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Checkbox } from '@/components/ui/checkbox';

const data = [
  {
    id: 1, title: '5 Star (1.5), Split AC, AI Convertible 6-in-1, Gold Fin+ & Black Protection, 2024 Model', 
    description:'MRP (Incl. of all taxes)', image: AC,
    price: '$17,800', rating: 4.5, discount: 46, discountPrice: '$85,990' 
  },
  {
    id: 2, title: '650L, Convertible Side-by-Side Refrigerator with Smart Inverter Compressor, Smart Diagnosis', 
    image: refrigerator, description:'MRP (Incl. of all taxes)',
    price: '$17,800', rating: 4.5, discount: 46, discountPrice: '$85,990' 
  },
  {
    id: 3, title: '7Kg Front Load Washing Machine, Inverter Direct Drive, Middle Black',
    description:'MRP (Incl. of all taxes)', image: washingMachine,
    price: '$17,800', rating: 4.5, discount: 46, discountPrice: '$85,990' 
  }
]

const filter = [
  {
    id: 1, title: 'Brands', 
    category: [
      {id: 1, name: 'LG'},
      {id: 2, name: 'Samsung'},
      {id: 3, name: 'Whirlpool'},
      {id: 4, name: 'Voltas'},
      {id: 5, name: 'Blue Star'},
      {id: 6, name: 'Hitachi'},
      {id: 7, name: 'Carrier'},
      {id: 8, name: 'Panasonic'},
    ]
  },
  {
    id: 2, title: 'Price range', 
    category: [
      {id: 1, price: 100000},
      {id: 2, price: 200000},
      {id: 3, price: 300000},
      {id: 4, price: 400000},
      {id: 5, price: 500000},
      {id: 6, price: 600000},
      {id: 7, price: 700000,},
      {id: 8, price: 800000,},
    ]
  },
  {
    id: 3, title: 'Condition', 
    category: [
      {id: 1, condition: 'New'},
      {id: 2, condition: 'Used'},
    ]
  },
  {
    id: 4, title: 'Rating', 
    category: [
      {id: 1, rating: '1 Star'},
      {id: 2, rating: '2 Star'},
      {id: 3, rating: '3 Star'},
      {id: 4, rating: '4 Star'},
      {id: 5, rating: '5 Star'},
    ]
  },
]

export default function Shop() {

    const subLink = [
        { link: '/', icon: <BreadcrumbSeparator/>, linkName: 'Home' },
        { link: '/shop', icon: <BreadcrumbSeparator/>, linkName: 'Shop' },
    ] 

  return (
    <section className='w-full h-fit flex flex-col justify-between'>
        <Navigation subLink={subLink}/>
        
        <section className='w-full h-fit !py-6 xl:h-screen bg-white flex flex-col xl:flex-row justify-center items-center !px-6 xl:!px-0'>
        
          <div className='w-full xl:w-9/12 h-fit flex flex-col xl:flex-row justify-between items-start '>

            {/* search section */}
            <div className='w-full xl:w-3/12 h-fit flex flex-col items-scart!mr-0 xl:!mr-4 '>

              {/* search section title */}
              <h1 className='text-xl font-semibold'>Filter</h1>

              {/* search options */}
              <Accordion type="single" collapsible className="w-full">

                {
                  // filter information
                  filter.map((item, index) => (
                    <AccordionItem key={index} value={`item-${index}`}>
                      <AccordionTrigger className='hover:text-decoration !py-2 xl:!py-4'>{item.title}</AccordionTrigger>
                      <AccordionContent className='!p-0 !m-0'>
                        <div className='w-full h-fit flex flex-col justify-start items-start'>
                          {
                            item.category.map((category, index) => (
                              <div key={index} className='w-full h-fit flex justify-start items-center !ml-2'>
                                <Checkbox id={category.name} />
                                <label
                                  htmlFor={category.name}
                                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 !ml-2 !my-2"
                                >
                                  {
                                    category.name || 
                                    category.price|| 
                                    category.condition || 
                                    category.rating}
                                </label>
                              </div>
                            ))
                          }
                        </div>
                      </AccordionContent>

                    </AccordionItem>
                  ))
                }
              </Accordion>
            </div>
      
            <div className='w-full xl:w-9/12 h-fit xl:h-[700px] flex flex-col xl:flex-row justify-between items-start'>
      
              {/* best deal tab */}
                {data.map((item, index) => (
                  <Card key={index} className='w-full xl:w-[340px] h-fit xl:h-[650px] !p-4 !mt-3 xl:!mt-0 bg-white border border-gray-300'>    
                    <CardHeader className='w-full h-5/12'>
                        <Image src={item.image} alt={item.title} className='w-full h-full xl:object-cover object-center'/>
                    </CardHeader>

                    <CardContent className='w-full h-6/12 !m-0 !p-0'>

                      <CardTitle className='card-title w-full h-25 xl:h-40 '>{item.title}</CardTitle>

                      <CardDescription className='card-description !mb-3 !text-lg'>
                        {item.description}
                        <span className='line-through'>{` ${item.discountPrice}`}</span>
                        <span className='text-black text-xl !font-medium'>{` ${item.discount}% Off`}</span>
                      </CardDescription>

                      <CardDescription className='text-3xl font-semibold'>{item.price}</CardDescription>

                    </CardContent>

                    <CardFooter className='w-full h-1/12 flex flex-col xl:flex-row justify-between items-center'>
                      <Button 
                        variant="outline" 
                        className='action-button bg-white !text-gray-800 border border-gray-300 hover:bg-gray-500  hover:!text-white !mb-2 xl:!mb-0'
                      >Learn More</Button>
                      <Button variant="outline" className='action-button text-white bg-red-400 hover:bg-red-500'>Buy Now</Button>
                    </CardFooter>

                  </Card>
                ))}

              </div>
            </div>
          </section>

        <Footer/>

    </section>
  )
}
