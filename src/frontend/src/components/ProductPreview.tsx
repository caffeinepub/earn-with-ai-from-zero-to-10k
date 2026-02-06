import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { MessageCircle } from 'lucide-react';
import { WHATSAPP_LINK } from '@/lib/whatsapp';

export default function ProductPreview() {
  const handleBuyNow = () => {
    window.open(WHATSAPP_LINK, '_blank');
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <Card className="max-w-4xl mx-auto overflow-hidden border-2 border-primary/20 shadow-xl">
          <CardContent className="p-0">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              {/* Ebook Image */}
              <div className="flex justify-center p-8 bg-muted/30">
                <img
                  src="/assets/generated/ebook-cover.dim_1600x2400.png"
                  alt="Earn with AI from Zero to 10k Ebook"
                  className="w-full max-w-xs rounded-lg shadow-lg"
                />
              </div>

              {/* Product Details */}
              <div className="p-8 space-y-6">
                <div>
                  <div className="text-5xl font-bold text-primary mb-2">
                    ₹199 Only
                  </div>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Learn simple, practical AI methods to start earning online from zero.
                  </p>
                </div>

                <Button
                  size="lg"
                  onClick={handleBuyNow}
                  className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold text-lg py-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Buy Now on WhatsApp
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
