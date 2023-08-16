import React from 'react'
import Menu from './Menu'
import Link from 'next/link'

export default function Navbar() {
  return (
    <div className='h-12 text-red-500 p-4 flex items-center justify-between border-b-2 bb-red-500
      '>
      {/* Logo */}
      <div>
        <Link href='/' >Massimo
        </Link>
      </div>
      {/* mobile menu */}
      <div>
        <Menu/>
      </div>
    </div>
  )
}
