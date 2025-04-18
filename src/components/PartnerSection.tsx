
import { cn } from "@/lib/utils";

const partners = [
  {
    name: "Bank Partner",
    logo: "https://upload.wikimedia.org/wikipedia/commons/c/cc/SBI-logo.svg", 
    category: "finance"
  },
  {
    name: "Insurance Partner",
    logo: "https://upload.wikimedia.org/wikipedia/commons/9/9c/HDFC_Logo.svg",
    category: "finance"
  },
  {
    name: "Developer Partner",
    logo: "https://upload.wikimedia.org/wikipedia/commons/3/31/DLF_Universal_logo.svg",
    category: "developer"
  },
  {
    name: "Real Estate Agency",
    logo: "https://upload.wikimedia.org/wikipedia/commons/a/a3/JLL_logo.svg",
    category: "agent"
  },
  {
    name: "Property Verification",
    logo: "https://upload.wikimedia.org/wikipedia/commons/5/5e/Tata_Consultancy_Services_Logo.svg",
    category: "services"
  },
];

export const PartnerSection = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900">Our Trusted Partners</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            We collaborate with leading financial institutions, developers and service providers to offer you the best experience.
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 lg:gap-16">
          {partners.map((partner) => (
            <div 
              key={partner.name} 
              className={cn(
                "flex items-center justify-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300",
                partner.category === "finance" ? "w-40 h-28" : "w-36 h-24"
              )}
            >
              <img 
                src={partner.logo} 
                alt={partner.name}
                className="max-h-16 max-w-full opacity-80 hover:opacity-100 transition-opacity"
              />
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-gray-500 text-sm">
            Want to partner with us? <a href="/partners" className="text-homehunt-600 hover:text-homehunt-700 underline">Learn more about our partnership program</a>
          </p>
        </div>
      </div>
    </section>
  );
};
