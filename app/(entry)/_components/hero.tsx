import { Button } from '@/components/ui/button'
import React from 'react'

export default function Hero() {
  
  return (
    <section className='w-full h-screen relative flex flex-col items-center justify-center'>
      <section className='flex flex-col text-center w-3/4 relative gap-5 items-center justify-center'>
        <h2 className='text-5xl font-black'>HostelHub is the Complete Platform for Modern Hostel Living and Property Management</h2>
        <p className=''>Whether you`re a tenant searching for the right place to stay or a landlord managing rooms, payments, and announcements, HostelHub brings everything together in one seamless experience.</p>
        <Button variant={'default'} className='py-5 px-10 font-semibold'>Get Started with HostelHub</Button>
      </section>
    </section>
  )
}
