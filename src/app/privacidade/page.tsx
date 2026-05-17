import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Privacidade",
  description:
    "Como o recomendou.com.br trata dados, cookies e analytics, conforme a LGPD (Lei 13.709/2018).",
  alternates: { canonical: "/privacidade" },
};

export default function PrivacidadePage() {
  return (
    <div className="mx-auto w-full max-w-3xl px-6 pt-12 pb-24 sm:pt-16">
      <article>
        <header>
          <p className="text-sm font-medium uppercase tracking-widest text-brand">
            Legal
          </p>
          <h1 className="mt-3 text-4xl font-semibold leading-tight tracking-tight text-foreground sm:text-5xl">
            Política de Privacidade
          </h1>
          <p className="mt-4 text-sm text-muted">
            Última atualização: 16 de maio de 2026
          </p>
        </header>

        <div className="mt-12 space-y-8 text-base leading-8 text-foreground/90">
          <section className="space-y-3">
            <h2 className="text-xl font-semibold tracking-tight text-foreground">
              1. Quem é o controlador dos dados
            </h2>
            <p>
              O site recomendou.com.br é operado pela <strong>Woork</strong> —
              W P Garcia LTDA, inscrita no CNPJ sob nº 60.187.344/0001-83
              (&quot;nós&quot;). Para qualquer questão relativa a dados pessoais
              ou a esta política, o canal oficial é o e-mail{" "}
              <a
                href="mailto:contato@woork.com.br"
                className="text-brand hover:underline"
              >
                contato@woork.com.br
              </a>
              .
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold tracking-tight text-foreground">
              2. Que dados coletamos
            </h2>
            <p>
              O recomendou.com.br é um site de conteúdo editorial. Não exigimos
              cadastro, não temos login, e não coletamos nome, CPF, endereço ou
              dados de pagamento — não realizamos vendas. Os dados tratados são:
            </p>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                <strong>Dados de navegação anônimos:</strong> via ferramentas de
                analytics e mensuração de campanhas (ex.: Google Analytics /
                Google Ads), coletamos páginas visitadas, origem do acesso,
                tipo de dispositivo e comportamento de navegação de forma
                agregada e pseudonimizada.
              </li>
              <li>
                <strong>Cookies:</strong> usados para mensuração de audiência e
                de eficácia de anúncios. Você pode desativá-los nas
                configurações do seu navegador.
              </li>
              <li>
                <strong>Contato voluntário:</strong> se você nos escrever por
                e-mail, tratamos o conteúdo da mensagem e o seu endereço de
                e-mail apenas para responder à solicitação.
              </li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold tracking-tight text-foreground">
              3. Finalidade e base legal
            </h2>
            <p>
              Tratamos esses dados com base no <strong>legítimo interesse</strong>{" "}
              (art. 7º, IX da LGPD) para entender a audiência, melhorar o
              conteúdo e mensurar campanhas de divulgação; e no{" "}
              <strong>consentimento</strong> para cookies não essenciais. Não
              vendemos nem compartilhamos seus dados com terceiros para fins de
              marketing próprio.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold tracking-tight text-foreground">
              4. Links para lojas parceiras
            </h2>
            <p>
              Ao clicar em &quot;Ver preço na Amazon&quot; ou &quot;Ver preço no
              Mercado Livre&quot;, você é redirecionado para o site da
              respectiva loja, que possui política de privacidade própria. A
              partir desse clique, o tratamento de seus dados passa a ser
              regido pela política da Amazon ou do Mercado Livre — não temos
              controle nem acesso ao que ocorre nessas plataformas.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold tracking-tight text-foreground">
              5. Compartilhamento com operadores
            </h2>
            <p>
              Utilizamos serviços de terceiros que atuam como operadores de
              dados: Google (Analytics e Ads) para mensuração, e Vercel para
              hospedagem. Esses serviços tratam dados conforme suas próprias
              políticas e em conformidade com a legislação aplicável.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold tracking-tight text-foreground">
              6. Seus direitos (LGPD)
            </h2>
            <p>
              Você pode solicitar, a qualquer momento, confirmação de
              tratamento, acesso, correção, anonimização, portabilidade ou
              eliminação dos seus dados, além de revogar consentimento. Basta
              escrever para{" "}
              <a
                href="mailto:contato@woork.com.br"
                className="text-brand hover:underline"
              >
                contato@woork.com.br
              </a>{" "}
              — respondemos no prazo legal.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold tracking-tight text-foreground">
              7. Alterações nesta política
            </h2>
            <p>
              Esta política pode ser atualizada para refletir mudanças legais
              ou operacionais. A data de &quot;última atualização&quot; no topo
              indica a versão vigente. Recomendamos revisão periódica.
            </p>
          </section>
        </div>
      </article>
    </div>
  );
}
