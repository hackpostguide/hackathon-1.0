import Link from 'next/link'
import React from 'react'
import { Button } from './ui/button'

export const RegisterButtons = () => {
  return (
    <div className="flex flex-col gap-4 justify-center items-center">
        <div className="inline-flex">
            <Button variant="destructive" size="lg" asChild>
            <Link href="https://hg-hackathon.devpost.com" target="_blank" rel="noopener noreferrer">
                Register now
            </Link>
            </Button>
        </div>
        <div className="inline-flex">
            <Button variant="default" size="lg" asChild>
            <Link href="https://hackpost.guide/discord" target="_blank" rel="noopener noreferrer">
                Join our Discord
            </Link>
            </Button>
        </div>
    </div>
  )
}
