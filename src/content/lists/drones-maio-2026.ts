import type { ProductList } from "@/lib/types";

// TODO: imagens dos produtos (imageUrl) atualmente usam placeholder.svg.
// TODO: substituir mercadoLivreUrl pelos links de afiliado gerados em mercadolivre.com.br/afiliados.
// Os links Amazon já injetam a tag recomendou01-20 automaticamente via buildAmazonUrl.

export const dronesMaio2026: ProductList = {
  slug: "10-melhores-drones-maio-2026",
  title: "Os 10 Melhores Drones (Maio 2026)",
  category: "Drones",
  monthYear: "Maio de 2026",
  metaDescription:
    "Comparativo dos 10 melhores drones disponíveis em maio de 2026 no Brasil. Análise de câmera, autonomia, alcance e preço, com links direto para Amazon e Mercado Livre.",
  publishedAt: "2026-05-09",
  updatedAt: "2026-05-10",
  intro:
    "Escolher um drone em 2026 ficou ao mesmo tempo mais simples e mais confuso. Simples porque a qualidade média subiu — até modelos de entrada filmam em 4K, voam por mais de 25 minutos e cabem na palma da mão. Confuso porque a quantidade de variações cresceu na mesma proporção: drones com câmera estabilizada, com sensores de obstáculo, com transmissão de longo alcance, FPV, sub-250g (que dispensam registro na ANAC para uso recreativo), e por aí vai.\n\nPara essa lista comparamos modelos disponíveis no Brasil em maio de 2026, considerando qualidade de imagem, estabilidade em vento, autonomia real (não a do papel), distância de transmissão segura, facilidade de uso e custo-benefício. Cada drone tem prós e contras explícitos — não existe \"melhor para todo mundo\", existe melhor para o seu uso. A DJI domina o mercado brasileiro com folga, mas incluímos alternativas (Autel, Potensic, SJRC) para quem busca diferentes faixas de preço e características específicas.",
  conclusion:
    "Se você nunca pilotou um drone, comece por um modelo sub-250g — você não precisa registrar na ANAC para uso recreativo, é mais perdoável em rajada de vento e tem curva de aprendizado mais suave. O DJI Neo e o DJI Mini 3 são pontos de partida ideais. Se você é criador de conteúdo e quer qualidade profissional, o salto para o Air 3S (sensor 1\") ou o Mavic 3 Pro (Hasselblad 4/3) vale o investimento — eles capturam dinâmica de luz e detalhe que ficam fora do alcance dos modelos compactos. Para piloto FPV ou esporte, o Avata 2 continua sendo a única opção razoável de entrada — drones de fotografia não substituem a agilidade necessária. Se orçamento é a maior restrição, o SJRC F11 4K Pro entrega câmera com gimbal por menos de R$ 1.500, ainda que com software menos polido.",
  faq: [
    {
      question: "Preciso registrar meu drone na ANAC?",
      answer:
        "Drones acima de 250g precisam de cadastro no SISANT (sistema da ANAC), que é gratuito e online. Drones com até 250g (incluindo a bateria) usados de forma recreativa estão dispensados do cadastro, mas ainda devem respeitar as regras de espaço aéreo do DECEA.",
    },
    {
      question: "Posso voar em qualquer lugar?",
      answer:
        "Não. É proibido voar próximo a aeroportos, áreas de segurança nacional, presídios e em condições meteorológicas adversas. Para voos sobre pessoas, em áreas urbanas ou acima de 120m de altura, há regras específicas — consulte o app DroneZone do DECEA.",
    },
    {
      question: "Qual a diferença entre drone com câmera e drone FPV?",
      answer:
        "Drones com câmera (estilo DJI Mavic) priorizam estabilidade, foto e vídeo cinematográfico, e voam por GPS — bom para iniciantes e criadores de conteúdo. Drones FPV (First Person View) são pilotados via óculos com transmissão em tempo real, focam em agilidade e manobras, e exigem mais habilidade.",
    },
    {
      question: "Vale a pena comprar drone que não é DJI?",
      answer:
        "Vale, mas com ressalvas. A Autel é a alternativa premium mais sólida — câmera de 1\" e ausência de geo-fencing são vantagens reais. Marcas chinesas econômicas como SJRC e Potensic entregam câmeras 4K e GPS por uma fração do preço, mas o software, suporte e atualizações ficam atrás. Para uso profissional, DJI continua sendo a escolha mais segura por ecossistema e revenda no mercado brasileiro.",
    },
    {
      question: "Drones acima de 250g precisam de Anatel?",
      answer:
        "Sim, todos os drones que transmitem rádio (controle, vídeo) devem ter homologação Anatel para venda legal no Brasil. Modelos importados sem Anatel podem ser apreendidos pela Receita Federal. Os DJI vendidos por revendedores oficiais (Amazon Brasil, lojas autorizadas) são homologados; cuidado com importação direta.",
    },
  ],
  products: [
    {
      rank: 1,
      name: "DJI Mini 4 Pro",
      tagline: "O melhor drone geral pra maioria das pessoas",
      description:
        "O Mini 4 Pro é o drone mais bem equilibrado da DJI. Pesa menos de 249g (zero burocracia ANAC para uso recreativo), filma em 4K HDR a 100fps com gimbal mecânico de 3 eixos, e tem o que faltava na geração anterior: sensores de obstáculo omnidirecionais — ele detecta obstáculos em todas as direções, não só na frente. Autonomia real de cerca de 30 minutos por bateria (34 prometidos pela DJI), transmissão de até 20km via OcuSync 4 que funciona muito bem em áreas abertas. Para quem cria conteúdo casual, viaja, ou simplesmente quer um drone confiável para a maior parte das situações sem precisar pensar em regulação, é a escolha mais segura. Não é o que tem o sensor maior nem o melhor para vídeo profissional cinematográfico — para isso veja o Air 3S ou o Mavic 3 Pro — mas para 90% dos casos de uso, é difícil errar.",
      imageUrl: "/placeholder-product.svg",
      amazonAsin: "B0CJYHBYVK",
      mercadoLivreUrl: "https://lista.mercadolivre.com.br/dji-mini-4-pro",
      pros: [
        "Sub-249g — dispensa cadastro ANAC para uso recreativo",
        "Câmera 4K HDR com gimbal mecânico de 3 eixos",
        "Sensores anti-colisão omnidirecionais (raro nessa faixa de peso)",
        "Transmissão OcuSync 4 com alcance real de 15-20km em área aberta",
      ],
      cons: [
        "Preço alto para o segmento sub-250g (R$ 8-10k)",
        "Modo vertical para social tem crop perceptível",
      ],
    },
    {
      rank: 2,
      name: "DJI Air 3S",
      tagline: "Melhor pra criadores de conteúdo profissionais",
      description:
        "O Air 3S sobe a régua técnica significativamente em relação ao Mini 4 Pro. O sensor da câmera principal é de 1\" CMOS — mais que o dobro de área do Mini, com 14 stops de alcance dinâmico, captura detalhe em sombras e altas luzes que os sensores menores perdem. Soma uma segunda câmera com lente teleobjetiva de 70mm, que muda o jogo para retratos e composições compridas sem precisar pôs-edição. É o primeiro DJI consumer com LiDAR frontal, então voa com segurança em pouca luz, e tem 45 minutos de autonomia. Pesa mais de 250g (precisa cadastro ANAC, mas é gratuito) e custa entre R$ 12-15k. Vale para quem ganha dinheiro com o conteúdo (YouTubers, fotografia profissional, casamentos) ou para quem realmente prioriza qualidade de imagem acima de portabilidade. Para uso casual e turismo, o Mini 4 Pro entrega 80% da experiência por menos da metade do preço.",
      imageUrl: "/placeholder-product.svg",
      amazonAsin: "B0DRW2PSKW",
      mercadoLivreUrl: "https://lista.mercadolivre.com.br/dji-air-3s",
      pros: [
        "Sensor 1\" CMOS — qualidade de imagem profissional",
        "Câmera teleobjetiva 70mm dedicada (dual cam)",
        "LiDAR frontal para detecção em baixa luz",
        "45 min de autonomia, transmissão 20km",
      ],
      cons: [
        "Acima de 250g — exige cadastro SISANT/ANAC",
        "Preço alto (R$ 12-15k) para uso casual",
      ],
    },
    {
      rank: 3,
      name: "DJI Neo",
      tagline: "O drone mais acessível da DJI — controle pelo smartphone",
      description:
        "O Neo redefiniu a entrada da DJI no Brasil. Pesa apenas 135g (totalmente isento de regulação ANAC para uso recreativo, é a categoria menos restritiva), e mais inusitado: você pode voar sem nenhum controle remoto — decola da palma da mão, te segue automaticamente via reconhecimento de IA, executa quickshots pré-definidos e pousa de volta na sua mão. Câmera 4K UHD estabilizada digitalmente (não tem gimbal mecânico, é o principal compromisso para chegar nesse peso/preço). Autonomia de 18 minutos é curta — invista no combo com 3 baterias se for usar em viagens. Por R$ 1.299 a versão básica, é difícil bater como ponto de entrada — especialmente para quem ainda tem receio de pilotar drone manualmente. Não substitui um Mini ou Air para conteúdo sério, mas para vlogs casuais, social media e diversão, entrega muito por pouco.",
      imageUrl: "/placeholder-product.svg",
      amazonAsin: "B0DG9WHMF6",
      mercadoLivreUrl:
        "https://www.mercadolivre.com.br/drone-dji-neo-standard-br-dji050-cor-cinza/p/MLB40399215",
      pros: [
        "Mais barato da DJI (R$ 1.299 a versão básica)",
        "Apenas 135g — categoria mais leve, zero regulação ANAC",
        "Voo automático sem controle, decolagem e pouso da palma",
        "Quickshots e tracking de IA prontos pra social",
      ],
      cons: [
        "Estabilização só digital (sem gimbal mecânico)",
        "Autonomia curta (18 min com 1 bateria)",
        "Alcance limitado vs. modelos com OcuSync",
      ],
    },
    {
      rank: 4,
      name: "DJI Flip",
      tagline: "Compacto com proteção integrada de hélice",
      description:
        "O Flip é o lançamento DJI de 2025 que fica entre o Neo e o Mini 4 Pro. Pesa menos de 249g (sem cadastro ANAC), filma em 4K/60fps com 48MP em fotos, e a sacada principal é o protetor de hélice integrado, dobrável — você pode voar próximo de pessoas e em ambientes fechados com risco bem menor de acidente. O sensor é 1/1,3\" com abertura f/1,7 (boa luz baixa para o segmento) e gimbal mecânico de 3 eixos. Decolagem da palma como o Neo, mas com qualidade de câmera e estabilização mais próxima do Mini. Autonomia de 31 minutos. É um drone que faz sentido se você prioriza segurança (filmar pessoas próximas, eventos, crianças) ou simplesmente quer algo mais robusto para uso indoor sem perder qualidade. Como é mais novo, tem menos avaliações ainda — esperamos ver mais comparações ao longo do ano.",
      imageUrl: "/placeholder-product.svg",
      amazonAsin: "B0DSWMM7ZW",
      mercadoLivreUrl: "https://lista.mercadolivre.com.br/dji-flip",
      pros: [
        "Sub-249g + protetor de hélice integrado dobrável",
        "Sensor 1/1,3\" com abertura f/1,7 (bom em baixa luz)",
        "Gimbal mecânico 3 eixos + 4K/60fps",
        "Decolagem e pouso da palma da mão",
      ],
      cons: [
        "Lançamento recente — menos reviews acumuladas",
        "Mais caro que o Neo, sem ser tão capaz quanto o Mini 4 Pro",
      ],
    },
    {
      rank: 5,
      name: "DJI Mini 3 (Fly More Combo)",
      tagline: "Melhor entrada DJI custo-benefício",
      description:
        "O Mini 3 (não confundir com o Mini 3 Pro, mais caro) é o ponto-doce de custo-benefício da linha Mini. Pesa 249g, filma em 4K HDR com gimbal mecânico de 3 eixos, e a versão Fly More Combo vem com 3 baterias — usando a bateria Plus, são até 51 minutos de voo por bateria, autonomia que nem drones muito mais caros entregam. Não tem sensores anti-colisão (Mini 3 Pro tem), nem 4K/60 (vai até 4K/30), e a transmissão é OcuSync 2.0 (até 10km, suficiente para uso normal). Por aproximadamente R$ 4-5k no combo, é o drone que mais se vende no Brasil pra quem quer entrar na DJI com qualidade real, sem precisar pagar pelos sensores premium. Se você não voa próximo de obstáculos e quer pura qualidade de imagem com longa autonomia, é uma escolha excepcional.",
      imageUrl: "/placeholder-product.svg",
      amazonAsin: "B0C9MST91Q",
      mercadoLivreUrl: "https://lista.mercadolivre.com.br/dji-mini-3",
      pros: [
        "Sub-250g + gimbal mecânico 3 eixos + 4K HDR",
        "Autonomia até 51 min com bateria Plus (combo)",
        "Custo-benefício imbatível dentro da linha DJI",
        "1/1.3\" CMOS com vídeo vertical nativo",
      ],
      cons: [
        "Sem sensores anti-colisão (vai pro Mini 3 Pro se precisar)",
        "Sem 4K/60fps, só 4K/30",
      ],
    },
    {
      rank: 6,
      name: "DJI Avata 2 Fly More Combo",
      tagline: "O melhor drone FPV pra cinematic flight imersivo",
      description:
        "O Avata 2 é o drone FPV (First Person View) mais maduro do mercado consumer. Você pilota usando os DJI Goggles 3 (incluídos no Combo), com transmissão de vídeo em tempo real direto pros seus olhos, e a sensação é de estar dentro do drone. Câmera 4K/60 HDR com sensor 1/1.3\", protetor de hélice integrado (essencial — drones FPV batem em coisas com frequência), e o controle por movimento do RC Motion 3 simplifica MUITO a curva de aprendizado vs. um drone FPV tradicional de stick. O Combo inclui Goggles, RC Motion, drone e baterias — sai pronto pra voar por R$ 8-10k. Importante: isso é um drone para uso ESPECÍFICO (filmagem dinâmica, esportes, perseguição), não substitui um Mini 4 Pro para foto cinematográfica estática. Se você nunca voou drone, comece por um Mini, não por um FPV.",
      imageUrl: "/placeholder-product.svg",
      amazonAsin: "B0CS6HVW6P",
      mercadoLivreUrl: "https://lista.mercadolivre.com.br/dji-avata-2",
      pros: [
        "Experiência FPV imersiva via DJI Goggles 3",
        "Protetor de hélice integrado (FPV bate em coisas)",
        "Controle por movimento simplifica curva FPV",
        "4K/60 HDR com sensor 1/1.3\"",
      ],
      cons: [
        "Caso de uso específico (não substitui drone fotográfico)",
        "Goggles ocupa o campo de visão — exige acompanhante por segurança",
      ],
    },
    {
      rank: 7,
      name: "DJI Mavic 3 Pro Fly More Combo",
      tagline: "Profissional cinematográfico com câmera Hasselblad",
      description:
        "O Mavic 3 Pro é o flagship absoluto da DJI consumer. Triple cam: Hasselblad principal com sensor 4/3 CMOS (o maior em drone consumer, equivalente a uma câmera mirrorless intermediária), 70mm tele e 166mm super-tele — três focais que cobrem do retrato à compressão de paisagem distante. Vídeo até 5.1K/50fps ou 4K/120fps em slow motion. Autonomia de 43 minutos, transmissão OcuSync 3+ com 15km. Preço entre R$ 25-30k no combo — não é compra impulsiva. É a escolha para quem produz conteúdo onde a qualidade do ar é parte do produto: comerciais, documentário, cinema, fotografia imobiliária high-end, casamentos sofisticados. Para qualquer outro uso é overkill — o Air 3S faz quase tudo por menos da metade.",
      imageUrl: "/placeholder-product.svg",
      amazonAsin: "B0C4B57M9Q",
      mercadoLivreUrl: "https://lista.mercadolivre.com.br/dji-mavic-3-pro",
      pros: [
        "Sensor Hasselblad 4/3 CMOS — o maior do segmento consumer",
        "Triple cam: 24mm Hasselblad + 70mm + 166mm tele",
        "5.1K/50fps de vídeo, 4K/120 slow motion",
        "Autonomia 43 min, transmissão OcuSync 3+ (15km)",
      ],
      cons: [
        "Preço premium (R$ 25-30k no combo)",
        "Peso maior, exige cadastro ANAC e logística mais cuidadosa",
        "Overkill pra usuário casual ou criador iniciante",
      ],
    },
    {
      rank: 8,
      name: "Autel EVO Lite+",
      tagline: "Alternativa premium ao DJI sem geo-fencing",
      description:
        "A Autel é a alternativa séria à DJI no segmento premium. O EVO Lite+ tem sensor de 1\" CMOS (mesma área que o Air 3S), grava em 6K HDR a 30fps ou 4K/60, e a sacada técnica única é a abertura variável F2.8-F11 — você ajusta exposição mecanicamente sem ND filters, vantagem real para quem filma profissionalmente. Outra diferença importante para o público brasileiro: Autel não tem geo-fencing (DJI bloqueia voo em zonas pré-definidas), então você consegue voar legalmente em locais onde DJI te trava. Autonomia de 40 minutos, gimbal 3 eixos, transmissão até 12km. O ponto fraco é o ecossistema: poucos revendedores oficiais no Brasil, software menos polido que DJI, peças e suporte mais demorados. Vale para quem prioriza autonomia criativa e o sensor de 1\".",
      imageUrl: "/placeholder-product.svg",
      amazonAsin: "B0B2V7SQX4",
      mercadoLivreUrl:
        "https://www.mercadolivre.com.br/drone-autel-robotics-evo-lite-lite-premium-com-cmera-6k-laranja-58ghz-3-baterias/p/MLB19131712",
      pros: [
        "Sensor 1\" CMOS + abertura variável F2.8-F11",
        "Sem geo-fencing — voa onde DJI bloqueia",
        "6K HDR a 30fps, 4K/60 com gimbal 3 eixos",
        "40 min de autonomia",
      ],
      cons: [
        "Suporte e peças mais limitados no Brasil que DJI",
        "Software menos polido (lançamentos de firmware mais espaçados)",
      ],
    },
    {
      rank: 9,
      name: "Potensic Atom SE Fly More Combo",
      tagline: "Sub-249g acessível e prático sem ser DJI",
      description:
        "O Atom SE é a melhor opção sub-250g fora do ecossistema DJI. Pesa 249g (zero ANAC pra uso recreativo), tem GPS (essencial pra retorno automático e estabilidade — drones baratos sem GPS são bem piores), motor brushless (mais durável e silencioso), câmera 4K com EIS digital (estabilização eletrônica, não gimbal mecânico — esse é o principal compromisso vs. um Mini 3) e o Fly More Combo entrega até 93 minutos de voo total com 3 baterias. Preço entre R$ 1.500-2.500 no combo. Vale para quem quer drone sub-250g sem pagar 6-10k da DJI. Compromissos reais: a câmera é boa, mas EIS digital faz tremulação aparente em vento; o software (Potensic Pro app) é menos polido que o DJI Fly. Para uso casual, viagem e foto/vídeo amador, entrega muito por pouco.",
      imageUrl: "/placeholder-product.svg",
      amazonAsin: "B0CBLQDJ98",
      mercadoLivreUrl:
        "https://produto.mercadolivre.com.br/MLB-4908946140-drone-potensic-atom-se-2-baterias-4k-gps-4km-29min-249g-_JM",
      pros: [
        "Sub-250g sem precisar de cadastro ANAC",
        "GPS + retorno automático + motor brushless",
        "Combo com 3 baterias = até 93 min de voo total",
        "Custo-benefício: quase metade do preço de um Mini 3",
      ],
      cons: [
        "Estabilização EIS digital (sem gimbal mecânico)",
        "Software menos polido que DJI Fly",
      ],
    },
    {
      rank: 10,
      name: "SJRC F11 4K Pro",
      tagline: "O drone com câmera 4K mais barato pra começar",
      description:
        "O F11 4K Pro é o ponto de entrada extremo. Por R$ 700-1.200, você tem câmera 4K, gimbal mecânico de 2 eixos (nessa faixa de preço, o normal seria sem gimbal nenhum), GPS dual frequência (5GHz), motor brushless e dobrável. Autonomia de 26 minutos, alcance de 1.200m em condição ideal. Pesa mais de 250g (precisa cadastro SISANT/ANAC, lembre-se). Os compromissos são o que se espera nessa faixa: o software é amador comparado a DJI Fly, transmissão de vídeo tem mais latência e perde sinal antes, o suporte pós-venda é menor. Mas para quem quer apenas começar a aprender drone, gravar férias em família ou filmar projetos pessoais sem investir os R$ 4-5k mínimos da DJI, é uma porta de entrada honesta. Não vai entregar a estabilidade DJI, mas entrega 4K real com gimbal — algo que poucos drones nessa faixa fazem.",
      imageUrl: "/placeholder-product.svg",
      amazonAsin: "B09DWDS19Z",
      mercadoLivreUrl:
        "https://www.mercadolivre.com.br/drone-sjrc-f11-4k-pro-com-cmera-4k-prateado-cinza-5ghz-1-bateria/p/MLB17236285",
      pros: [
        "Câmera 4K com gimbal mecânico de 2 eixos por R$ 700-1.200",
        "GPS dual frequência (5GHz) + retorno automático",
        "Motor brushless (mais durável que escovado)",
        "Dobrável e razoavelmente compacto",
      ],
      cons: [
        "Acima de 250g — exige cadastro SISANT/ANAC",
        "Software amador, transmissão menos confiável",
        "Suporte e peças limitadas no Brasil",
      ],
    },
  ],
};
