import { Button } from '@/components/ui/button';
import { MessageCircle } from 'lucide-react';
import { WHATSAPP_LINK } from '@/lib/whatsapp';

export default function LandingHero() {
  const handleContactWhatsApp = () => {
    window.open(WHATSAPP_LINK, '_blank');
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/generated/hero-tech-bg.dim_1920x1080.jpg"
          alt="AI Technology Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/70 to-background/95" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          {/* Text Content */}
          <div className="space-y-6 text-center lg:text-left order-2 lg:order-1">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Earn Your First ₹10,000 with the Help of AI
            </h1>
            <p className="text-xl md:text-2xl text-accent-foreground font-medium">
              Beginner-friendly • No Coding • Real Methods
            </p>
            <div className="pt-4">
              <Button
                size="lg"
                onClick={handleContactWhatsApp}
                className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold text-lg px-8 py-6 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Contact on WhatsApp to Buy
              </Button>
            </div>
          </div>

          {/* Ebook Cover Image */}
          <div className="flex justify-center order-1 lg:order-2">
            <div className="relative">
              <img
                src="/assets/generated/ebook-cover.dim_1600x2400.png"
                alt="Earn with AI from Zero to 10k Ebook Cover"
                className="w-full max-w-md lg:max-w-lg rounded-lg shadow-2xl transform hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-accent/20 rounded-lg blur-2xl -z-10" />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white/70 rounded-full" />
        </div>
      </div>
    </section>
  );
}
