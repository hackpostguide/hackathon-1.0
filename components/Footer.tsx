import Link from 'next/link'
import React from 'react'

export default function Footer() {
return (
    <footer className="text-center h-10">
            <p className='text-muted-foreground text-lg'>
                Brought to you by&nbsp;
                <Link className="no-underline hover:underline" href="https://hackpost.guide" target="_blank" rel="noopener noreferrer">
                    Hackpost Guide.
                </Link>
            </p>
    </footer>
)
}
