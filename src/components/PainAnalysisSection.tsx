import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Sparkles, AlertCircle } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";

interface PainAnalysisSectionProps {
  onAnalyze: (description: string) => void;
}

export const PainAnalysisSection = ({ onAnalyze }: PainAnalysisSectionProps) => {
  const [pain, setPain] = useState("");
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const handleAnalyze = () => {
    if (pain.trim()) {
      setIsAnalyzing(true);
      onAnalyze(pain);
      setTimeout(() => setIsAnalyzing(false), 1500);
    }
  };

  return (
    <Card className="bg-gradient-to-br from-secondary/5 to-secondary/10 border-secondary/20">
      <CardHeader>
        <div className="flex items-center gap-2">
          <div className="p-2 rounded-lg bg-secondary/10">
            <Sparkles className="h-6 w-6 text-secondary" />
          </div>
          <div>
            <CardTitle className="text-2xl">Fale sua Dor</CardTitle>
            <CardDescription>
              Descreva seus sintomas e a IA sugerirá remédios comuns
            </CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <Alert>
          <AlertCircle className="h-4 w-4" />
          <AlertDescription>
            Esta é uma ferramenta informativa. Sempre consulte um médico antes de tomar qualquer medicamento.
          </AlertDescription>
        </Alert>
        
        <Textarea
          placeholder="Ex: Estou com dor de cabeça forte e febre..."
          value={pain}
          onChange={(e) => setPain(e.target.value)}
          className="min-h-[120px] resize-none border-2 focus:border-secondary"
        />
        
        <Button
          onClick={handleAnalyze}
          disabled={!pain.trim() || isAnalyzing}
          className="w-full bg-secondary hover:bg-secondary/90"
          size="lg"
        >
          {isAnalyzing ? (
            <>
              <Sparkles className="mr-2 h-5 w-5 animate-spin" />
              Analisando...
            </>
          ) : (
            <>
              <Sparkles className="mr-2 h-5 w-5" />
              Analisar com IA
            </>
          )}
        </Button>
      </CardContent>
    </Card>
  );
};
