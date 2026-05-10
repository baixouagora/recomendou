import { dronesList } from "@/content/lists/drones";
import type { ProductList } from "@/lib/types";

export const allLists: ProductList[] = [dronesList];

export function getListBySlug(slug: string): ProductList | undefined {
  return allLists.find((list) => list.slug === slug);
}

export function getAllSlugs(): string[] {
  return allLists.map((list) => list.slug);
}
