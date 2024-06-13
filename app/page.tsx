import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="">
      {/* Hero Section */}
      <section className="min-h-[80vh] bg-neutral-950 flex items-center text-background">
        <div className="mx-auto p-10 text-center max-w-3xl">
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
        </div>
      </section>

      {/* Prizes */}
      <section>
        <div className="py-10 max-w-5xl mx-auto">
          <h2>Prizes</h2>
        </div>
      </section>

      {/* Schedule */}
      <section>
        <div className="py-10 max-w-5xl mx-auto">
          <h2>Schedule</h2>
        </div>
      </section>

      {/* How to register */}
      <section className="flex items-center text-background">
        <div className="py-10 max-w-5xl mx-auto text-center">
          <h2>How to register</h2>
        </div>
      </section>

      {/* FAQ */}
      <section>
        <div className="py-10 max-w-5xl mx-auto">
          <h2>FAQ</h2>
        </div>
      </section>

      {/* Sponsors */}
      <section>
        <div className="py-10 max-w-5xl mx-auto">
          <h2>Sponsors</h2>
        </div>
      </section>

      <p>Brought to you by Hackpost Guide</p>
    </main>
  );
}
