export default function FAQSection() {
  return (
    <section id="faq" className="py-16 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">FAQ</h2>
        <div className="space-y-6">
          <div>
            <div className="font-medium">What does the generator produce?</div>
            <div className="text-sm text-muted-foreground">App outline, PRD/spec, workflows, data model, and more.</div>
          </div>
          <div>
            <div className="font-medium">Can I export or share the docs?</div>
            <div className="text-sm text-muted-foreground">Yes, export options are available on paid tiers, and sharing is easy.</div>
          </div>
          <div>
            <div className="font-medium">Do I need to sign up?</div>
            <div className="text-sm text-muted-foreground">You can start free. Sign in to save and continue later.</div>
          </div>
        </div>
      </div>
    </section>
  );
}


