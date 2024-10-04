import React from 'react'
import Link from 'next/link'
const Header = () => {
  return (
    <div className='flex justify-center gap-3 p-6 bg-red-200'>
        <Link href="/">Home page</Link>
        <Link href="about" className='pl-3 pr-3'>about page</Link>
        <Link href="contact"className='pl-3 pr-3'>contact page</Link>
    </div>
  )
}

export default Header