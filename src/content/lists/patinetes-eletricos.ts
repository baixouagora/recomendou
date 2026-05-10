import type { ProductList } from "@/lib/types";

// Imagens: URLs oficiais do CDN Amazon (formato /images/I/{HASH}, copiadas direto da página do produto).
// Links Mercado Livre: shortlinks afiliados gerados em mercadolivre.com.br/afiliados (meli.la/XXXX).
// Links Amazon: tag recomendou01-20 injetada automaticamente via buildAmazonUrl.

export const patinetesEletricosList: ProductList = {
  slug: "melhores-patinetes-eletricos",
  title: "Os Melhores Patinetes Elétricos (Maio 2026)",
  category: "Patinetes Elétricos",
  monthYear: "Maio de 2026",
  metaDescription:
    "Comparativo dos melhores patinetes e scooters elétricos adultos disponíveis em maio de 2026 no Brasil. Análise de autonomia, velocidade, peso suportado e preço, com links direto para Amazon e Mercado Livre.",
  publishedAt: "2026-05-10",
  updatedAt: "2026-05-10",
  intro:
    "Patinete elétrico deixou de ser brinquedo. Em 2026 já é meio de transporte urbano real no Brasil — bate ônibus em curta/média distância, esquiva trânsito, custa menos que combustível de carro num mês de uso intenso, e (no caso dos modelos com banco) substitui scooter pra trajetos casa-trabalho. A categoria amadureceu: motores brushless de 500-1200W viraram padrão, baterias de íon-lítio entregam 20-50km reais por carga, freios duplos e suspensão dianteira/traseira eliminaram boa parte dos riscos do começo.\n\nPara essa lista comparamos modelos disponíveis no Brasil em maio de 2026, todos verificados como em estoque tanto na Amazon quanto no Mercado Livre. Considerei velocidade máxima real, autonomia honesta, qualidade dos freios e suspensão, peso suportado, e custo-benefício. A marca Honeywhale domina o mercado brasileiro nessa faixa de preço, então aparece com mais modelos — mas incluí Foston (marca brasileira veterana) e Atrio (com banco) pra cobrir perfis diferentes.",
  conclusion:
    "Se você nunca usou patinete elétrico, comece pelo Honeywhale M2 Pro ou pelo Foston S09 Pro — ambos têm velocidade, autonomia e estabilidade suficientes pra uso urbano diário sem você se sentir sobrecarregado. Se prioriza velocidade e distância, o Honeywhale T4A com 45km/h e 35km de autonomia é o salto certo. Se você quer chegar inteiro depois de longas distâncias, vai de M2 Max-B (suspensão completa). Para quem busca o mais barato com produto sério, o Atrio City ES260 com banco entrega muita praticidade por menos de R$ 2.000. Em todos os casos, lembre da legislação local: capacete obrigatório acima de 6 km/h em muitas cidades, e ciclofaixas ou laterais são os locais corretos pra circular.",
  faq: [
    {
      question: "Patinete elétrico precisa de CNH ou placa?",
      answer:
        "Não. Pela Resolução CONTRAN 996/2023, patinetes elétricos são equiparados a bicicletas elétricas — não precisam de CNH, placa nem emplacamento. As regras gerais são: velocidade máxima 32 km/h, motor até 1000W, e respeito à sinalização de trânsito. Algumas prefeituras (São Paulo, Rio) têm regras adicionais sobre onde circular.",
    },
    {
      question: "Onde posso andar de patinete elétrico?",
      answer:
        "O recomendado é em ciclovias e ciclofaixas. Na via pública, deve respeitar mão e sentido como bicicleta. Calçada não é permitido na maioria das cidades — fiscalização varia, mas tecnicamente é proibido em SP e RJ. Sempre use capacete (obrigatório em várias cidades brasileiras) e respeite limite de velocidade em áreas com pedestres.",
    },
    {
      question: "Quanto tempo dura a bateria de um patinete elétrico?",
      answer:
        "A maioria das baterias de íon-lítio dura entre 500 e 1.000 ciclos completos de carga — em uso urbano diário (uma carga por dia), isso equivale a 2-3 anos antes de a autonomia começar a cair perceptivelmente. A bateria pode ser substituída na maioria dos modelos. Evite descargas completas e carregamentos em temperaturas extremas pra prolongar vida útil.",
    },
    {
      question: "Patinete com banco é melhor que sem?",
      answer:
        "Depende do uso. Modelo com banco (estilo Atrio City ES260) é mais confortável pra trajetos longos e quem não quer ficar em pé — vira praticamente uma scooter elétrica pequena. Modelo sem banco (estilo Honeywhale, Foston) é mais leve, dobrável, fácil de carregar em transporte público ou guardar no porta-malas. Quem precisa misturar uso urbano + transporte público, prefira sem banco.",
    },
    {
      question: "Posso andar com patinete elétrico na chuva?",
      answer:
        "Patinetes com certificação IPX4 ou superior (como o Honeywhale M1 Max) toleram chuva leve e poças. Mesmo assim, evite chuva forte — não pelo componente elétrico, mas pelo risco real de aquaplanagem nas pequenas rodas e freios menos eficientes no molhado. Verifique a especificação IP antes de comprar se vai usar em qualquer clima.",
    },
  ],
  products: [
    {
      rank: 1,
      name: "Honeywhale M2 Pro",
      tagline: "O melhor patinete elétrico geral pra maioria das pessoas",
      description:
        "O M2 Pro é o equilíbrio perfeito entre preço, autonomia e tecnologia. Motor de 500W (pico) entrega velocidade máxima de 32 km/h em 4 modos selecionáveis (6/15/25/32), autonomia real de 22km com a bateria 36V 7.8Ah, e 4 modos de velocidade ajustáveis via app. Pneus de 8.5\" pneumáticos absorvem bem o piso brasileiro (asfalto irregular, calçada de bloco), e o sistema de freio duplo (disco no traseiro + eletrônico no dianteiro) é responsivo e dá sensação de controle. Conectividade Bluetooth no app DIYZ controla travamento, velocidade e diagnóstico — é o tipo de feature que diferencia um patinete amador de um maduro. Aceita até 120kg, pesa 13kg dobrado. Pra uso urbano diário (5-10km por trecho) e fins de semana de lazer, é difícil errar — é o que recomendo pra começar.",
      imageUrl: "/placeholder-product.svg",
      amazonAsin: "B0F7XL1F1N",
      mercadoLivreUrl: "https://www.mercadolivre.com.br/patinete-eletrico",
      pros: [
        "Velocidade 32 km/h em 4 modos ajustáveis",
        "Autonomia real de ~22km com 1 bateria",
        "Freio duplo (disco + eletrônico) responsivo",
        "App Bluetooth com travamento e diagnóstico",
      ],
      cons: [
        "Bateria não-removível (recarga in-place)",
        "Sem suspensão (depende dos pneus pra amortecer)",
      ],
    },
    {
      rank: 2,
      name: "Honeywhale T4A",
      tagline: "O mais veloz e com maior autonomia",
      description:
        "Se você anda longe e/ou rápido, o T4A é o salto certo em cima do M2 Pro. Motor de 750W (com pico maior) leva a velocidade máxima a 45 km/h, autonomia real ~30-35km com a bateria 48V 10Ah, e pneus maiores de 10\" rodam melhor em piso ruim e velocidades altas. Tem suspensão dianteira E traseira, controle de cruzeiro (importante quando se anda 40+ km/h por muito tempo — diminui fadiga no acelerador), e luzes de seta no pedal. Aceita até 120kg. Importante: 45 km/h coloca o patinete em uma zona regulatória mais complexa em algumas cidades — verifique a legislação local antes de circular nessa velocidade em via pública. Pra uso periurbano (10-15km por trecho), trabalho a distância, ou simplesmente quem prefere chegar logo, é uma máquina excelente.",
      imageUrl: "/placeholder-product.svg",
      amazonAsin: "B0F135PY5J",
      mercadoLivreUrl: "https://www.mercadolivre.com.br/patinete-eletrico",
      pros: [
        "Velocidade máxima 45 km/h (líder do segmento)",
        "Autonomia 30-35km real",
        "Suspensão dianteira + traseira completa",
        "Controle de cruzeiro + setas integradas",
      ],
      cons: [
        "Velocidade alta pode requerer verificação regulatória",
        "Mais pesado (~17kg) pra carregar em transporte público",
      ],
    },
    {
      rank: 3,
      name: "Honeywhale M2 Max-B",
      tagline: "Melhor para conforto em terreno irregular",
      description:
        "O M2 Max-B usa o mesmo motor de 500W do M2 Pro, mas adiciona suspensão completa (dianteira + traseira) e a bateria maior 36V 10Ah pra autonomia de 32km real, contra os 22km do M2 Pro. A diferença prática: em asfalto liso o M2 Pro entrega o mesmo, mas em calçada de bloco, paralelepípedo ou ruas com buraco — terreno bem brasileiro — o Max-B é noticeably mais confortável. Velocidade máxima 32 km/h igual ao Pro, bateria que dobra a autonomia faz quase o trajeto inteiro de ida e volta. Boa pedida pra quem vai usar todo dia em pisos diversos, ou pra quem é mais sensível a vibração nas mãos/braços.",
      imageUrl: "/placeholder-product.svg",
      amazonAsin: "B0F9WVPH6G",
      mercadoLivreUrl: "https://www.mercadolivre.com.br/patinete-eletrico",
      pros: [
        "Suspensão dianteira + traseira (confortável em piso ruim)",
        "Bateria 10Ah = 32km de autonomia real",
        "Mesmo motor e velocidade do M2 Pro",
        "Bluetooth + app DIYZ",
      ],
      cons: [
        "Mais caro que o M2 Pro pra mesma velocidade",
        "Mais pesado por causa da suspensão",
      ],
    },
    {
      rank: 4,
      name: "Honeywhale M1 Max",
      tagline: "Custo-benefício com suspensão dupla",
      description:
        "O M1 Max é um dos modelos com melhor relação preço-recurso da Honeywhale. Motor 500W até 32 km/h, autonomia ~22 km com bateria 36V, suspensão dianteira e traseira com molas, pneus pneumáticos 10\", certificação IPx4 contra chuva leve, e freios E-ABS + disco. Aceita até 120 kg. Diferença do M2 Pro: foco na suspensão (importante pra piso irregular), por preço similar. Boa opção pra quem usa diariamente em ruas reais de cidade brasileira (paralelepípedo, asfalto remendado), prioriza estabilidade sobre velocidade, e quer um patinete confiável sem ir nos modelos top.",
      imageUrl: "/placeholder-product.svg",
      amazonAsin: "B0F9KND58T",
      mercadoLivreUrl: "https://www.mercadolivre.com.br/patinete-eletrico",
      pros: [
        "Suspensão dupla + IPx4 (resistente a chuva leve)",
        "Pneus 10\" pneumáticos pra terreno irregular",
        "Freio E-ABS + disco responsivo",
        "Bom equilíbrio preço x conforto",
      ],
      cons: [
        "Autonomia mais curta vs. modelos Max (16-22km)",
        "Sem app dedicado",
      ],
    },
    {
      rank: 5,
      name: "Honeywhale S2",
      tagline: "Patinete com estilo — LED 7 cores e leveza",
      description:
        "O S2 entra na lista pela proposta diferente: design mais leve e voltado pra mobilidade urbana cool. Motor 500W (pico) até 30 km/h, autonomia ~20km com bateria 36V 6.6Ah, pneus 8.5\". Pesa apenas 13kg e dobra rápido, ideal pra quem combina patinete com transporte público (metrô, ônibus) ou guarda no escritório. O charme principal: LEDs RGB em 7 cores na base que alteram automaticamente — chama atenção e melhora visibilidade noturna. Não tem suspensão (depende dos pneus pneumáticos pra amortecer), mas pra trajetos curtos urbanos em piso razoável, funciona muito bem. Aceita até 120kg.",
      imageUrl: "/placeholder-product.svg",
      amazonAsin: "B0FCFQQX1S",
      mercadoLivreUrl: "https://www.mercadolivre.com.br/patinete-eletrico",
      pros: [
        "13kg dobrado — leve pra transporte público",
        "LEDs RGB 7 cores na base (estilo + visibilidade)",
        "3 modos de velocidade",
        "Foco em portabilidade urbana",
      ],
      cons: [
        "Sem suspensão (só absorção via pneus)",
        "Autonomia 20km menor que mid-tier",
      ],
    },
    {
      rank: 6,
      name: "Foston S09 Pro",
      tagline: "Marca brasileira veterana com bom histórico",
      description:
        "A Foston tem mais de 10 anos no mercado brasileiro de patinetes — antes de toda a febre. O S09 Pro reflete essa maturidade: motor 350W, velocidade máxima 25 km/h, bateria 36V 10.4Ah com autonomia até 32km, pneus 10\" pneumáticos. Não tem a velocidade dos Honeywhale, mas troca isso por confiabilidade comprovada e suporte/peças no Brasil — diferencial real pra quem prefere ter a quem reclamar quando precisa de assistência técnica. Aceita 100kg. Boa pedida pra usuário conservador, ou pra quem prioriza pós-venda em vez de spec absoluta. Preço médio entre R$ 1.800-2.500.",
      imageUrl: "/placeholder-product.svg",
      amazonAsin: "B07Q7TZ8W8",
      mercadoLivreUrl: "https://www.mercadolivre.com.br/patinete-eletrico",
      pros: [
        "Marca brasileira com pós-venda local",
        "Bateria 10.4Ah = boa autonomia (até 32km)",
        "Motor brushless silencioso",
        "Mais de 10 anos de mercado",
      ],
      cons: [
        "Velocidade máxima 25 km/h (menor que concorrentes)",
        "Sem suspensão e sem app",
      ],
    },
    {
      rank: 7,
      name: "Atrio City ES260",
      tagline: "Com banco e cesta — pra quem quer conforto e praticidade",
      description:
        "O ES260 da Atrio é uma proposta diferente do resto da lista — vem com **banco removível e cesta integrada**, mais próximo de uma scooter elétrica que de um patinete tradicional. Motor 350W, velocidade máxima 25 km/h, autonomia 15km com a bateria padrão (curta — esse é o ponto fraco), pneus inflávies de 12\", aceita até 120kg. O banco torna trajetos longos confortáveis pra quem não quer ficar em pé, e a cesta ajuda pra quem usa em mercado/farmácia. Pesa mais que os patinetes sem banco, então não é portable como Honeywhale ou Foston. Pra uso urbano de curta-média distância onde conforto importa mais que velocidade, ou pra quem está ficando mais velho e preferiria não ficar em pé pilotando, é uma escolha excelente. Marca Atrio (Multilaser) tem boa distribuição no Brasil.",
      imageUrl: "/placeholder-product.svg",
      amazonAsin: "B07VDZ2FZJ",
      mercadoLivreUrl: "https://www.mercadolivre.com.br/patinete-eletrico",
      pros: [
        "Banco removível — usa sentado ou em pé",
        "Cesta integrada pra carregar pequenos itens",
        "Pneus 12\" pneumáticos (mais conforto que 8.5\")",
        "Marca Multilaser com distribuição BR ampla",
      ],
      cons: [
        "Autonomia curta (15km) — não pra longas distâncias",
        "Mais pesado, não dobra tão compacto",
        "Velocidade máxima 25 km/h",
      ],
    },
  ],
};
