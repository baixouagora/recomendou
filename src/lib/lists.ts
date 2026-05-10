import { dronesList } from "@/content/lists/drones";
import { patinetesEletricosList } from "@/content/lists/patinetes-eletricos";
import { bicicletasEletricasList } from "@/content/lists/bicicletas-eletricas";
import type { ProductList } from "@/lib/types";

export const allLists: ProductList[] = [
  dronesList,
  patinetesEletricosList,
  bicicletasEletricasList,
];

export function getListBySlug(slug: string): ProductList | undefined {
  return allLists.find((list) => list.slug === slug);
}

export function getAllSlugs(): string[] {
  return allLists.map((list) => list.slug);
}
