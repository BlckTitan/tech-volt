import React from 'react'
import Navigation from '@/component/navigation/Navigation'
import { BreadcrumbSeparator } from '@/components/ui/breadcrumb'

export default function Shop() {

    const subLink = [
        { link: '/', icon: <BreadcrumbSeparator/>, linkName: 'Home' },
        { link: '/shop', icon: <BreadcrumbSeparator/>, linkName: 'Shop' },
    ] 

  return (
    <>
        <Navigation subLink={subLink}/>
    </>
  )
}
