
import { Button } from "@/components/ui/button";
import { SearchBar } from "./SearchBar";

export const HeroSection = () => {
  return (
    <div className="relative">
      {/* Hero background */}
      <div className="absolute inset-0 bg-gradient-to-r from-homehunt-900 to-homehunt-800 h-[500px] sm:h-[550px]" />
      
      {/* Building silhouette overlay */}
      <div 
        className="absolute inset-0 h-[500px] sm:h-[550px] opacity-20 bg-repeat-x bg-bottom"
        style={{ 
          backgroundImage: "url('/lovable-uploads/0f56678a-9d39-46da-9f82-1052256676eb.png')", 
          backgroundSize: "contain" 
        }}
      />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="pt-16 sm:pt-20 pb-40 sm:pb-48">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl max-w-3xl mx-auto">
              <span className="block">Find Your Perfect Home</span> 
              <span className="block text-homehunt-200">Without the Middleman</span>
            </h1>
            <p className="mt-6 max-w-lg mx-auto text-xl text-homehunt-100 sm:max-w-3xl">
              HomeHunt connects you directly with property owners, saving you both time and money with zero brokerage fees.
            </p>
            <div className="mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center gap-4">
              <Button size="lg" className="w-full sm:w-auto bg-white text-homehunt-800 hover:bg-gray-100">
                Buy Properties
              </Button>
              <Button size="lg" variant="outline" className="mt-3 sm:mt-0 w-full sm:w-auto border-white text-white hover:bg-white/10">
                Rent Properties
              </Button>
            </div>
          </div>
        </div>
        <SearchBar />
      </div>
    </div>
  );
};
