'use client'
import React, { useState } from 'react'
import Image from 'next/image'

import './highlights.css'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

// image import
import objet from '../../../public/img/objet-unsplash.webp'
import tv from '../../../public/img/tv.webp'
import speaker from '../../../public/img/party-speakers.webp'
import soundbars from '../../../public/img/sound-bar.webp'
import AC2 from '../../../public/img/AC2.webp'
import { Button } from '@/components/ui/button'

const objetData = [
  {
    id: 1, title: 'Complete your space', 
    description:'TechVolt Objet Collection', image: objet,
    
  },
  
]

const subCategory = [
  {
    id: 1, title: 'Complete your space', 
    description:'TechVolt Objet Collection', image: speaker,
  },
  {
    id: 2, title: 'Complete your space', 
    description:'TechVolt Objet Collection', image: AC2,
  },
  {
    id: 3, title: 'Complete your space', 
    description:'TechVolt Objet Collection', image: tv,
  }
]

export default function HighlightsComponent() {

  const [activeTab, setActiveTab] = useState('objetCollection')

  return (
    <section className='w-full h-fit md:h-[140vh] bg-white flex flex-col justify-center items-center'>

      <header className='w-9/12 h-16 flex flex-col justify-start items-start'>
        <h1 className='component-title'>Highlights</h1>
      </header>

      <div className='w-9/12 h-fit md:h-[900px] flex flex-col md:flex-row justify-between items-center '>

          <Tabs defaultValue="objetCollection" className="w-full">

            <TabsList>

              <TabsTrigger 
                value="objetCollection" 
                onClick={() => setActiveTab('objetCollection')}
                className={(activeTab === 'objetCollection') ? 'tabTrigger active' : 'tabTrigger'}
              >
                Objet Collection
              </TabsTrigger>

              <TabsTrigger 
                value="lifestyleScreens" 
                onClick={() => setActiveTab('lifestyleScreens')}
                className={(activeTab === 'lifestyleScreens') ? 'tabTrigger active' : 'tabTrigger'}
              >
                Lifestyle Screens
              </TabsTrigger>

              <TabsTrigger 
                value="monitors" 
                onClick={() => setActiveTab('monitors')}
                className={(activeTab === 'monitors') ? 'tabTrigger active' : 'tabTrigger'}
              >
                Monitors
              </TabsTrigger>

              <TabsTrigger 
                value="airCare" 
                onClick={() => setActiveTab('airCare')}
                className={(activeTab === 'airCare') ? 'tabTrigger active' : 'tabTrigger'}
              >
                Air Care
              </TabsTrigger>

              <TabsTrigger 
                value="OLEDEvo" 
                onClick={() => setActiveTab('OLEDEvo')}
                className={(activeTab === 'OLEDEvo') ? 'tabTrigger active' : 'tabTrigger'}
              >
                OLED Evo
              </TabsTrigger>

            </TabsList>

            {/* objet collection tab */}
            <TabsContent value="objetCollection" className='tab-content flex !flex-col'>

              <div className='w-full h-[400px] md:h-[650px] !my-3 md:rounded-2xl'>
                  
                {objetData.map((item, index) => (
                  <section key={index}>
                    <div className='highlight-screen w-full h-8/12'>

                    </div>

                    <div className='w-full h-4/12 flex flex-col items-center justify-between !px-2 !py-4 md:rounded-b-2xl bg-[#47443f]'>
                      <h1 className='card-title text-white md:!text-3xl !mb-0 font-semibold'>{item.title}</h1>
                      <p className='card-description text-white md:!text-lg !mb-2'>{item.description}</p>
                      <Button variant="outline" className='action-button text-white bg-red-400 hover:bg-red-500'>Buy Now</Button>
                    </div>
                  </section>                    
                ))}

              </div>
              
              
            </TabsContent>

            {/* lifestyle tab */}
            <TabsContent value="lifestyleScreens" className='tab-content'>
             <div className='w-full h-[400px] md:h-[650px] !my-3 md:rounded-2xl'>
                  
                  {objetData.map((item, index) => (
                    <section key={index}>
                      <div className='highlight-screen w-full h-8/12'>
  
                      </div>
  
                      <div className='w-full h-4/12 flex flex-col items-center justify-between !px-2 !py-4 md:rounded-b-2xl bg-[#47443f]'>
                        <h1 className='card-title text-white md:!text-3xl !mb-0 font-semibold'>{item.title}</h1>
                        <p className='card-description text-white md:!text-lg !mb-2'>{item.description}</p>
                        <Button variant="outline" className='action-button text-white bg-red-400 hover:bg-red-500'>Buy Now</Button>
                      </div>
                    </section>                    
                  ))}
  
                </div>
            </TabsContent>

            {/* monitors tab */}
            <TabsContent value="monitors" className='tab-content '>
              <div className='w-full h-[400px] md:h-[650px] !my-3 md:rounded-2xl'>
                  
                  {objetData.map((item, index) => (
                    <section key={index}>
                      <div className='highlight-screen w-full h-8/12'>
  
                      </div>
  
                      <div className='w-full h-4/12 flex flex-col items-center justify-between !px-2 !py-4 md:rounded-b-2xl bg-[#47443f]'>
                        <h1 className='card-title text-white md:!text-3xl !mb-0 font-semibold'>{item.title}</h1>
                        <p className='card-description text-white md:!text-lg !mb-2'>{item.description}</p>
                        <Button variant="outline" className='action-button text-white bg-red-400 hover:bg-red-500'>Buy Now</Button>
                      </div>
                    </section>                    
                  ))}
  
                </div>
            </TabsContent>

          </Tabs>
         
      </div>

      <div className='w-full h-fit flex flex-col md:flex-row items-center md:justify-center md:items-center !py-4 md:!py-0 bg-amber-100 md:!rounded-2xl'>

        <div className='w-9/12 h-fit md:h-[40vh] flex flex-col md:flex-row items-center md:justify-between md:items-center !py-4'>
          {subCategory.map((item, index) => (
            <div key={index} className='w-full md:w-[400px] h-[300px] !mb-4 md:!mb-0'>

              <div>
                  <Image src={item.image} alt={item.title} className='w-full h-[200px] md:object-cover object-center !rounded-t-2xl'/>
              </div>

              <div className='w-full !p-4 !mt-8'>

                <h1  className='card-title text-amber-950 md:!text-3xl text-center !mb-0 font-semibold'>{item.title}</h1>
                <p className='card-description text-amber-800 text-center md:!text-lg !mb-2'>{item.description}</p>

              </div>

            </div>
          ))}

        </div>
       
      </div>

    </section>
  )
}
