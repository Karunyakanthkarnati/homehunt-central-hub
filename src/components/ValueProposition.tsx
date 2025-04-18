
import { Home, Search, Cpu, TrendingUp, BadgeCheck, UsersRound } from "lucide-react";

const features = [
  {
    title: "Wide Property Inventory",
    description: "Access thousands of listings across India for buying, selling & renting",
    icon: Home,
  },
  {
    title: "Direct Owner-Buyer Interaction",
    description: "Connect directly with buyers & sellers without brokerage fees",
    icon: UsersRound,
  },
  {
    title: "Advanced Search Tools",
    description: "Find your perfect property with our powerful search features",
    icon: Search,
  },
  {
    title: "Verified Listings",
    description: "All properties are verified to ensure authenticity and reliability",
    icon: BadgeCheck,
  },
  {
    title: "Market Insights",
    description: "Access trends and price analytics to make informed decisions",
    icon: TrendingUp,
  },
  {
    title: "AI-Powered Recommendations",
    description: "Get personalized property recommendations based on your preferences",
    icon: Cpu,
  },
];

export const ValueProposition = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">Why Choose HomeHunt?</h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            The smart way to find your next home with no brokerage fees
          </p>
        </div>

        <div className="mt-10">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.title} className="pt-6">
                <div className="flow-root bg-white rounded-lg shadow-md px-6 pb-8">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center p-3 bg-homehunt-600 rounded-md shadow-lg">
                        <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                      </span>
                    </div>
                    <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">
                      {feature.title}
                    </h3>
                    <p className="mt-5 text-base text-gray-500">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
