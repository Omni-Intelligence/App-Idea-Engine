import { Card, CardContent } from "@/components/ui/card";

export default function HowItWorksSection() {
  const steps = [
    {
      title: 'Prompt the engine',
      desc: 'Drop your vision. We auto-structure goals, users, and constraints.',
      img: '/images/sam.mckay.edna_Idea_engine_--sref_httpss.mj.runt25rJrbyTPg_--_b7cd47ad-b0ee-40f9-8c23-9a036fd319a1_0.png',
      cta: 'Start with a spark',
    },
    {
      title: 'Context supercharge',
      desc: 'Pick industry and function to tailor patterns, risks, and KPIs.',
      img: '/images/sam.mckay.edna_Network_of_nodes_connected_by_glowing_lines_ea_1fa62e10-cb69-40e5-bb59-618e8919caf8_2.png',
      cta: 'Make it relevant',
    },
    {
      title: 'Instant blueprint',
      desc: 'Generate PRDs, workflows, data models, and a first roadmap.',
      img: '/images/sam.mckay.edna_Flowchart-style_nodes_connected_by_glowing_arr_ed5ecdd6-a7df-4535-aedc-f1de8a8baf74_2.png',
      cta: 'See your plan',
    },
    {
      title: 'Refine and ship',
      desc: 'Iterate fast, align stakeholders, export and move to build.',
      img: '/images/sam.mckay.edna_Floating_geometric_panels_with_glowing_icons_f_cd9121b1-2415-449c-9fd6-510878bd750a_0.png',
      cta: 'Go to execution',
    },
  ];

  return (
    <section id="how-it-works" className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold">How it works</h2>
          <p className="mt-3 text-muted-foreground">Go from raw idea to an aligned, build-ready plan in minutes.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {steps.map((step, idx) => (
            <Card key={idx} className="overflow-hidden group">
              <div className="relative h-40 w-full overflow-hidden">
                <img
                  src={step.img}
                  alt={step.title}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/70 to-background/10" />
                <div className="absolute top-3 left-3 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-semibold shadow">{idx + 1}</div>
              </div>
              <CardContent className="pt-4">
                <div className="font-semibold text-base">{step.title}</div>
                <div className="text-sm text-muted-foreground mt-1">{step.desc}</div>
                <div className="mt-3 text-xs font-semibold text-primary">{step.cta} →</div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="rounded-lg border p-4 bg-card">
            <div className="font-semibold">Cut weeks of planning</div>
            <div className="text-sm text-muted-foreground">Spin up the artifacts teams need without endless meetings.</div>
          </div>
          <div className="rounded-lg border p-4 bg-card">
            <div className="font-semibold">De-risk before build</div>
            <div className="text-sm text-muted-foreground">Surface risks, scope edges, and assumptions early.</div>
          </div>
          <div className="rounded-lg border p-4 bg-card">
            <div className="font-semibold">Align everyone fast</div>
            <div className="text-sm text-muted-foreground">Give product, design, and engineering one clear source of truth.</div>
          </div>
        </div>
      </div>
    </section>
  );
}


