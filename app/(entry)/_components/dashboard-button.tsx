import {ChevronRightIcon} from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

export default function DashboardButton() {
  
    return (
        <Link href={'/dashboard'} className=''>
            <Button variant={'outline'} className='text-sm px-6'>
                Dashboard
                <ChevronRightIcon />
            </Button>
        </Link>
    )
}
