import type { Product } from "@/lib/types";

export function TableOfContents({ products }: { products: Product[] }) {
  return (
    <nav className="mt-8 rounded-2xl border border-border bg-surface p-5">
      <p className="text-xs font-semibold uppercase tracking-widest text-muted">
        Nesta lista
      </p>
      <ol className="mt-3 grid gap-1.5 sm:grid-cols-2">
        {products.map((product) => (
          <li key={product.rank}>
            <a
              href={`#produto-${product.rank}`}
              className="group flex items-center gap-2 rounded-lg px-2 py-1.5 text-sm text-foreground/80 transition-colors hover:bg-brand-soft hover:text-brand"
            >
              <span className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-soft text-xs font-bold text-brand transition-colors group-hover:bg-brand group-hover:text-white">
                {product.rank}
              </span>
              <span className="truncate">{product.name}</span>
              {product.badge && (
                <span className="ml-auto shrink-0 text-xs text-brand">
                  {product.badge}
                </span>
              )}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
