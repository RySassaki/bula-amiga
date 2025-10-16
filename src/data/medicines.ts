export interface Medicine {
  id: string;
  name: string;
  activeIngredient: string;
  commonUses: string[];
  dosage: string;
  contraindications: string[];
  sideEffects: string[];
  fullDescription: string;
}

export const mockMedicines: Medicine[] = [
  {
    id: "1",
    name: "Dipirona",
    activeIngredient: "Dipirona Sódica",
    commonUses: ["Dor de cabeça", "Febre", "Dor muscular"],
    dosage: "500mg a 1g a cada 6 horas",
    contraindications: ["Gestantes", "Alergia à dipirona", "Problemas hematológicos"],
    sideEffects: ["Tontura", "Náusea", "Reações alérgicas"],
    fullDescription: "A dipirona é um analgésico e antitérmico amplamente utilizado para o alívio de dores leves a moderadas e redução da febre. Atua inibindo a síntese de prostaglandinas no sistema nervoso central."
  },
  {
    id: "2",
    name: "Paracetamol",
    activeIngredient: "Paracetamol",
    commonUses: ["Dor de cabeça", "Febre", "Dores leves"],
    dosage: "500mg a 1g a cada 6 horas",
    contraindications: ["Doenças hepáticas graves", "Alergia ao paracetamol"],
    sideEffects: ["Náusea", "Vômito", "Danos hepáticos (em altas doses)"],
    fullDescription: "O paracetamol é um analgésico e antipirético eficaz no tratamento de dores leves a moderadas e febre. É bem tolerado quando usado nas doses recomendadas."
  },
  {
    id: "3",
    name: "Ibuprofeno",
    activeIngredient: "Ibuprofeno",
    commonUses: ["Inflamação", "Dor de cabeça", "Dor muscular", "Artrite"],
    dosage: "400mg a 600mg a cada 8 horas",
    contraindications: ["Úlcera gástrica", "Problemas renais", "Gestantes no 3º trimestre"],
    sideEffects: ["Dor de estômago", "Azia", "Tontura"],
    fullDescription: "O ibuprofeno é um anti-inflamatório não esteroidal (AINE) que reduz dor, febre e inflamação. Bloqueia a produção de prostaglandinas responsáveis pela inflamação."
  },
  {
    id: "4",
    name: "Omeprazol",
    activeIngredient: "Omeprazol",
    commonUses: ["Azia", "Refluxo", "Úlcera gástrica"],
    dosage: "20mg a 40mg uma vez ao dia",
    contraindications: ["Alergia ao omeprazol", "Uso prolongado sem orientação médica"],
    sideEffects: ["Dor de cabeça", "Diarreia", "Náusea"],
    fullDescription: "O omeprazol é um inibidor da bomba de prótons que reduz a produção de ácido no estômago, sendo eficaz no tratamento de refluxo gastroesofágico e úlceras."
  },
  {
    id: "5",
    name: "Amoxicilina",
    activeIngredient: "Amoxicilina",
    commonUses: ["Infecções bacterianas", "Sinusite", "Otite", "Pneumonia"],
    dosage: "500mg a cada 8 horas",
    contraindications: ["Alergia à penicilina", "Mononucleose"],
    sideEffects: ["Diarreia", "Náusea", "Reações alérgicas"],
    fullDescription: "A amoxicilina é um antibiótico da classe das penicilinas usado para tratar diversas infecções bacterianas. Deve ser usada com prescrição médica."
  },
  {
    id: "6",
    name: "Loratadina",
    activeIngredient: "Loratadina",
    commonUses: ["Alergias", "Rinite", "Urticária"],
    dosage: "10mg uma vez ao dia",
    contraindications: ["Alergia à loratadina", "Crianças menores de 2 anos"],
    sideEffects: ["Sonolência leve", "Dor de cabeça", "Boca seca"],
    fullDescription: "A loratadina é um anti-histamínico usado para aliviar sintomas de alergias como espirros, coriza, coceira e urticária."
  },
  {
    id: "7",
    name: "Diclofenaco",
    activeIngredient: "Diclofenaco Sódico",
    commonUses: ["Dor muscular", "Inflamação", "Artrite", "Lesões"],
    dosage: "50mg a cada 8 horas",
    contraindications: ["Úlcera gástrica", "Problemas cardíacos", "Gestantes"],
    sideEffects: ["Dor de estômago", "Tontura", "Dor de cabeça"],
    fullDescription: "O diclofenaco é um anti-inflamatório não esteroidal potente usado para tratar dor e inflamação em diversas condições."
  },
  {
    id: "8",
    name: "Buscopan",
    activeIngredient: "Butilbrometo de Escopolamina",
    commonUses: ["Cólicas abdominais", "Dor de estômago", "Cólica menstrual"],
    dosage: "10mg a 20mg até 4 vezes ao dia",
    contraindications: ["Glaucoma", "Problemas prostáticos", "Obstrução intestinal"],
    sideEffects: ["Boca seca", "Visão turva", "Tontura"],
    fullDescription: "O Buscopan é um antiespasmódico que relaxa a musculatura lisa do trato gastrointestinal, aliviando cólicas e espasmos."
  },
  {
    id: "9",
    name: "Azitromicina",
    activeIngredient: "Azitromicina",
    commonUses: ["Infecções respiratórias", "Sinusite", "Faringite"],
    dosage: "500mg uma vez ao dia por 3 dias",
    contraindications: ["Alergia a macrolídeos", "Problemas hepáticos graves"],
    sideEffects: ["Diarreia", "Náusea", "Dor abdominal"],
    fullDescription: "A azitromicina é um antibiótico macrolídeo eficaz contra infecções respiratórias e outras infecções bacterianas. Requer prescrição médica."
  },
  {
    id: "10",
    name: "Dorflex",
    activeIngredient: "Dipirona + Orfenadrina + Cafeína",
    commonUses: ["Dor muscular", "Tensão", "Dor de cabeça tensional"],
    dosage: "1 a 2 comprimidos até 4 vezes ao dia",
    contraindications: ["Glaucoma", "Miastenia gravis", "Obstrução intestinal"],
    sideEffects: ["Sonolência", "Boca seca", "Tontura"],
    fullDescription: "O Dorflex é uma combinação de analgésico, relaxante muscular e estimulante que alivia dores musculares e tensionais."
  }
];
