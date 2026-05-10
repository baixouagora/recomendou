import Link from "next/link";
import { allLists } from "@/lib/lists";

export default function HomePage() {
  return (
    <div className="mx-auto w-full max-w-6xl px-6 pt-20 pb-24">
      <section className="max-w-3xl">
        <p className="text-sm font-medium uppercase tracking-widest text-brand">
          Recomendações inteligentes, compras satisfeitas
        </p>
        <h1 className="mt-4 text-5xl font-semibold tracking-tight text-foreground sm:text-6xl">
          Os melhores produtos, escolhidos com critério.
        </h1>
        <p className="mt-6 text-lg leading-8 text-muted">
          Comparativos honestos dos produtos mais relevantes em cada categoria,
          com prós, contras e link direto para Amazon e Mercado Livre. Sem
          enrolação, sem ranking patrocinado.
        </p>
      </section>

      <section className="mt-20">
        <h2 className="text-sm font-semibold uppercase tracking-widest text-muted">
          Listas mais recentes
        </h2>
        <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {allLists.map((list) => (
            <li key={list.slug}>
              <Link
                href={`/${list.slug}`}
                className="group block h-full rounded-3xl border border-border bg-background p-7 transition-colors hover:border-foreground/20"
              >
                <p className="text-xs font-semibold uppercase tracking-wider text-brand">
                  {list.category} · {list.monthYear}
                </p>
                <h3 className="mt-3 text-2xl font-semibold tracking-tight text-foreground">
                  {list.title}
                </h3>
                <p className="mt-3 line-clamp-3 text-sm leading-6 text-muted">
                  {list.metaDescription}
                </p>
                <span className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-foreground transition-transform group-hover:translate-x-0.5">
                  Ver lista <span aria-hidden>→</span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
