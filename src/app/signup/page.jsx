import React from 'react';

export default function page() {
  return (
    
    <section className='w-full h-fit flex flex-col justify-between'>
        <Navigation subLink={subLink}/>
        
        <section className='w-full h-fit !py-6 xl:h-screen bg-white flex flex-col xl:flex-row justify-center items-center !px-6 xl:!px-0'>
        
            <div className='w-full xl:w-9/12 h-fit flex flex-col xl:flex-row justify-between items-start '>
                login page
            </div>
            
        </section>

        <Footer/>

    </section>
  )
}
