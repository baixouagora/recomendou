import type { Product } from "@/lib/types";

export function ComparisonTable({ products }: { products: Product[] }) {
  const specKeys = [
    ...new Set(products.flatMap((p) => Object.keys(p.specs ?? {}))),
  ];
  if (specKeys.length === 0) return null;

  return (
    <section className="mt-10">
      <h2 className="text-2xl font-semibold tracking-tight text-foreground">
        Comparativo rápido
      </h2>
      <div className="mt-4 overflow-x-auto rounded-2xl border border-border">
        <table className="w-full min-w-[540px] text-sm">
          <thead>
            <tr className="border-b border-border bg-surface">
              <th className="px-4 py-3 text-left font-semibold text-foreground">
                Modelo
              </th>
              {specKeys.map((key) => (
                <th
                  key={key}
                  className="whitespace-nowrap px-4 py-3 text-left font-semibold text-foreground"
                >
                  {key}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr
                key={product.rank}
                className="border-b border-border last:border-0 transition-colors hover:bg-surface/50"
              >
                <td className="px-4 py-3">
                  <a
                    href={`#produto-${product.rank}`}
                    className="group flex items-center gap-2"
                  >
                    <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-soft text-xs font-bold text-brand">
                      {product.rank}
                    </span>
                    <span className="font-medium text-foreground transition-colors group-hover:text-brand">
                      {product.name}
                    </span>
                  </a>
                  {product.badge && (
                    <span className="mt-1 ml-8 inline-flex rounded-full bg-brand-soft px-2 py-0.5 text-xs font-semibold text-brand">
                      {product.badge}
                    </span>
                  )}
                </td>
                {specKeys.map((key) => (
                  <td
                    key={key}
                    className="whitespace-nowrap px-4 py-3 text-foreground/80"
                  >
                    {product.specs?.[key] ?? "—"}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
