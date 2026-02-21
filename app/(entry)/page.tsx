import React from 'react'
import Navigation from './_components/navigation'
import Hero from './_components/hero'

export default function page() {

    return (
        <section className='w-full relative flex flex-col h-screen'>
            <Navigation />
            <Hero />
        </section>
    )
}
