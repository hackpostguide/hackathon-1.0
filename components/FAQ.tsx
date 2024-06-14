import React from 'react'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion'
import Link from 'next/link'
import { Button } from './ui/button'

export const FAQ = () => {
return (
    <div>
        <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
                <AccordionTrigger>What is a Hackathon?</AccordionTrigger>
                <AccordionContent>
                    <p>A hackathon is a design sprint-like event in which computer programmers and others involved in software development, including graphic designers, interface designers, project managers, and others, often including domain experts, collaborate intensively on software projects.</p>
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
                <AccordionTrigger>What is Hackpost Guide?</AccordionTrigger>
                <AccordionContent>
                    <p>Hackpost Guide is a community of hackers, developers, and tech enthusiasts who are passionate about learning and building cool projects. We host hackathons, workshops, and other events to help you grow your skills and connect with others. For more information, check out </p>
                    <Button variant="secondary" asChild>
                        <Link href="https://hackpost.guide" target="_blank" rel="noopener noreferrer">Hackpost Guide</Link>
                    </Button>
                    
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
                <AccordionTrigger>Who can attend?</AccordionTrigger>
                <AccordionContent>
                    <p>Anyone can attend, and no coding experience is necessary! Non-STEM majors, first-time hackers, and all high school and middle school students are welcome and encouraged to join us!</p>
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
                <AccordionTrigger>Is it free to attend?</AccordionTrigger>
                <AccordionContent>
                    <p className="text-2xl">Yes!</p>
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
                <AccordionTrigger>What languages can I use?</AccordionTrigger>
                <AccordionContent>
                    <p>You can use any programming language or technology you like! We encourage you to try new things and learn something new during the hackathon.</p>
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-6">
                <AccordionTrigger>How can I sponsor?</AccordionTrigger>
                <AccordionContent>
                    <p>Check out our sponsorship prospectus!</p>
                    <Button variant="secondary" asChild>
                        <Link href="https://hackathon.hackpost.guide/assets/prospectus.pdf" target="_blank" rel="noopener noreferrer">Sponsorship Prospectus</Link>
                    </Button>
                </AccordionContent>
            </AccordionItem>
        </Accordion>
    </div>
)
}
