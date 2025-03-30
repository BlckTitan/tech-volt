'use client'
import React, { useState } from 'react'

import './help.css'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle, } from "@/components/ui/card";
import { MdOutlineArrowRightAlt, MdOutlineAssignment, MdOutlineBuild, MdOutlineControlPoint, MdOutlineDashboard, MdOutlineMarkunread, MdOutlinePhone, MdOutlineQuestionAnswer, MdOutlineWhatsapp } from 'react-icons/md';
import { Button } from '@/components/ui/button';

// icon import

const data = [
  {
    id: 1, title: 'Product Registration', description: 'Registering your product will help you get faster support.', icon: <MdOutlineAssignment/>,
  },
  {
    id: 2, title: 'Product Support', description: 'Find manual, troubleshoot and warranty of your TechVolt product.', icon: <MdOutlineControlPoint/>,
  },
  {
    id: 3, title: 'Order Support', description: 'Track your order and check order FAQ.', icon: <MdOutlineDashboard/>,
  },
  {
    id: 4, title: 'Repair request', description: 'Request repair service conveniently online.', icon: <MdOutlineBuild/>,
  },
  {
    id: 5, title: 'Quick Help', description: 'Get instant help on shopping.', icon: <MdOutlineQuestionAnswer/>,
  },
  {
    id: 6, title: 'WhatsApp', description: 'Talk to our customer service via WhatsApp.', icon: <MdOutlineWhatsapp/>,
  },
  {
    id: 7, title: 'Email Us', description: 'Send an Email to TechVolt Customer Service', icon: <MdOutlineMarkunread/>,
  },
  {
    id: 8, title: 'Call Us', description: 'Speak directly with our support representatives.', icon: <MdOutlinePhone/>,
  }
]

export default function ExperienceComponent() {

  return (
    <section className='w-full h-fit !py-6 md:h-screen bg-white flex flex-col justify-center items-center'>

      <header className='w-9/12 h-fit md:h-24 flex flex-col justify-start items-start'>

        <div>
          <h1 className='component-title'>Need help?</h1>
          <div className='w-48 h-0.5 bg-gray-600'></div>
        </div>

        <p className='text-xl !mt-4'>
          We're here to provide all the help you need.
        </p>
      </header>

      <div className='w-9/12 h-fit md:h-[700px] flex flex-col md:flex-row justify-between md:justify-between items-center md:items-center '>

        {/* best deal tab */}
        <div className='tab-content !grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 !mt-8'>
          {data.map((item, index) => (
              <Card 
                key={index} 
                className={
                  `w-full md:w-[300px] h-fit md:h-[330px] !mt-3 md:mt-0  border border-gray-300 flex flex-col justify-between !px-4 !py-8`
                }
              >  
                <CardHeader  className='w-full h-fit flex items-center justify-between'>
                  
                  <CardTitle className='w-full h-full'>
                    <div className='w-10/12 h-fit'>
                      <h1 className='card-title !text-3xl'>{item.title}</h1>
                    </div>
                  </CardTitle>

                  <div className='w-2/12 h-full flex items-start'>
                    <span className='w-full text-4xl'>{item.icon}</span>
                  </div>
                  
                </CardHeader>

                <CardContent>
                  
                  <CardDescription>
                    <p className='card-description !text-xl'>{item.description}</p>
                  </CardDescription>

                </CardContent>

                <CardFooter className='w-full h-1/12 flex justify-between items-end !mt-4'>
                  <Button variant="outline" className='action-button text-white bg-red-400 hover:bg-red-500'>
                    Learn more
                    <span>
                      <MdOutlineArrowRightAlt/>
                    </span>
                  </Button>
                </CardFooter>
              </Card>
          ))}
        </div>         
      </div>
    </section>
  )
}
