'use client'
import React from 'react'
import './membership.css'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle, } from "@/components/ui/card"
// image import
import AC from '../../../public/img/image-AC.webp'
import washingMachine from '../../../public/img/image-washing-machine.webp'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
  
const data =[
    {id: 1, title: 'Fantastic deals await!', description:'Do not miss our promotions on home appliances, audio and video products', image: AC},
    {id: 2, title: 'Be an TechVolt member', description:'Enjoy all the membership benefits, from special discounts to exclusive services and offers', image: washingMachine},
    {id: 3, title: 'Gift registration', description:'Check out redemption procedures for promotional gifts', image: AC},
    {id: 4, title: 'Be an TechVolt member', description:'Enjoy all the membership benefits, from special discounts to exclusive services and offers', image: washingMachine},
]

export default function MembershipComponent() {

  return (
    <section className='w-full h-fit !py-6 !px-6 xl:!px-0 xl:h-screen bg-cyan-100 flex flex-col justify-center items-center'>

        <header className='w-full xl:w-9/12 h-24 flex flex-col justify-start items-start'>
            <h1 className='component-title'>Membership</h1>
        </header>

        <div className='w-full xl:w-9/12 xl:h-6/12 flex flex-col xl:flex-row justify-between items-center'>

            {data.map((item, index) => (
                <Card key={index} className='w-full xl:w-80 xl:h-[480px] !p-4 !mt-3 xl:mt-0 bg-white border border-gray-50'>    
                    <CardHeader className='w-full h-5/12'>
                        <Image src={item.image} alt={item.title} className='w-full h-full object-cover object-center'/>
                    </CardHeader>
                    <CardContent className='w-full h-5/12 '>
                        <CardTitle className='card-title'>{item.title}</CardTitle>
                        <CardDescription className='card-description w-full h-28 !text-lg'>{item.description}</CardDescription>
                    </CardContent>
                    <CardFooter className='w-full h-2/12 flex justify-center items-center'>
                        <Button variant="outline" className='action-button rounded-r-full text-white bg-red-400 hover:bg-red-500'>Buy Now</Button>
                    </CardFooter>
                </Card>
            ))}

        </div>
    </section>
  )
}
