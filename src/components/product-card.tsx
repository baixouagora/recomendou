import Image from "next/image";
import { AffiliateButtons } from "@/components/affiliate-buttons";
import type { Product } from "@/lib/types";

export function ProductCard({ product }: { product: Product }) {
  return (
    <article
      id={`produto-${product.rank}`}
      className="scroll-mt-24 rounded-3xl border border-border bg-background p-6 sm:p-10"
    >
      <div className="grid gap-8 md:grid-cols-[260px_1fr]">
        <div className="flex flex-col gap-4">
          <span className="inline-flex h-9 w-fit items-center rounded-full bg-brand-soft px-4 text-sm font-semibold text-brand">
            #{product.rank}
          </span>
          <div className="relative aspect-square overflow-hidden rounded-2xl bg-surface">
            <Image
              src={product.imageUrl}
              alt={product.name}
              fill
              sizes="(max-width: 768px) 100vw, 260px"
              className="object-contain p-4"
            />
          </div>
        </div>

        <div className="flex flex-col gap-5">
          <header>
            <p className="text-sm font-medium text-brand">{product.tagline}</p>
            <h3 className="mt-1 text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
              {product.name}
            </h3>
            {product.rating !== undefined && (
              <p className="mt-2 text-sm text-muted">
                <span className="font-semibold text-foreground">
                  {product.rating.toFixed(1)}
                </span>
                {" / 5"}
                {product.reviewCount && (
                  <span> · {product.reviewCount.toLocaleString("pt-BR")} avaliações</span>
                )}
              </p>
            )}
          </header>

          <p className="text-base leading-7 text-foreground/85">{product.description}</p>

          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-muted">
                Pontos fortes
              </h4>
              <ul className="mt-2 space-y-1.5 text-sm text-foreground/90">
                {product.pros.map((p) => (
                  <li key={p} className="flex gap-2">
                    <span aria-hidden className="text-brand">✓</span>
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-muted">
                Atenção
              </h4>
              <ul className="mt-2 space-y-1.5 text-sm text-foreground/90">
                {product.cons.map((c) => (
                  <li key={c} className="flex gap-2">
                    <span aria-hidden className="text-muted">−</span>
                    <span>{c}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <AffiliateButtons
            amazonAsin={product.amazonAsin}
            amazonUrl={product.amazonUrl}
            mercadoLivreUrl={product.mercadoLivreUrl}
          />
        </div>
      </div>
    </article>
  );
}
