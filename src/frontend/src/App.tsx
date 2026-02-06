import LandingHero from './components/LandingHero';
import ProductPreview from './components/ProductPreview';
import WhyChooseGuide from './components/WhyChooseGuide';
import Reviews from './components/Reviews';
import FinalCta from './components/FinalCta';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen">
      <LandingHero />
      <ProductPreview />
      <WhyChooseGuide />
      <Reviews />
      <FinalCta />
      <Footer />
    </div>
  );
}
