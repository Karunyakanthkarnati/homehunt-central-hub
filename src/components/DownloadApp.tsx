
import { Button } from "@/components/ui/button";
import { Apple, PlaySquare } from "lucide-react";

export const DownloadApp = () => {
  return (
    <section className="bg-homehunt-50 py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="lg:w-1/2 mb-10 lg:mb-0">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Take HomeHunt with you
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-lg">
              Download our mobile app to search properties on the go, get instant notifications, and connect with sellers directly.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="flex items-center justify-center gap-2 bg-gray-900 hover:bg-black text-white px-6 py-3 rounded-lg">
                <Apple className="h-6 w-6" />
                <div className="text-left">
                  <div className="text-xs">Download on the</div>
                  <div className="text-sm font-bold">App Store</div>
                </div>
              </Button>
              
              <Button className="flex items-center justify-center gap-2 bg-gray-900 hover:bg-black text-white px-6 py-3 rounded-lg">
                <PlaySquare className="h-6 w-6" />
                <div className="text-left">
                  <div className="text-xs">GET IT ON</div>
                  <div className="text-sm font-bold">Google Play</div>
                </div>
              </Button>
            </div>
            
            <div className="mt-8 text-sm text-gray-500">
              <p>Available for iOS and Android devices</p>
            </div>
          </div>
          
          <div className="lg:w-1/2 flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-64 h-64 bg-homehunt-200 rounded-full opacity-50 mix-blend-multiply filter blur-xl animate-blob"></div>
              <div className="absolute -bottom-8 -right-4 w-64 h-64 bg-blue-200 rounded-full opacity-50 mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
              
              <div className="relative shadow-2xl rounded-[3rem] p-4 bg-white">
                <img
                  src="https://images.unsplash.com/photo-1621974021651-b4c386e67bc4?q=80&w=2787&auto=format&fit=crop"
                  alt="HomeHunt mobile app"
                  className="rounded-2xl w-64 sm:w-72 h-auto shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
