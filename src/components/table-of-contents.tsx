import type { Product } from "@/lib/types";

export function TableOfContents({ products }: { products: Product[] }) {
  return (
    <nav className="mt-6 flex gap-2 overflow-x-auto pb-2 scrollbar-none">
      {products.map((product) => (
        <a
          key={product.rank}
          href={`#produto-${product.rank}`}
          className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-border bg-surface px-3 py-1.5 text-sm text-foreground/80 transition-colors hover:border-brand hover:bg-brand-soft hover:text-brand"
        >
          <span className="font-bold text-brand">#{product.rank}</span>
          <span className="whitespace-nowrap">{product.name}</span>
        </a>
      ))}
    </nav>
  );
}
