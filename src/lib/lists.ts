import { dronesList } from "@/content/lists/drones";
import { patinetesEletricosList } from "@/content/lists/patinetes-eletricos";
import { bicicletasEletricasList } from "@/content/lists/bicicletas-eletricas";
import { cooktopsInducaoList } from "@/content/lists/cooktops-inducao";
import { lavaLoucasList } from "@/content/lists/lava-loucas";
import type { ProductList } from "@/lib/types";

export const allLists: ProductList[] = [
  dronesList,
  patinetesEletricosList,
  bicicletasEletricasList,
  cooktopsInducaoList,
  lavaLoucasList,
];

export function getListBySlug(slug: string): ProductList | undefined {
  return allLists.find((list) => list.slug === slug);
}

export function getAllSlugs(): string[] {
  return allLists.map((list) => list.slug);
}
