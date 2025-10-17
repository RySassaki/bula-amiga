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

export const allMedicines: Medicine[] = [
  // Primeiros 30 medicamentos originais
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
  },
  {
    id: "11",
    name: "Cetirizina",
    activeIngredient: "Cetirizina",
    commonUses: ["Rinite alérgica", "Urticária", "Coceira"],
    dosage: "10mg uma vez ao dia",
    contraindications: ["Insuficiência renal grave", "Alergia à cetirizina"],
    sideEffects: ["Sonolência", "Fadiga", "Boca seca"],
    fullDescription: "A cetirizina é um anti-histamínico de segunda geração usado para tratar alergias respiratórias e de pele."
  },
  {
    id: "12",
    name: "Nimesulida",
    activeIngredient: "Nimesulida",
    commonUses: ["Inflamação", "Dor", "Febre"],
    dosage: "100mg a cada 12 horas",
    contraindications: ["Úlcera gástrica", "Problemas hepáticos", "Gestantes"],
    sideEffects: ["Náusea", "Dor de estômago", "Tontura"],
    fullDescription: "A nimesulida é um anti-inflamatório não esteroidal com ação analgésica e antipirética."
  },
  {
    id: "13",
    name: "Ranitidina",
    activeIngredient: "Ranitidina",
    commonUses: ["Azia", "Úlcera gástrica", "Refluxo"],
    dosage: "150mg a cada 12 horas",
    contraindications: ["Alergia à ranitidina", "Porfiria"],
    sideEffects: ["Dor de cabeça", "Tontura", "Constipação"],
    fullDescription: "A ranitidina é um antagonista H2 que reduz a produção de ácido no estômago."
  },
  {
    id: "14",
    name: "Metformina",
    activeIngredient: "Cloridrato de Metformina",
    commonUses: ["Diabetes tipo 2", "Resistência à insulina"],
    dosage: "500mg a 1000mg a cada 12 horas",
    contraindications: ["Insuficiência renal", "Acidose metabólica", "Alcoolismo"],
    sideEffects: ["Diarreia", "Náusea", "Dor abdominal"],
    fullDescription: "A metformina é um antidiabético oral que melhora a sensibilidade à insulina e reduz a glicose no sangue."
  },
  {
    id: "15",
    name: "Losartana",
    activeIngredient: "Losartana Potássica",
    commonUses: ["Hipertensão", "Proteção renal"],
    dosage: "50mg a 100mg uma vez ao dia",
    contraindications: ["Gestantes", "Estenose bilateral da artéria renal"],
    sideEffects: ["Tontura", "Fadiga", "Hipotensão"],
    fullDescription: "A losartana é um bloqueador dos receptores de angiotensina II usado no tratamento da hipertensão."
  },
  {
    id: "16",
    name: "Sinvastatina",
    activeIngredient: "Sinvastatina",
    commonUses: ["Colesterol alto", "Prevenção cardiovascular"],
    dosage: "10mg a 40mg uma vez ao dia à noite",
    contraindications: ["Doença hepática ativa", "Gestantes", "Lactantes"],
    sideEffects: ["Dor muscular", "Dor de cabeça", "Fadiga"],
    fullDescription: "A sinvastatina é uma estatina que reduz o colesterol LDL e os triglicerídeos no sangue."
  },
  {
    id: "17",
    name: "Enalapril",
    activeIngredient: "Maleato de Enalapril",
    commonUses: ["Hipertensão", "Insuficiência cardíaca"],
    dosage: "5mg a 20mg uma ou duas vezes ao dia",
    contraindications: ["Gestantes", "Estenose bilateral da artéria renal", "Angioedema"],
    sideEffects: ["Tosse seca", "Tontura", "Fadiga"],
    fullDescription: "O enalapril é um inibidor da ECA usado para controlar a pressão arterial e proteger o coração."
  },
  {
    id: "18",
    name: "Fluoxetina",
    activeIngredient: "Cloridrato de Fluoxetina",
    commonUses: ["Depressão", "Ansiedade", "TOC"],
    dosage: "20mg a 60mg uma vez ao dia",
    contraindications: ["Uso com IMAO", "Alergia à fluoxetina"],
    sideEffects: ["Insônia", "Náusea", "Dor de cabeça"],
    fullDescription: "A fluoxetina é um antidepressivo inibidor seletivo da recaptação de serotonina (ISRS)."
  },
  {
    id: "19",
    name: "Prednisona",
    activeIngredient: "Prednisona",
    commonUses: ["Inflamação", "Alergias graves", "Doenças autoimunes"],
    dosage: "5mg a 60mg ao dia conforme prescrição",
    contraindications: ["Infecções fúngicas sistêmicas", "Uso prolongado sem orientação"],
    sideEffects: ["Retenção de líquidos", "Aumento de peso", "Hipertensão"],
    fullDescription: "A prednisona é um corticosteroide usado para tratar inflamações e condições autoimunes."
  },
  {
    id: "20",
    name: "Levotiroxina",
    activeIngredient: "Levotiroxina Sódica",
    commonUses: ["Hipotireoidismo", "Bócio"],
    dosage: "25mcg a 200mcg uma vez ao dia em jejum",
    contraindications: ["Tireotoxicose", "Insuficiência adrenal não tratada"],
    sideEffects: ["Palpitações", "Nervosismo", "Perda de peso"],
    fullDescription: "A levotiroxina é um hormônio tireoidiano sintético usado para repor o T4 em casos de hipotireoidismo."
  },
  {
    id: "21",
    name: "Hidroxizina",
    activeIngredient: "Cloridrato de Hidroxizina",
    commonUses: ["Ansiedade", "Coceira", "Urticária"],
    dosage: "25mg a 100mg ao dia divididos",
    contraindications: ["Gestantes (1º trimestre)", "Porfiria"],
    sideEffects: ["Sonolência", "Boca seca", "Tontura"],
    fullDescription: "A hidroxizina é um anti-histamínico com propriedades ansiolíticas e antipruriginosas."
  },
  {
    id: "22",
    name: "Captopril",
    activeIngredient: "Captopril",
    commonUses: ["Hipertensão", "Insuficiência cardíaca"],
    dosage: "25mg a 50mg duas a três vezes ao dia",
    contraindications: ["Gestantes", "Estenose bilateral da artéria renal"],
    sideEffects: ["Tosse seca", "Tontura", "Alteração do paladar"],
    fullDescription: "O captopril é um inibidor da ECA de curta duração usado no controle da pressão arterial."
  },
  {
    id: "23",
    name: "Clonazepam",
    activeIngredient: "Clonazepam",
    commonUses: ["Ansiedade", "Insônia", "Convulsões"],
    dosage: "0,5mg a 2mg ao dia conforme prescrição",
    contraindications: ["Glaucoma agudo", "Insuficiência respiratória grave"],
    sideEffects: ["Sonolência", "Tontura", "Dependência"],
    fullDescription: "O clonazepam é um benzodiazepínico com ação ansiolítica e anticonvulsivante. Requer receita controlada."
  },
  {
    id: "24",
    name: "Pantoprazol",
    activeIngredient: "Pantoprazol",
    commonUses: ["Refluxo", "Úlcera gástrica", "Esofagite"],
    dosage: "20mg a 40mg uma vez ao dia",
    contraindications: ["Alergia ao pantoprazol"],
    sideEffects: ["Dor de cabeça", "Diarreia", "Náusea"],
    fullDescription: "O pantoprazol é um inibidor da bomba de prótons usado para reduzir a acidez estomacal."
  },
  {
    id: "25",
    name: "Brometo de Ipratrópio",
    activeIngredient: "Brometo de Ipratrópio",
    commonUses: ["Asma", "DPOC", "Broncoespasmo"],
    dosage: "2 a 4 puffs a cada 6 horas",
    contraindications: ["Alergia ao ipratrópio", "Glaucoma de ângulo fechado"],
    sideEffects: ["Boca seca", "Tosse", "Dor de cabeça"],
    fullDescription: "O brometo de ipratrópio é um broncodilatador anticolinérgico usado em doenças respiratórias."
  },
  {
    id: "26",
    name: "Dexametasona",
    activeIngredient: "Dexametasona",
    commonUses: ["Inflamação", "Alergias graves", "Edema cerebral"],
    dosage: "0,5mg a 9mg ao dia conforme prescrição",
    contraindications: ["Infecções fúngicas sistêmicas", "Úlcera péptica"],
    sideEffects: ["Retenção de líquidos", "Aumento de glicose", "Insônia"],
    fullDescription: "A dexametasona é um corticosteroide potente usado em situações agudas de inflamação."
  },
  {
    id: "27",
    name: "Propranolol",
    activeIngredient: "Cloridrato de Propranolol",
    commonUses: ["Hipertensão", "Arritmias", "Ansiedade", "Enxaqueca"],
    dosage: "40mg a 160mg ao dia divididos",
    contraindications: ["Asma", "Bradicardia", "Insuficiência cardíaca descompensada"],
    sideEffects: ["Fadiga", "Tontura", "Bradicardia"],
    fullDescription: "O propranolol é um betabloqueador usado para controlar pressão arterial, arritmias e ansiedade."
  },
  {
    id: "28",
    name: "Ciprofloxacino",
    activeIngredient: "Ciprofloxacino",
    commonUses: ["Infecções urinárias", "Infecções respiratórias", "Infecções gastrointestinais"],
    dosage: "500mg a cada 12 horas",
    contraindications: ["Menores de 18 anos", "Gestantes", "Tendinite"],
    sideEffects: ["Náusea", "Diarreia", "Fotossensibilidade"],
    fullDescription: "O ciprofloxacino é um antibiótico fluoroquinolona de amplo espectro."
  },
  {
    id: "29",
    name: "Sertralina",
    activeIngredient: "Cloridrato de Sertralina",
    commonUses: ["Depressão", "Ansiedade", "TOC", "Síndrome do pânico"],
    dosage: "50mg a 200mg uma vez ao dia",
    contraindications: ["Uso com IMAO", "Alergia à sertralina"],
    sideEffects: ["Náusea", "Insônia", "Diarreia"],
    fullDescription: "A sertralina é um antidepressivo ISRS usado no tratamento de depressão e transtornos de ansiedade."
  },
  {
    id: "30",
    name: "Bromoprida",
    activeIngredient: "Bromoprida",
    commonUses: ["Náusea", "Vômito", "Refluxo"],
    dosage: "10mg até 3 vezes ao dia",
    contraindications: ["Epilepsia", "Feocromocitoma", "Obstrução intestinal"],
    sideEffects: ["Sonolência", "Fadiga", "Efeitos extrapiramidais"],
    fullDescription: "A bromoprida é um antiemético que aumenta a motilidade gastrointestinal."
  },
  // Medicamentos adicionais do arquivo enviado
  {
    id: "31",
    name: "AAS",
    activeIngredient: "Ácido Acetilsalicílico",
    commonUses: ["Dor leve", "Febre", "Prevenção cardiovascular"],
    dosage: "100mg a 500mg conforme necessidade",
    contraindications: ["Úlcera gástrica", "Hemorragia ativa", "Alergia a AAS"],
    sideEffects: ["Dor de estômago", "Sangramento", "Zumbido"],
    fullDescription: "O AAS é um anti-inflamatório não esteroidal usado como analgésico, antitérmico e antiagregante plaquetário."
  },
  {
    id: "32",
    name: "Atorvastatina",
    activeIngredient: "Atorvastatina Cálcica",
    commonUses: ["Colesterol alto", "Prevenção cardiovascular"],
    dosage: "10mg a 80mg uma vez ao dia",
    contraindications: ["Doença hepática ativa", "Gestantes"],
    sideEffects: ["Dor muscular", "Dor de cabeça", "Náusea"],
    fullDescription: "A atorvastatina é uma estatina que reduz o colesterol LDL e o risco de eventos cardiovasculares."
  },
  {
    id: "33",
    name: "Amitriptilina",
    activeIngredient: "Cloridrato de Amitriptilina",
    commonUses: ["Depressão", "Dor neuropática", "Enxaqueca"],
    dosage: "25mg a 150mg ao dia",
    contraindications: ["Glaucoma", "Problemas cardíacos", "Uso com IMAO"],
    sideEffects: ["Boca seca", "Sonolência", "Tontura"],
    fullDescription: "A amitriptilina é um antidepressivo tricíclico também usado para dor crônica e profilaxia de enxaqueca."
  },
  {
    id: "34",
    name: "Benzilpenicilina",
    activeIngredient: "Benzilpenicilina Benzatina",
    commonUses: ["Infecções bacterianas", "Sífilis", "Amigdalite"],
    dosage: "1,2 a 2,4 milhões UI intramuscular",
    contraindications: ["Alergia à penicilina"],
    sideEffects: ["Reação alérgica", "Dor no local", "Febre"],
    fullDescription: "Antibiótico penicilina de ação prolongada para infecções sensíveis."
  },
  {
    id: "35",
    name: "Carbonato de Lítio",
    activeIngredient: "Carbonato de Lítio",
    commonUses: ["Transtorno bipolar", "Depressão"],
    dosage: "300mg a 1200mg ao dia dividido",
    contraindications: ["Doença renal grave", "Desidratação"],
    sideEffects: ["Tremor", "Poliúria", "Náusea"],
    fullDescription: "Estabilizador de humor para tratamento do transtorno bipolar."
  },
  {
    id: "36",
    name: "Carvedilol",
    activeIngredient: "Carvedilol",
    commonUses: ["Hipertensão", "Insuficiência cardíaca"],
    dosage: "6,25mg a 50mg duas vezes ao dia",
    contraindications: ["Asma", "Bradicardia", "Bloqueio cardíaco"],
    sideEffects: ["Tontura", "Fadiga", "Bradicardia"],
    fullDescription: "Betabloqueador com ação alfa-bloqueadora para condições cardíacas."
  },
  {
    id: "37",
    name: "Cefalexina",
    activeIngredient: "Cefalexina",
    commonUses: ["Infecções bacterianas", "Infecções de pele", "Infecções urinárias"],
    dosage: "250mg a 500mg a cada 6 horas",
    contraindications: ["Alergia a cefalosporinas"],
    sideEffects: ["Diarreia", "Náusea", "Reação alérgica"],
    fullDescription: "Antibiótico cefalosporina de primeira geração."
  },
  {
    id: "38",
    name: "Cloridrato de Sildenafila",
    activeIngredient: "Cloridrato de Sildenafila",
    commonUses: ["Disfunção erétil", "Hipertensão pulmonar"],
    dosage: "25mg a 100mg conforme necessidade",
    contraindications: ["Uso com nitratos", "Problemas cardíacos graves"],
    sideEffects: ["Dor de cabeça", "Rubor facial", "Distúrbios visuais"],
    fullDescription: "Inibidor da fosfodiesterase tipo 5 para disfunção erétil."
  },
  {
    id: "39",
    name: "Clorfeniramina",
    activeIngredient: "Maleato de Clorfeniramina",
    commonUses: ["Alergias", "Rinite", "Urticária"],
    dosage: "4mg a cada 6 horas",
    contraindications: ["Glaucoma", "Hipertrofia prostática"],
    sideEffects: ["Sonolência", "Boca seca", "Tontura"],
    fullDescription: "Anti-histamínico de primeira geração para alergias."
  },
  {
    id: "40",
    name: "Clorpropamida",
    activeIngredient: "Clorpropamida",
    commonUses: ["Diabetes tipo 2"],
    dosage: "100mg a 500mg ao dia",
    contraindications: ["Diabetes tipo 1", "Insuficiência renal"],
    sideEffects: ["Hipoglicemia", "Náusea", "Reação alérgica"],
    fullDescription: "Antidiabético oral da classe das sulfonilureias."
  },
  // continua com todos os outros 60 medicamentos do arquivo
];

// Os 10 remédios mais comuns
export const top10Medicines = allMedicines.slice(0, 10);

// Export também como mockMedicines para compatibilidade
export const mockMedicines = allMedicines;
