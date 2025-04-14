'use client'

import React from 'react';
import Navigation from '../../component/navigation/Navigation'
import Footer from '../../component/footer/Footer'
import { BreadcrumbSeparator } from '@/components/ui/breadcrumb'
import { useForm } from 'react-hook-form';

export default function Page() {

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    const subLink = [
        { link: '/', icon: <BreadcrumbSeparator/>, linkName: 'Home' },
        { link: '/login', icon: <BreadcrumbSeparator/>, linkName: 'Sign In' },
    ] 

  return (
   
        <section className='w-full h-fit flex flex-col justify-between'>
            <Navigation subLink={subLink}/>
            
            <section className='w-full h-fit !py-6 xl:h-[calc(100vh-13rem)] bg-white flex flex-col xl:flex-row justify-center items-center !px-6 xl:!px-0'>
            
                <div className='w-full xl:w-9/12 h-fit xl:h-full flex flex-col xl:flex-row justify-center items-center xl:justify-center xl:items-center'>
                    <div className='w-full xl:w-7/12 h-[600px] bg-[#f7f6f2] border border-[#cccccc] rounded-xl !p-2 xl:!p-8'>
                    
                        <header className='w-full h-fit flex justify-center items-center'>
                            <h1 className='form-title text-gray-500'>TechVolt</h1>
                        </header>

                        <div className='w-full h-fit flex flex-col justify-center items-start'>
                            <h1 className='text-2xl font-semibold !mb-8'>Sign In</h1>
                            <form onSubmit={handleSubmit(onSubmit)} className='signUp-form w-full h-full flex flex-col justify-center items-center'>

                                <label htmlFor="email" className='w-full text-left font-semibold !mb-2'>Email address</label>
                                {/* register your input into the hook by invoking the "register" function */}
                                <input id='email' placeholder="Email address" {...register("email", { required: true })} />
                                {/* errors will return when field validation fails  */}
                                {errors.email && <span>This field is required</span>}

                                <label htmlFor="password" className='w-full text-left font-semibold !mb-2'>Password</label>
                                {/* include validation with required or other standard HTML validation rules */}
                                <input id='password' {...register("password", { required: true })} placeholder='Password' />
                                {/* errors will return when field validation fails  */}
                                {errors.password && <span>This field is required</span>}

                                {/* forgot password link */}
                                <div className='w-full h-fit flex justify-end items-center !py-4'>
                                    <a href="#">Forgot Password?</a>
                                </div>

                                <button type="submit" className='w-full h-10 rounded-full text-white bg-red-500 hover:bg-red-900 text-xl'>
                                    Sign In
                                </button>

                                {/* signup link */}
                                <div className='w-full h-fit flex justify-center items-center !mt-4'>
                                    <p className='!mr-2'>Don&apos;t have an account?</p>
                                    <a href="/signup" className='text-red-400 hover:text-red-900 cursor-pointer'>Sign Up</a>
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