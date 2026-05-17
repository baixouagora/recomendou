import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contato",
  description:
    "Fale com o recomendou.com.br. Correções de análises, sugestões de categoria, ou assuntos sobre o site.",
  alternates: { canonical: "/contato" },
};

export default function ContatoPage() {
  return (
    <div className="mx-auto w-full max-w-3xl px-6 pt-12 pb-24 sm:pt-16">
      <article>
        <header>
          <p className="text-sm font-medium uppercase tracking-widest text-brand">
            Contato
          </p>
          <h1 className="mt-3 text-4xl font-semibold leading-tight tracking-tight text-foreground sm:text-5xl">
            Fale com a gente
          </h1>
          <p className="mt-6 text-lg leading-8 text-muted">
            Encontrou um erro numa análise? Tem sugestão de categoria? Quer
            corrigir a especificação de um produto que você possui? A gente lê
            tudo — feedback de leitor mantém as listas úteis.
          </p>
        </header>

        <section className="mt-12 rounded-2xl border border-border bg-surface p-8">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-muted">
            E-mail
          </h2>
          <a
            href="mailto:contato@woork.com.br"
            className="mt-2 block text-2xl font-semibold tracking-tight text-brand hover:underline"
          >
            contato@woork.com.br
          </a>
          <p className="mt-4 text-sm leading-6 text-muted">
            Respondemos em até 3 dias úteis. Para correções de conteúdo, inclua
            o link da página e o ponto específico — agilizamos a verificação e a
            atualização.
          </p>
        </section>

        <section className="mt-10 space-y-4 text-base leading-8 text-foreground/90">
          <h2 className="text-2xl font-semibold tracking-tight text-foreground">
            Quem opera este site
          </h2>
          <p>
            O recomendou.com.br é um site editorial independente operado pela{" "}
            <strong>Woork</strong> (W P Garcia LTDA, CNPJ 60.187.344/0001-83),
            empresa brasileira que mantém sites de recomendação de produtos em
            categorias específicas. Não vendemos produtos e não temos vínculo
            societário com Amazon, Mercado Livre ou qualquer fabricante — somos
            participantes dos programas de afiliados dessas plataformas.
          </p>
          <p>
            Assuntos comerciais, jurídicos ou de imprensa também pelo mesmo
            e-mail acima.
          </p>
        </section>
      </article>
    </div>
  );
}
