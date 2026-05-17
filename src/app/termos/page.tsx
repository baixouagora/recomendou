import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Termos de Uso",
  description:
    "Termos de uso do recomendou.com.br — site editorial independente de recomendação de produtos com links de afiliado.",
  alternates: { canonical: "/termos" },
};

export default function TermosPage() {
  return (
    <div className="mx-auto w-full max-w-3xl px-6 pt-12 pb-24 sm:pt-16">
      <article>
        <header>
          <p className="text-sm font-medium uppercase tracking-widest text-brand">
            Legal
          </p>
          <h1 className="mt-3 text-4xl font-semibold leading-tight tracking-tight text-foreground sm:text-5xl">
            Termos de Uso
          </h1>
          <p className="mt-4 text-sm text-muted">
            Última atualização: 16 de maio de 2026
          </p>
        </header>

        <div className="mt-12 space-y-8 text-base leading-8 text-foreground/90">
          <section className="space-y-3">
            <h2 className="text-xl font-semibold tracking-tight text-foreground">
              1. Identificação
            </h2>
            <p>
              O recomendou.com.br (&quot;site&quot;) é operado pela{" "}
              <strong>Woork</strong> — W P Garcia LTDA, CNPJ
              60.187.344/0001-83. Contato:{" "}
              <a
                href="mailto:contato@woork.com.br"
                className="text-brand hover:underline"
              >
                contato@woork.com.br
              </a>
              . Ao acessar e utilizar o site, você concorda com estes Termos.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold tracking-tight text-foreground">
              2. Natureza do site
            </h2>
            <p>
              Este é um <strong>site editorial independente</strong> de
              recomendação e comparação de produtos. <strong>Não vendemos
              produtos, não processamos pagamentos e não somos uma loja.</strong>{" "}
              Não temos qualquer vínculo societário, de representação ou
              parceria comercial exclusiva com Amazon, Mercado Livre ou
              fabricantes. Não nos passamos por nenhuma dessas marcas — apenas
              direcionamos o leitor às lojas oficiais onde a compra é feita por
              conta e risco do usuário, sob os termos dessas lojas.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold tracking-tight text-foreground">
              3. Modelo de afiliado (transparência)
            </h2>
            <p>
              Participamos do Programa de Associados da Amazon e do Programa de
              Afiliados do Mercado Livre. Quando um leitor compra através dos
              nossos links, podemos receber uma comissão da loja —{" "}
              <strong>sem qualquer custo adicional para o comprador</strong>. O
              preço pago é o mesmo de quem acessa a loja diretamente. Essa
              comissão financia a operação editorial e não influencia nossos
              critérios de avaliação: produtos são selecionados por mérito
              técnico, não por comissão.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold tracking-tight text-foreground">
              4. Conteúdo e isenção de garantias
            </h2>
            <p>
              As análises refletem nossa avaliação editorial com base em
              pesquisa, especificações públicas e conhecimento de mercado na
              data de publicação. Preços, disponibilidade e especificações
              mudam constantemente nas lojas — sempre confirme essas
              informações na página da loja antes de comprar. Não garantimos
              que o conteúdo esteja livre de erros e não nos responsabilizamos
              por decisões de compra tomadas com base nas recomendações.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold tracking-tight text-foreground">
              5. Links externos
            </h2>
            <p>
              O site contém links para sites de terceiros (Amazon, Mercado
              Livre). Não controlamos nem nos responsabilizamos pelo conteúdo,
              políticas, preços ou práticas desses sites. O acesso a eles é de
              responsabilidade do usuário.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold tracking-tight text-foreground">
              6. Propriedade intelectual
            </h2>
            <p>
              Os textos editoriais, análises e a identidade visual do
              recomendou.com.br são de propriedade da Woork. Imagens de
              produtos pertencem aos respectivos fabricantes/lojas e são
              exibidas para fins de identificação no contexto de recomendação.
              Reprodução do conteúdo editorial sem autorização é vedada.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold tracking-tight text-foreground">
              7. Privacidade
            </h2>
            <p>
              O tratamento de dados é descrito na nossa{" "}
              <a href="/privacidade" className="text-brand hover:underline">
                Política de Privacidade
              </a>
              , parte integrante destes Termos.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold tracking-tight text-foreground">
              8. Foro
            </h2>
            <p>
              Estes Termos são regidos pela legislação brasileira. Eventuais
              controvérsias serão dirimidas no foro da comarca da sede da
              empresa operadora, salvo disposição legal em contrário aplicável
              ao consumidor.
            </p>
          </section>
        </div>
      </article>
    </div>
  );
}
