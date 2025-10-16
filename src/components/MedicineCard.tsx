import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Pill } from "lucide-react";

interface MedicineCardProps {
  name: string;
  activeIngredient: string;
  commonUses: string[];
  onClick: () => void;
}

export const MedicineCard = ({ name, activeIngredient, commonUses, onClick }: MedicineCardProps) => {
  return (
    <Card 
      className="cursor-pointer transition-all duration-300 hover:shadow-lg hover:-translate-y-1 bg-gradient-to-b from-card to-accent/20 border-primary/10"
      onClick={onClick}
    >
      <CardHeader className="pb-3">
        <div className="flex items-center gap-2 mb-2">
          <div className="p-2 rounded-lg bg-primary/10">
            <Pill className="h-5 w-5 text-primary" />
          </div>
        </div>
        <CardTitle className="text-lg">{name}</CardTitle>
        <CardDescription className="text-sm">{activeIngredient}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2">
          {commonUses.slice(0, 3).map((use, index) => (
            <Badge key={index} variant="secondary" className="text-xs">
              {use}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
