
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Home, 
  BarChart, 
  UserCheck, 
  DollarSign, 
  Check,
  Upload
} from "lucide-react";

const Sell = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-homehunt-900 to-homehunt-800 text-white py-16 md:py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">
              List Your Property on HomeHunt
            </h1>
            <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto text-homehunt-100">
              Connect directly with potential buyers and renters without paying any brokerage fees
            </p>
            <Button size="lg" className="bg-white text-homehunt-800 hover:bg-gray-100">
              List Your Property
            </Button>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Why Sell with HomeHunt?</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-homehunt-50 p-6 rounded-lg text-center">
                <div className="bg-homehunt-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <DollarSign className="h-8 w-8 text-homehunt-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Zero Brokerage</h3>
                <p className="text-gray-600">
                  List and sell your property without paying any commission to brokers
                </p>
              </div>
              
              <div className="bg-homehunt-50 p-6 rounded-lg text-center">
                <div className="bg-homehunt-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BarChart className="h-8 w-8 text-homehunt-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Market Insights</h3>
                <p className="text-gray-600">
                  Get real-time data on property prices in your area to price optimally
                </p>
              </div>
              
              <div className="bg-homehunt-50 p-6 rounded-lg text-center">
                <div className="bg-homehunt-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <UserCheck className="h-8 w-8 text-homehunt-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Verified Buyers</h3>
                <p className="text-gray-600">
                  Connect with genuine buyers who have been verified by our system
                </p>
              </div>
              
              <div className="bg-homehunt-50 p-6 rounded-lg text-center">
                <div className="bg-homehunt-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Home className="h-8 w-8 text-homehunt-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Wide Reach</h3>
                <p className="text-gray-600">
                  Reach thousands of potential buyers and renters across India
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* How It Works */}
        <div className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-4">How It Works</h2>
            <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
              List your property in three simple steps and start receiving inquiries from potential buyers
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="relative">
                <div className="bg-white rounded-lg shadow-md p-6 text-center h-full">
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-homehunt-600 text-white flex items-center justify-center font-bold">
                    1
                  </div>
                  <div className="mt-6">
                    <Upload className="h-12 w-12 text-homehunt-600 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-2">List Your Property</h3>
                    <p className="text-gray-600">
                      Create a detailed listing with photos, features, and pricing information
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <div className="bg-white rounded-lg shadow-md p-6 text-center h-full">
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-homehunt-600 text-white flex items-center justify-center font-bold">
                    2
                  </div>
                  <div className="mt-6">
                    <UserCheck className="h-12 w-12 text-homehunt-600 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-2">Connect with Buyers</h3>
                    <p className="text-gray-600">
                      Receive inquiries directly from verified buyers interested in your property
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <div className="bg-white rounded-lg shadow-md p-6 text-center h-full">
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-homehunt-600 text-white flex items-center justify-center font-bold">
                    3
                  </div>
                  <div className="mt-6">
                    <Check className="h-12 w-12 text-homehunt-600 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-2">Close the Deal</h3>
                    <p className="text-gray-600">
                      Finalize the transaction with documentation support from HomeHunt
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Property Form */}
        <div className="py-16 bg-white">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl font-bold text-center mb-12">List Your Property</h2>
            
            <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
              <form>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Property Type
                    </label>
                    <select className="w-full rounded-md border-gray-300 shadow-sm focus:border-homehunt-500 focus:ring-homehunt-500 p-2 border">
                      <option value="">Select Property Type</option>
                      <option value="apartment">Apartment</option>
                      <option value="house">House</option>
                      <option value="villa">Villa</option>
                      <option value="plot">Plot/Land</option>
                      <option value="commercial">Commercial</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Listing For
                    </label>
                    <select className="w-full rounded-md border-gray-300 shadow-sm focus:border-homehunt-500 focus:ring-homehunt-500 p-2 border">
                      <option value="">Select Listing Type</option>
                      <option value="sell">Sell</option>
                      <option value="rent">Rent</option>
                    </select>
                  </div>
                </div>
                
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Property Title
                  </label>
                  <Input 
                    type="text" 
                    placeholder="e.g. 3BHK Apartment in Koramangala" 
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Bedrooms
                    </label>
                    <select className="w-full rounded-md border-gray-300 shadow-sm focus:border-homehunt-500 focus:ring-homehunt-500 p-2 border">
                      <option value="">Select</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5+">5+</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Bathrooms
                    </label>
                    <select className="w-full rounded-md border-gray-300 shadow-sm focus:border-homehunt-500 focus:ring-homehunt-500 p-2 border">
                      <option value="">Select</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5+">5+</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Area (sq ft)
                    </label>
                    <Input type="number" placeholder="e.g. 1200" />
                  </div>
                </div>
                
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Price (₹)
                  </label>
                  <Input type="number" placeholder="e.g. 5000000" />
                  <p className="text-xs text-gray-500 mt-1">
                    For rental properties, enter monthly rent
                  </p>
                </div>
                
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Property Address
                  </label>
                  <Input type="text" placeholder="Enter full address" className="mb-2" />
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Input type="text" placeholder="City" />
                    <Input type="text" placeholder="PIN Code" />
                  </div>
                </div>
                
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Property Description
                  </label>
                  <Textarea 
                    placeholder="Describe your property in detail including amenities, nearby facilities, etc." 
                    rows={6}
                  />
                </div>
                
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Upload Images
                  </label>
                  <div className="border-2 border-dashed border-gray-300 rounded-md p-6 text-center">
                    <Upload className="mx-auto h-12 w-12 text-gray-400" />
                    <p className="mt-1 text-sm text-gray-600">
                      Drag and drop images here, or click to select files
                    </p>
                    <p className="mt-2 text-xs text-gray-500">
                      Upload at least 3 images. Max 10MB each. (JPG, PNG)
                    </p>
                    <Input
                      type="file"
                      className="hidden"
                      accept="image/*"
                      multiple
                    />
                    <Button variant="outline" className="mt-4">
                      Select Files
                    </Button>
                  </div>
                </div>
                
                <div className="mt-8">
                  <Button className="w-full bg-homehunt-600 hover:bg-homehunt-700" size="lg">
                    Submit Property Listing
                  </Button>
                  <p className="text-xs text-gray-500 text-center mt-2">
                    By submitting, you agree to our Terms of Service and Privacy Policy
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Sell;
