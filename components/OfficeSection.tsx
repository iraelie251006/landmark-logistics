import { MapPin } from "lucide-react";

interface OfficeSectionProps {
  title: string;
  location?: string;
  children: React.ReactNode;
  isHeadOffice?: boolean;
}

export const OfficeSection = ({ title, location, children, isHeadOffice = false }: OfficeSectionProps) => {
  return (
    <section className="mb-16">
      <div className="text-center mb-8">
        <div className="flex items-center justify-center space-x-3 mb-4">
          <MapPin className={`w-6 h-6 ${isHeadOffice ? 'text-corporate-blue' : 'text-corporate-gray'}`} />
          <h2 className={`text-2xl md:text-3xl font-bold ${
            isHeadOffice ? 'text-corporate-blue' : 'text-foreground'
          }`}>
            {title}
          </h2>
        </div>
        {location && (
          <p className="text-corporate-gray text-lg">
            {location}
          </p>
        )}
        {isHeadOffice && (
          <div className="inline-block mt-2 bg-corporate-blue text-primary-foreground px-4 py-1 rounded-full text-sm font-medium">
            Headquarters
          </div>
        )}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {children}
      </div>
    </section>
  );
};