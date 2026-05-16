import type { Product, ProductList } from "@/lib/types";

type ProductExtras = Pick<Product, "specs" | "badge" | "idealFor">;

const extras: Record<string, Record<number, ProductExtras>> = {
  "10-melhores-drones": {
    1: {
      badge: "Escolha do Editor",
      idealFor: "viajantes e criadores de conteúdo que querem qualidade sem burocracia ANAC",
      specs: { Câmera: "4K HDR 100fps", Autonomia: "~30 min", Peso: "<249g", Alcance: "20 km" },
    },
    2: {
      idealFor: "fotógrafos e videomakers profissionais",
      specs: { Câmera: "4K — sensor 1\"", Autonomia: "45 min", Peso: ">250g", Alcance: "20 km" },
    },
    3: {
      badge: "Mais Acessível DJI",
      idealFor: "iniciantes e quem quer drone para social media sem controle remoto",
      specs: { Câmera: "4K UHD", Autonomia: "18 min", Peso: "135g", Alcance: "Limitado" },
    },
    4: {
      idealFor: "quem voa próximo de pessoas ou em ambientes fechados",
      specs: { Câmera: "4K/60fps 48MP", Autonomia: "31 min", Peso: "<249g", Alcance: "—" },
    },
    5: {
      badge: "Melhor Custo-Benefício",
      idealFor: "quem quer longa autonomia DJI sem gastar muito",
      specs: { Câmera: "4K HDR", Autonomia: "até 51 min", Peso: "249g", Alcance: "10 km" },
    },
    6: {
      idealFor: "pilotos FPV e filmagens dinâmicas de esportes",
      specs: { Câmera: "4K/60 HDR", Autonomia: "—", Peso: ">250g", Alcance: "—" },
    },
    7: {
      idealFor: "fotografia profissional imobiliária, eventos e documentário",
      specs: { Câmera: "5.1K Hasselblad", Autonomia: "46 min", Peso: ">250g", Alcance: "15 km" },
    },
    8: {
      idealFor: "primeiro drone DJI com gimbal por menos de R$ 3k",
      specs: { Câmera: "2.7K", Autonomia: "31 min", Peso: "<249g", Alcance: "10 km" },
    },
    9: {
      idealFor: "aprender a voar sem investir em DJI",
      specs: { Câmera: "4K (interpolado)", Autonomia: "25–28 min", Peso: ">250g", Alcance: "1,2 km" },
    },
    10: {
      idealFor: "experimentar drone pela primeira vez por menos de R$ 400",
      specs: { Câmera: "720p–1080p", Autonomia: "~20 min", Peso: "Leve", Alcance: "~100m" },
    },
  },

  "melhores-patinetes-eletricos": {
    1: {
      badge: "Mais Veloz",
      idealFor: "trajetos longos e quem precisa de velocidade acima de 40 km/h",
      specs: { Motor: "750W", "Vel. máx.": "45 km/h", Autonomia: "30–35 km", "Peso sup.": "120 kg" },
    },
    2: {
      idealFor: "commuting diário casa-trabalho com conforto de banco",
      specs: { Motor: "800W", "Vel. máx.": "40 km/h", Autonomia: "—", "Peso sup.": "—" },
    },
    3: {
      badge: "Escolha do Editor",
      idealFor: "uso urbano diário de 5 a 10 km por trecho",
      specs: { Motor: "500W", "Vel. máx.": "32 km/h", Autonomia: "22 km", "Peso sup.": "120 kg" },
    },
    4: {
      idealFor: "quem busca specs altos por preço médio",
      specs: { Motor: "750W", "Vel. máx.": "40 km/h", Autonomia: "—", "Peso sup.": "—" },
    },
    5: {
      idealFor: "ruas com piso irregular e trajetos ida-e-volta sem recarga",
      specs: { Motor: "500W", "Vel. máx.": "32 km/h", Autonomia: "32 km", "Peso sup.": "—" },
    },
    6: {
      idealFor: "uso diário em cidades com calçada ruim e paralelepípedo",
      specs: { Motor: "500W", "Vel. máx.": "32 km/h", Autonomia: "~22 km", "Peso sup.": "120 kg" },
    },
    7: {
      idealFor: "quem combina patinete com metrô ou ônibus",
      specs: { Motor: "500W", "Vel. máx.": "30 km/h", Autonomia: "~20 km", "Peso sup.": "120 kg" },
    },
    8: {
      idealFor: "quem prefere pedalar sentado em trajetos longos",
      specs: { Motor: "500W", "Vel. máx.": "~30 km/h", Autonomia: "—", "Peso sup.": "100 kg" },
    },
    9: {
      idealFor: "alternativa mid-tier com boa autonomia por carga",
      specs: { Motor: "500W", "Vel. máx.": "25–30 km/h", Autonomia: "28 km", "Peso sup.": "—" },
    },
    10: {
      badge: "Melhor Entrada",
      idealFor: "estudantes e primeira experiência com patinete elétrico",
      specs: { Motor: "350W", "Vel. máx.": "30 km/h", Autonomia: "15–25 km", "Peso sup.": "—" },
    },
  },

  "melhores-bicicletas-eletricas": {
    1: {
      badge: "Premium Nacional",
      idealFor: "ciclistas que querem MTB premium com pós-venda nacional",
      specs: { Motor: "250W PAS", "Vel. máx.": "25 km/h", Autonomia: "25 km", Tipo: "MTB Aro 700" },
    },
    2: {
      idealFor: "ciclistas esportivos de fim de semana em trilha",
      specs: { Motor: "PAS integrado", "Vel. máx.": "25 km/h", Autonomia: "—", Tipo: "MTB Aro 29" },
    },
    3: {
      badge: "Melhor Desempenho",
      idealFor: "quem quer substituir moto em trajetos urbanos",
      specs: { Motor: "1000W", "Vel. máx.": "50 km/h", Autonomia: "—", Tipo: "Fat Tire 20×4" },
    },
    4: {
      idealFor: "commuting diário com bateria removível para recarregar no escritório",
      specs: { Motor: "1000W", "Vel. máx.": "~50 km/h", Autonomia: "60 km", Tipo: "Urbana" },
    },
    5: {
      idealFor: "usuários de maior estatura, carga pesada ou delivery",
      specs: { Motor: "1000W", "Vel. máx.": "32–50 km/h", Autonomia: "50 km", Tipo: "Aro 20" },
    },
    6: {
      idealFor: "estética fat tire premium por preço médio",
      specs: { Motor: "750W", "Vel. máx.": "35–45 km/h", Autonomia: "30–50 km", Tipo: "Fat Tire 20" },
    },
    7: {
      idealFor: "visual de moto elétrica com uso urbano honesto",
      specs: { Motor: "500W", "Vel. máx.": "~35 km/h", Autonomia: "—", Tipo: "Fat Tire 20×4" },
    },
    8: {
      badge: "Mais Portátil",
      idealFor: "apartamento pequeno ou quem combina com metrô",
      specs: { Motor: "440W", "Vel. máx.": "25 km/h", Autonomia: "35 km", Tipo: "Dobrável 14\"" },
    },
    9: {
      idealFor: "quem quer e-bike dentro da regulamentação 25 km/h",
      specs: { Motor: "400W", "Vel. máx.": "25 km/h", Autonomia: "—", Tipo: "Dobrável 20\"" },
    },
    10: {
      idealFor: "primeiro contato com bicicleta elétrica por preço entry",
      specs: { Motor: "350W", "Vel. máx.": "—", Autonomia: "—", Tipo: "Urbana" },
    },
  },

  "melhores-cooktops-inducao": {
    1: {
      badge: "Escolha do Editor",
      idealFor: "quem reforma cozinha e quer o melhor com Flexizone para panelas grandes",
      specs: { Bocas: "4", Níveis: "18", Destaque: "Flexizone", Voltagem: "220V" },
    },
    2: {
      idealFor: "cozinheiros que usam várias panelas grandes ao mesmo tempo",
      specs: { Bocas: "4 (78cm)", Níveis: "14", Destaque: "Unicook", Voltagem: "220V" },
    },
    3: {
      badge: "Melhor Custo-Benefício",
      idealFor: "reforma de cozinha com orçamento inteligente",
      specs: { Bocas: "4", Níveis: "9", Destaque: "Touch capacitivo", Voltagem: "220V" },
    },
    4: {
      idealFor: "uso intenso em família grande ou pousada",
      specs: { Bocas: "4", Níveis: "—", Destaque: "CookSense", Voltagem: "220V" },
    },
    5: {
      idealFor: "cozinha compacta que quer PowerBoost em todas as bocas",
      specs: { Bocas: "4 (60cm)", Níveis: "9", Destaque: "PowerBoost 4 bocas", Voltagem: "220V" },
    },
    6: {
      idealFor: "apartamento padrão com tecnologia Unicook em 60cm",
      specs: { Bocas: "4 (60cm)", Níveis: "14", Destaque: "Unicook compacto", Voltagem: "220V" },
    },
    7: {
      idealFor: "quem busca máxima potência por preço competitivo",
      specs: { Bocas: "4", Níveis: "9", Destaque: "Turbo 2.6×", Voltagem: "220V" },
    },
    8: {
      idealFor: "entrada honesta em indução com marca brasileira",
      specs: { Bocas: "4", Níveis: "—", Destaque: "Turbo Total 4 bocas", Voltagem: "220V" },
    },
    9: {
      badge: "Único 110V",
      idealFor: "casas sem 220V ou quem aluga e não pode reformar",
      specs: { Bocas: "2", Níveis: "—", Destaque: "Portátil 2 em 1", Voltagem: "127V" },
    },
    10: {
      idealFor: "testar indução antes de investir em 4 bocas",
      specs: { Bocas: "1", Níveis: "9", Destaque: "Portátil compacto", Voltagem: "220V" },
    },
  },

  "melhores-lava-loucas": {
    1: {
      badge: "Escolha do Editor",
      idealFor: "família com crianças que prioriza higienização a 70°C",
      specs: { Serviços: "14", Programas: "7", Destaque: "Higienizar 70°C", Voltagem: "127V" },
    },
    2: {
      badge: "Mais Inovadora",
      idealFor: "rotina corrida — louça limpa e seca em 50 minutos",
      specs: { Serviços: "14", Programas: "—", Destaque: "Lava e Seca 50min", Voltagem: "220V" },
    },
    3: {
      idealFor: "quem quer controle pelo celular e secagem automática",
      specs: { Serviços: "14", Programas: "9", Destaque: "Wi-Fi + Open Dry", Voltagem: "127V" },
    },
    4: {
      idealFor: "cozinha planejada com design moderno em tons escuros",
      specs: { Serviços: "14", Programas: "7", Destaque: "Design preto", Voltagem: "—" },
    },
    5: {
      idealFor: "estética preta sem preço de premium Electrolux",
      specs: { Serviços: "14", Programas: "5", Destaque: "Acabamento preto", Voltagem: "127V" },
    },
    6: {
      badge: "Melhor Custo-Benefício",
      idealFor: "família 2-3 pessoas sem exagerar na capacidade",
      specs: { Serviços: "10", Programas: "—", Destaque: "Half Load + Smart Sensor", Voltagem: "220V" },
    },
    7: {
      idealFor: "apartamento ou casal com prioridade em higienização",
      specs: { Serviços: "8", Programas: "7", Destaque: "Higienizar 70°C compacta", Voltagem: "127V" },
    },
    8: {
      idealFor: "apartamento ou casal que prefere marca Brastemp",
      specs: { Serviços: "8", Programas: "—", Destaque: "Acqua Spray", Voltagem: "—" },
    },
  },
};

const authors: Record<string, ProductList["author"]> = {
  "10-melhores-drones": { name: "Lucas Andrade", role: "Especialista em drones e tecnologia aérea" },
  "melhores-patinetes-eletricos": { name: "Bruno Mattos", role: "Especialista em mobilidade urbana" },
  "melhores-bicicletas-eletricas": { name: "Bruno Mattos", role: "Especialista em mobilidade urbana" },
  "melhores-cooktops-inducao": { name: "Camila Rocha", role: "Especialista em eletrodomésticos" },
  "melhores-lava-loucas": { name: "Camila Rocha", role: "Especialista em eletrodomésticos" },
  "melhores-adegas-climatizadas": { name: "Rafael Tonon", role: "Especialista em vinhos e refrigeração" },
};

export function enrichProducts(slug: string, products: Product[]): Product[] {
  const map = extras[slug];
  if (!map) return products;
  return products.map((p) => ({ ...p, ...map[p.rank] }));
}

export function getAuthor(slug: string): ProductList["author"] | undefined {
  return authors[slug];
}
