import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="">
      <section className="min-h-[80vh] bg-neutral-950 flex items-center text-background">
        <div className="mx-auto p-10 text-center max-w-5xl">
          <p>
            Spice up this summer with the very first 
          </p>
          <h1>
            Hackpost Guide Hackathon
          </h1>

          <Button asChild>
            <Link href="https://hg-hackathon.devpost.com" target="_blank" rel="noopener noreferrer">
              Register now
            </Link>
          </Button>

        </div>

      </section>

      {/* Stats - prizes, schedule */}
      <section>

      </section>

      {/* How to register */}
      <section>

      </section>

      {/* FAQ */}
      <section>
      
      </section>

      {/* Sponsors */}
      <section>

      </section>

      <p>Brought to you by Hackpost Guide</p>
    </main>
  );
}
