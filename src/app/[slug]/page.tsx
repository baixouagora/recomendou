import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProductCard } from "@/components/product-card";
import { getAllSlugs, getListBySlug } from "@/lib/lists";

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
  const top3 = list.products.slice(0, 3);

  return (
    <div className="mx-auto w-full max-w-4xl px-6 pt-8 pb-24 sm:pt-10">
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

        <nav
          aria-label="Top 3 selecionados"
          className="mb-10 rounded-2xl border border-border bg-surface px-5 py-4"
        >
          <p className="text-xs font-semibold uppercase tracking-widest text-muted">
            Top 3
          </p>
          <ol className="mt-2 grid gap-1.5 sm:grid-cols-3">
            {top3.map((p) => (
              <li key={p.rank} className="flex items-baseline gap-2 text-sm text-foreground/90">
                <span className="font-mono text-xs text-brand">#{p.rank}</span>
                <a
                  href={`#produto-${p.rank}`}
                  className="truncate transition-colors hover:text-brand"
                >
                  {p.name}
                </a>
              </li>
            ))}
          </ol>
        </nav>

        <section className="space-y-10">
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

        <p className="mt-16 rounded-2xl bg-surface p-6 text-xs leading-6 text-muted">
          Divulgação: como participantes do programa de associados Amazon e
          afiliados Mercado Livre, recebemos comissão por compras qualificadas
          feitas através dos links acima — sem custo extra pra você.
        </p>
      </article>
    </div>
  );
}
