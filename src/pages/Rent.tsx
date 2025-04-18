
import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PropertyCard } from "@/components/PropertyCard";
import { SearchBar } from "@/components/SearchBar";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import { rentProperties } from "@/data/mockProperties";
import { Filter, ChevronDown, ChevronUp } from "lucide-react";

// Add more rent properties to have a good selection
const allRentProperties = [
  ...rentProperties,
  {
    id: "rent-004",
    title: "Premium 4BHK Villa",
    price: 85000,
    address: "Yelahanka, Bangalore",
    beds: 4,
    baths: 4,
    area: 2850,
    type: "Villa",
    imageUrl: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop",
    isForRent: true,
  },
  {
    id: "rent-005",
    title: "2BHK Semi-Furnished",
    price: 28000,
    address: "JP Nagar, Bangalore",
    beds: 2,
    baths: 2,
    area: 1150,
    type: "Apartment",
    imageUrl: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop",
    isForRent: true,
  },
  {
    id: "rent-006",
    title: "Spacious 3BHK Home",
    price: 55000,
    address: "Jayanagar, Bangalore",
    beds: 3,
    baths: 3,
    area: 1950,
    type: "House",
    imageUrl: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?q=80&w=2070&auto=format&fit=crop",
    isForRent: true,
  },
];

const Rent = () => {
  const [showFilters, setShowFilters] = useState(false);
  const [priceRange, setPriceRange] = useState([15000, 90000]);
  const [areaRange, setAreaRange] = useState([500, 3000]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero section with search */}
        <div className="relative">
          <div className="h-[280px] bg-gradient-to-r from-homehunt-800 to-homehunt-600 flex items-center justify-center">
            <div className="text-center px-4 max-w-3xl mx-auto">
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
                Find Your Perfect Rental
              </h1>
              <p className="text-homehunt-50 mb-6">
                Browse thousands of properties for rent across India
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
                    <h3 className="font-medium mb-2">Monthly Rent (₹)</h3>
                    <Slider
                      defaultValue={[15000, 90000]}
                      max={150000}
                      min={5000}
                      step={1000}
                      value={priceRange}
                      onValueChange={setPriceRange}
                      className="my-4"
                    />
                    <div className="flex justify-between text-sm">
                      <span>₹{priceRange[0].toLocaleString()}</span>
                      <span>₹{priceRange[1].toLocaleString()}</span>
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
                    <h3 className="font-medium mb-2">Furnishing</h3>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <Checkbox id="fully-furnished" />
                        <label
                          htmlFor="fully-furnished"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          Fully Furnished
                        </label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="semi-furnished" />
                        <label
                          htmlFor="semi-furnished"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          Semi Furnished
                        </label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="unfurnished" />
                        <label
                          htmlFor="unfurnished"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          Unfurnished
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
                  Properties for Rent ({allRentProperties.length})
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
                {allRentProperties.map((property) => (
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

export default Rent;
