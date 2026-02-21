import React from 'react'
import Navigation from './_components/navigation'
import Hero from './_components/hero'

export default function page() {

    return (
        <section className='w-full relative min-h-screen'>
            <Navigation />
            <Hero />
        </section>
    )
}
