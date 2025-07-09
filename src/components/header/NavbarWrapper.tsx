'use client'
import { usePathname } from 'next/navigation'
import React from 'react'
import NavbarComponent from './Navbar';

export default function NavbarWrapper() {
    const pathname = usePathname();
    if(pathname === '/dashboard'){
        return null;
    }
  return (
    <NavbarComponent/>
  )
}
