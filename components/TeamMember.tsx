import { Card, CardContent } from "@/components/ui/card";
import { MessageCircle, Phone, User } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";
import Image from "next/image";

interface TeamMemberProps {
  name: string;
  title: string;
  phone: string;
  isManager?: boolean;
  imageURL?: string;
}

export const TeamMember = ({ name, title, phone, isManager = false, imageURL }: TeamMemberProps) => {
  return (
    <Card className="group relative overflow-hidden bg-gradient-to-br from-card to-corporate-gray-light shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-professional)] transition-[var(--transition-smooth)] border-border max-sm:border-corporate-blue/30 hover:border-corporate-blue/30">
      <CardContent className={`p-6 ${isManager ? "bg-accent" : "bg-accent/50"}`}>
        <div className="flex items-start space-x-4">
          {imageURL ? (
            <Image src={imageURL} alt={name} width={48} height={48} className="rounded-full object-cover"/>
          ) : (
            <div className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center ${
            isManager ? 'bg-corporate-blue text-primary-foreground' : 'bg-corporate-gray-light text-corporate-gray'
          }`}>
            <User className="w-6 h-6" />
          </div>
          )}
          
          <div className="flex-1 min-w-0">
            <h3 className={`font-semibold text-lg mb-1 ${
              isManager ? 'text-corporate-blue' : 'text-foreground'
            }`}>
              {name}
            </h3>
            <p className="text-sm mb-3 capitalize">
              {title}
            </p>
            <div className="flex items-center space-x-2">
              <Phone className="w-4 h-4 flex-shrink-0 fill-blue-600" />
              <Link 
                href={`tel:${phone}`}
                target="_blank"
                className="text-sm hover:text-corporate-blue transition-colors font-medium"
              >
                {phone}
              </Link>
            </div>
            <Link href={`https://wa.me/${phone.slice(1)}?text=Hello%20I%20hope%20you%20are%20doing%20great%20today.`}>
              <Button
                variant="outline"
                size="sm"
                className="w-full border-corporate-blue/30 text-corporate-blue hover:bg-corporate-blue hover:text-primary-foreground mt-5"
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                Chat With Us
              </Button>
            </Link>
            
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