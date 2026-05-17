import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sobre o recomendou",
  description:
    "Quem é o recomendou.com.br, como escolhemos os produtos das nossas listas, e por que você pode confiar nas nossas recomendações.",
  alternates: { canonical: "/sobre" },
};

export default function SobrePage() {
  return (
    <div className="mx-auto w-full max-w-3xl px-6 pt-12 pb-24 sm:pt-16">
      <article className="prose-recomendou">
        <header>
          <p className="text-sm font-medium uppercase tracking-widest text-brand">
            Sobre nós
          </p>
          <h1 className="mt-3 text-4xl font-semibold leading-tight tracking-tight text-foreground sm:text-5xl">
            Recomendações inteligentes, compras satisfeitas.
          </h1>
          <p className="mt-6 text-lg leading-8 text-muted">
            Somos o recomendou.com.br. Construímos listas comparativas dos
            melhores produtos disponíveis no Brasil pra ajudar você a comprar
            com critério em vez de impulso.
          </p>
        </header>

        <section className="mt-14 rounded-2xl border border-border bg-surface p-8">
          <h2 className="text-2xl font-semibold tracking-tight text-foreground">
            Quem somos
          </h2>
          <p className="mt-4 text-base leading-8 text-foreground/90">
            O recomendou.com.br é um site editorial independente operado pela{" "}
            <strong>Woork</strong> (W P Garcia LTDA, CNPJ 60.187.344/0001-83),
            empresa brasileira que mantém sites de recomendação de produtos em
            categorias específicas. <strong>Não somos uma loja</strong> — não
            vendemos produtos, não processamos pagamentos e não temos vínculo
            societário com Amazon, Mercado Livre ou fabricantes. Somos um
            veículo de conteúdo que vive de comissão de afiliado, com
            independência editorial declarada. Contato:{" "}
            <a
              href="mailto:contato@woork.com.br"
              className="text-brand hover:underline"
            >
              contato@woork.com.br
            </a>
            .
          </p>
        </section>

        <section className="mt-14 space-y-6 text-base leading-8 text-foreground/90">
          <h2 className="text-2xl font-semibold tracking-tight text-foreground">
            Nossa missão
          </h2>
          <p>
            Comprar online no Brasil em 2026 é confuso. Cada categoria tem dezenas
            de marcas, dezenas de variantes por marca, e milhares de reviews
            de pessoas com necessidades completamente diferentes da sua. A
            decisão certa de compra costuma exigir 2-3 horas de pesquisa que
            ninguém tem.
          </p>
          <p>
            O recomendou existe pra resolver esse problema. Pegamos uma
            categoria por vez — drones, patinetes elétricos, bicicletas
            elétricas, cooktops por indução, lava-louças e assim por diante —
            estudamos o mercado brasileiro, e organizamos os melhores produtos
            em uma lista com critérios claros, prós e contras explícitos e
            links diretos pra compra.
          </p>
        </section>

        <section className="mt-14 space-y-6 text-base leading-8 text-foreground/90">
          <h2 className="text-2xl font-semibold tracking-tight text-foreground">
            Como escolhemos os produtos
          </h2>
          <p>
            Cada lista do recomendou começa pela <strong>pesquisa de
            disponibilidade real</strong> no Brasil: priorizamos produtos
            efetivamente em estoque (novos, não usados) na Amazon Brasil e/ou
            no Mercado Livre. Não recomendamos o que você não consegue comprar.
          </p>
          <p>
            Depois aplicamos os critérios técnicos da categoria: pra drones,
            qualidade de câmera, autonomia real, alcance de transmissão e
            regulamentação ANAC. Pra lava-louças, capacidade em serviços,
            função higienizar, eficiência hídrica e instalação. Pra patinetes,
            potência, velocidade dentro da regulamentação CONTRAN, segurança e
            durabilidade. Cada categoria tem o seu conjunto de critérios.
          </p>
          <p>
            Por fim, ordenamos os produtos pensando no leitor real:{" "}
            <strong>top da lista é o que recomendamos pra maioria das pessoas
            naquele perfil</strong>; nos itens seguintes incluímos
            alternativas pra perfis específicos (orçamento menor, marca
            preferida, recurso especial, etc). Cada produto tem prós e contras
            concretos — não existe "melhor pra todo mundo", existe melhor pra
            seu uso.
          </p>
        </section>

        <section className="mt-14 space-y-6 text-base leading-8 text-foreground/90">
          <h2 className="text-2xl font-semibold tracking-tight text-foreground">
            Transparência sobre comissão de afiliado
          </h2>
          <p>
            O recomendou participa do programa de associados da Amazon e do
            programa de afiliados do Mercado Livre. Quando você compra um
            produto através dos links nas nossas listas, recebemos uma comissão
            — <strong>sem custo adicional pra você</strong>. O preço pago é
            exatamente o mesmo de quem entra direto na Amazon ou no Mercado
            Livre sem passar pelo nosso site.
          </p>
          <p>
            Essa comissão é o que mantém o recomendou funcionando: pagamos
            ferramentas, hospedagem, e horas de pesquisa pra produzir cada
            lista. Nosso compromisso editorial:{" "}
            <strong>nenhum produto entra na lista por causa da comissão</strong>.
            Se um produto tem comissão alta mas não é bom, não recomendamos.
            Se um produto não tem comissão (ex: marca brasileira sem programa
            de afiliado) mas é o melhor, podemos incluir mesmo assim.
          </p>
          <p>
            A independência editorial é o que diferencia um guia de compra
            confiável de um catálogo disfarçado. Levamos isso a sério.
          </p>
        </section>

        <section className="mt-14 space-y-6 text-base leading-8 text-foreground/90">
          <h2 className="text-2xl font-semibold tracking-tight text-foreground">
            Atualização das listas
          </h2>
          <p>
            Produtos saem de linha, preços mudam, modelos novos chegam ao
            mercado. Nossas listas são <strong>atualizadas regularmente</strong>{" "}
            com data visível no topo de cada página ("Atualizado em...").
            Quando um produto sai de estoque ou é substituído por uma versão
            melhor, fazemos a troca e mantemos a URL da página igual — você
            sempre encontra a versão mais atual.
          </p>
        </section>

        <section className="mt-14 space-y-6 text-base leading-8 text-foreground/90">
          <h2 className="text-2xl font-semibold tracking-tight text-foreground">
            Contato
          </h2>
          <p>
            Encontrou erro em alguma análise? Tem sugestão de categoria pra
            próxima lista? Quer corrigir spec de produto que você possui?
            Escreve pra{" "}
            <a
              href="mailto:contato@woork.com.br"
              className="text-brand underline-offset-4 hover:underline"
            >
              contato@woork.com.br
            </a>
            . Levamos feedback de leitor a sério — corrigir erro mantém a
            lista útil pra próxima pessoa.
          </p>
        </section>
      </article>
    </div>
  );
}
