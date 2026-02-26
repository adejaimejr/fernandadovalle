import { lazy, Suspense } from "react";
import { Navigation } from "@/components/sections/Navigation";
import { Hero } from "@/components/sections/Hero";

// Lazy load below-the-fold components
const Presentation = lazy(() => import("@/components/sections/Presentation").then(m => ({ default: m.Presentation })));
const ThreeLayers = lazy(() => import("@/components/sections/ThreeLayers").then(m => ({ default: m.ThreeLayers })));
const Credentials = lazy(() => import("@/components/sections/Credentials").then(m => ({ default: m.Credentials })));
const FinalCTA = lazy(() => import("@/components/sections/FinalCTA").then(m => ({ default: m.FinalCTA })));
const Footer = lazy(() => import("@/components/sections/Footer").then(m => ({ default: m.Footer })));

export default function Home() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground selection:bg-secondary/30">
      <Navigation />
      
      <main>
        <Hero />
        <Suspense fallback={<div className="h-32" />}>
          <Presentation />
        </Suspense>
        <Suspense fallback={<div className="h-32" />}>
          <ThreeLayers />
        </Suspense>
        <Suspense fallback={<div className="h-32" />}>
          <Credentials />
        </Suspense>
        <Suspense fallback={<div className="h-32" />}>
          <FinalCTA />
        </Suspense>
      </main>

      <Suspense fallback={<div className="h-32" />}>
        <Footer />
      </Suspense>
    </div>
  );
}
