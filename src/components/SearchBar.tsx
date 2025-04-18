
import { useState } from "react";
import { Search, MapPin, Building, Home, Filter } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type PropertyType = "all" | "house" | "apartment" | "land" | "commercial";

export const SearchBar = () => {
  const [propertyType, setPropertyType] = useState<PropertyType>("all");
  const [location, setLocation] = useState("");

  return (
    <div className="w-full max-w-5xl mx-auto bg-white rounded-lg shadow-lg p-4 md:p-6 -mt-8 relative z-10">
      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex-1">
          <div className="relative">
            <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <Input
              type="text"
              placeholder="Search by location, address or landmark"
              className="pl-10 rounded-md border-gray-300"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </div>
        </div>
        
        <div className="w-full md:w-48">
          <Select value={propertyType} onValueChange={(val) => setPropertyType(val as PropertyType)}>
            <SelectTrigger className="w-full">
              <div className="flex items-center gap-2">
                <Building className="h-4 w-4 text-gray-500" />
                <SelectValue placeholder="Property Type" />
              </div>
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Properties</SelectItem>
              <SelectItem value="house">Houses</SelectItem>
              <SelectItem value="apartment">Apartments</SelectItem>
              <SelectItem value="land">Land</SelectItem>
              <SelectItem value="commercial">Commercial</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        <div className="flex gap-2">
          <Button variant="outline" className="flex items-center gap-2">
            <Filter className="h-4 w-4" />
            Filters
          </Button>
          <Button className="bg-homehunt-600 hover:bg-homehunt-700">
            <Search className="h-4 w-4 mr-2" />
            Search
          </Button>
        </div>
      </div>
      
      <div className="flex flex-wrap gap-2 mt-3">
        <Button variant="ghost" size="sm" className="text-xs rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700">
          Price: Any
        </Button>
        <Button variant="ghost" size="sm" className="text-xs rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700">
          Beds: Any
        </Button>
        <Button variant="ghost" size="sm" className="text-xs rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700">
          Home Type: Any
        </Button>
        <Button variant="ghost" size="sm" className="text-xs rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700">
          More Filters
        </Button>
      </div>
    </div>
  );
};
