'use client'
import React from 'react'
import { CiLinkedin, CiInstagram } from "react-icons/ci";
import { RiTwitterXFill } from "react-icons/ri";
import './footer.css'

export default function FooterComponent() {

  return (
    <footer className='footer-component w-full h-fit md:h-[30vh] !py-6 bg-amber-100 border-t border-solid border-amber-200 flex flex-col justify-center items-center'>

      <section  className='w-full md:w-9/12'>
        
        <section className='w-full h-fit md:h-[22vh] flex flex-col md:flex-row items-center md:justify-between md:items-center !px-6 md:!px-4 !py-4 md:!py-4'>

          {/* site name, about and email */}
          <div className='w-full md:w-4/12'>
            <a href='#' className='site-title !text-gray-500 hover:!text-red-400'>TechVolt</a>
            <p className='!my-4 md:!my-0'>
              TechVolt: Unleashing Innovation, Redefining Convenience &#45; Your Ultimate Destination for Seamless Tech Exploration and Empowerment.
            </p>
            
            <p>
              TechVolt@Gmail.com
            </p>
          </div>

          {/* sitemap */}
          <div className='w-full md:w-fit flex flex-col !items-start'>
            <h1>Sitemap</h1>
            <a href="#">Product</a>
            <a href="#">Services</a>
            <a href="#">Article</a>
            <a href="#">About Us</a>
          </div>

          {/* Information */}
          <div className='w-full md:w-fit flex flex-col !items-start'>
            <h1>Information</h1>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms & Conditions</a>
            <a href="#">Contact</a>
            <a href="#">FAQs</a>
          </div>

          {/* socials */}
          <div className='w-full md:w-fit flex !flex-col !justify-start !items-start'>

            <h1>Connect with us</h1>

            <div className='w-6/12 md:w-full footer-socials flex justify-between items-center !mt-4'>
              <a href="#"><CiInstagram /></a>
              <a href="#"><RiTwitterXFill /></a>
              <a href="#"><CiLinkedin /></a>
            </div>
          </div>
        </section>

        <section className='w-full h-[8vh] border-t border-solid border-amber-200 flex items-center justify-center !px-6 md:!px-0'>
          <p className='text-xl'>&copy; Copyright 2024 TechVolt. All rights reserved</p>
        </section>

      </section>

    </footer>
  )
}
