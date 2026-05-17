import type { ProductList } from "@/lib/types";

// Imagens Amazon: hot-link via m.media-amazon.com/images/I/{HASH}
// Links Mercado Livre: links de afiliado "social" (mercadolivre.com.br/social/...?ref=...)
// Links Amazon: tag recomendou01-20 injetada automaticamente via buildAmazonUrl

export const adegasClimatizadasList: ProductList = {
  slug: "melhores-adegas-climatizadas",
  title: "As 10 Melhores Adegas Climatizadas (Maio 2026)",
  category: "Adegas Climatizadas",
  monthYear: "Maio de 2026",
  metaDescription:
    "Comparativo das 10 melhores adegas climatizadas em maio de 2026 no Brasil. Análise de capacidade, sistema (compressor vs termoelétrica), zona única vs dual zone, e preço — com links direto para Amazon e Mercado Livre.",
  publishedAt: "2026-05-11",
  updatedAt: "2026-05-11",
  intro:
    "Vinho em geladeira comum estraga. Não é exagero — geladeira opera entre 2°C e 5°C (frio demais pra vinho, que precisa de 8-18°C), tem vibração contínua do compressor (agita o sedimento), e mantém umidade abaixo do ideal pra rolha (que resseca e deixa o ar entrar). Pra quem leva vinho a sério, **adega climatizada é a única solução de armazenamento adequada** — e em 2026, com modelos de 12 garrafas a partir de R$ 900-1.500, virou acessível pra muito mais gente do que parecia.\n\nA decisão de compra de adega tem 3 dimensões técnicas que valem entender antes:\n\n**1. Capacidade** (em garrafas): 12 pra iniciante/casal, 24 pra entusiasta médio, 33+ pra coleção séria. Vinho \"empilha\" em volume mais rápido do que se imagina — quem começa com 12 quase sempre acaba upgradeando em 1-2 anos.\n\n**2. Sistema de refrigeração** — **compressor vs. termoelétrica**:\n- *Termoelétrica* (efeito Peltier): silenciosa, sem vibração, sem refrigerante. Limitação: só consegue baixar a temperatura ~12°C abaixo do ambiente — em cidade quente (Rio, NE) no verão, não chega aos 8°C ideais. Ótima pra clima ameno (Sul, SP no inverno).\n- *Compressor*: refrigeração ativa, alcança qualquer temperatura independente do clima, mais robusta. Faz pequeno barulho (similar a geladeira), tem vibração mínima. Recomendada pra clima quente.\n\n**3. Zona única vs. Dual Zone**: dual zone tem 2 compartimentos com temperaturas independentes — você pode guardar tintos a 16°C E brancos a 8°C na mesma adega. Diferencial real pra quem bebe os dois tipos.\n\nNa lista a seguir, comparamos as 10 melhores em maio de 2026 no Brasil, todos verificados em estoque na Amazon e/ou Mercado Livre.",
  conclusion:
    "Pra quem está entrando no universo de vinhos e quer simplesmente começar bem, vá de **Electrolux ACB12** ou **Midea 12 Bivolt** (termoelétrica, silenciosa, compacta). Pra entusiasta que já bebe regularmente e quer flexibilidade de temperatura independente do clima, **compressor é o caminho — EOS EAC24G ou Suggar Lyon** entregam isso. Quem tem coleção mista (tintos + brancos) precisa de **dual zone — Brastemp BZB33BE** entrega isso com 33 garrafas e robustez Brastemp. E pra coleção séria que quer tech moderna, a **Midea Liva 34 Inverter Smart** com Wi-Fi (controle pelo app, notificação de variação) é o estado da arte acessível.\n\n**Dica fora da lista:** se você mora em região quente (Rio, NE, MT/MS), **priorize compressor sobre termoelétrica** independente da capacidade. A termoelétrica vai sofrer no verão.",
  faq: [
    {
      question: "Compressor ou termoelétrica: qual escolher?",
      answer:
        "Depende do clima e prioridades. **Termoelétrica** é silenciosa, sem vibração, e usa o efeito Peltier — perfeita pra escritório, sala, ou ambiente onde silêncio importa. **Mas** ela só baixa a temperatura ~12°C abaixo do ambiente, então em verão quente (acima de 30°C), não chega aos 8°C ideais pra brancos. **Compressor** garante temperatura estável independente do clima, mais robusto, melhor pra estoque de longo prazo — recomendado em cidades quentes (Rio, NE, MT, MS). Faz barulho similar a geladeira pequena.",
    },
    {
      question: "Quantas garrafas devo escolher?",
      answer:
        "Considere o dobro do que você tem hoje. Se tem 6 garrafas, escolha 12-13 (cresce rápido). Se tem 15, escolha 24-33. Quem começa com 12 garrafas quase sempre upgrade em 1-2 anos. O custo de \"crescer\" não é só comprar adega maior — é a diferença entre R$ 1.000 (12 garrafas) e R$ 2.000 (24 garrafas), o que pode ser menos que 1 mês de vinho importado. Pense longo prazo.",
    },
    {
      question: "Dual zone vale a pena?",
      answer:
        "Vale se você bebe tinto **e** branco/espumante regularmente. Tintos servem a 14-18°C, brancos a 8-12°C, espumantes 6-8°C — uma única zona força você a escolher e armazenar fora do ideal. Dual zone resolve com 2 termostatos independentes. Se você só toma tinto, zona única funciona perfeitamente — não pague extra por dual zone que não vai usar.",
    },
    {
      question: "O que é tecnologia Inverter numa adega?",
      answer:
        "Inverter é um tipo de compressor de velocidade variável (em vez de ligar/desligar no talo, ele modula a rotação). Vantagens reais: economia de energia (~30% vs. compressor convencional), menos vibração (protege o sedimento do vinho), e temperatura mais estável (menos oscilação). Modelos inverter (como a Midea Liva 34) custam mais mas se pagam em conta de luz e proteção do vinho ao longo dos anos.",
    },
    {
      question: "Preciso instalar separado ou pode ser embaixo da bancada?",
      answer:
        "A maioria das adegas climatizadas modernas (12-34 garrafas) é *freestanding* — fica em pé no chão, em estante ou bancada superior. Algumas têm certificação built-in (encaixar em gabinete embutido), que exige ventilação frontal específica. Verifique a especificação \"built-in\" se quer encaixar em cozinha planejada. Modelos freestanding não devem ser embutidos — superaquece e pode danificar.",
    },
    {
      question: "Posso usar geladeira normal pra guardar vinho?",
      answer:
        "Não no longo prazo. Geladeira opera a 2-5°C (frio demais — desnaturaliza aromas), tem vibração constante (agita sedimento), e baixa umidade (resseca rolha, deixando ar entrar e oxidar). Pra guardar 1-2 dias antes de servir, geladeira serve. Pra estoque ou coleção, adega climatizada é a única opção que preserva o vinho corretamente.",
    },
  ],
  products: [
    {
      rank: 1,
      name: "Midea Liva 34 Garrafas Inverter Smart Bivolt",
      tagline: "Top de linha com inverter e Wi-Fi — controla pelo app",
      badge: "Melhor geral",
      idealFor: "Quem tem coleção sólida (25+ garrafas) e valoriza tecnologia moderna",
      description:
        "A Midea Liva 34 Garrafas Inverter Smart é o que tem de mais moderno na categoria no Brasil em 2026. **Tecnologia Inverter** (compressor de velocidade variável) reduz consumo de energia em ~30% e minimiza vibração — protege o sedimento do vinho de longo prazo. **Conectividade Smarthome** via Wi-Fi: controle a temperatura pelo app de qualquer lugar, recebe alerta se a temperatura variar (essencial pra coleção valiosa), monitora consumo. Vidro duplo transparente com proteção UV, iluminação LED branca, painel touch com trava, **bivolt** (110V ou 220V sem chave). Aceita 34 garrafas em prateleiras de madeira. Pra entusiasta que está construindo coleção e quer monitoramento profissional, é a escolha mais inteligente — paga premium pela inverter + Wi-Fi, mas se traduz em proteção real do vinho que você está investindo.",
      imageUrl: "https://m.media-amazon.com/images/I/51t88E5qU+L._AC_SL1000_.jpg",
      amazonAsin: "B0FK19FT3X",
      mercadoLivreUrl:
        "https://www.mercadolivre.com.br/social/recomendou?matt_word=recomendou&matt_tool=73519280&forceInApp=true&ref=BAe5KQCtDlHdyUpiGVt97nAZPPFATF%2BD9b0VShCqhpf0dg1xVXEw4U78YOK5KHci6KNIpGrQmx1bpsMi2q9mbgx6Dvd2hiBS9%2F4WfAQYgBQMmBKtgjIFFAYEL3cy6U2W7kD7bj%2BfRVpm0qv89YHMaUQjPvDnA0PRaTiJUdc6IXYDScYYHYIfe4G1bzBim602zM%2FWjMw%3D",
      specs: {
        Capacidade: "34 garrafas",
        Sistema: "Compressor Inverter",
        Zonas: "Zona única",
        Conectividade: "Wi-Fi (app Smarthome)",
        Voltagem: "Bivolt (110V/220V)",
        "Faixa de temperatura": "5°C a 18°C",
      },
      pros: [
        "Compressor Inverter — economia ~30% energia e menos vibração",
        "Wi-Fi Smart com app (controle remoto + alertas)",
        "Bivolt — funciona em qualquer tomada",
        "Capacidade pra coleção real (34 garrafas)",
      ],
      cons: [
        "Preço premium (faixa R$ 3.500-5.000)",
        "App exige Wi-Fi estável e conta Midea",
      ],
    },
    {
      rank: 2,
      name: "Brastemp BZB33BE Dual Zone 33 Garrafas",
      tagline: "Dupla temperatura: tintos a 16°C e brancos a 8°C ao mesmo tempo",
      badge: "Melhor dual zone",
      idealFor: "Quem bebe tinto e branco/espumante e quer servir cada um na temperatura certa",
      description:
        "A Brastemp BZB33BE é a melhor dual zone do mercado brasileiro. **Duas zonas com termostatos independentes** — você guarda tintos a 14-18°C na zona superior, brancos e espumantes a 6-12°C na zona inferior, tudo na mesma adega. Compressor robusto (não termoelétrica, então funciona bem em clima quente). 33 garrafas em 5 prateleiras de madeira, painel touch externo, iluminação LED interna, vidro duplo com proteção UV. Acabamento inox. Marca Brastemp com pós-venda em rede nacional — diferencial sério vs. concorrentes importados que ficam dependendo de assistência regional. **220V**. Pra quem bebe tipos diferentes de vinho regularmente, ter dual zone elimina o compromisso de servir branco a 16°C (quente demais) ou tinto a 8°C (frio demais).",
      imageUrl: "https://m.media-amazon.com/images/I/51+FeZYtWnL._AC_SL1000_.jpg",
      amazonAsin: "B079ZCTCQ3",
      mercadoLivreUrl:
        "https://www.mercadolivre.com.br/social/recomendou?matt_word=recomendou&matt_tool=73519280&forceInApp=true&ref=BNHW%2FPYD602SjayuUJfq1YsN237Mx1glNUQ8xTRKjzgnI5PAxbHHbvHXQawT9LsMFiHX9EYwcMpNvoA5uinjBL3cJfbKzntUJL1NfkzlMDlkdxxgntZY46SgmaGpFzMVejBPWtZOrz2NTI1Ti0FXCtcY2FDoyfsQ2NiEaT5uzV85zPIwvy8s9vQy2fcVzm%2F5rt4hZWk%3D",
      specs: {
        Capacidade: "33 garrafas",
        Sistema: "Compressor",
        Zonas: "Dual Zone (independentes)",
        "Faixa de temperatura": "Cada zona: 5°C a 18°C",
        Voltagem: "220V",
        Acabamento: "Inox",
      },
      pros: [
        "Dual Zone real (2 termostatos independentes)",
        "Compressor — funciona em qualquer clima",
        "Marca Brastemp com pós-venda nacional",
        "33 garrafas em prateleiras de madeira",
      ],
      cons: [
        "Preço alto (R$ 2.500-4.000)",
        "Só 220V (sem versão bivolt)",
      ],
    },
    {
      rank: 3,
      name: "Midea 24 Garrafas Inverter Bivolt",
      tagline: "Inverter + bivolt em 24 garrafas — economia e flexibilidade",
      badge: "Melhor custo-tecnologia",
      idealFor: "Entusiasta médio que quer tecnologia inverter sem ir nos 34 garrafas",
      description:
        "A Midea 24 Garrafas Inverter Bivolt é o ponto-doce entre tecnologia e preço. Traz a **tecnologia Inverter** (compressor de velocidade variável — economia ~30% de energia, menos vibração, temperatura mais estável) numa capacidade de 24 garrafas, mais acessível que a Liva 34. **Flexi Volt (bivolt)** funciona em 110V e 220V automaticamente — flexibilidade total de instalação. Porta de vidro duplo com tecnologia Low-E (reduz raios UV, preserva o vinho), painel touch com ajuste preciso de 5°C a 18°C, prateleiras cromadas removíveis, gás refrigerante ecológico (R600a, livre de CFC). Pra quem quer o melhor da tecnologia inverter mas tem coleção de tamanho médio (não precisa de 34 garrafas), é a escolha mais inteligente em custo-benefício.",
      imageUrl: "https://m.media-amazon.com/images/I/51wLK2FadjL._AC_SL1000_.jpg",
      amazonAsin: "B0FJZD7X77",
      mercadoLivreUrl:
        "https://www.mercadolivre.com.br/social/recomendou?matt_word=recomendou&matt_tool=73519280&forceInApp=true&ref=BKdXikprtgbY2DDUM58A8QwtiXND3gK8CxvRS849W3kpak4VlnQI9FpuvZSAKc4%2FAV%2Fd84k2JuetxvK6V%2FsRqwiMuDyaZhB8z6HTG3stJihJFq2HyLNIU0g%2FOtxylle8HbIcQeg8nYw8O5viwbTxsWQv9i5TH2gjJgg8XdNPZEUffRbJpZS3p2Uqw9bH2nx%2BbCgpk7U%3D",
      specs: {
        Capacidade: "24 garrafas",
        Sistema: "Compressor Inverter",
        Zonas: "Zona única",
        Voltagem: "Bivolt (110V/220V)",
        "Faixa de temperatura": "5°C a 18°C",
        Vidro: "Duplo Low-E (proteção UV)",
      },
      pros: [
        "Tecnologia Inverter em 24 garrafas (mais acessível que Liva 34)",
        "Bivolt — funciona em qualquer tomada",
        "Vidro duplo Low-E (proteção UV)",
        "Gás ecológico R600a (livre de CFC)",
      ],
      cons: [
        "Sem Wi-Fi (vai pra Liva 34 se quiser app)",
        "Sem dual zone (zona única)",
      ],
    },
    {
      rank: 4,
      name: "EOS EAC24G Sommelier 24 Garrafas Compressor",
      tagline: "Linha Sommelier da EOS — compressor robusto pra clima brasileiro",
      badge: "Melhor compressor",
      idealFor: "Entusiasta com coleção crescente em cidade de clima quente",
      description:
        "A EOS EAC24G da linha Sommelier é a opção compressor mid-premium mais bem avaliada no Brasil. **24 garrafas** (boa capacidade pra entusiasta que não está em coleção massiva), refrigeração por compressor com **gás ecológico** que reduz consumo de energia, vidro duplo (full glass) com proteção UV, prateleiras cromadas pra vinho, **painel touch externo** com controle eletrônico de temperatura (5°C a 18°C). Iluminação LED interna. 220V. Diferencial: compressor garante refrigeração estável independente do clima — ideal pra RJ, NE, MT/MS, ou onde o verão passa de 35°C. Marca EOS é especialista em adegas (não diversificada como Brastemp) — tem foco na categoria.",
      imageUrl: "https://m.media-amazon.com/images/I/51Nol3US7AL._AC_SL1000_.jpg",
      amazonAsin: "B0BZGXQ5J6",
      mercadoLivreUrl:
        "https://www.mercadolivre.com.br/social/recomendou?matt_word=recomendou&matt_tool=73519280&forceInApp=true&ref=BIeIkuP1BxQbATH1YlLN2PSONr8VZTucbZTd9HDkcH0updBFRtfWunU0%2Foc8gsEwN0eW29%2BtOfvaaFsj%2FnQD8J3uU3IFISuMSJC3ZiO911vopicx6avhj3qSfUjUXvAmC5aSnsq1Hk8o53NMazBwTNI7l2RMd3nsSu5SQfJLBJ0lMHf%2Bmie6pmuiBgolL6kkv6fpb7o%3D",
      specs: {
        Capacidade: "24 garrafas",
        Sistema: "Compressor (gás ecológico)",
        Zonas: "Zona única",
        "Faixa de temperatura": "5°C a 18°C",
        Voltagem: "220V",
        Painel: "Touch externo",
      },
      pros: [
        "Compressor com gás ecológico (energia eficiente)",
        "Marca EOS especialista em adegas",
        "24 garrafas em prateleiras cromadas",
        "Bom custo-benefício vs. Brastemp/Electrolux",
      ],
      cons: [
        "Sem dual zone nem inverter",
        "Só 220V",
      ],
    },
    {
      rank: 5,
      name: "Electrolux WSF24 24 Garrafas Painel Digital",
      tagline: "24 garrafas Electrolux com estabilidade de temperatura e painel digital",
      idealFor: "Quem quer 24 garrafas com a confiança da marca Electrolux",
      description:
        "A Electrolux WSF24 entrega 24 garrafas com a tranquilidade de pós-venda Electrolux em rede nacional. Estabilidade de temperatura entre 5°C e 18°C com ajuste em um toque no **painel digital externo** (controla sem abrir a porta), uma porta com vidro duplo, iluminação LED interna, prateleiras adequadas pra vinho. Design sóbrio que combina com qualquer ambiente. Pra quem prioriza marca consolidada com assistência técnica ampla (vs. marcas especializadas menores como EOS ou Easy Cooler) e quer 24 garrafas, é a escolha mais segura — você troca um pouco de spec de nicho pela previsibilidade Electrolux.",
      imageUrl: "https://m.media-amazon.com/images/I/41crQ-JzvvL._AC_SL1000_.jpg",
      amazonAsin: "B0B3245498",
      mercadoLivreUrl:
        "https://www.mercadolivre.com.br/social/recomendou?matt_word=recomendou&matt_tool=73519280&forceInApp=true&ref=BEqNYqpzRa0oP0ftmKOQqvyWsJg%2B5mJ3adWxKx52%2F0lIpsAzb%2FFqyl%2Byg3BxK%2FI4kgUcmWNl73fD4%2FbFEgp1TvXt4Qh6whQAVGfc5onmWt%2Bh0tyk9RkpVJZt9e0YUrjuAu8yGN3DcDzqXiCsfEc8b4yhb%2BMjCZtP1xlIphpzM17YMFNIfrqQQXX2wDhJuWuunMllp34%3D",
      specs: {
        Capacidade: "24 garrafas",
        Zonas: "Zona única",
        "Faixa de temperatura": "5°C a 18°C",
        Painel: "Digital externo",
        Porta: "Uma porta, vidro duplo",
      },
      pros: [
        "Marca Electrolux com pós-venda nacional ampla",
        "24 garrafas + painel digital externo",
        "Vidro duplo + LED interno",
        "Estabilidade de temperatura 5-18°C",
      ],
      cons: [
        "Sem dual zone nem inverter",
        "Menos features de nicho que marcas especializadas",
      ],
    },
    {
      rank: 6,
      name: "Suggar Lyon AD1522IX 13 Garrafas Compressor",
      tagline: "Compressor robusto em formato compacto de 13 garrafas",
      badge: "Compressor compacto",
      idealFor: "Quem quer compressor (clima quente) mas tem pouco espaço / coleção pequena",
      description:
        "A Suggar Lyon AD1522IX resolve um nicho específico: **compressor em formato compacto**. A maioria das adegas pequenas (8-13 garrafas) é termoelétrica (sofre no calor) — a Lyon traz compressor de verdade em só 13 garrafas, então funciona bem mesmo em cidade quente sem ocupar muito espaço. Porta inox com vidro integrado, display digital externo, iluminação LED interna, vedação hermética, gás refrigerante adequado. 85W, 220V, dimensões compactas (43,5 x 52 x 47 cm). Pra quem mora em apartamento pequeno OU região quente (Rio, NE) e não quer termoelétrica que não vai gelar direito no verão, essa é a solução — você tem a robustez do compressor sem precisar de uma adega grande.",
      imageUrl: "https://m.media-amazon.com/images/I/61du28+9gcL._AC_SL1200_.jpg",
      amazonAsin: "B077JCNYXD",
      mercadoLivreUrl:
        "https://www.mercadolivre.com.br/social/recomendou?matt_word=recomendou&matt_tool=73519280&forceInApp=true&ref=BDMbBrHN813prnFRLn9LBJK425kO4s4%2Blc3U8QaOH0UX4MIxDwxODsBsoXqcPl7f%2BOfnecPfjD0lHkO01LWKk6uaF1FlIuOBQ3qZSdw6Dz%2FDPcYy%2Fs7%2FwRHkGurHfHUt91ueoemWirhIjbsPi04ntGEyfs6MdmVYucUEQwwls0g2DZTSsRDScYBNhjXUVrda%2Bar8n%2FM%3D",
      specs: {
        Capacidade: "13 garrafas",
        Sistema: "Compressor",
        Zonas: "Zona única",
        Voltagem: "220V",
        Acabamento: "Inox + vidro",
        Dimensões: "43,5 x 52 x 47 cm",
      },
      pros: [
        "Compressor em formato compacto (raro nessa faixa)",
        "Funciona bem em clima quente apesar de pequena",
        "Acabamento inox + display digital externo",
        "Ocupa pouco espaço",
      ],
      cons: [
        "Só 13 garrafas (coleção pequena)",
        "Só 220V",
      ],
    },
    {
      rank: 7,
      name: "Philco PAD12E Bivolt 12 Garrafas",
      tagline: "Entry termoelétrica bivolt — silenciosa e econômica",
      idealFor: "Iniciante em clima ameno que quer flexibilidade de voltagem",
      description:
        "A Philco PAD12E é a entrada acessível com a vantagem do **bivolt** — funciona em 110V e 220V, ótima pra quem aluga ou tem casa antiga (110V apenas). 12 garrafas / 35 litros, refrigeração termoelétrica (silenciosa, sem vibração), temperatura ajustável de 10°C a 18°C via display digital, prateleiras cromadas deslizantes e ajustáveis, porta com vidro duplo, iluminação LED interna, pés niveladores. Apenas 58W de consumo. Por faixa de R$ 900-1.200, é uma das mais baratas da lista. **Lembre da limitação termoelétrica:** não chega aos 8°C ideais pra brancos em verão acima de 30°C — funciona melhor em clima ameno ou ambiente climatizado. Marca Philco com pós-venda nacional.",
      imageUrl: "https://m.media-amazon.com/images/I/51by8iYdfDL._AC_SL1200_.jpg",
      amazonAsin: "B0C6FCNH9S",
      mercadoLivreUrl:
        "https://www.mercadolivre.com.br/social/recomendou?matt_word=recomendou&matt_tool=73519280&forceInApp=true&ref=BGGUWC1uEAkVppEW%2B1r5Fd%2FfDbTXyU8P%2Fq8IaHcMc8NYbZ7yqLruGEm4YNyLTlsHnYjLYHSyDjSNfFLBD3sWNp9L0oGXf29mH%2BbVEhE8IrzS%2F%2Bw5K8CtUPmCbevRJRGDpJf10pZ8vWa4bpl2%2FXwQj0QBETXCzpipymZXbV2uEDkYhEWusSuw1simOGEsGmKf6zRl32s%3D",
      specs: {
        Capacidade: "12 garrafas",
        Sistema: "Termoelétrica (Peltier)",
        Zonas: "Zona única",
        Voltagem: "Bivolt (110V/220V)",
        "Faixa de temperatura": "10°C a 18°C",
        Consumo: "58W",
      },
      pros: [
        "Bivolt — funciona em qualquer tomada",
        "Uma das mais baratas (R$ 900-1.200)",
        "Silenciosa (termoelétrica, sem vibração)",
        "Prateleiras cromadas ajustáveis + LED",
      ],
      cons: [
        "Termoelétrica não chega aos 8°C de brancos em verão quente",
        "12 garrafas vira pequeno em 1-2 anos",
      ],
    },
    {
      rank: 8,
      name: "Brastemp BZC12BE 12 Garrafas Painel Touch",
      tagline: "Entry-mid Brastemp com painel touch e LED",
      idealFor: "Iniciante que prefere marca premium nacional (Brastemp/Whirlpool)",
      description:
        "A Brastemp BZC12BE é a entrada da Brastemp na categoria — 12 garrafas com a qualidade construtiva e pós-venda Whirlpool em rede nacional. Painel **touch sensor** extremamente intuitivo (um toque ajusta temperatura entre 12°C e 18°C ou liga a iluminação), iluminação LED interna, porta com vidro, controle digital de temperatura, dimensões compactas. Acabamento preto (linha All Black). Pra iniciante que quer começar com uma marca premium reconhecida (e a tranquilidade de assistência técnica Brastemp em qualquer cidade) em vez de marca especializada menor, é a escolha. Trade-off: termoelétrica padrão, então mesma limitação de não gelar tanto quanto compressor no verão.",
      imageUrl: "https://m.media-amazon.com/images/I/41pKHut1FyL._AC_SL1000_.jpg",
      amazonAsin: "B079ZCB7MB",
      mercadoLivreUrl:
        "https://www.mercadolivre.com.br/social/recomendou?matt_word=recomendou&matt_tool=73519280&forceInApp=true&ref=BFYMYfj%2BeI3GtLkQIO4VVQZaAgHSN9xRlLDv%2FkcAv4%2FviiPZR8QL3cGCOyl8RfCBZKri2QPxVuAwWd7dos%2B9s%2BE6XylmJ2RKzYJp21EWNZ%2BiL6SgyaK%2F9SoBX4vi4%2FstffSfurEDiVS7HV7RW0nEQs%2Bs5VhyJMDik%2BDv234xZ09nWbgQm9lpbs4nQ6Bjlls2ENonEa4%3D",
      specs: {
        Capacidade: "12 garrafas",
        Sistema: "Termoelétrica",
        Zonas: "Zona única",
        "Faixa de temperatura": "12°C a 18°C",
        Painel: "Touch sensor",
        Cor: "Preto (All Black)",
      },
      pros: [
        "Marca Brastemp/Whirlpool com pós-venda nacional",
        "Painel touch intuitivo + LED interno",
        "Design All Black compacto",
        "Boa entrada premium nacional",
      ],
      cons: [
        "Termoelétrica (limitação em clima quente)",
        "Faixa de temperatura mais estreita (12-18°C)",
      ],
    },
    {
      rank: 9,
      name: "Electrolux ACB12 12 Garrafas Acabamento Alumínio",
      tagline: "Entry Electrolux com acabamento premium em alumínio",
      idealFor: "Iniciante que quer marca Electrolux e estética sofisticada",
      description:
        "A Electrolux ACB12 entrega 12 garrafas com o acabamento premium em **alumínio escovado** que destaca a linha Electrolux de adegas. Display de temperatura externo (controla sem abrir a porta — evita variação térmica), uma porta com vidro duplo temperado, iluminação LED interna, prateleiras cromadas. Design sóbrio e elegante que se integra bem em sala ou cozinha. Pós-venda Electrolux nacional. Comparada à Brastemp BZC12BE (item #8), a diferença é mais de marca/estética que de spec — ambas são termoelétricas 12 garrafas de entrada. Escolha pela preferência de marca e pelo visual (alumínio escovado da Electrolux vs. all-black da Brastemp).",
      imageUrl: "https://m.media-amazon.com/images/I/518bFu8vGNL._AC_SL1200_.jpg",
      amazonAsin: "B09JV55TDR",
      mercadoLivreUrl:
        "https://www.mercadolivre.com.br/social/recomendou?matt_word=recomendou&matt_tool=73519280&forceInApp=true&ref=BFQMXALpd9hxnKnudIralw9UsgZRPWJtCgGdgbUmA35zf2BwgrxOY5PW4LcjAx8ox6IHKGNrfg%2BAyx8umUgMBhx6ozHwBE%2Fyk5C8ohQTxcQFTlGdplsI59z1YDSAIEgMW8vJfKmIvp33v5bOTLmJ6xlDu7Abu3vEFAofgGypG7SunTvM0POKkNdPOGDFmopqPVHtF3E%3D",
      specs: {
        Capacidade: "12 garrafas",
        Sistema: "Termoelétrica",
        Zonas: "Zona única",
        "Faixa de temperatura": "12°C a 18°C",
        Acabamento: "Alumínio escovado",
        Porta: "Uma porta, vidro duplo",
      },
      pros: [
        "Acabamento alumínio escovado (visual premium)",
        "Display de temperatura externo",
        "Marca Electrolux com pós-venda nacional",
        "Vidro duplo temperado + LED",
      ],
      cons: [
        "Termoelétrica (limitação em clima quente)",
        "Spec equivalente à Brastemp BZC12BE de preço próximo",
      ],
    },
    {
      rank: 10,
      name: "Midea 12 Garrafas Climatizada Bivolt",
      tagline: "Compacta Midea bivolt — funciona em qualquer tomada",
      idealFor: "Quem mora em casa com voltagem mista ou aluga e quer flexibilidade",
      description:
        "A Midea 12 Garrafas Bivolt fecha a lista como a opção mais pragmática de entrada: **bivolt** (110V/220V automático), capacidade de 12 garrafas, sistema termoelétrico silencioso, painel digital, iluminação LED, vidro duplo. Pra quem mora em casa antiga (só 110V), aluga, ou quer levar pra outro apartamento no futuro sem se preocupar com voltagem, a flexibilidade bivolt é o diferencial. Marca Midea com distribuição ampla no Brasil. Pra perfis pragmáticos que querem simplicidade de instalação acima de specs premium, é a escolha que faz sentido.",
      imageUrl: "https://m.media-amazon.com/images/I/61tJA8UpjIL._AC_SL1500_.jpg",
      amazonAsin: "B0F7TFM927",
      mercadoLivreUrl:
        "https://www.mercadolivre.com.br/social/recomendou?matt_word=recomendou&matt_tool=73519280&forceInApp=true&ref=BKMjLdPaz6xpduk%2B0jdi6qupzMNf8G9xBOkEnv7tYqXWSGg4NMyZUU2AELVh2SYd1Su6DYIW2v8sVMlyokEGV6ZWFvhO0DWvrFu9qXLNK5qAxOAMK7mXxMp0Nd9tRbcUi1pKHBsCNzTgIpaSVRD2HltvmEu%2BrTnD5kkUkB%2B0uVm67R0kN5kPjY%2BJAnoVmRzvhALcfGI%3D",
      specs: {
        Capacidade: "12 garrafas",
        Sistema: "Termoelétrica",
        Zonas: "Zona única",
        Voltagem: "Bivolt (110V/220V)",
        "Faixa de temperatura": "12°C a 18°C",
      },
      pros: [
        "Bivolt — funciona em qualquer tomada padrão",
        "12 garrafas pra iniciante/casal",
        "Marca global Midea",
        "Boa pra casa antiga ou aluguel",
      ],
      cons: [
        "Sem features premium (Wi-Fi, dual zone, inverter)",
        "Termoelétrica sofre em verão quente",
      ],
    },
  ],
};
