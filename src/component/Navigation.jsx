'use client'
import React from 'react'
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
  } from "@/components/ui/navigation-menu"
import { MdMenu, MdOutlineLocalMall, MdOutlineSearch, MdPermIdentit, MdPermIdentity } from 'react-icons/md'
import { useSidebar } from '@/components/ui/sidebar'
  

export default function NavigationComponent() {

    const { toggleSidebar } = useSidebar()

  return (
    <header className='w-full h-20 md:h-52 !px-4 !md:px-0 bg-white flex flex-col justify-center items-center'>
        <div className='w-full md:w-9/12 h-8/12'>
            <nav className='w-full h-full flex items-center justify-between'>

                <div className='w-full md:w-fit flex justify-between items-center'>
                    <a href='#' className='text-black'>TechVolt</a>
                    
                    {/* md:hidden for the toggle button*/}
                    <button onClick={toggleSidebar} className='inline-block  text-2xl border border-gray-200 p-3 rounded-md cursor-pointer'>
                        <MdMenu />
                    </button>
                </div>

                <NavigationMenu className='hidden md:flex'>
                    <NavigationMenuList>

                        <NavigationMenuItem>
                            <a href='#' className='text-black'>Home</a>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <a href='#' className='text-black'>Shop</a>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <a href='#' className='text-black'>Accessories</a>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <a href='#' className='text-black'>About Us</a>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <a href='#' className='text-black'>Contact Us</a>
                        </NavigationMenuItem>

                    </NavigationMenuList>
                </NavigationMenu>

                <div className='hidden md:flex justify-between text-2xl'>
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
        
        <div className='w-full h-4/12 border-t border-gray-200 md:flex justify-center hidden'>
            <nav className='w-full md:w-9/12 h-full flex items-center'>
                bottom nav
            </nav>
        </div>
    </header>
  )
}
