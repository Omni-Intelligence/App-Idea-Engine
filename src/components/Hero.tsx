import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useCallback } from "react";

interface HeroProps {
  mediaType?: "video" | "image";
  src?: string;
}

export default function Hero({
  mediaType = "video",
  src = "/videos/EDNA Home Page Redesign (1).mp4",
}: HeroProps) {
  const scrollToStart = useCallback(() => {
    const el = document.getElementById("get-started");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  return (
    <section className="bg-white mx-4 md:mx-8 lg:mx-12 mt-2">
      <div className="relative h-[78vh] md:h-[84vh] w-full overflow-hidden rounded-[40px] md:rounded-[52px] shadow-xl bg-white">
      {/* Background media */}
      {mediaType === "video" ? (
        <video
          className="absolute inset-0 h-full w-full object-cover opacity-90"
          src={src}
          autoPlay
          muted
          loop
          playsInline
          aria-hidden="true"
        />
      ) : (
        <img src={src} className="absolute inset-0 h-full w-full object-cover opacity-90" alt="Hero background" />
      )}

      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-6xl flex-col items-center justify-center px-6 sm:px-8 text-center text-white">
        <h1 className="mb-6 text-5xl font-bold leading-tight sm:text-6xl md:text-7xl lg:text-8xl">
          <span className="block bg-gradient-to-r from-[#f2b347] via-[#b84d8f] to-[#6654f5] bg-clip-text text-transparent">Generate the plan.</span>
          <span className="block bg-gradient-to-r from-[#6654f5] via-[#b84d8f] to-[#f2b347] bg-clip-text text-transparent">Ship the app.</span>
        </h1>
        <p className="mx-auto mb-8 max-w-2xl text-base opacity-90 sm:text-lg md:text-xl">
          Describe your idea. We generate outlines, specs, and workflows you can build on.
        </p>
        <div className="flex flex-col items-center gap-3 sm:flex-row">
          <Button onClick={scrollToStart} className="px-8 py-6 text-base sm:text-lg bg-gradient-to-r from-[#6654f5] to-[#ca5a8b] text-white border-0 hover:opacity-95">
            Get started
          </Button>
          <Button variant="outline" asChild className="bg-white/90 text-black hover:bg-white px-8 py-6 text-base sm:text-lg">
            <a href="https://enterprisedna.co/pricing" target="_blank" rel="noopener noreferrer">See plans</a>
          </Button>
        </div>
        <p className="mt-4 text-xs opacity-80">Start free • No credit card required</p>
      </div>
      </div>
    </section>
  );
}
