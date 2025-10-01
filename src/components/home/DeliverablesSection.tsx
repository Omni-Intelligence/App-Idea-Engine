import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PlayCircle, FileText, GitBranch, Database, CalendarCheck2, ListChecks, Flag } from "lucide-react";

export default function DeliverablesSection() {
  const items = [
    { title: 'App Outline', desc: 'Features, epics, and user stories for scoping.', icon: FileText },
    { title: 'PRD / Spec', desc: 'Goals, scope, acceptance criteria, constraints.', icon: ListChecks },
    { title: 'Workflows', desc: 'User journeys and system flows for clarity.', icon: GitBranch },
    { title: 'Data Model', desc: 'Entities, fields, and relationships.', icon: Database },
    { title: 'Roadmap Draft', desc: 'Phases and milestones to align teams.', icon: CalendarCheck2 },
    { title: 'Effort Snapshot', desc: 'Relative sizing to guide planning.', icon: Flag },
  ];

  return (
    <section id="deliverables" className="relative py-20">
      {/* Background gradient and glow accents */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-24 -left-20 h-64 w-64 rounded-full bg-gradient-to-tr from-[#6654f5]/30 via-[#b84d8f]/30 to-[#f2b347]/30 blur-3xl" />
        <div className="absolute -bottom-24 -right-20 h-72 w-72 rounded-full bg-gradient-to-tr from-[#f2b347]/30 via-[#b84d8f]/30 to-[#6654f5]/30 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
            <span className="bg-gradient-to-r from-[#6654f5] via-[#b84d8f] to-[#f2b347] bg-clip-text text-transparent">Deliverables</span> you get
          </h2>
          <p className="mt-3 text-muted-foreground">
            Concrete docs you can hand to stakeholders and engineers the same day.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Left: items list */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {items.map((item, idx) => {
              const Icon = item.icon as any;
              return (
                <div
                  key={idx}
                  className="group relative rounded-2xl p-[1px] bg-gradient-to-br from-[#6654f5]/60 via-[#b84d8f]/50 to-[#f2b347]/60 shadow-[0_10px_30px_rgba(0,0,0,0.08)]"
                >
                  <div className="rounded-2xl bg-white p-5 h-full">
                    <div className="flex items-start gap-3">
                      <div className="rounded-xl p-2 bg-gradient-to-br from-[#6654f5]/10 to-[#f2b347]/10 text-primary">
                        <Icon className="h-5 w-5 text-[#6b5ef6]" />
                      </div>
                      <div>
                        <h3 className="text-base font-semibold">{item.title}</h3>
                        <p className="mt-1 text-sm text-gray-600">{item.desc}</p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right: imagery collage */}
          <div className="relative">
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-xl ring-1 ring-black/5">
              <img
                src="/images/sam.mckay.edna_Floating_geometric_panels_with_glowing_icons_f_cd9121b1-2415-449c-9fd6-510878bd750a_0.png"
                alt="Panels preview"
                className="h-full w-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/0" />
            </div>
            <div className="absolute -bottom-6 -left-6 w-40 sm:w-48 md:w-56 rounded-2xl overflow-hidden shadow-lg ring-1 ring-black/5 rotate-[-4deg]">
              <img
                src="/images/sam.mckay.edna_Flowchart-style_nodes_connected_by_glowing_arr_ed5ecdd6-a7df-4535-aedc-f1de8a8baf74_2.png"
                alt="Flowchart concept"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="absolute -top-6 -right-4 w-36 sm:w-44 md:w-52 rounded-2xl overflow-hidden shadow-lg ring-1 ring-black/5 rotate-[3deg]">
              <img
                src="/images/sam.mckay.edna_Abstract_explosion_of_light_beams_turning_into_ae0bc824-7571-4682-8f82-3f6faa6c1865_0.png"
                alt="Energy burst"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>

        <div className="mt-12 flex justify-center">
          <Button
            className="gap-2 bg-gradient-to-r from-[#6654f5] via-[#b84d8f] to-[#f2b347] text-white border-0 hover:opacity-95"
            onClick={() => document.getElementById('get-started')?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
          >
            <PlayCircle className="w-4 h-4" /> See a sample by generating now
          </Button>
        </div>
      </div>
    </section>
  );
}


