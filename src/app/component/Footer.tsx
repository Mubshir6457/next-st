import React from 'react'
import Link from 'next/link'
const Footer = () => {
  return (
    <div className='fixed bottom-0 left-0 flex justify-center p-3 gap-3 bg-green-100 w-full'>
         <Link href="/">privacy page</Link>
        <Link href="about" className='pl-3 pr-3'>about page</Link>
        <Link href="contact"className='pl-3 pr-3'>contact page</Link>
    </div>
  )
}

export default Footer