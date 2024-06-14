import { FAQ } from "@/components/FAQ";
import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import { RegisterButtons } from "@/components/RegisterButtons";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="text-center">
      {/* Hero Section */}
      <section className="min-h-[85vh] py-5 bg-neutral-950 flex flex-col items-center text-background text-shadow relative">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://hackathon.hackpost.guide/hero-image.jpg"
            alt="Hero Background Image"
            fill
            quality={100}
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 z-10 bg-black/60"></div>
        <Nav />
        <div className="relative mx-auto p-10 max-w-5xl z-20">
          <h2 className="text-2xl sm:text-3xl font-normal">
            Spice up this summer with our very first
          </h2>
          <div className="mt-4 mb-6 flex flex-col sm:flex-row justify-center">
            <h1 className="text-highlight text-5xl sm:text-7xl font-black">
              Hackpost Guide&nbsp;
            </h1>
            <h1 className="text-7xl font-black">Hackathon</h1>
          </div>
          <p className="text-lg sm:text-xl mb-10 text-background">
            A virtual hackathon organized by Hackpost Guide. Join us for 2 weeks
            of hacking, learning, and fun!
          </p>
          <RegisterButtons />
        </div>
      </section>

      {/* Prizes */}
      <section className="px-10">
        <div className="py-10 max-w-5xl mx-auto">
          <h1>Prizes and Schedule</h1>
          <p>The event will be held from <b>8/25 to 9/7</b>. Prizes will be announced soon. Make sure to join our Discord server for the latest announcements.</p>
        </div>
      </section>

      {/* How to register */}
      <section className="flex items-center justify-center p-5">
        <Card className="max-w-5xl w-full bg-slate-600 text-background py-20">
          <CardTitle className="text-4xl font-bold mb-4">
            How to register
          </CardTitle>
          <CardContent>
            Click the button below to register on Devpost. Next, join our Discord server to find teammates, collaborate, and receive announcements!
          </CardContent>
          <RegisterButtons />
        </Card>
      </section>

      {/* FAQ */}
      <section className="p-10">
        <h1 className="">Frequently Asked</h1>
        <div className="max-w-5xl mx-auto">
          <FAQ />
        </div>
      </section>

      <Footer />
    </main>
  );
}
