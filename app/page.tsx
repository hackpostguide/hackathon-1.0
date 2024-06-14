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
      <section className="min-h-[80vh] py-5 bg-neutral-950 flex-col items-center text-background">
        <Nav />
        <div className="mx-auto p-10 max-w-5xl">
          <h2 className="text-2xl sm:text-3xl text-muted-foreground font-normal">
            Spice up your summer with the very first 
          </h2>
          <div className="mt-4 mb-6 flex flex-col sm:flex-row justify-center">
            <h1 className="text-highlight text-5xl sm:text-7xl font-black">
              Hackpost Guide&nbsp;
            </h1>
            <h1 className="text-7xl font-black">Hackathon</h1>
          </div>
          <p className="text-lg sm:text-xl mb-10">
            A virtual hackathon organized by Hackpost Guide. Join us for 2 weeks of hacking, learning, and fun!
          </p>

          <RegisterButtons />
        </div>
      </section>

      {/* Prizes */}
      <section className="px-10">
        <div className="py-10 max-w-5xl mx-auto">
          <h1>Prizes and Schedule</h1>
          <p>The event will be held from <b>8/25 to 9/7</b>. Prizes will be announced soon. Make sure to Join our discord server for the latest announcements.</p>
        </div>
      </section>

      {/* Schedule */}
      {/* <section className="px-10">
        <div className="py-10 max-w-5xl mx-auto">
          <h1>Schedule</h1>
          <p>Coming soon!</p>
        </div>
      </section> */}

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
      <section className="px-10">
        <h1 className="pt-10">Frequently Asked</h1>
        <div className="max-w-5xl mx-auto">
          <FAQ />
        </div>
        
      </section>

      {/* Sponsors */}
      {/* <section className="px-10">
        <div className="py-10 max-w-5xl mx-auto">
          <h2>Sponsors</h2>
        </div>
      </section> */}

      <Footer />
    </main>
  );
}
