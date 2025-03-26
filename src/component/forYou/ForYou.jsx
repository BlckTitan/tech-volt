import React from 'react'
import Image from 'next/image'

import './forYou.css'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle, } from "@/components/ui/card";

// image import
import AC from '../../../public/img/image-AC.webp'
import washingMachine from '../../../public/img/image-washing-machine.webp'
import { Button } from '@/components/ui/button'

const data = [
  {id: 1, title: 'Fantastic deals await!', description:'Do not miss our promotions on home appliances, audio and video products', image: AC},
  {id: 2, title: 'Be an TechVolt member', description:'Enjoy all the membership benefits, from special discounts to exclusive services and offers', image: washingMachine},
  {id: 3, title: 'Gift registration', description:'Check out redemption procedures for promotional gifts', image: AC},
  {id: 4, title: 'Be an TechVolt member', description:'Enjoy all the membership benefits, from special discounts to exclusive services and offers', image: washingMachine},
]

export default function ForYouComponent() {
  return (
    <section className='w-full h-fit !py-6 md:h-screen bg-cyan-100 flex flex-col justify-center items-center'>
      <header className='w-9/12 h-24 flex justify-start items-start'>
        <h1 className='component-title'>Picks For You</h1>
      </header>

      <div className='w-9/12 md:h-6/12 flex flex-col md:flex-row justify-between items-center'>

          {data.map((item, index) => (
              <Card key={index} className='w-80 h-96 !p-4 !mt-3 md:mt-0 bg-white border border-gray-50'>    
                  <CardHeader className='w-full h-5/12'>
                      <Image src={item.image} alt={item.title} className='w-full h-full object-cover object-center'/>
                  </CardHeader>
                  <CardContent className='w-full h-5/12 '>
                      <CardTitle className='card-title'>{item.title}</CardTitle>
                      <CardDescription className='card-description'>{item.description}</CardDescription>
                  </CardContent>
                  <CardFooter className='w-full h-2/12 flex items-center'>
                      <Button variant="outline" className='!p-2 text-white bg-red-400 hover:bg-red-500'>Buy Now</Button>
                  </CardFooter>
              </Card>
          ))}

      </div>
    </section>
  )
}
