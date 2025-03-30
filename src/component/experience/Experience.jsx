'use client'
import React, { useState } from 'react'
import Image from 'next/image'

import './experience.css'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle, } from "@/components/ui/card";

// image import
import AC from '../../../public/img/AC2-unsplash.webp'
import washingMachine from '../../../public/img/washing-machine-unsplash.webp'
import smartTv from '../../../public/img/smart-tv-unsplash.webp'

const data = [
  {
    id: 1, title: 'Smart TV', image: smartTv,
  },
  {
    id: 2, title: 'Washing Machine', image: washingMachine
  },
  {
    id: 3, title: 'Air Conditioner', image: AC,
  }
]

export default function ExperienceComponent() {

  return (
    <section className='w-full h-fit !py-6 md:h-screen bg-white flex flex-col justify-center items-center'>

      <header className='w-9/12 h-fit md:h-24 flex flex-col justify-start items-start'>

        <div>
          <h1 className='component-title'>TechVolt Experience</h1>
          <div className='w-48 h-0.5 bg-gray-600'></div>
        </div>

        <p className='text-xl !mt-4'>
          Tips, guides and techy deep dives—straight from the source
        </p>
      </header>

      <div className='w-9/12 h-fit md:h-[700px] flex flex-col md:flex-row justify-between md:justify-between items-center md:items-center '>

        {/* best deal tab */}
        <div className='tab-content'>
          {data.map((item, index) => (
              <Card 
                key={index} 
                className={
                  `w-full md:w-[450px] h-fit md:h-[650px] !mt-3 md:mt-0  border border-gray-300 relative`
                }
              >    
                <Image 
                  src={item.image} 
                  width={100} 
                  height={100} 
                  alt=''
                  className='w-full h-[500px] md:h-[650px] object-cover object-center rounded-xl'
                />
                <CardFooter className='w-full h-full flex justify-between items-end !p-4 z-10 absolute'>
                  <h1 className='text-3xl font-semibold'>{item.title}</h1>
                </CardFooter>
              </Card>
          ))}
        </div>         
      </div>
    </section>
  )
}
