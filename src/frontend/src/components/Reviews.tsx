import { Card, CardContent } from '@/components/ui/card';
import { Star } from 'lucide-react';

export default function Reviews() {
  const reviews = [
    '⭐ "Simple guide, very easy to understand."',
    '⭐ "Perfect for beginners who want to start with AI."',
    '⭐ "Worth more than ₹199."',
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
            What People Are Saying
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {reviews.map((review, index) => (
              <Card
                key={index}
                className="border-2 border-primary/10 hover:border-primary/30 transition-all duration-300 hover:shadow-lg"
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-2 mb-3">
                    <Star className="h-5 w-5 text-accent fill-accent flex-shrink-0" />
                  </div>
                  <p className="text-base text-card-foreground leading-relaxed">
                    {review.substring(2)}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
