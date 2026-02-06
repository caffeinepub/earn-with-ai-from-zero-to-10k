import { CheckCircle2 } from 'lucide-react';

export default function WhyChooseGuide() {
  const benefits = [
    'Step-by-step AI earning methods for beginners',
    'No technical or coding skills required',
    'Real methods that work in India',
    'Easy to understand and actionable',
    'Instant PDF delivery via WhatsApp',
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
            Why Choose This Guide?
          </h2>

          <div className="space-y-4">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-6 bg-card rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 border border-border"
              >
                <CheckCircle2 className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                <p className="text-lg text-card-foreground leading-relaxed">
                  {benefit}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
