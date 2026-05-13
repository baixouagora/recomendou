import type { Product } from "@/lib/types";

type ProductExtras = Pick<Product, "specs" | "badge">;

const extras: Record<string, Record<number, ProductExtras>> = {
  "10-melhores-drones": {
    1: {
      badge: "Escolha do Editor",
      specs: { Câmera: "4K HDR 100fps", Autonomia: "~30 min", Peso: "<249g", Alcance: "20 km" },
    },
    2: {
      specs: { Câmera: "4K — sensor 1\"", Autonomia: "45 min", Peso: ">250g", Alcance: "20 km" },
    },
    3: {
      badge: "Mais Acessível DJI",
      specs: { Câmera: "4K UHD", Autonomia: "18 min", Peso: "135g", Alcance: "Limitado" },
    },
    4: {
      specs: { Câmera: "4K/60fps 48MP", Autonomia: "31 min", Peso: "<249g", Alcance: "—" },
    },
    5: {
      badge: "Melhor Custo-Benefício",
      specs: { Câmera: "4K HDR", Autonomia: "até 51 min", Peso: "249g", Alcance: "10 km" },
    },
    6: {
      specs: { Câmera: "4K/60 HDR", Autonomia: "—", Peso: ">250g", Alcance: "—" },
    },
    7: {
      specs: { Câmera: "5.1K Hasselblad", Autonomia: "46 min", Peso: ">250g", Alcance: "15 km" },
    },
    8: {
      specs: { Câmera: "2.7K", Autonomia: "31 min", Peso: "<249g", Alcance: "10 km" },
    },
    9: {
      specs: { Câmera: "4K (interpolado)", Autonomia: "25–28 min", Peso: ">250g", Alcance: "1,2 km" },
    },
    10: {
      specs: { Câmera: "720p–1080p", Autonomia: "~20 min", Peso: "Leve", Alcance: "~100m" },
    },
  },

  "melhores-patinetes-eletricos": {
    1: {
      badge: "Mais Veloz",
      specs: { Motor: "750W", "Vel. máx.": "45 km/h", Autonomia: "30–35 km", "Peso sup.": "120 kg" },
    },
    2: {
      specs: { Motor: "800W", "Vel. máx.": "40 km/h", Autonomia: "—", "Peso sup.": "—" },
    },
    3: {
      badge: "Escolha do Editor",
      specs: { Motor: "500W", "Vel. máx.": "32 km/h", Autonomia: "22 km", "Peso sup.": "120 kg" },
    },
    4: {
      specs: { Motor: "750W", "Vel. máx.": "40 km/h", Autonomia: "—", "Peso sup.": "—" },
    },
    5: {
      specs: { Motor: "500W", "Vel. máx.": "32 km/h", Autonomia: "32 km", "Peso sup.": "—" },
    },
    6: {
      specs: { Motor: "500W", "Vel. máx.": "32 km/h", Autonomia: "~22 km", "Peso sup.": "120 kg" },
    },
    7: {
      specs: { Motor: "500W", "Vel. máx.": "30 km/h", Autonomia: "~20 km", "Peso sup.": "120 kg" },
    },
    8: {
      specs: { Motor: "500W", "Vel. máx.": "~30 km/h", Autonomia: "—", "Peso sup.": "100 kg" },
    },
    9: {
      specs: { Motor: "500W", "Vel. máx.": "25–30 km/h", Autonomia: "28 km", "Peso sup.": "—" },
    },
    10: {
      badge: "Melhor Entrada",
      specs: { Motor: "350W", "Vel. máx.": "30 km/h", Autonomia: "15–25 km", "Peso sup.": "—" },
    },
  },

  "melhores-bicicletas-eletricas": {
    1: {
      badge: "Premium Nacional",
      specs: { Motor: "250W PAS", "Vel. máx.": "25 km/h", Autonomia: "25 km", Tipo: "MTB Aro 700" },
    },
    2: {
      specs: { Motor: "PAS integrado", "Vel. máx.": "25 km/h", Autonomia: "—", Tipo: "MTB Aro 29" },
    },
    3: {
      badge: "Melhor Desempenho",
      specs: { Motor: "1000W", "Vel. máx.": "50 km/h", Autonomia: "—", Tipo: "Fat Tire 20×4" },
    },
    4: {
      specs: { Motor: "1000W", "Vel. máx.": "~50 km/h", Autonomia: "60 km", Tipo: "Urbana" },
    },
    5: {
      specs: { Motor: "1000W", "Vel. máx.": "32–50 km/h", Autonomia: "50 km", Tipo: "Aro 20" },
    },
    6: {
      specs: { Motor: "750W", "Vel. máx.": "35–45 km/h", Autonomia: "30–50 km", Tipo: "Fat Tire 20" },
    },
    7: {
      specs: { Motor: "500W", "Vel. máx.": "~35 km/h", Autonomia: "—", Tipo: "Fat Tire 20×4" },
    },
    8: {
      badge: "Mais Portátil",
      specs: { Motor: "440W", "Vel. máx.": "25 km/h", Autonomia: "35 km", Tipo: "Dobrável 14\"" },
    },
    9: {
      specs: { Motor: "400W", "Vel. máx.": "25 km/h", Autonomia: "—", Tipo: "Dobrável 20\"" },
    },
    10: {
      specs: { Motor: "350W", "Vel. máx.": "—", Autonomia: "—", Tipo: "Urbana" },
    },
  },

  "melhores-cooktops-inducao": {
    1: {
      badge: "Escolha do Editor",
      specs: { Bocas: "4", Níveis: "18", Destaque: "Flexizone", Voltagem: "220V" },
    },
    2: {
      specs: { Bocas: "4 (78cm)", Níveis: "14", Destaque: "Unicook", Voltagem: "220V" },
    },
    3: {
      badge: "Melhor Custo-Benefício",
      specs: { Bocas: "4", Níveis: "9", Destaque: "Touch capacitivo", Voltagem: "220V" },
    },
    4: {
      specs: { Bocas: "4", Níveis: "—", Destaque: "CookSense", Voltagem: "220V" },
    },
    5: {
      specs: { Bocas: "4 (60cm)", Níveis: "9", Destaque: "PowerBoost 4 bocas", Voltagem: "220V" },
    },
    6: {
      specs: { Bocas: "4 (60cm)", Níveis: "14", Destaque: "Unicook compacto", Voltagem: "220V" },
    },
    7: {
      specs: { Bocas: "4", Níveis: "9", Destaque: "Turbo 2.6×", Voltagem: "220V" },
    },
    8: {
      specs: { Bocas: "4", Níveis: "—", Destaque: "Turbo Total 4 bocas", Voltagem: "220V" },
    },
    9: {
      badge: "Único 110V",
      specs: { Bocas: "2", Níveis: "—", Destaque: "Portátil 2 em 1", Voltagem: "127V" },
    },
    10: {
      specs: { Bocas: "1", Níveis: "9", Destaque: "Portátil compacto", Voltagem: "220V" },
    },
  },

  "melhores-lava-loucas": {
    1: {
      badge: "Escolha do Editor",
      specs: { Serviços: "14", Programas: "7", Destaque: "Higienizar 70°C", Voltagem: "127V" },
    },
    2: {
      badge: "Mais Inovadora",
      specs: { Serviços: "14", Programas: "—", Destaque: "Lava e Seca 50min", Voltagem: "220V" },
    },
    3: {
      specs: { Serviços: "14", Programas: "9", Destaque: "Wi-Fi + Open Dry", Voltagem: "127V" },
    },
    4: {
      specs: { Serviços: "14", Programas: "7", Destaque: "Design preto", Voltagem: "—" },
    },
    5: {
      specs: { Serviços: "14", Programas: "5", Destaque: "Acabamento preto", Voltagem: "127V" },
    },
    6: {
      badge: "Melhor Custo-Benefício",
      specs: { Serviços: "10", Programas: "—", Destaque: "Half Load + Smart Sensor", Voltagem: "220V" },
    },
    7: {
      specs: { Serviços: "8", Programas: "7", Destaque: "Higienizar 70°C compacta", Voltagem: "127V" },
    },
    8: {
      specs: { Serviços: "8", Programas: "—", Destaque: "Acqua Spray", Voltagem: "—" },
    },
  },
};

export function enrichProducts(slug: string, products: Product[]): Product[] {
  const map = extras[slug];
  if (!map) return products;
  return products.map((p) => ({ ...p, ...map[p.rank] }));
}
