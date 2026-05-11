import type { ProductList } from "@/lib/types";

// Imagens Amazon: hot-link via m.media-amazon.com/images/I/{HASH}
// Imagens Mercado Livre: hot-link via http2.mlstatic.com
// Links Mercado Livre: shortlinks afiliados meli.la/XXXX (user vai gerar e substituir)
// Links Amazon: tag recomendou01-20 injetada automaticamente via buildAmazonUrl

export const cooktopsInducaoList: ProductList = {
  slug: "melhores-cooktops-inducao",
  title: "Os 10 Melhores Cooktops por Indução (Maio 2026)",
  category: "Cooktops por Indução",
  monthYear: "Maio de 2026",
  metaDescription:
    "Comparativo dos 10 melhores cooktops por indução disponíveis em maio de 2026 no Brasil. Análise de potência, eficiência, recursos e preço, com links direto para Amazon e Mercado Livre.",
  publishedAt: "2026-05-11",
  updatedAt: "2026-05-11",
  intro:
    "Cooktop por indução virou o eletrodoméstico mais transformador da cozinha brasileira em 2026 — e por motivos que vão além do estilo. Indução aquece **apenas a panela**, não a superfície ao redor, então a cozinha esquenta menos no verão. Atinge ponto de cozimento mais rápido que gás (água ferve em ~3 min vs. ~6 min no fogão a gás), tem controle digital preciso (140°C exato, não \"chama média\"), trava de segurança automática (desliga ao tirar a panela), e zero risco de vazamento. A conta de luz sobe um pouco, mas você economiza no gás (e numa cozinha bem ventilada, no ar-condicionado).\n\nO trade-off é o investimento inicial: cooktop por indução custa 2-4x mais que cooktop a gás equivalente, e exige **panelas compatíveis** (fundo ferromagnético — inox 18/10 ou ferro fundido funcionam, alumínio puro e vidro não). Vale o salto pra quem reforma a cozinha ou troca de fogão. Nessa lista comparamos modelos disponíveis no Brasil em maio de 2026, mistura de **4 bocas embutidos premium** (Brastemp, Electrolux, Tramontina, Fischer) e **portáteis 1-2 bocas** (pra quem quer testar indução sem reforma). Todos verificados como disponíveis em Amazon e/ou Mercado Livre.",
  conclusion:
    "Se você quer o melhor que a categoria oferece com pós-venda nacional sólido, vá de **Brastemp BDJ77BE Flexizone** ou **Electrolux IE80P Unicook** — ambos são premium reais com 14+ níveis de potência, PowerBoost, timer individual por boca e flexizone (junta duas bocas para panelas grandes). Pra quem reforma e quer custo-benefício imbatível, a **Tramontina Square Basic 4EI 60** entrega 4 bocas com touch e 9 níveis por menos da metade do preço dos premium. Pra quem está testando indução sem investir em reforma, o **Tramontina Slim Touch 1 boca portátil** funciona como cooktop adicional na bancada — usa quando precisa, guarda no armário depois. E pra quem precisa de mais bocas com design contemporâneo, a **Tramontina Design Slim 4EI 90** com 5 bocas e slider duplo é a mais sofisticada da lista.",
  faq: [
    {
      question: "Preciso trocar minhas panelas para usar cooktop por indução?",
      answer:
        "Provavelmente sim, em parte. Cooktop por indução só aquece panelas com fundo ferromagnético — inox 18/10 com fundo triplo, ferro fundido, e ferro esmaltado funcionam. Alumínio puro, cobre, vidro e cerâmica NÃO funcionam (o motor magnético não \"vê\" o material). Teste rápido: pegue um ímã de geladeira — se grudar no fundo da panela, ela é compatível. A maioria das panelas inox de qualidade modernas já são compatíveis.",
    },
    {
      question: "Cooktop por indução precisa de 220V ou 110V?",
      answer:
        "Cooktops 4 bocas embutidos exigem 220V — não tem opção 110V no segmento (a potência total seria muito alta pra 110V). Portáteis 1 boca normalmente são 220V também (alguns têm chave bivolt). Confira a etiqueta antes de comprar. Em casas só com 110V, instalar 220V exige técnico — investimento de R$ 300-800 dependendo da distância da rua.",
    },
    {
      question: "É mais econômico que gás?",
      answer:
        "Depende. Eficiência energética da indução é ~90% (vs. ~40% no gás), então você gasta menos energia pra cozinhar a mesma coisa. Em SP com gás natural, é mais ou menos empate. Em cidades sem rede de gás (botijão), indução fica claramente mais barata no mês. Em geral economia varia entre R$ 0 e R$ 80/mês conforme uso e tarifas locais.",
    },
    {
      question: "Cooktop indução é seguro para crianças e pets?",
      answer:
        "Mais seguro que gás. A superfície aquece pouco (só por contato com a panela), tem trava de segurança automática que desliga ao retirar a panela, não tem chama, não tem vazamento. Modelos premium têm trava infantil ativada por botão. Mas a superfície ainda esquenta por condução da panela — não é \"superfície fria\".",
    },
    {
      question: "Vale a pena 4 bocas ou portátil 1 boca?",
      answer:
        "4 bocas se você vai reformar a cozinha e quer cozinha completa por indução (substitui o fogão). Portátil 1 boca se quer testar antes, complementar o fogão existente, ou simplesmente cozinhar de forma mais rápida em alguns dias (chá, café, ovos). Não é \"qualquer um\" — são casos de uso diferentes. O portátil é também ótimo pra quem aluga, não pode reformar, ou usa em chácara/pousada.",
    },
  ],
  products: [
    {
      rank: 1,
      name: "Brastemp BDJ77BE Flexizone 4 Bocas",
      tagline: "Premium nacional com Flexizone e design preto sofisticado",
      description:
        "A Brastemp BDJ77BE é referência no segmento premium brasileiro. 4 bocas com vitrocerâmica preta, sistema **Flexizone** que junta automaticamente as duas bocas do lado esquerdo pra acomodar panelas grandes (frigideira retangular, peixeira, panelas de fervura grande) — diferencial real pra quem cozinha em quantidade. Touch capacitivo nos comandos, 9 níveis de potência por boca, timer individual, indicador de calor residual, PowerBoost (a boca atinge potência máxima por alguns minutos pra ferver água rapidamente). Pós-venda em rede nacional via Brastemp (mais ampla que concorrentes). 220V. Para quem reforma cozinha agora e quer o melhor com tranquilidade de marca, é o que recomendamos primeiro.",
      imageUrl: "/placeholder-product.svg",
      amazonAsin: "B0CLM8LS3W",
      mercadoLivreUrl: "https://www.mercadolivre.com.br/brastemp",
      pros: [
        "Flexizone — junta 2 bocas pra panelas grandes",
        "Touch capacitivo + 9 níveis por boca",
        "PowerBoost (fervura rápida) + timer individual",
        "Pós-venda Brastemp em rede nacional",
      ],
      cons: [
        "Preço alto (R$ 4-6k) vs. concorrentes não-premium",
        "Exige 220V (custo extra se casa for 110V)",
      ],
    },
    {
      rank: 2,
      name: "Electrolux IE80P 78cm Unicook",
      tagline: "Premium com Unicook e 14 níveis de potência precisos",
      description:
        "A Electrolux IE80P é o cooktop premium mais largo da lista (78cm — acomoda 4 panelas grandes sem disputa de espaço) com sistema **Unicook** que detecta automaticamente o tamanho da panela e ajusta o campo magnético — você usa qualquer parte da superfície, e a tecnologia foca o calor onde tem panela. 14 níveis de potência (mais granular que os 9 da Brastemp), **PowerBoost** em todas as bocas, função pausa (interrompe cozimento sem perder ajustes), trava infantil, timer e indicador de calor residual. Vitrocerâmica preta. 220V. Para quem cozinha pratos complexos com várias panelas simultâneas, a área extra e os 14 níveis fazem diferença real.",
      imageUrl: "https://m.media-amazon.com/images/P/B082FQCN5W._SX466_.jpg",
      amazonAsin: "B082FQCN5W",
      mercadoLivreUrl: "https://www.mercadolivre.com.br/electrolux",
      pros: [
        "78cm de largura (acomoda 4 panelas grandes)",
        "Unicook detecta tamanho/posição da panela",
        "14 níveis de potência (granularidade alta)",
        "PowerBoost + função Pausa",
      ],
      cons: [
        "Preço premium (R$ 4-7k)",
        "Tamanho maior exige espaço de gabinete adequado",
      ],
    },
    {
      rank: 3,
      name: "Tramontina Square Basic 4EI 60",
      tagline: "Melhor custo-benefício 4 bocas com touch e 9 níveis",
      description:
        "A Tramontina Square Basic 4EI 60 é a opção que mais entrega por preço médio. 4 bocas em 60cm, 2 menores de 1.4kW (Ø180mm) e 2 maiores de 1.8kW (Ø200mm). Touch capacitivo, 9 níveis de potência por boca, indicador de calor residual, trava infantil. Sem flexizone, sem PowerBoost individual, sem unicook — mas pra cozinhar bem todo dia, esses são extras, não essenciais. Vitrocerâmica preta. Marca brasileira veterana (Tramontina) com pós-venda local sólido. 220V. Pra quem reforma a cozinha e quer cooktop por indução de qualidade sem ir nos R$ 4k+ dos premium, é a recomendação mais inteligente — você paga metade do preço, perde features secundários, mantém qualidade essencial.",
      imageUrl: "/placeholder-product.svg",
      amazonAsin: "B0BH87G279",
      mercadoLivreUrl: "https://www.mercadolivre.com.br/tramontina",
      pros: [
        "Custo-benefício imbatível (R$ 2.5-3.5k pra premium real)",
        "Marca brasileira com pós-venda local",
        "9 níveis de potência por boca + touch capacitivo",
        "Vitrocerâmica resistente + trava infantil",
      ],
      cons: [
        "Sem Flexizone, PowerBoost ou Unicook",
        "Bocas menores (Ø180-200mm) vs. premium (Ø210-260mm)",
      ],
    },
    {
      rank: 4,
      name: "Fischer 4Q Vitrocerâmica",
      tagline: "Robusto e durável com construção nacional reforçada",
      description:
        "A Fischer foca em durabilidade mecânica e simplicidade de uso. 4 bocas com vitrocerâmica reforçada (a marca alega a mais resistente do segmento entre nacionais), comandos touch, níveis de potência ajustáveis, timer e trava de segurança. Não tem os recursos premium da Brastemp ou Electrolux (sem Flexizone, sem Unicook), mas ganha em construção robusta e simplicidade de operação — interface clara, menos botões pra confundir. Marca brasileira focada no segmento profissional/residencial pesado. 220V. Vale pra usuário que prioriza durabilidade física, ou pra cozinha de pousada/casa de família grande onde o cooktop trabalha pesado.",
      imageUrl: "https://m.media-amazon.com/images/P/B0DJV2FB64._SX466_.jpg",
      amazonAsin: "B0DJV2FB64",
      mercadoLivreUrl: "https://www.mercadolivre.com.br/fischer",
      pros: [
        "Vitrocerâmica reforçada (durabilidade superior)",
        "Marca brasileira veterana (Fischer)",
        "Interface simples sem recursos confusos",
        "Bom pra uso intenso (família grande, pousada)",
      ],
      cons: [
        "Sem features premium (Flexizone, Unicook, PowerBoost)",
        "Design menos sofisticado que concorrentes premium",
      ],
    },
    {
      rank: 5,
      name: "Brastemp BDJ60BE Funções Especiais",
      tagline: "Premium Brastemp com timer e PowerBoost em todas as bocas",
      description:
        "A Brastemp BDJ60BE é a versão \"funções especiais\" da Brastemp — sem o Flexizone do BDJ77BE, mas com PowerBoost em **todas as 4 bocas** e timer individual. 60cm de largura (vs. 78cm do BDJ77BE — mais compacto). 9 níveis de potência, touch capacitivo, trava infantil, indicador de calor residual. Vitrocerâmica preta. Para quem cozinha pratos simultâneos onde precisa ferver água rápido em várias bocas (sopa + arroz + chá ao mesmo tempo), o PowerBoost em todas é um diferencial. Faltam só as features do BDJ77BE (Flexizone), mas custa cerca de R$ 800-1.500 a menos. Boa pedida pra cozinha apertada que quer Brastemp premium em formato menor.",
      imageUrl: "/placeholder-product.svg",
      amazonAsin: "B0CLM6TR3V",
      mercadoLivreUrl: "https://www.mercadolivre.com.br/brastemp",
      pros: [
        "PowerBoost em TODAS as 4 bocas (raro)",
        "Timer individual por boca",
        "60cm — cabe em gabinete menor",
        "Marca premium com pós-venda Brastemp",
      ],
      cons: [
        "Sem Flexizone (vai pro BDJ77BE se precisar)",
        "60cm pode ser apertado pra 4 panelas grandes",
      ],
    },
    {
      rank: 6,
      name: "Tramontina Design Slim Slider Bridge 4EI 90",
      tagline: "Topo da linha Tramontina com 4 bocas em 90cm e slider de potência",
      description:
        "A Tramontina Design Collection Slim Slider Bridge 4EI 90 é o cooktop mais sofisticado da Tramontina. **4 bocas distribuídas em 90cm de largura** (não 60cm como o Square Basic) — mais espaço entre bocas, encaixa panelas grandes sem disputa. Sistema **Slider** (você desliza o dedo pra ajustar potência, em vez de clicar em níveis discretos) que é o que tem de mais avançado em interface de cooktop. Sistema **Bridge** (junta duas bocas pra panelas longas como peixeira) similar ao Flexizone Brastemp. Vidro preto premium, indicador de calor residual avançado, trava infantil, design plano discreto. 220V. Para cozinha planejada premium ou pra quem cozinha em volume (família grande, recebe sempre), a área extra e o design fazem diferença real. Preço alto justifica pra esse perfil.",
      imageUrl: "/placeholder-product.svg",
      mercadoLivreUrl: "https://www.mercadolivre.com.br/tramontina",
      pros: [
        "4 bocas distribuídas em 90cm (mais espaço por boca)",
        "Slider de potência (interface premium)",
        "Sistema Bridge pra panelas longas",
        "Design plano refinado pra cozinhas planejadas",
      ],
      cons: [
        "Preço alto (R$ 5-7k)",
        "90cm exige gabinete grande",
      ],
    },
    {
      rank: 7,
      name: "Continental 4 Bocas Indução",
      tagline: "Mid-tier com bom equilíbrio entre marca e preço",
      description:
        "A Continental ocupa o espaço entre Brastemp/Electrolux premium e os entry de marca menor. Geralmente 4 bocas com touch, 9 níveis de potência, timer, trava infantil, indicador de calor residual. Vitrocerâmica preta, 220V. Não tem as features premium (Flexizone, Unicook, PowerBoost dedicado em todas as bocas), mas tem o essencial pra cozinha doméstica bem feito, mais barato que Brastemp/Electrolux equivalente. Marca brasileira com distribuição grande (varejistas tradicionais), pós-venda decente. Boa pedida pra quem quer marca nacional confiável sem ir no premium, e está reformando cozinha de apartamento padrão.",
      imageUrl: "/placeholder-product.svg",
      mercadoLivreUrl: "https://www.mercadolivre.com.br/continental",
      pros: [
        "Marca brasileira tradicional com distribuição ampla",
        "Touch + 9 níveis + timer + trava infantil",
        "Custo entre Tramontina Square e premium",
        "Pós-venda em varejistas grandes",
      ],
      cons: [
        "Sem features premium (Flexizone, Unicook)",
        "Modelos variam por seller — confirme specs",
      ],
    },
    {
      rank: 8,
      name: "Mueller MCI014BG1 4 Bocas Indução",
      tagline: "Entry 4 bocas com design simples e marca brasileira",
      description:
        "A Mueller é a marca brasileira nicho focada em eletroportáteis e eletrodomésticos básicos, e o cooktop por indução 4 bocas dela é a opção entry mais honesta do segmento embutido. 4 bocas vitrocerâmica preta, touch ou knob físico (varia por modelo), níveis de potência, indicador de calor residual, timer. Sem Flexizone, Unicook, PowerBoost — interface básica direta ao ponto. 220V. Pra quem quer entrar no universo de indução sem investir nos R$ 3k+ dos mid-premium, é a porta de entrada brasileira mais acessível. Trade-offs: menos features, menos durabilidade premium, mas funciona honestamente.",
      imageUrl: "https://m.media-amazon.com/images/P/B008U2GOSW._SX466_.jpg",
      amazonAsin: "B008U2GOSW",
      mercadoLivreUrl: "https://www.mercadolivre.com.br/mueller",
      pros: [
        "Entry 4 bocas mais acessível (R$ 1.8-2.5k)",
        "Marca brasileira nicho com pós-venda local",
        "Interface simples e direta",
        "Bom pra cozinhas que não precisam de features avançados",
      ],
      cons: [
        "Sem nenhum dos features premium",
        "Construção menos robusta vs. premium",
      ],
    },
    {
      rank: 9,
      name: "Tramontina Slim Touch 1 Boca Portátil",
      tagline: "Portátil de 1 boca pra testar indução sem reformar",
      description:
        "A Tramontina Slim Touch 9471413 (também conhecido como modelo EI 30) é o melhor portátil de 1 boca do mercado brasileiro. Vitrocerâmica preta, Ø22cm de área de aquecimento (acomoda panela grande), touch capacitivo, 9 níveis de potência, timer programável, trava de segurança automática, indicador de calor residual. 220V, ~2000W de potência. **Confirmado disponível na Amazon BR** com bom histórico de avaliações. Vale pra: (a) testar indução antes de comprar 4 bocas, (b) complementar o fogão existente quando precisa de uma boca extra, (c) cozinha de chácara/pousada/aluguel que não pode reformar, (d) cozinha já equipada mas que quer praticidade pra chás/cafés rápidos. Por R$ 500-700, é o jeito mais barato de ter indução em casa.",
      imageUrl: "https://m.media-amazon.com/images/P/B07Q1WWWBR._SX466_.jpg",
      amazonAsin: "B07Q1WWWBR",
      mercadoLivreUrl: "https://www.mercadolivre.com.br/tramontina",
      pros: [
        "Confirmado disponível em Amazon BR + ML",
        "Marca Tramontina com pós-venda local",
        "Portátil — usa quando precisa, guarda depois",
        "9 níveis + touch + timer + trava de segurança",
      ],
      cons: [
        "Só 1 boca (não substitui cooktop completo)",
        "Exige 220V (não tem versão 110V)",
      ],
    },
    {
      rank: 10,
      name: "Cooktop Portátil 2 Bocas Cadence ou Mondial",
      tagline: "Portátil 2 bocas pra cozinha aluguel ou complemento",
      description:
        "Pra fechar a lista, o portátil de 2 bocas (Cadence, Mondial e similares) é a opção pra quem precisa mais que 1 boca mas não pode reformar pra instalar 4 bocas embutido. Geralmente 2 bocas de Ø18-22cm, touch, níveis de potência (5-9 dependendo do modelo), timer e trava de segurança. Vitrocerâmica preta. Modelos variam por marca: alguns 110V (raros, com menor potência), maioria 220V. Pra cozinha de aluguel, chácara, pousada que serve refeição leve, ou complemento ao fogão a gás em fim de semana — é a escolha pragmática. Faixa de R$ 400-600. Marcas com bom histórico no segmento incluem Cadence, Mondial, Britânia, Atlas. Confirme as specs (110V vs 220V, potência) antes de comprar — varia bastante por modelo.",
      imageUrl: "/placeholder-product.svg",
      mercadoLivreUrl: "https://www.mercadolivre.com.br/cooktop-portatil-2-bocas",
      pros: [
        "Portátil 2 bocas sem precisar reformar",
        "Faixa R$ 400-600 — entry honesto",
        "Algumas opções 110V (verifique)",
        "Bom pra aluguel, chácara, complemento",
      ],
      cons: [
        "Potência menor que embutidos (menos rápido)",
        "Specs variam muito por marca/modelo — leia atentamente",
      ],
    },
  ],
};
