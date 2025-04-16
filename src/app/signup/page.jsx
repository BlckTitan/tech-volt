'use client'

import React from 'react';
import { useForm } from 'react-hook-form';

import { BreadcrumbSeparator } from '@/components/ui/breadcrumb'
import { Checkbox } from "@/components/ui/checkbox"

import Navigation from '../../component/navigation/Navigation'
import Footer from '../../component/footer/Footer'

export default function Signup() {

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    const subLink = [
        { link: '/', icon: <BreadcrumbSeparator/>, linkName: 'Home' },
        { link: '/signup', icon: <BreadcrumbSeparator/>, linkName: 'Sign Up' },
    ] 

  return (
    
    <section className='w-full h-fit flex flex-col justify-between'>
        <Navigation subLink={subLink}/>
        
        <section className='w-full h-fit xl:h-[calc(100vh-13rem)] bg-white flex flex-col xl:flex-row justify-center items-center !px-6 xl:!px-0 !py-6'>
        
            <div className='w-full xl:w-9/12 h-fit xl:h-full flex flex-col xl:flex-row justify-center items-center xl:justify-center xl:items-center'>
                <div className='w-full xl:w-7/12 h-fit xl:h-[600px] bg-[#f7f6f2] border border-[#cccccc] rounded-xl !p-2 xl:!p-8'>
                
                    <header className='w-full h-fit flex justify-center items-center'>
                        <h1 className='form-title text-gray-500'>TechVolt</h1>
                    </header>

                    <div className='w-full h-fit flex flex-col justify-center items-start'>

                        <h1 className='text-2xl font-semibold !mb-8'>Sign Up</h1>

                        <form onSubmit={handleSubmit(onSubmit)} className='signUp-form w-full h-full flex flex-col justify-center items-center'>
                            
                            {/* form field for name */}
                            <div className='w-full h-fit flex flex-col xl:flex-row justify-between items-center !mb-2'>

                                <div className='w-full xl:w-1/2 h-fit flex flex-col justify-center items-start  xl:!mr-2'>
                                    <label htmlFor="firstname" className='w-full text-left font-semibold !mb-2'>First Name</label>
                                    {/* register your input into the hook by invoking the "register" function */}
                                    <input id='firstname' placeholder="First Name" {...register("text", { required: true })} className='w-full'/>
                                    {/* errors will return when field validation fails  */}
                                    {errors.firstname && <span>This field is required</span>}
                                </div>

                                <div className='w-full xl:w-1/2 h-fit flex flex-col justify-center items-start'>
                                    <label htmlFor="lastname" className='w-full text-left font-semibold !mb-2'>Last Name</label>
                                    {/* include validation with required or other standard HTML validation rules */}
                                    <input id='lastname' {...register("text", { required: true })} placeholder='Last Name' className='w-full'/>
                                    {/* errors will return when field validation fails  */}
                                    {errors.lastname && <span>This field is required</span>}
                                </div>

                            </div>   

                             {/* form field for email and phone */}
                             <div className='w-full h-fit flex flex-col xl:flex-row justify-between items-center !mb-2'>

                                <div className='w-full xl:w-1/2 h-fit flex flex-col justify-center items-start  xl:!mr-2'>
                                    <label htmlFor="email" className='w-full text-left font-semibold !mb-2'>Email address</label>
                                    {/* register your input into the hook by invoking the "register" function */}
                                    <input id='email' placeholder="Email address" {...register("email", { required: true })} />
                                    {/* errors will return when field validation fails  */}
                                    {errors.email && <span>This field is required</span>}
                                </div>

                                <div className='w-full xl:w-1/2 h-fit flex flex-col justify-center items-start'>
                                    <label htmlFor="phone" className='w-full text-left font-semibold !mb-2'>Phone</label>
                                    {/* include validation with required or other standard HTML validation rules */}
                                    <input id='phone' {...register("tel", { required: true })} placeholder='Phone' className='w-full'/>
                                    {/* errors will return when field validation fails  */}
                                    {errors.phone && <span>This field is required</span>}
                                </div>

                            </div>   

                            {/* form field for password */}
                            <label htmlFor="password" className='w-full text-left font-semibold !mb-2'>Password</label>
                            {/* include validation with required or other standard HTML validation rules */}
                            <input id='password' {...register("password", { required: true })} placeholder='Password' />
                            {/* errors will return when field validation fails  */}
                            {errors.password && <span>This field is required</span>}

                            {/* forgot password link */}
                            <div className='w-full h-fit flex justify-start items-center !py-4'>

                                <Checkbox id="terms" />

                                <label
                                    htmlFor="terms"
                                    className="text-base font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 !ml-2"
                                >
                                    By signing up I agree to the Terms & Conditions and Privacy Policy
                                </label>

                            </div>

                            <button type="submit" className='w-full h-10 rounded-full text-white bg-red-500 hover:bg-red-900 text-xl'>
                                Sign Up
                            </button>

                            {/* signup link */}
                            <div className='w-full h-fit flex justify-center items-center !mt-4'>
                                <p className='!mr-2'>Already have account?</p>
                                <a href="/login" className='text-red-400 hover:text-red-900 cursor-pointer'>Sign In</a>
                            </div>

                        </form>
                    </div>

                </div>
            </div>

        </section>

        <Footer/>

    </section>
  )
}
