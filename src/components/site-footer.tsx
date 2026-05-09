export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border bg-surface">
      <div className="mx-auto w-full max-w-6xl px-6 py-12">
        <p className="max-w-3xl text-sm leading-6 text-muted">
          O recomendou.com.br participa do programa de associados da Amazon e
          afiliados do Mercado Livre. Quando você compra através dos links neste
          site, podemos receber uma comissão — sem custo adicional pra você. Isso
          nos ajuda a continuar produzindo análises independentes.
        </p>
        <div className="mt-8 flex flex-col items-start justify-between gap-2 border-t border-border pt-6 text-xs text-muted sm:flex-row sm:items-center">
          <span>© {new Date().getFullYear()} recomendou. Todos os direitos reservados.</span>
          <span>Análises independentes feitas no Brasil.</span>
        </div>
      </div>
    </footer>
  );
}
