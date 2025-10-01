import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

export default function TestimonialsSection() {
  const testimonials = [
    { quote: 'Cut a full week of discovery into an afternoon.', author: 'PM, Fintech startup' },
    { quote: 'The PRD was stakeholder-ready on day one.', author: 'Founder, Healthtech' },
    { quote: 'Gave engineering a clear runway with workflows and data models.', author: 'CTO, SaaS' },
  ];

  return (
    <section id="testimonials" className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold">What teams say</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <Card key={i}>
              <CardContent className="pt-6">
                <Star className="w-5 h-5 text-primary mb-3" />
                <p className="text-base">“{t.quote}”</p>
                <p className="text-sm text-muted-foreground mt-3">{t.author}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}


