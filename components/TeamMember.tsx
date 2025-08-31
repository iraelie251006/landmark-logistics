import { Card, CardContent } from "@/components/ui/card";
import { Phone, User } from "lucide-react";
import Link from "next/link";

interface TeamMemberProps {
  name: string;
  title: string;
  phone: string;
  isManager?: boolean;
}

export const TeamMember = ({ name, title, phone, isManager = false }: TeamMemberProps) => {
  return (
    <Card className="group relative overflow-hidden bg-gradient-to-br from-card to-corporate-gray-light border-border/50 shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-professional)] transition-[var(--transition-smooth)] hover:border-corporate-blue/30">
      <CardContent className="p-6">
        <div className="flex items-start space-x-4">
          <div className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center ${
            isManager ? 'bg-corporate-blue text-primary-foreground' : 'bg-corporate-gray-light text-corporate-gray'
          }`}>
            <User className="w-6 h-6" />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className={`font-semibold text-lg mb-1 ${
              isManager ? 'text-corporate-blue' : 'text-foreground'
            }`}>
              {name}
            </h3>
            <p className="text-corporate-gray text-sm mb-3 capitalize">
              {title}
            </p>
            <div className="flex items-center space-x-2 text-corporate-gray">
              <Phone className="w-4 h-4 flex-shrink-0" />
              <Link 
                href={`tel:${phone}`}
                className="text-sm hover:text-corporate-blue transition-colors font-medium"
              >
                {phone}
              </Link>
            </div>
          </div>
        </div>
        {isManager && (
          <div className="absolute top-3 right-3">
            <div className="bg-corporate-blue text-primary-foreground text-xs px-2 py-1 rounded-full font-medium">
              Manager
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};