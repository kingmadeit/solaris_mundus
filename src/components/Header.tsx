import React from 'react'
import { NavBar } from '@/components/index'


function Header() {
  return (
    <header className='w-full flex items-start justify-between'>
      <NavBar />
    </header>
  )
}

export default Header