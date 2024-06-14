import React from 'react'
import { Logo } from "@/components/Icons";
import Link from 'next/link';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur">
        <div className="flex max-w-5xl mx-auto h-16 items-center justify-between px-4 md:px-6">
          <Link className="flex items-center gap-1 text-lg" href="https://hackpost.guide" target="_blank" rel="noopener noreferrer">
            <Logo />
            <p className="ml-1 font-bold text-background">Hackpost</p>
            <p className="text-background">Guide</p>
          </Link>
        </div>
    </header>
  )
}
