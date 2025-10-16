import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Pill, AlertTriangle, ShieldAlert, Activity } from "lucide-react";
import { mockMedicines } from "@/data/medicines";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

const MedicineDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const medicine = mockMedicines.find((m) => m.id === id);

  if (!medicine) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Remédio não encontrado</h1>
          <Button onClick={() => navigate("/")}>Voltar ao início</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-accent/20 to-background">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <Button
          variant="ghost"
          onClick={() => navigate("/")}
          className="mb-6 hover:bg-primary/10"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Voltar
        </Button>

        <div className="space-y-6">
          <Card className="border-primary/20">
            <CardHeader>
              <div className="flex items-start gap-4">
                <div className="p-4 rounded-xl bg-primary/10">
                  <Pill className="h-8 w-8 text-primary" />
                </div>
                <div className="flex-1">
                  <CardTitle className="text-3xl mb-2">{medicine.name}</CardTitle>
                  <CardDescription className="text-lg">
                    Princípio ativo: {medicine.activeIngredient}
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-foreground/80 leading-relaxed">{medicine.fullDescription}</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <Activity className="h-5 w-5 text-primary" />
                <CardTitle>Usos Comuns</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {medicine.commonUses.map((use, index) => (
                  <Badge key={index} variant="secondary" className="text-sm py-1 px-3">
                    {use}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Posologia</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-foreground/80">{medicine.dosage}</p>
            </CardContent>
          </Card>

          <Alert variant="destructive">
            <AlertTriangle className="h-5 w-5" />
            <AlertTitle>Contraindicações</AlertTitle>
            <AlertDescription>
              <ul className="list-disc list-inside space-y-1 mt-2">
                {medicine.contraindications.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </AlertDescription>
          </Alert>

          <Card className="border-orange-200 bg-orange-50 dark:bg-orange-950/20">
            <CardHeader>
              <div className="flex items-center gap-2">
                <ShieldAlert className="h-5 w-5 text-orange-600" />
                <CardTitle className="text-orange-900 dark:text-orange-100">
                  Possíveis Efeitos Colaterais
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-1 text-orange-800 dark:text-orange-200">
                {medicine.sideEffects.map((effect, index) => (
                  <li key={index}>{effect}</li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Alert>
            <AlertTriangle className="h-4 w-4" />
            <AlertDescription>
              <strong>Importante:</strong> Esta é uma informação educativa. Sempre consulte um médico 
              ou farmacêutico antes de iniciar qualquer tratamento.
            </AlertDescription>
          </Alert>
        </div>
      </div>
    </div>
  );
};

export default MedicineDetails;
