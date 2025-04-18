
import { PropertyCard, PropertyCardProps } from "./PropertyCard";

interface FeaturedPropertiesProps {
  title: string;
  subtitle?: string;
  properties: PropertyCardProps[];
}

export const FeaturedProperties = ({ 
  title, 
  subtitle,
  properties 
}: FeaturedPropertiesProps) => {
  return (
    <section className="py-12 px-4 lg:px-8">
      <div className="container mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900">{title}</h2>
          {subtitle && <p className="mt-2 text-gray-600">{subtitle}</p>}
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {properties.map((property) => (
            <PropertyCard key={property.id} {...property} />
          ))}
        </div>
      </div>
    </section>
  );
};
