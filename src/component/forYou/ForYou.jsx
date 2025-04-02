'use client'
import React, { useState } from 'react'
import Image from 'next/image'

import './forYou.css'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle, } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

// image import
import AC from '../../../public/img/image-AC.webp'
import washingMachine from '../../../public/img/image-washing-machine.webp'
import refrigerator from '../../../public/img/refrigerator.webp'
import microwave from '../../../public/img/electronics-microwave.webp'
import { Button } from '@/components/ui/button'

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
    id: 3, title: '7Kg Front Load Washing Machine, Inverter Direct Drive, Middle Black', image: AC,
    description:'MRP (Incl. of all taxes)', image: washingMachine,
    price: '$17,800', rating: 4.5, discount: 46, discountPrice: '$85,990' 
  }
]

export default function ForYouComponent() {

  const [activeTab, setActiveTab] = useState('bestDeal')

  return (
    <section className='w-full h-fit !py-6 xl:h-screen bg-white flex flex-col justify-center items-center !px-6 xl:!px-0'>

      <header className='w-full xl:w-9/12 h-24 flex flex-col justify-start items-start'>
        <h1 className='component-title'>Picks for you</h1>
      </header>

      <div className='w-full xl:w-9/12 h-fit xl:h-[700px] flex flex-col xl:flex-row justify-between items-center '>

          <Tabs defaultValue="bestDeal" className="w-full">

            <TabsList>

              <TabsTrigger 
                value="bestDeal" 
                onClick={() => setActiveTab('bestDeal')}
                className={(activeTab === 'bestDeal') ? 'tabTrigger active' : 'tabTrigger'}
              >
                Best Deal
              </TabsTrigger>

              <TabsTrigger 
                value="mostPopular" 
                onClick={() => setActiveTab('mostPopular')}
                className={(activeTab === 'mostPopular') ? 'tabTrigger active' : 'tabTrigger'}
              >
                Most Popular
              </TabsTrigger>

              <TabsTrigger 
                value="newest" 
                onClick={() => setActiveTab('newest')}
                className={(activeTab === 'newest') ? 'tabTrigger active' : 'tabTrigger'}
              >
                Newest
              </TabsTrigger>

            </TabsList>

            {/* best deal tab */}
            <TabsContent value="bestDeal" className='tab-content'>
              {data.map((item, index) => (
                  <Card key={index} className='w-full xl:w-[450px] h-fit xl:h-[650px] !p-4 !mt-3 xl:mt-0 bg-white border border-gray-300'>    
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
            </TabsContent>

            {/* most popular tab */}
            <TabsContent value="mostPopular" className='tab-content '>
            {data.map((item, index) => (
                  <Card key={index} className='w-full xl:w-[450px] h-fit xl:h-[650px] !p-4 !mt-3 xl:mt-0 bg-white border border-gray-300'>    
                      <CardHeader className='w-full h-5/12'>
                          <Image src={item.image} alt={item.title} className='w-full h-full xl:object-cover object-center'/>
                      </CardHeader>

                      <CardContent className='w-full h-6/12 !m-0 !p-0'>

                          <CardTitle className='card-title w-full h-25 xl:h-40'>{item.title}</CardTitle>

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
            </TabsContent>

            {/* newest tab */}
            <TabsContent value="newest" className='tab-content '>
            {data.map((item, index) => (
                  <Card key={index} className='w-full xl:w-[450px] h-fit xl:h-[650px] !p-4 !mt-3 xl:mt-0 bg-white border border-gray-300'>    
                      <CardHeader className='w-full h-5/12'>
                          <Image src={item.image} alt={item.title} className='w-full h-full xl:object-cover object-center'/>
                      </CardHeader>

                      <CardContent className='w-full h-6/12 !m-0 !p-0'>

                          <CardTitle className='card-title w-full h-25 xl:h-40'>{item.title}</CardTitle>

                          <CardDescription className='card-description !mb-3 !text-lg'>
                            {item.description}
                            <span className='line-through'>{` ${item.discountPrice}`}</span>
                            <span className='text-black text-xl !font-medium'>{` ${item.discount}% Off`}</span>
                          </CardDescription>

                          <CardDescription className='text-3xl font-semibold'>{item.price}</CardDescription>

                      </CardContent>

                      <CardFooter className='w-full h-1/12 flex flex-col xl:flex-row items-center justify-center xl:justify-between xl:items-center !mb-4 xl:!mb-0'>
                      
                        <Button 
                          variant="outline" 
                          className='action-button bg-white !text-gray-800 border border-gray-300 hover:bg-gray-500  hover:!text-white !mb-2 xl:!mb-0'
                        >
                          Learn More
                        </Button>

                        <Button variant="outline" className='action-button text-white bg-red-400 hover:bg-red-500'>Buy Now</Button>
                      </CardFooter>

                  </Card>
              ))}
            </TabsContent>

          </Tabs>
         
      </div>
    </section>
  )
}
