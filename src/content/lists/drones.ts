import type { ProductList } from "@/lib/types";

// Imagens: URLs oficiais do CDN Amazon (formato /images/I/{HASH} — mesmo que SiteStripe gera).
// Links Mercado Livre: links de afiliado "social" (mercadolivre.com.br/social/...?ref=...).
// Links Amazon: tag recomendou01-20 injetada automaticamente via buildAmazonUrl.

export const dronesList: ProductList = {
  slug: "10-melhores-drones",
  title: "Os 10 Melhores Drones (Maio 2026)",
  category: "Drones",
  monthYear: "Maio de 2026",
  metaDescription:
    "Comparativo dos 10 melhores drones disponíveis em maio de 2026 no Brasil. Análise de câmera, autonomia, alcance e preço, com links direto para Amazon e Mercado Livre.",
  publishedAt: "2026-05-09",
  updatedAt: "2026-05-10",
  intro:
    "Escolher um drone em 2026 ficou ao mesmo tempo mais simples e mais confuso. Simples porque a qualidade média subiu — até modelos de entrada filmam em 4K, voam por mais de 25 minutos e cabem na palma da mão. Confuso porque a quantidade de variações cresceu na mesma proporção: drones com câmera estabilizada, com sensores de obstáculo, com transmissão de longo alcance, FPV, sub-250g (que dispensam registro na ANAC para uso recreativo), e por aí vai.\n\nPara essa lista comparamos modelos disponíveis no Brasil em maio de 2026 — todos verificados como em estoque (novos) tanto na Amazon quanto no Mercado Livre. Consideramos qualidade de imagem, estabilidade em vento, autonomia real (não a do papel), distância de transmissão segura, facilidade de uso e custo-benefício. Cada drone tem prós e contras explícitos — não existe \"melhor para todo mundo\", existe melhor para o seu uso. A DJI domina o mercado brasileiro com folga, mas no final da lista incluímos opções acessíveis pra quem quer começar a voar sem investir caro.",
  conclusion:
    "Se você nunca pilotou um drone e quer começar com qualidade real, vá de DJI Mini 3 ou Mini 2 SE — sub-249g (zero burocracia ANAC), curva de aprendizado suave e câmera com gimbal mecânico. Se busca o mais sofisticado, o Mavic 3 Classic com sensor 4/3 da Hasselblad é o melhor que dá pra ter no Brasil em qualidade de imagem. Para piloto FPV ou esporte, o Avata 2 continua sendo a única escolha razoável de entrada. Se orçamento é restritivo, o L900 Pro SE Max entrega câmeras 4K + GPS + brushless por menos de R$ 1.500, e o Eachine E88 Pro fica numa faixa ainda mais acessível para quem só quer experimentar voar antes de investir mais.",
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
        "Vale, com ressalvas. Marcas chinesas econômicas como L900 e Eachine entregam câmeras 4K e GPS por uma fração do preço de um DJI, mas o software, a estabilidade real em vento e o suporte ficam atrás. Para uso profissional, DJI continua sendo a escolha mais segura por ecossistema e revenda no mercado brasileiro. Para começar a voar e aprender, drones econômicos podem ser ótimos pontos de partida.",
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
        "O Mini 4 Pro é o drone mais bem equilibrado da DJI. Pesa menos de 249g (zero burocracia ANAC para uso recreativo), filma em 4K HDR a 100fps com gimbal mecânico de 3 eixos, e tem o que faltava na geração anterior: sensores de obstáculo omnidirecionais — ele detecta obstáculos em todas as direções, não só na frente. Autonomia real de cerca de 30 minutos por bateria (34 prometidos pela DJI), transmissão de até 20km via OcuSync 4 que funciona muito bem em áreas abertas. Para quem cria conteúdo casual, viaja, ou simplesmente quer um drone confiável para a maior parte das situações sem precisar pensar em regulação, é a escolha mais segura. Não é o que tem o sensor maior nem o melhor para vídeo profissional cinematográfico — para isso veja o Mavic 3 Classic — mas para 90% dos casos de uso, é difícil errar.",
      imageUrl: "https://m.media-amazon.com/images/I/51YDGGsBOCL._AC_SL1000_.jpg",
      amazonAsin: "B0CJYHBYVK",
      mercadoLivreUrl:
        "https://www.mercadolivre.com.br/social/eq20260217155414?matt_word=recomendou&matt_tool=52025636&forceInApp=true&ref=BC9PAOLcpD1i9U7VojUwwqC7ps1U%2FD4bg6zAcJk%2Baom8cQq8rY9aIM2h9jeO0AJRdAY2Yh3xJCK0O%2BcSlfn4zzq7KgDx6NBSMtx2Sy2NXzuG%2FT1SXeNizRfuygjua77SYvn%2Fg3PRVm7iYVVexBIwEgCu9S99S4vtWR5H67hMH%2BQxMg2JWVuglO8K41QGuOJbDHbN629endT9o7n%2FQQ%3D%3D",
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
      imageUrl: "https://m.media-amazon.com/images/I/41n9JJ1VUOL._AC_SL1000_.jpg",
      amazonAsin: "B0DRW2PSKW",
      mercadoLivreUrl:
        "https://www.mercadolivre.com.br/social/eq20260217155414?matt_word=recomendou&matt_tool=52025636&forceInApp=true&ref=BBGBP5LHF%2FMr1CwkUEsznH6UbzWduA5vHsqBsPR43fs%2Bn9nY%2F1uTXH9UWzCheS%2B9%2FNaQfBUjYFjdrbIlbLdyh2TQWyvNsKerFDA9EiBe9Ihw73nFO5nUkh9aHiOxFzs73N7Kk4tdhHPuIZY8RgPZj%2BiTWvvVytrmzfhlDP36bi2%2FE%2BIkl%2B%2B%2Bpo0NtAJVWUdzLXhBU5hYwg45PEw3ww%3D%3D",
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
      imageUrl: "https://m.media-amazon.com/images/I/51-gk+1PkML._AC_SL1000_.jpg",
      amazonAsin: "B0DG9WHMF6",
      mercadoLivreUrl:
        "https://www.mercadolivre.com.br/social/recomendou?matt_word=recomendou&matt_tool=73519280&forceInApp=true&ref=BDshW9EgUbk%2FmxR1B8sg3CA6a820PP9mbdm%2Fog0jO2F%2FsXe9T%2FOi7x36z%2BYsYYMV%2BvoPNjOgHKIfQRES2rVkq9z9MTwiKcFNJ0CqWK%2Fnto7XIqjc8loCFlS0lWm1q%2BYzmSfShRbKSZcY%2Bwwxeqo8j9BqkJRDsUwgfbOl8BJCsRmnWS8A%2Bv8k31Fb032fuUsxau%2FS%2F8k%3D",
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
      imageUrl: "https://m.media-amazon.com/images/I/5173JqQvQ+L._AC_SL1000_.jpg",
      amazonAsin: "B0DSWMM7ZW",
      mercadoLivreUrl:
        "https://www.mercadolivre.com.br/social/eq20260217155414?matt_word=recomendou&matt_tool=52025636&forceInApp=true&ref=BB9Q%2FKqV7MKECzPnLUxR6IWUeQRP05KgslpFnpxgD9qGTDVymGMVpOx%2Blfg05ZheQ47OIIwsb3z0RHN83avrC9fVkmmLTiG3k6Ze5QlYbLHiXkmt7OjWbDpJeNGmPAiRI20B%2FIW%2FJPcu380cmiGGmpJNKq%2BYqHvGqCPv4xAElqhnRJqsMa229JJmIcXOVnEkpHmuTvyEz%2BfpqTevQQ%3D%3D",
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
      imageUrl: "https://m.media-amazon.com/images/I/51WaPqwPl4L._AC_SL1000_.jpg",
      amazonAsin: "B0C9MST91Q",
      mercadoLivreUrl:
        "https://www.mercadolivre.com.br/social/eq20260217155414?matt_word=recomendou&matt_tool=52025636&forceInApp=true&ref=BOLE5gitPhycISg9HRTMqJaYSjGLGKRYsZ8kY2L%2FcdLGk44Kjdw9GTY1NiCakxdpV4FueagXzRZU1sOsUaWFIFlsnRC73sOBUslvDOZVcRWAYOgUBxFYL9RwJrm0n8MqQvTnlF4Av2cn65SVsYaIQLt09HDeuIvQEe4vh%2Fi4l6VsIihUhpOOATI5DpZM4I8X5vlblCNGrmAh18IjVw%3D%3D",
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
      imageUrl: "https://m.media-amazon.com/images/I/611euk2uBAL._AC_SL1500_.jpg",
      amazonAsin: "B0CS6HVW6P",
      mercadoLivreUrl:
        "https://www.mercadolivre.com.br/social/eq20260217155414?matt_word=recomendou&matt_tool=52025636&forceInApp=true&ref=BPkRaWaK6yu%2FLieKXhTomvmVn50uDN6ga0ghs08B6SqFrPrg8%2FcgOSRriuPDeKMJ9%2BsAv6pUEdpS1QWsum6GI%2BaBwrHn5X%2BMJWhikqoBqHR%2F69aWZhkZ%2BJgKU1oT4ONyUrFdBCWuukp21zv4r6jeZOXQdQ3gh9wbHX%2BsHf3B8LlCMiCGn3cYbtLkOnSdZgvcDC3wGWU%3D",
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
      name: "DJI Mavic 3 Classic Fly More Kit",
      tagline: "Profissional cinematográfico com sensor Hasselblad 4/3",
      description:
        "O Mavic 3 Classic mantém o coração do flagship DJI — o sensor Hasselblad 4/3 CMOS de 20MP — sem as duas câmeras secundárias do Mavic 3 Pro. Para quem quer a melhor qualidade de imagem aérea consumer no Brasil sem pagar pelas teleobjetivas extras, é a escolha mais inteligente. Filma em 5.1K a 50fps, 4K a 60fps, slow-motion 4K a 120fps. Autonomia de 46 minutos é a maior do segmento, transmissão OcuSync 3+ chega a 15km com 1080p/60. Sensores omnidirecionais de obstáculo, ActiveTrack 5.0, MasterShots e QuickShots vêm prontos. O Fly More Kit inclui mochila, 3 baterias e múltiplos acessórios — sai pronto para trabalhar. Faz sentido para fotografia imobiliária, eventos sofisticados, casamentos, documentário e uso profissional onde a qualidade do ar é parte do produto. Para uso casual, é overkill — o Air 3S faz quase tudo por menos da metade do preço.",
      imageUrl: "https://m.media-amazon.com/images/I/51U-7scr1AL._AC_SL1000_.jpg",
      amazonAsin: "B0BTJ5SBRQ",
      mercadoLivreUrl:
        "https://www.mercadolivre.com.br/social/eq20260217155414?matt_word=recomendou&matt_tool=52025636&forceInApp=true&ref=BFIVCWygiHC6eHVopZ4xhjvju%2FdogaNcGTsHIkmAuLo7Ezeo7JtOhau6zDQ31RPIxmNSk%2BuqjkHtCfWbsWuQGgSsro0ng86y6bNp68ZLA%2FEgQzzJAywbyF4x6fIuegBKtXeA7uqBD5AZPQCxr0KzKfNadbWTl0RYzF%2Bpw5mHKZihbh4y%2Bs2bOa2o3OgTQSZjDT71Q8BrJZU0dN8m0A%3D%3D",
      pros: [
        "Sensor Hasselblad 4/3 CMOS — o maior do segmento consumer",
        "5.1K/50fps, 4K/60, slow-motion 4K/120",
        "Autonomia de 46 min (a maior do segmento)",
        "OcuSync 3+ com 15km e 1080p/60 ao vivo",
      ],
      cons: [
        "Preço premium (R$ 22-30k no Fly More Kit)",
        "Peso maior, exige cadastro ANAC e logística cuidadosa",
        "Sem as teleobjetivas do Mavic 3 Pro (se precisar tele, vá no Pro)",
      ],
    },
    {
      rank: 8,
      name: "DJI Mini 2 SE Fly More Combo",
      tagline: "Entrada DJI mais acessível com gimbal mecânico real",
      description:
        "O Mini 2 SE é o ponto de entrada mais barato da DJI com gimbal mecânico de 3 eixos — um diferencial enorme contra drones econômicos que estabilizam apenas digitalmente. Pesa menos de 249g (zero ANAC), filma em vídeo 2.7K (não é 4K, mas a qualidade é boa para o segmento), com transmissão OcuSync 2.0 estável até 10km. Autonomia de 31 minutos por bateria; o Fly More Combo vem com 3 baterias e dá tranquilidade pra um dia inteiro de voo. Por R$ 2.000-3.000, é o melhor caminho pra quem quer um drone DJI confiável sem investir nos R$ 4-5k do Mini 3. Compromissos comparados ao Mini 3: vídeo é 2.7K (não 4K), sem HDR, sem QuickTransfer, e o sensor é menor. Para quem não filma profissionalmente, a diferença prática é pequena — e o preço justifica.",
      imageUrl: "https://m.media-amazon.com/images/I/41SZfEK5AWL._AC_SL1000_.jpg",
      amazonAsin: "B0BW4KRCM1",
      mercadoLivreUrl:
        "https://www.mercadolivre.com.br/social/eq20260217155414?matt_word=recomendou&matt_tool=52025636&forceInApp=true&ref=BKm8x7VYYv%2BEy2ER1FJTAc65mDX91CxmxgA9tbDMNjB9QqtE2Uj41U88ZDCrEC4sBWb%2BLhviCcHGcJ5KpsrJc3K%2FCbrccV1McvU%2BK%2FOXJI5wdItFFMBBfVRozvZ9e%2BK2jlyDkQIZ3YMY4gEw7MYeODEwE%2FsU9IvlasenQ4u%2FaFK2F%2BZRRsisqZenglWUH%2FFpjzJiPPQ%3D",
      pros: [
        "Sub-249g + gimbal mecânico 3 eixos por R$ 2-3k",
        "Transmissão OcuSync 2.0 (estável e longo alcance pro segmento)",
        "Autonomia 31 min, combo com 3 baterias inclui",
        "Ecossistema DJI completo (app, atualizações, peças)",
      ],
      cons: [
        "Vídeo 2.7K (não 4K) e sem HDR",
        "Sensor menor que Mini 3 — menos detalhe em luz baixa",
      ],
    },
    {
      rank: 9,
      name: "L900 Pro SE Max",
      tagline: "Alternativa econômica com câmera 4K e GPS",
      description:
        "O L900 Pro SE Max é uma das opções chinesas mais populares no Brasil para quem quer experiência de drone real sem entrar no preço da DJI. Tem GPS (essencial para retorno automático e estabilidade — drones baratos sem GPS são bem inferiores), motor brushless (mais durável e silencioso que escovado), câmeras duplas com captura em 4K (interpolado, não nativo, mas a qualidade entrega para uso amador) e prevenção de obstáculos. Distância de transmissão de 1,2km é honesta para o segmento, autonomia de 25-28 minutos. Preço entre R$ 800-1.500. Compromissos reais: o software (L900 Pro app) é menos polido que DJI Fly, a estabilidade em vento moderado é claramente inferior, e o suporte/peças são limitados. Mas para quem está aprendendo a voar, gravando viagens e projetos pessoais, é uma porta de entrada muito mais acessível que DJI sem ser brinquedo. Pesa mais de 250g — exige cadastro ANAC.",
      imageUrl: "https://m.media-amazon.com/images/I/51OKSw+LPVL._AC_SL1010_.jpg",
      amazonAsin: "B0BCYY1KX3",
      mercadoLivreUrl:
        "https://www.mercadolivre.com.br/social/eq20260217155414?matt_word=recomendou&matt_tool=52025636&forceInApp=true&ref=BMZWxGgNODX2kv1TV9jDkvTCK9%2BLuai0ygFkruUjOu3QzEs757nOUgmVYXCRkDEF0RvvhFmMZ9E%2B4xUogo15%2BTm8BCIj0K5zT6UrqZ08hEc5CZNwPysF9EyXys8XZMaA15Iz1gQMTsAF%2BijPAwnxYntZ%2F7Fuy2dAfu4xhnlP%2F8ptSgZzB2qjfWdxnSh8BEsM56RbxOY%3D",
      pros: [
        "GPS + motor brushless + câmeras duplas 4K por R$ 800-1.500",
        "Prevenção de obstáculos (raro nessa faixa)",
        "Dobrável, transporte fácil",
        "Autonomia razoável (25-28 min) com baterias substitutas",
      ],
      cons: [
        "Acima de 250g — exige cadastro SISANT/ANAC",
        "Software amador comparado a DJI Fly",
        "Menos estável em vento que drones mais caros",
        "Vídeo 4K é interpolado (não sensor 4K nativo)",
      ],
    },
    {
      rank: 10,
      name: "Eachine E88 Pro",
      tagline: "Pra quem quer experimentar drone sem investir caro",
      description:
        "Importante deixar claro de cara: o E88 Pro é uma opção bem simples e econômica — não pretende competir com DJI nem com os modelos chineses mid-range desta lista. É um drone para quem nunca voou e quer entender se gosta antes de investir mais sério, ou para quem quer um equipamento descartável-ish para aprender movimentos básicos sem chorar se cair. Pesa pouco, é dobrável, vem com câmera dupla (uma na frente, uma embaixo) com vídeo apresentado como \"4K\" (na prática é interpolado / WiFi-streaming, qualidade real fica entre 720p e 1080p decentes). Autonomia de cerca de 20 minutos, alcance curto (~80-100m). Não tem GPS, não tem retorno automático confiável, não tem sensores de obstáculo. Por R$ 200-400, é divertido, é leve, é um excelente \"primeiro voo\" pra criança ou adulto curioso. Mas se você já sabe que quer levar a sério, pula direto pro L900 Pro SE Max ou pro Mini 2 SE.",
      imageUrl: "https://m.media-amazon.com/images/I/51bo0dObnXS._AC_SL1010_.jpg",
      amazonAsin: "B0972RC9VS",
      mercadoLivreUrl:
        "https://www.mercadolivre.com.br/social/eq20260217155414?matt_word=recomendou&matt_tool=52025636&forceInApp=true&ref=BL18x6joVHa5bFRSWEr%2Bx3R1MuNRast6TfRgFF6drGGzXX1hlOAd4i2N93a1HPiUXRm1yDls0W78QMf7rfzHzjAmlXF3XX%2BCZWY08PLA0VewYktRC%2BmxZZXfOh0YfrC4B70g22UH22iAy7irfoaWjk0qi1doGwNFcwrFmhs%2FZfJbbW%2Br6aHHzfcKr6zwlIe5Y%2BI1Xeo%3D",
      pros: [
        "Preço extremamente acessível (R$ 200-400)",
        "Leve, dobrável, fácil de transportar",
        "Câmera dupla (frente + base) por WiFi FPV",
        "Bom como \"primeiro drone\" pra aprender o básico",
      ],
      cons: [
        "Sem GPS, sem retorno automático confiável",
        "\"4K\" do marketing é interpolado, não sensor nativo",
        "Alcance curto e sensível a vento — uso só em ambiente calmo",
        "Sem suporte ou peças oficiais no Brasil",
      ],
    },
  ],
};
