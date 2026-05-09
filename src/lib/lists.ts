import { dronesMaio2026 } from "@/content/lists/drones-maio-2026";
import type { ProductList } from "@/lib/types";

export const allLists: ProductList[] = [dronesMaio2026];

export function getListBySlug(slug: string): ProductList | undefined {
  return allLists.find((list) => list.slug === slug);
}

export function getAllSlugs(): string[] {
  return allLists.map((list) => list.slug);
}
