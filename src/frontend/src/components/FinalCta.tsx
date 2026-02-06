import { Button } from '@/components/ui/button';
import { MessageCircle } from 'lucide-react';
import { WHATSAPP_LINK } from '@/lib/whatsapp';

export default function FinalCta() {
  const handleContactWhatsApp = () => {
    window.open(WHATSAPP_LINK, '_blank');
  };

  return (
    <section className="py-24 bg-gradient-to-b from-primary/10 to-accent/10">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">
            Start Your AI Journey Today
          </h2>
          
          <p className="text-2xl md:text-3xl font-semibold text-primary">
            Limited price: ₹199
          </p>

          <div className="pt-4">
            <Button
              size="lg"
              onClick={handleContactWhatsApp}
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold text-xl px-12 py-8 rounded-lg shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105"
            >
              <MessageCircle className="mr-3 h-6 w-6" />
              Contact on WhatsApp Now
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
