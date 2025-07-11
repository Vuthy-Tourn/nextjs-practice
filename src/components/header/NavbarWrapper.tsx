'use client'
import { usePathname } from 'next/navigation'
import React from 'react'
import NavbarComponent from './Navbar';

export default function NavbarWrapper() {
    const pathname = usePathname();
    if(pathname === '/dashboard' || pathname === '/dataTable' || pathname === '/payment' || pathname === '/home'){
        return null;
    }
  return (
    <NavbarComponent/>
  )
}
