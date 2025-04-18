
import { Button } from "@/components/ui/button";

export const CTASection = () => {
  return (
    <section className="bg-homehunt-800 py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
          <span className="block">Ready to find your dream home?</span>
          <span className="block text-homehunt-200">Or list your property?</span>
        </h2>
        <p className="mt-4 text-lg leading-6 text-homehunt-100 max-w-2xl mx-auto">
          Join thousands of users who buy, sell, and rent properties without paying any brokerage fees. 
          Our platform connects you directly with the right people.
        </p>
        <div className="mt-8 flex justify-center gap-4 flex-col sm:flex-row">
          <Button size="lg" className="bg-white text-homehunt-800 hover:bg-gray-100">
            Search Properties
          </Button>
          <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
            List Your Property
          </Button>
        </div>
        <p className="mt-6 text-sm text-homehunt-300">
          No hidden charges. No brokerage fees. Just a simple platform connecting real people.
        </p>
      </div>
    </section>
  );
};
