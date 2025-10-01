export default function SocialProofSection() {
  const items = [
    {
      heading: 'From idea to plan',
      sub: 'clear scope, data model, workflows',
    },
    {
      heading: 'Minutes',
      sub: 'to first PRD draft',
    },
    {
      heading: 'Teams',
      sub: 'save 10–20 hours',
    },
  ];

  return (
    <section id="social-proof" className="py-14 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Minimal, number-led stripe distinct from the card grid above */}
        <div className="relative overflow-hidden rounded-3xl border bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60">
          <div className="absolute inset-0 opacity-60 [mask-image:linear-gradient(to_right,transparent,black,transparent)]">
            <div className="absolute inset-0 bg-gradient-to-r from-[#6654f5]/10 via-[#b84d8f]/10 to-[#f2b347]/10" />
          </div>

          <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-border">
            {items.map((item, idx) => (
              <div key={idx} className="p-6 md:p-8 flex items-start gap-4">
                <div aria-hidden className="select-none text-4xl md:text-5xl font-black tracking-tight text-primary/30 leading-none">{String(idx + 1).padStart(2, '0')}</div>
                <div>
                  <div className="text-xl md:text-2xl font-semibold">{item.heading}</div>
                  <div className="text-sm text-muted-foreground">{item.sub}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}


