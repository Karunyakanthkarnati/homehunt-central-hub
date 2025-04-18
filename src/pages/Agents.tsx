
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, MapPin, Star, Mail, Phone, ArrowRight } from "lucide-react";

interface AgentCardProps {
  id: string;
  name: string;
  photo: string;
  location: string;
  experience: number;
  rating: number;
  properties: number;
  specialization: string[];
  verified: boolean;
}

const agents: AgentCardProps[] = [
  {
    id: "agent-1",
    name: "Rajiv Sharma",
    photo: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=2049&auto=format&fit=crop",
    location: "Koramangala, Bangalore",
    experience: 8,
    rating: 4.8,
    properties: 42,
    specialization: ["Residential", "Luxury"],
    verified: true,
  },
  {
    id: "agent-2",
    name: "Priya Mehta",
    photo: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    location: "Indiranagar, Bangalore",
    experience: 5,
    rating: 4.6,
    properties: 28,
    specialization: ["Apartments", "Rental"],
    verified: true,
  },
  {
    id: "agent-3",
    name: "Suresh Kumar",
    photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    location: "HSR Layout, Bangalore",
    experience: 10,
    rating: 4.9,
    properties: 56,
    specialization: ["Commercial", "Investment"],
    verified: true,
  },
  {
    id: "agent-4",
    name: "Ananya Desai",
    photo: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    location: "Whitefield, Bangalore",
    experience: 7,
    rating: 4.7,
    properties: 35,
    specialization: ["Villas", "Premium"],
    verified: true,
  },
  {
    id: "agent-5",
    name: "Vikram Singh",
    photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    location: "Electronic City, Bangalore",
    experience: 6,
    rating: 4.5,
    properties: 31,
    specialization: ["Budget Homes", "First-time Buyers"],
    verified: true,
  },
  {
    id: "agent-6",
    name: "Meera Patel",
    photo: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    location: "JP Nagar, Bangalore",
    experience: 9,
    rating: 4.8,
    properties: 47,
    specialization: ["Luxury", "Penthouses"],
    verified: true,
  },
];

const AgentCard = ({ agent }: { agent: AgentCardProps }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <div className="p-6">
        <div className="flex items-start">
          <img 
            src={agent.photo} 
            alt={agent.name} 
            className="w-20 h-20 rounded-full object-cover mr-4"
          />
          <div className="flex-1">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-semibold">{agent.name}</h3>
              {agent.verified && (
                <Badge className="bg-green-100 text-green-800 border-green-200">
                  Verified
                </Badge>
              )}
            </div>
            <div className="flex items-center text-gray-500 mt-1">
              <MapPin className="h-4 w-4 mr-1" />
              <span className="text-sm">{agent.location}</span>
            </div>
            <div className="flex items-center mt-2">
              <div className="flex items-center">
                <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                <span className="ml-1 text-sm font-medium">{agent.rating}</span>
              </div>
              <span className="mx-2 text-gray-300">•</span>
              <span className="text-sm text-gray-600">{agent.experience} yrs exp.</span>
              <span className="mx-2 text-gray-300">•</span>
              <span className="text-sm text-gray-600">{agent.properties} properties</span>
            </div>
          </div>
        </div>
        
        <div className="mt-4">
          <div className="flex flex-wrap gap-2 mb-4">
            {agent.specialization.map((spec) => (
              <Badge key={spec} variant="outline" className="text-xs bg-homehunt-50 text-homehunt-700 border-homehunt-200">
                {spec}
              </Badge>
            ))}
          </div>
          
          <div className="grid grid-cols-2 gap-2 mt-4">
            <Button variant="outline" className="flex items-center justify-center">
              <Mail className="h-4 w-4 mr-2" />
              <span>Message</span>
            </Button>
            <Button className="bg-homehunt-600 hover:bg-homehunt-700 flex items-center justify-center">
              <Phone className="h-4 w-4 mr-2" />
              <span>Contact</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

const Agents = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-homehunt-900 to-homehunt-800 py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Connect with Trusted Real Estate Professionals
            </h1>
            <p className="text-homehunt-100 text-lg max-w-2xl mx-auto mb-8">
              Find the right agent to help you buy, sell, or rent properties across India
            </p>
            
            <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-2 sm:p-4">
              <div className="flex flex-col sm:flex-row gap-2">
                <div className="relative flex-grow">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <Input 
                    type="text" 
                    placeholder="Search by name, location or specialization" 
                    className="pl-10 rounded-md border-gray-300"
                  />
                </div>
                <select className="p-2 border rounded-md text-gray-700 sm:w-1/4">
                  <option value="">All Specializations</option>
                  <option value="residential">Residential</option>
                  <option value="commercial">Commercial</option>
                  <option value="luxury">Luxury</option>
                  <option value="rental">Rental</option>
                </select>
                <Button className="bg-homehunt-600 hover:bg-homehunt-700">
                  <Search className="h-4 w-4 mr-2" />
                  Search
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Agents List */}
        <div className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl font-bold">
                Featured Agents
              </h2>
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-600">Sort by:</span>
                <select className="text-sm border rounded p-1">
                  <option>Top Rated</option>
                  <option>Most Experience</option>
                  <option>Most Listings</option>
                </select>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {agents.map((agent) => (
                <AgentCard key={agent.id} agent={agent} />
              ))}
            </div>
            
            <div className="mt-10 flex justify-center">
              <Button variant="outline" className="mx-auto">
                Load More Agents
              </Button>
            </div>
          </div>
        </div>
        
        {/* Become an Agent */}
        <div className="bg-white py-16">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="bg-homehunt-50 rounded-2xl p-8 md:p-12">
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-2/3 mb-8 md:mb-0 md:pr-12">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                    Become a HomeHunt Certified Agent
                  </h2>
                  <p className="text-gray-600 mb-6">
                    Join our platform to connect with genuine buyers, get high-quality leads, and grow your real estate business. Enjoy premium tools and data-driven insights.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <div className="rounded-full bg-green-100 p-1 mr-3">
                        <svg className="h-4 w-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-gray-700">Access to verified buyer profiles</span>
                    </div>
                    <div className="flex items-center">
                      <div className="rounded-full bg-green-100 p-1 mr-3">
                        <svg className="h-4 w-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-gray-700">No commission splits or desk fees</span>
                    </div>
                    <div className="flex items-center">
                      <div className="rounded-full bg-green-100 p-1 mr-3">
                        <svg className="h-4 w-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-gray-700">Enhanced visibility on the platform</span>
                    </div>
                  </div>
                  <Button className="mt-8 bg-homehunt-600 hover:bg-homehunt-700">
                    Apply Now <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
                <div className="md:w-1/3">
                  <img 
                    src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1973&auto=format&fit=crop" 
                    alt="Real estate agent" 
                    className="rounded-lg shadow-md"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Agents;
