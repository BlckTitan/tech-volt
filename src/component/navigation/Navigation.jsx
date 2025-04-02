'use client'
import React from 'react'
import './navigation.css'
import {NavigationMenu, NavigationMenuItem,  NavigationMenuList } from "@/components/ui/navigation-menu"
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator, } from "@/components/ui/breadcrumb"  
import { useSidebar } from '@/components/ui/sidebar'
import { MdMenu, MdOutlineLocalMall, MdOutlineSearch, MdPermIdentity } from 'react-icons/md'
  

export default function NavigationComponent() {

    const { toggleSidebar } = useSidebar()

  return (
    <header className='w-full h-20 md:h-52 !px-4 xl:!px-0 bg-white flex flex-col justify-center items-center'>
        <div className='w-full xl:w-9/12 h-8/12 border-b xl:border-0 border-gray-200'>
            <nav className='w-full h-full flex items-center justify-between'>

                <div className='w-full xl:w-fit flex justify-between items-center'>
                    <a href='#' className='site-title text-red-400'>TechVolt</a>
                    
                    {/* the toggle button*/}
                    <button onClick={toggleSidebar} className='inline-block xl:hidden text-2xl border border-gray-200 p-3 rounded-md cursor-pointer'>
                        <MdMenu />
                    </button>
                </div>

                <NavigationMenu className='hidden xl:flex'>
                    <NavigationMenuList className='nav-link-container'>

                        <NavigationMenuItem className='nav-link'>
                            <a href='#' className='text-black'>Home</a>
                        </NavigationMenuItem>
                        <NavigationMenuItem className='nav-link'>
                            <a href='#' className='text-black'>Shop</a>
                        </NavigationMenuItem>
                        <NavigationMenuItem className='nav-link'>
                            <a href='#' className='text-black'>Accessories</a>
                        </NavigationMenuItem>
                        <NavigationMenuItem className='nav-link'>
                            <a href='#' className='text-black'>About Us</a>
                        </NavigationMenuItem>
                        <NavigationMenuItem className='nav-link'>
                            <a href='#' className='text-black'>Contact Us</a>
                        </NavigationMenuItem>

                    </NavigationMenuList>
                </NavigationMenu>

                <div className='hidden nav-subLink-container xl:flex justify-between text-2xl'>
                    <a href='#'>
                        <MdOutlineSearch />
                    </a>
                    <a href='#'>
                        <MdOutlineLocalMall />
                    </a>
                    <a href='#'>
                        <MdPermIdentity />
                    </a>
                </div>
            </nav>
        </div>
        
        <div className='w-full h-4/12 border-t border-b border-gray-200 xl:flex justify-center hidden'>
            <nav className='w-full xl:w-9/12 h-full flex items-center'>
                
            <Breadcrumb>

                <BreadcrumbList className='text-xl flex items-center'>

                    <BreadcrumbItem>
                        <BreadcrumbLink href="/" className='text-gray-600'>Home</BreadcrumbLink>
                    </BreadcrumbItem>
                    
                    <BreadcrumbSeparator/>
                    
                    <BreadcrumbItem>
                        <BreadcrumbLink href="/components">Shop</BreadcrumbLink>
                    </BreadcrumbItem>
                
                </BreadcrumbList>

            </Breadcrumb>


            </nav>
        </div>
    </header>
  )
}
