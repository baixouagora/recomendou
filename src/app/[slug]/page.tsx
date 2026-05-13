import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProductCard } from "@/components/product-card";
import { getAllSlugs, getListBySlug } from "@/lib/lists";
import { buildAmazonUrl } from "@/lib/affiliate";
import type { ProductList } from "@/lib/types";

function buildJsonLd(list: ProductList, baseUrl: string) {
  const itemList = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: list.title,
    description: list.metaDescription,
    numberOfItems: list.products.length,
    itemListElement: list.products.map((p) => ({
      "@type": "ListItem",
      position: p.rank,
      item: {
        "@type": "Product",
        name: p.name,
        description: p.tagline,
        image: p.imageUrl.startsWith("http") ? p.imageUrl : `${baseUrl}${p.imageUrl}`,
        url:
          buildAmazonUrl({ asin: p.amazonAsin, url: p.amazonUrl }) ??
          p.mercadoLivreUrl ??
          undefined,
      },
    })),
  };
  const faqPage = list.faq && list.faq.length > 0
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: list.faq.map((q) => ({
          "@type": "Question",
          name: q.question,
          acceptedAnswer: { "@type": "Answer", text: q.answer },
        })),
      }
    : null;
  return [itemList, faqPage].filter(Boolean);
}

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata(
  props: PageProps<"/[slug]">,
): Promise<Metadata> {
  const { slug } = await props.params;
  const list = getListBySlug(slug);
  if (!list) return {};
  return {
    title: list.title,
    description: list.metaDescription,
    alternates: { canonical: `/${list.slug}` },
    openGraph: {
      title: list.title,
      description: list.metaDescription,
      type: "article",
      locale: "pt_BR",
      publishedTime: list.publishedAt,
      modifiedTime: list.updatedAt,
    },
  };
}

const dateFormatter = new Intl.DateTimeFormat("pt-BR", {
  day: "2-digit",
  month: "long",
  year: "numeric",
});

export default async function ListPage(props: PageProps<"/[slug]">) {
  const { slug } = await props.params;
  const list = getListBySlug(slug);
  if (!list) notFound();

  const updatedAt = dateFormatter.format(new Date(list.updatedAt));
  const jsonLd = buildJsonLd(list, "https://recomendou.com.br");

  return (
    <div className="mx-auto w-full max-w-4xl px-6 pt-8 pb-24 sm:pt-10">
      {jsonLd.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
      <article>
        <header className="pb-6">
          <p className="text-xs font-semibold uppercase tracking-widest text-brand">
            {list.category} · {list.monthYear} · Atualizado em {updatedAt}
          </p>
          <h1 className="mt-3 text-3xl font-semibold leading-tight tracking-tight text-foreground sm:text-4xl">
            {list.title}
          </h1>
          <p className="mt-4 text-base leading-7 text-muted sm:text-lg sm:leading-8">
            {list.metaDescription}
          </p>
        </header>

        <section className="mt-10 space-y-10">
          {list.products.map((product) => (
            <ProductCard key={product.rank} product={product} />
          ))}
        </section>

        <section className="mt-20 border-t border-border pt-12">
          <h2 className="text-2xl font-semibold tracking-tight text-foreground">
            Como escolhemos esta lista
          </h2>
          <div className="mt-4 space-y-5 text-base leading-8 text-foreground/90">
            {list.intro.split("\n\n").map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>
        </section>

        <section className="mt-12 border-t border-border pt-12">
          <h2 className="text-2xl font-semibold tracking-tight text-foreground">
            Em resumo
          </h2>
          <p className="mt-4 text-base leading-8 text-foreground/90">
            {list.conclusion}
          </p>
        </section>

        {list.faq && list.faq.length > 0 && (
          <section className="mt-12 border-t border-border pt-12">
            <h2 className="text-2xl font-semibold tracking-tight text-foreground">
              Perguntas frequentes
            </h2>
            <dl className="mt-6 space-y-6">
              {list.faq.map((item) => (
                <div key={item.question}>
                  <dt className="font-semibold text-foreground">{item.question}</dt>
                  <dd className="mt-2 text-base leading-7 text-foreground/85">
                    {item.answer}
                  </dd>
                </div>
              ))}
            </dl>
          </section>
        )}

      </article>
    </div>
  );
}
