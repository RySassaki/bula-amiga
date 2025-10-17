import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Medicine } from "@/data/extended-medicines";
import { Pill } from "lucide-react";
import { useState } from "react";

interface QuickSearchSectionProps {
  medicines: Medicine[];
  onSelectMedicine: (id: string) => void;
}

export const QuickSearchSection = ({ medicines, onSelectMedicine }: QuickSearchSectionProps) => {
  const [selectedMedicine, setSelectedMedicine] = useState<Medicine | null>(null);

  const handleMedicineClick = (medicine: Medicine) => {
    setSelectedMedicine(medicine);
  };

  return (
    <div className="grid md:grid-cols-2 gap-6">
      {/* Coluna 1: Lista dos 10 remédios */}
      <div className="space-y-3">
        <h3 className="text-xl font-semibold mb-4">10 Remédios Mais Comuns</h3>
        {medicines.map((medicine) => (
          <Card 
            key={medicine.id}
            className={`cursor-pointer transition-all hover:shadow-md hover:border-primary/40 ${
              selectedMedicine?.id === medicine.id ? 'border-primary shadow-md' : ''
            }`}
            onClick={() => handleMedicineClick(medicine)}
          >
            <CardHeader className="p-4">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Pill className="h-4 w-4 text-primary" />
                </div>
                <div className="flex-1">
                  <CardTitle className="text-base">{medicine.name}</CardTitle>
                  <CardDescription className="text-sm">{medicine.activeIngredient}</CardDescription>
                </div>
              </div>
            </CardHeader>
          </Card>
        ))}
      </div>

      {/* Coluna 2: Detalhes do remédio selecionado */}
      <div className="sticky top-6">
        {selectedMedicine ? (
          <Card className="border-primary/20">
            <CardHeader>
              <CardTitle className="text-2xl">{selectedMedicine.name}</CardTitle>
              <CardDescription className="text-base">{selectedMedicine.activeIngredient}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold text-sm text-muted-foreground mb-2">Descrição</h4>
                <p className="text-sm">{selectedMedicine.fullDescription}</p>
              </div>

              <div>
                <h4 className="font-semibold text-sm text-muted-foreground mb-2">Usos Comuns</h4>
                <ul className="list-disc list-inside text-sm space-y-1">
                  {selectedMedicine.commonUses.map((use, idx) => (
                    <li key={idx}>{use}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-sm text-muted-foreground mb-2">Posologia</h4>
                <p className="text-sm">{selectedMedicine.dosage}</p>
              </div>

              <button
                onClick={() => onSelectMedicine(selectedMedicine.id)}
                className="w-full bg-primary text-primary-foreground py-2 rounded-md hover:bg-primary/90 transition-colors"
              >
                Ver Bula Completa
              </button>
            </CardContent>
          </Card>
        ) : (
          <Card className="border-dashed">
            <CardContent className="py-16 text-center">
              <p className="text-muted-foreground">
                Selecione um remédio da lista ao lado para ver os detalhes
              </p>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};
