
import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PropertyCard } from "@/components/PropertyCard";
import { SearchBar } from "@/components/SearchBar";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import { featuredProperties, newLaunchProperties } from "@/data/mockProperties";
import { Filter, ChevronDown, ChevronUp } from "lucide-react";

// Combine properties for the buy page
const allBuyProperties = [...featuredProperties, ...newLaunchProperties];

const Buy = () => {
  const [showFilters, setShowFilters] = useState(false);
  const [priceRange, setPriceRange] = useState([2000000, 20000000]);
  const [areaRange, setAreaRange] = useState([500, 3000]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero section with search */}
        <div className="relative">
          <div className="h-[280px] bg-gradient-to-r from-homehunt-900 to-homehunt-800 flex items-center justify-center">
            <div className="text-center px-4 max-w-3xl mx-auto">
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
                Find Your Dream Home
              </h1>
              <p className="text-homehunt-100 mb-6">
                Browse thousands of properties for sale across India
              </p>
            </div>
          </div>
          <div className="container mx-auto px-4 relative">
            <SearchBar />
          </div>
        </div>

        {/* Main content */}
        <div className="container mx-auto px-4 py-12">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Filters sidebar */}
            <div className="w-full lg:w-64 flex-shrink-0">
              <div className="bg-white rounded-lg shadow-md p-6 sticky top-20">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-xl font-semibold">Filters</h2>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="lg:hidden"
                    onClick={() => setShowFilters(!showFilters)}
                  >
                    {showFilters ? <ChevronUp /> : <ChevronDown />}
                  </Button>
                </div>

                <div className={`${showFilters ? "block" : "hidden lg:block"}`}>
                  {/* Price filter */}
                  <div className="mb-6">
                    <h3 className="font-medium mb-2">Price Range (₹)</h3>
                    <Slider
                      defaultValue={[2000000, 20000000]}
                      max={30000000}
                      min={1000000}
                      step={500000}
                      value={priceRange}
                      onValueChange={setPriceRange}
                      className="my-4"
                    />
                    <div className="flex justify-between text-sm">
                      <span>₹{(priceRange[0] / 10000000).toFixed(1)} Cr</span>
                      <span>₹{(priceRange[1] / 10000000).toFixed(1)} Cr</span>
                    </div>
                  </div>

                  {/* Area filter */}
                  <div className="mb-6">
                    <h3 className="font-medium mb-2">Area (sq ft)</h3>
                    <Slider
                      defaultValue={[500, 3000]}
                      max={5000}
                      min={300}
                      step={100}
                      value={areaRange}
                      onValueChange={setAreaRange}
                      className="my-4"
                    />
                    <div className="flex justify-between text-sm">
                      <span>{areaRange[0]} sq ft</span>
                      <span>{areaRange[1]} sq ft</span>
                    </div>
                  </div>

                  {/* Property type */}
                  <div className="mb-6">
                    <h3 className="font-medium mb-2">Property Type</h3>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <Checkbox id="apartment" />
                        <label
                          htmlFor="apartment"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          Apartment
                        </label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="villa" />
                        <label
                          htmlFor="villa"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          Villa
                        </label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="house" />
                        <label
                          htmlFor="house"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          House
                        </label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="plot" />
                        <label
                          htmlFor="plot"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          Plot/Land
                        </label>
                      </div>
                    </div>
                  </div>

                  {/* Bedrooms */}
                  <div className="mb-6">
                    <h3 className="font-medium mb-2">Bedrooms</h3>
                    <div className="flex flex-wrap gap-2">
                      {[1, 2, 3, 4, "5+"].map((bed) => (
                        <Button
                          key={bed}
                          variant="outline"
                          size="sm"
                          className="min-w-[40px]"
                        >
                          {bed}
                        </Button>
                      ))}
                    </div>
                  </div>

                  {/* Additional filters */}
                  <div>
                    <h3 className="font-medium mb-2">Features</h3>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <Checkbox id="furnished" />
                        <label
                          htmlFor="furnished"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          Furnished
                        </label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="parking" />
                        <label
                          htmlFor="parking"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          Parking
                        </label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="garden" />
                        <label
                          htmlFor="garden"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          Garden/Terrace
                        </label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="elevator" />
                        <label
                          htmlFor="elevator"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          Elevator
                        </label>
                      </div>
                    </div>
                  </div>

                  <Button className="w-full mt-6 bg-homehunt-600 hover:bg-homehunt-700">
                    <Filter className="h-4 w-4 mr-2" />
                    Apply Filters
                  </Button>
                </div>
              </div>
            </div>

            {/* Property listings */}
            <div className="flex-1">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold">
                  Properties for Sale ({allBuyProperties.length})
                </h2>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-gray-600">Sort by:</span>
                  <select className="text-sm border rounded p-1">
                    <option>Newest First</option>
                    <option>Price: Low to High</option>
                    <option>Price: High to Low</option>
                    <option>Most Popular</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                {allBuyProperties.map((property) => (
                  <PropertyCard key={property.id} {...property} />
                ))}
              </div>

              <div className="mt-10 flex justify-center">
                <Button variant="outline" className="mx-auto">
                  Load More Properties
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Buy;
