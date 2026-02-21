import {SignedIn, SignedOut, SignInButton, SignOutButton, SignUpButton, UserButton} from '@clerk/nextjs'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import React from 'react'
import DashboardButton from './dashboard-button'

export default function Navigation() {
  
    return (
        <header className='shadow shadow-zinc-800/30 p-2 pl-5 sticky top-3 mx-[8%] rounded-xl flex items-center justify-between'>
            <Link 
                href={'/'}
                className=''
            >
                {/* <Image
                    src={Logo}
                    alt='logo icon'
                    width={100}
                    height={100}
                    className='w-20 h-auto object-contain'
                /> */}
                <h3 className='text-2xl font-black'>Hostel<span className='text-sky-800'>Hub</span>.</h3>
            </Link>
            <nav className='flex flex-row items-center justify-end gap-4'>
                <SignedOut>
                    <SignInButton>
                        <Button variant={'ghost'} className='text-sm px-6'>Sign in</Button>
                    </SignInButton>
                    <SignUpButton>
                        <Button variant={'outline'} className='text-sm px-6'>Sign up</Button>
                    </SignUpButton>
                </SignedOut>
                <SignedIn>
                    <SignOutButton>
                        <Button variant={'ghost'} className='text-sm px-6'>Sign out</Button>
                    </SignOutButton>
                    <DashboardButton />
                </SignedIn>
            </nav>
        </header>
    )
}