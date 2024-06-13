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
      <Nav />
      {/* Hero Section */}
      <section className="min-h-[80vh] bg-neutral-950 flex items-center text-background">
        <div className="mx-auto p-10 max-w-3xl">
          <h3 className="text-xl sm:text-2xl text-muted-foreground font-normal">
            Spice up your summer with the very first 
          </h3>
          <div className="mt-4 mb-6 flex flex-col sm:flex-row justify-center">
            <h1 className="text-highlight">
              Hackpost Guide&nbsp;
            </h1>
            <h1 className="">Hackathon</h1>
          </div>
          <p className="text-lg sm:text-xl mb-10">
            Organized by Hackpost Guide. Join us for a weekend of hacking, learning, and fun!
          </p>

          <RegisterButtons />
        </div>
      </section>

      {/* Prizes */}
      <section className="px-10">
        <div className="py-10 max-w-5xl mx-auto">
          <h2>Prizes</h2>
        </div>
      </section>

      {/* Schedule */}
      <section className="px-10">
        <div className="py-10 max-w-5xl mx-auto">
          <h2>Schedule</h2>
        </div>
      </section>

      {/* How to register */}
      <section className="flex items-center justify-center p-5">
        <Card className="max-w-5xl w-full bg-slate-600 text-background py-20">
            <CardTitle>
              <h2 className="text-3xl font-bold mb-4">How to register</h2>
            </CardTitle>
            <CardContent>
              Click the button below to register on Devpost. Next, join our Discord server to find teammates, collaborate, and receive announcements!
            </CardContent>
            <RegisterButtons />
        </Card>
      </section>

      {/* FAQ */}
      <section className="px-10">
        <h2 className="pt-10">FAQ</h2>
        <div className="max-w-5xl mx-auto">
          <FAQ />
        </div>
        
      </section>

      {/* Sponsors */}
      <section className="px-10">
        <div className="py-10 max-w-5xl mx-auto">
          <h2>Sponsors</h2>
        </div>
      </section>

      <Footer />
    </main>
  );
}
