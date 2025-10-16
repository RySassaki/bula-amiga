import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { MedicineCard } from "@/components/MedicineCard";
import { SearchSection } from "@/components/SearchSection";
import { PainAnalysisSection } from "@/components/PainAnalysisSection";
import { mockMedicines } from "@/data/medicines";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Sparkles, Search, Zap } from "lucide-react";
import { toast } from "sonner";

const Index = () => {
  const navigate = useNavigate();
  const [searchResults, setSearchResults] = useState(mockMedicines);
  const [aiResults, setAiResults] = useState<typeof mockMedicines>([]);

  const handleSearch = (query: string) => {
    if (!query.trim()) {
      setSearchResults(mockMedicines);
      return;
    }

    const filtered = mockMedicines.filter(
      (med) =>
        med.name.toLowerCase().includes(query.toLowerCase()) ||
        med.activeIngredient.toLowerCase().includes(query.toLowerCase())
    );
    setSearchResults(filtered);
  };

  const handlePainAnalysis = (description: string) => {
    // Simulação de análise de IA - em produção, isto seria uma chamada real à IA
    toast.info("Para funcionalidade completa de IA, conecte o Lovable Cloud!", {
      description: "A IA poderá analisar seus sintomas e sugerir remédios adequados."
    });
    
    // Simulação: retorna alguns remédios baseados em palavras-chave simples
    const keywords = description.toLowerCase();
    let suggested = mockMedicines;
    
    if (keywords.includes("dor de cabeça") || keywords.includes("cabeça")) {
      suggested = mockMedicines.filter(m => 
        m.commonUses.some(u => u.toLowerCase().includes("dor de cabeça"))
      );
    } else if (keywords.includes("febre")) {
      suggested = mockMedicines.filter(m => 
        m.commonUses.some(u => u.toLowerCase().includes("febre"))
      );
    } else if (keywords.includes("estômago") || keywords.includes("azia")) {
      suggested = mockMedicines.filter(m => 
        m.commonUses.some(u => 
          u.toLowerCase().includes("azia") || 
          u.toLowerCase().includes("estômago")
        )
      );
    }
    
    setAiResults(suggested.slice(0, 5));
  };

  const handleMedicineClick = (id: string) => {
    navigate(`/medicine/${id}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-accent/30 to-background">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10 py-16 px-4">
        <div className="container mx-auto max-w-6xl text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Bulas de Remédios
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Encontre informações confiáveis sobre medicamentos de forma rápida e fácil
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 max-w-6xl space-y-16">
        {/* Métodos de Busca */}
        <section className="space-y-6">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-2">Como Deseja Pesquisar?</h2>
            <p className="text-muted-foreground">Escolha a forma mais conveniente para você</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="text-center hover:shadow-lg transition-shadow border-primary/20">
              <CardHeader>
                <div className="mx-auto p-3 rounded-full bg-primary/10 w-fit mb-3">
                  <Zap className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl">Procura Rápida</CardTitle>
                <CardDescription>10 remédios mais comuns</CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow border-primary/20">
              <CardHeader>
                <div className="mx-auto p-3 rounded-full bg-primary/10 w-fit mb-3">
                  <Search className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl">Busca Direta</CardTitle>
                <CardDescription>Pesquise pelo nome</CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow border-secondary/20">
              <CardHeader>
                <div className="mx-auto p-3 rounded-full bg-secondary/10 w-fit mb-3">
                  <Sparkles className="h-8 w-8 text-secondary" />
                </div>
                <CardTitle className="text-xl">Fale sua Dor</CardTitle>
                <CardDescription>IA sugere remédios</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </section>

        {/* Busca Direta */}
        <section className="space-y-6">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-2">Pesquisa Direta</h2>
            <p className="text-muted-foreground mb-6">
              Digite o nome do remédio que você procura
            </p>
          </div>
          <SearchSection onSearch={handleSearch} />
        </section>

        {/* Resultados da Busca / Top 10 */}
        <section className="space-y-6">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-2">
              {searchResults.length === mockMedicines.length 
                ? `Todos os Remédios (${mockMedicines.length})` 
                : `Resultados da Busca (${searchResults.length})`}
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {searchResults.map((medicine) => (
              <MedicineCard
                key={medicine.id}
                name={medicine.name}
                activeIngredient={medicine.activeIngredient}
                commonUses={medicine.commonUses}
                onClick={() => handleMedicineClick(medicine.id)}
              />
            ))}
          </div>
          {searchResults.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">
                Nenhum remédio encontrado. Tente outro termo de busca.
              </p>
            </div>
          )}
        </section>

        {/* Análise por IA */}
        <section className="space-y-6">
          <PainAnalysisSection onAnalyze={handlePainAnalysis} />
          
          {aiResults.length > 0 && (
            <div className="space-y-6">
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-2">Sugestões da IA</h3>
                <p className="text-muted-foreground">
                  Remédios comuns para seus sintomas
                </p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {aiResults.map((medicine) => (
                  <MedicineCard
                    key={medicine.id}
                    name={medicine.name}
                    activeIngredient={medicine.activeIngredient}
                    commonUses={medicine.commonUses}
                    onClick={() => handleMedicineClick(medicine.id)}
                  />
                ))}
              </div>
            </div>
          )}
        </section>

        {/* Footer Notice */}
        <section className="text-center py-8 border-t">
          <p className="text-sm text-muted-foreground">
            ⚕️ Este site é informativo. Sempre consulte um profissional de saúde antes de tomar medicamentos.
          </p>
        </section>
      </div>
    </div>
  );
};

export default Index;
