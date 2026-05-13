"use client";

import { buildAmazonUrl } from "@/lib/affiliate";
import { reportConversion } from "@/lib/gtag";

type Props = {
  amazonAsin?: string;
  amazonUrl?: string;
  mercadoLivreUrl?: string;
};

const buttonClass =
  "inline-flex min-h-12 flex-1 items-center justify-center rounded-full bg-brand px-5 py-2 text-center text-base font-bold leading-tight text-white shadow-sm transition-transform hover:scale-[1.02] hover:bg-[color-mix(in_srgb,var(--brand)_88%,black)] active:scale-[0.99] sm:text-lg";

export function AffiliateButtons({ amazonAsin, amazonUrl, mercadoLivreUrl }: Props) {
  const amazonHref = buildAmazonUrl({ asin: amazonAsin, url: amazonUrl });

  return (
    <div className="flex flex-col gap-3 sm:flex-row">
      {amazonHref && (
        <a
          href={amazonHref}
          target="_blank"
          rel="sponsored noopener noreferrer"
          className={buttonClass}
          onClick={() => reportConversion("amazon")}
        >
          Ver Preço{" "}<br className="hidden sm:inline" />na Amazon
        </a>
      )}
      {mercadoLivreUrl && (
        <a
          href={mercadoLivreUrl}
          target="_blank"
          rel="sponsored noopener noreferrer"
          className={buttonClass}
          onClick={() => reportConversion("mercadolivre")}
        >
          Ver Preço no{" "}<br className="hidden sm:inline" />Mercado Livre
        </a>
      )}
    </div>
  );
}
