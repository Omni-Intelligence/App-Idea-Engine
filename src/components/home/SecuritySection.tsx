import { Shield } from "lucide-react";

export default function SecuritySection() {
  return (
    <section id="security" className="py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-start gap-4">
          <Shield className="w-6 h-6 text-primary mt-1" />
          <div>
            <h3 className="text-2xl font-semibold">Security & privacy</h3>
            <ul className="mt-3 space-y-2 text-muted-foreground">
              <li>• Your data is private to your account</li>
              <li>• We don’t train on customer inputs</li>
              <li>• Export and delete data anytime</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}


