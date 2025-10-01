import { Button } from "@/components/ui/button";

export default function FinalCTASection() {
  return (
    <section id="get-started-cta" aria-label="Get started call to action" className="relative isolate">
      <div className="relative min-h-[80vh] w-full overflow-hidden">
        <video
          className="absolute inset-0 h-full w-full object-cover opacity-70 motion-reduce:hidden"
          src="/videos/social_sam.mckay.edna_Network_of_nodes_connected_by_glowing_lines_ea_68369123-6a21-4b9e-8697-722a42766ab7_2.mp4"
          poster="/og-image.jpeg"
          autoPlay
          muted
          playsInline
          loop
          aria-hidden="true"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-background/10 via-background/60 to-white" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex min-h-[80vh] items-center justify-center">
            <div className="w-full text-center">
              <h2 className="mx-auto max-w-4xl text-4xl md:text-6xl font-bold tracking-tight text-white">
                Ship your product plan in hours, not weeks
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-base md:text-lg text-white/80">
                Generate a build-ready PRD with data model, flows, and tasks. Start free.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
                <Button
                  size="lg"
                  className="h-12 px-6 text-base md:text-lg bg-gradient-to-r from-[#f2b347] via-[#b84d8f] to-[#6654f5] text-white hover:opacity-90 transition-opacity"
                  onClick={() => document.getElementById('get-started')?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
                >
                  Start free
                </Button>
                <Button size="lg" variant="white" asChild className="h-12 px-6 text-base md:text-lg text-gray-900">
                  <a href="https://enterprisedna.co/pricing" target="_blank" rel="noopener noreferrer">See pricing</a>
                </Button>
              </div>

              <div className="mt-6 text-xs md:text-sm text-white/70">
                No credit card required • Cancel anytime
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


