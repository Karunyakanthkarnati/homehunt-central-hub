
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { FeaturedProperties } from "@/components/FeaturedProperties";
import { ValueProposition } from "@/components/ValueProposition";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { DownloadApp } from "@/components/DownloadApp";
import { CTASection } from "@/components/CTASection";
import { PartnerSection } from "@/components/PartnerSection";
import { Footer } from "@/components/Footer";
import { featuredProperties, rentProperties, newLaunchProperties } from "@/data/mockProperties";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        
        <FeaturedProperties 
          title="Featured Properties" 
          subtitle="Handpicked properties for you to explore"
          properties={featuredProperties} 
        />
        
        <ValueProposition />
        
        <FeaturedProperties 
          title="Properties for Rent" 
          subtitle="Find your perfect rental home"
          properties={rentProperties} 
        />
        
        <TestimonialsSection />
        
        <FeaturedProperties 
          title="New Launch Projects" 
          subtitle="Be the first to own these new properties"
          properties={newLaunchProperties} 
        />
        
        <DownloadApp />
        
        <PartnerSection />
        
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
