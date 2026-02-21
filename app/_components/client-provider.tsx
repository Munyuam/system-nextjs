"use client";

import { ClerkProvider } from '@clerk/nextjs';
import { ConvexProvider, ConvexReactClient } from 'convex/react';
import React, { ReactNode } from 'react'

export default function ClientClientProvider({children} : {children: ReactNode}) {
    const convex = new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL!);

    return(
        <ClerkProvider>
            <ConvexProvider client={convex}>{children}</ConvexProvider>
        </ClerkProvider>
    )
}
