
import { Heart } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { cn } from "@/lib/utils";

export interface PropertyCardProps {
  id: string;
  title: string;
  price: number;
  currency?: string;
  address: string;
  beds: number;
  baths: number;
  area: number;
  areaUnit?: string;
  type: string;
  imageUrl: string;
  featured?: boolean;
  isForRent?: boolean;
}

export const PropertyCard = ({
  id,
  title,
  price,
  currency = "₹",
  address,
  beds,
  baths,
  area,
  areaUnit = "sq ft",
  type,
  imageUrl,
  featured = false,
  isForRent = false,
}: PropertyCardProps) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const formattedPrice = new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  })
    .format(price)
    .replace("₹", "");

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <div className="relative">
        <img
          src={imageUrl}
          alt={title}
          className="h-48 w-full object-cover"
        />
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-2 right-2 bg-white/80 hover:bg-white rounded-full"
          onClick={() => setIsFavorite(!isFavorite)}
        >
          <Heart
            className={cn(
              "h-5 w-5",
              isFavorite ? "fill-red-500 text-red-500" : "text-gray-600"
            )}
          />
        </Button>
        {featured && (
          <Badge className="absolute top-2 left-2 bg-homehunt-600">
            Featured
          </Badge>
        )}
      </div>
      <div className="p-4">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="font-semibold text-lg truncate" title={title}>
              {title}
            </h3>
            <p className="text-gray-500 text-sm truncate mt-1" title={address}>
              {address}
            </p>
          </div>
          <div className="text-right">
            <p className="font-bold text-lg text-homehunt-800">
              {currency} {formattedPrice}
            </p>
            <p className="text-xs text-gray-500">
              {isForRent ? "per month" : ""}
            </p>
          </div>
        </div>

        <div className="flex items-center justify-between mt-4 border-t pt-4">
          <div className="flex gap-3 text-sm text-gray-600">
            <div className="flex items-center">
              <span className="font-medium">{beds}</span>
              <span className="ml-1">Beds</span>
            </div>
            <div className="flex items-center">
              <span className="font-medium">{baths}</span>
              <span className="ml-1">Baths</span>
            </div>
            <div className="flex items-center">
              <span className="font-medium">{area}</span>
              <span className="ml-1">{areaUnit}</span>
            </div>
          </div>
          <Badge
            variant="outline"
            className="text-xs border-homehunt-200 text-homehunt-800"
          >
            {type}
          </Badge>
        </div>
      </div>
    </div>
  );
};
