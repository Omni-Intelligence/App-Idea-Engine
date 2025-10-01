import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

export default function PricingSection() {
  const tiers = [
    { name: 'Starter', price: 'Free', features: ['Generate outlines', 'Save 1 project', 'Email support'] },
    { name: 'Pro', price: '$', features: ['Unlimited outlines', 'Advanced docs', 'Export options'] },
    { name: 'Team', price: '$$', features: ['Multi-user', 'Shared templates', 'Approvals'] },
  ];

  return (
    <section id="pricing" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold">Simple pricing</h2>
          <p className="mt-3 text-muted-foreground">Start free. Upgrade when you need more.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {tiers.map((tier, idx) => (
            <Card key={idx}>
              <CardHeader>
                <CardTitle className="text-xl">{tier.name}</CardTitle>
                <CardDescription>{tier.price}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-center gap-2"><Check className="w-4 h-4 text-primary" /> <span>{f}</span></li>
                  ))}
                </ul>
                <div className="mt-6">
                  <Button asChild className="w-full">
                    <a href="https://enterprisedna.co/pricing" target="_blank" rel="noopener noreferrer">See plans</a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}


