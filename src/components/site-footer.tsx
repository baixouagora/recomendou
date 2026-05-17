import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border bg-surface">
      <div className="mx-auto w-full max-w-6xl px-6 py-12">
        <p className="max-w-3xl text-sm leading-6 text-muted">
          <strong className="text-foreground">
            recomendou.com.br é um site editorial independente de recomendação
            de produtos.
          </strong>{" "}
          Não vendemos nada e não somos a Amazon nem o Mercado Livre — ao clicar
          nos botões você é redirecionado para a loja parceira. Participamos do
          programa de associados da Amazon e de afiliados do Mercado Livre, e
          podemos receber comissão por compras qualificadas, sem custo adicional
          pra você. Isso financia a produção das nossas análises independentes.
        </p>

        <nav className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm">
          <Link href="/" className="text-muted transition-colors hover:text-foreground">
            Listas
          </Link>
          <Link href="/sobre" className="text-muted transition-colors hover:text-foreground">
            Sobre
          </Link>
          <Link href="/contato" className="text-muted transition-colors hover:text-foreground">
            Contato
          </Link>
          <Link href="/privacidade" className="text-muted transition-colors hover:text-foreground">
            Política de Privacidade
          </Link>
          <Link href="/termos" className="text-muted transition-colors hover:text-foreground">
            Termos de Uso
          </Link>
        </nav>

        <div className="mt-8 flex flex-col items-start justify-between gap-2 border-t border-border pt-6 text-xs text-muted sm:flex-row sm:items-center">
          <span>
            © {new Date().getFullYear()} recomendou.com.br — um site da{" "}
            <a
              href="https://woork.com.br"
              className="font-medium text-foreground hover:underline"
            >
              Woork
            </a>
            . Todos os direitos reservados.
          </span>
          <span>
            Conteúdo editorial independente ·{" "}
            <a
              href="mailto:contato@woork.com.br"
              className="hover:underline"
            >
              contato@woork.com.br
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}
