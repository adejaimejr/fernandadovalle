import { Navigation } from "@/components/sections/Navigation";
import { Hero } from "@/components/sections/Hero";
import { Presentation } from "@/components/sections/Presentation";
import { ThreeLayers } from "@/components/sections/ThreeLayers";
import { Credentials } from "@/components/sections/Credentials";
import { Newsletter } from "@/components/sections/Newsletter";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground selection:bg-secondary/30">
      <Navigation />
      
      <main>
        <Hero />
        <Presentation />
        <ThreeLayers />
        <Credentials />
        <Newsletter />
      </main>

      <Footer />
    </div>
  );
}
