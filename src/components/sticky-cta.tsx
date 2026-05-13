"use client";

import { useEffect, useState } from "react";
import { reportConversion } from "@/lib/gtag";

type StickyProduct = {
  rank: number;
  name: string;
  amazonHref: string | null;
  mercadoLivreUrl?: string;
};

const btnClass =
  "flex-1 rounded-full px-3 py-2.5 text-center text-sm font-bold text-white transition-transform active:scale-[0.97]";

export function StickyCTA({ products }: { products: StickyProduct[] }) {
  const [activeRank, setActiveRank] = useState<number | null>(null);

  useEffect(() => {
    const elements = products
      .map((p) => document.getElementById(`produto-${p.rank}`))
      .filter(Boolean) as HTMLElement[];

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const rank = Number(entry.target.id.replace("produto-", ""));
            setActiveRank(rank);
          }
        }
      },
      { rootMargin: "-30% 0px -50% 0px" },
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [products]);

  const active = products.find((p) => p.rank === activeRank);
  if (!active) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-30 border-t border-border bg-background/95 p-3 backdrop-blur-sm md:hidden">
      <p className="mb-2 truncate text-center text-xs font-semibold text-muted">
        #{active.rank} {active.name}
      </p>
      <div className="flex gap-2">
        {active.amazonHref && (
          <a
            href={active.amazonHref}
            target="_blank"
            rel="sponsored noopener noreferrer"
            onClick={() => reportConversion("amazon")}
            className={`${btnClass} bg-brand hover:bg-[color-mix(in_srgb,var(--brand)_88%,black)]`}
          >
            Ver na Amazon
          </a>
        )}
        {active.mercadoLivreUrl && (
          <a
            href={active.mercadoLivreUrl}
            target="_blank"
            rel="sponsored noopener noreferrer"
            onClick={() => reportConversion("mercadolivre")}
            className={`${btnClass} bg-brand hover:bg-[color-mix(in_srgb,var(--brand)_88%,black)]`}
          >
            Ver no ML
          </a>
        )}
      </div>
    </div>
  );
}
