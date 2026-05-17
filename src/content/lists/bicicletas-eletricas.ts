import type { ProductList } from "@/lib/types";

// Imagens Amazon: hot-link via m.media-amazon.com/images/I/{HASH}
// Imagens Mercado Livre: hot-link via http2.mlstatic.com
// Links Mercado Livre: links de afiliado "social" (mercadolivre.com.br/social/...?ref=...)
// Links Amazon: tag recomendou01-20 injetada automaticamente via buildAmazonUrl

export const bicicletasEletricasList: ProductList = {
  slug: "melhores-bicicletas-eletricas",
  title: "As 10 Melhores Bicicletas Elétricas (Maio 2026)",
  category: "Bicicletas Elétricas",
  monthYear: "Maio de 2026",
  metaDescription:
    "Comparativo das 10 melhores bicicletas elétricas disponíveis em maio de 2026 no Brasil. Análise de motor, autonomia, tipos (urbana, MTB, dobrável), e preços, com links direto para Amazon e Mercado Livre.",
  publishedAt: "2026-05-10",
  updatedAt: "2026-05-10",
  intro:
    "Bicicleta elétrica saiu do nicho e virou alternativa real de transporte urbano no Brasil em 2026. Substitui carro pra trajetos curtos, vence trânsito, faz longa distância sem suar — e em muitos casos é mais barata na operação que um carro popular ao longo de 2 anos. A categoria tem três grandes famílias hoje: **mountain bikes elétricas premium** (estilo Caloi E-Vibe Rush, Sense Impact Sport — você pedala, o motor amplifica), **fat tire estilo motocicleta** (estilo Bemmy, Nado, HDJ — pneu largo, motor 1000W, acelerador no guidão), e **urbanas dobráveis** (Honeywhale B20, Zurbe W8 — pra quem combina com transporte público ou guarda em casa pequena).\n\nNa lista a seguir, comparamos modelos disponíveis no Brasil em maio de 2026 — alguns na Amazon, outros só no Mercado Livre — todos verificados como em estoque. Critérios principais: potência real do motor (350W a 1000W), autonomia honesta por carga, peso suportado, e adequação ao tipo de uso (MTB esportiva, comuter diário, ou substituir moto). A regulamentação brasileira (CONTRAN 996/2023) limita bicicletas elétricas a 350W de potência nominal e 25 km/h com pedal assist — modelos com motores mais potentes ou throttle direto podem cair em zona regulatória de ciclomotor (CNH e placa). Verifique a legislação local antes de comprar modelos premium-potência pra uso em via pública.",
  conclusion:
    "Se você quer uma bicicleta elétrica brasileira premium com pós-venda local e qualidade comprovada, vá de **Caloi E-Vibe Rush** ou **Sense Impact Sport Forty-5** — ambas são MTBs premium com motor de assist (pedal assist), funcionam dentro da regulamentação 25 km/h e oferecem garantia e assistência técnica em rede nacional. Para quem prioriza performance e visual de moto elétrica, as **fat tire de 1000W (Bemmy, Nado C2, HDJ G60)** são imbatíveis na faixa de preço — mas atenção à regulamentação local. Para uso urbano com transporte combinado (metrô, carro), as **dobráveis compactas (Honeywhale B20, Zurbe W8)** levam o título. E para quem está apenas testando a categoria sem investir caro, a **Yoo Mobility Y-200** faz o trabalho como porta de entrada.",
  faq: [
    {
      question: "Bicicleta elétrica precisa de CNH e placa?",
      answer:
        "Pela Resolução CONTRAN 996/2023, bicicletas elétricas com motor até 350W e velocidade máxima de 25 km/h (com pedal assist) não exigem CNH nem placa. Modelos com motor maior ou throttle direto (acelerador no guidão sem necessidade de pedalar) podem ser classificados como ciclomotor, exigindo CNH categoria ACC. Verifique a legislação da sua cidade.",
    },
    {
      question: "Qual a diferença entre pedal assist (PAS) e throttle?",
      answer:
        "Pedal Assist (PAS) significa que o motor SÓ liga quando você pedala — ele apenas amplifica seu esforço. É o sistema padrão de bicicletas elétricas que ficam dentro da regulamentação (Caloi E-Vibe, Sense Impact). Throttle é o acelerador no guidão (estilo moto) — funciona sem pedalar. Modelos fat tire estilo Bemmy, Nado C2 e HDJ G60 normalmente têm throttle. Throttle direto pode entrar em zona regulatória mais restrita dependendo da cidade.",
    },
    {
      question: "Quanto tempo dura a bateria?",
      answer:
        "Baterias de íon-lítio padrão duram entre 500 e 1.000 ciclos completos de carga — em uso urbano diário (uma carga por dia), 2-3 anos antes de a autonomia cair perceptivelmente. A bateria pode ser substituída na maioria dos modelos. Evite descargas completas e armazenamento em temperaturas extremas pra prolongar vida útil.",
    },
    {
      question: "Quanto custa rodar de bicicleta elétrica vs. carro popular?",
      answer:
        "Considerando uma bicicleta elétrica média (1 carga = ~50km, custo de eletricidade ~R$ 1) vs. carro popular fazendo 10 km/L com combustível a R$ 6,50/L: bike custa cerca de R$ 0,02 por km, carro custa R$ 0,65 por km. Em um ano de uso urbano (~5.000 km), economiza ~R$ 3.000 só em combustível — sem contar manutenção, IPVA e seguro.",
    },
    {
      question: "Bicicleta elétrica funciona em chuva?",
      answer:
        "Modelos com certificação IPX4 ou superior toleram chuva leve. Componentes elétricos costumam ser bem vedados, mas pneus pequenos têm aquaplanagem em chuva forte. Prefira pneus mais largos (fat tire) ou aro 27.5+/29 se for usar em qualquer condição climática.",
    },
  ],
  products: [
    {
      rank: 1,
      name: "Caloi E-Vibe Rush 7v Aro 700",
      tagline: "MTB elétrica premium da marca brasileira mais tradicional",
      description:
        "A E-Vibe Rush é a MTB elétrica top da Caloi — marca brasileira com mais de 100 anos de tradição e a única com pós-venda em rede nacional para bicicletas elétricas. Aro 700 (equivalente a 27.5\"), câmbio de 7 velocidades Shimano, motor traseiro 250W com pedal assist em 5 níveis, bateria 36V removível com autonomia até 25km no modo ECO em terreno misto, freios a disco. Pra entender o posicionamento: é mountain bike de verdade, com geometria pensada pra trilha (não pra acelerar plano), que ganhou motor pra ajudar em subidas longas e ampliar autonomia de pedalada. Aceita 110kg. Versão 2026 oficial. Pra ciclista que quer subir morro sem fadiga, fazer trilha mais longa, ou pra quem prioriza marca brasileira premium com garantia.",
      imageUrl: "https://http2.mlstatic.com/D_NQ_NP_2X_667015-MLB98142052807_112025-F-bicicleta-eletrica-aro-700-caloi-e-vibe-rush-7v-2026-oficial.webp",
      mercadoLivreUrl:
        "https://www.mercadolivre.com.br/social/recomendou?matt_word=recomendou&matt_tool=73519280&forceInApp=true&ref=BLcryfGNJj3vSDjibTciLMe0WN32HENRkZxqlfogGACfUG%2BvKCliwNeeetbmr%2BwS3Wu4%2FBECeUMedGALzDAtI30%2By3JwYxFR0EXXPYsFZuLROtzD4hdTMuZalTaon236MWlijWF9vH5GQxNYnK84zyLnE7g5QamZeuEw7NRNgwli31ffHeXGBA9i1Pcc05MP9pp%2B4w%3D%3D",
      pros: [
        "Marca brasileira premium com pós-venda em rede nacional",
        "MTB profissional + motor 250W de assist (PAS)",
        "Aro 700 (27.5\") com câmbio Shimano 7 velocidades",
        "Bateria 36V removível pra recarga separada",
      ],
      cons: [
        "Preço alto (R$ 8-12k) só justifica pra ciclista sério",
        "Autonomia 25km — pra trilha curta-média, não comuter longo",
      ],
    },
    {
      rank: 2,
      name: "Sense Impact Sport Forty-5 Aro 29",
      tagline: "MTB elétrica esportiva premium da marca brasileira Sense",
      description:
        "A Sense é a marca premium brasileira de bicicleta esportiva — e o Impact Sport Forty-5 leva esse posicionamento pra MTB elétrica. Aro 29\" (maior que a Caloi Rush), motor de assist integrado, bateria interna, freios a disco hidráulicos, suspensão dianteira. Foco no ciclista de fim de semana que quer trilha técnica em parque ou montanha sem fadiga. Componentes esportivos compatíveis com o ecossistema MTB convencional (pedal SPD, suportes, etc). Aceita 100-110kg. Posicionamento de marca diferente da Caloi: Sense fala com público de bike shops esportivas, Caloi tem alcance mais amplo. As duas são premium reais; a escolha entre elas é mais sobre preferência de marca/estética.",
      imageUrl: "https://http2.mlstatic.com/D_NQ_NP_2X_603819-MLA104442822046_012026-F.webp",
      mercadoLivreUrl:
        "https://www.mercadolivre.com.br/social/recomendou?matt_word=recomendou&matt_tool=73519280&forceInApp=true&ref=BCJQPFnmy08Aif5BAmntuRvtj04tP0kKAwgz6sh4D%2BysnxQ8pNyg4QNKaiUP%2F0ZlZTn9WXTuT5rkuwGrGyYhAu0kNbZN0YqO2PvdEJQFbKoUm%2BsLcTwIka6EiV8%2FV7DVJMfT%2FQJs9wfmXSnSXBlR1S9EVr1%2B6PfoI0V9U89nPM2%2BYOTaojk2pCZ%2Fp7gjDCDlLhutFi0%3D",
      pros: [
        "Marca premium esportiva brasileira",
        "Aro 29\" com suspensão dianteira + componentes esportivos",
        "Motor integrado discreto (visual de MTB convencional)",
        "Freios a disco hidráulicos",
      ],
      cons: [
        "Preço alto (R$ 8-12k) competindo com Caloi Rush",
        "Disponibilidade dependente de bike shops especializadas",
      ],
    },
    {
      rank: 3,
      name: "Bemmy 1000W Fat Tire (Loja Oficial Bemmy-BR)",
      tagline: "Estilo motocicleta com 1000W e pneu largo 20\"x4\"",
      description:
        "A Bemmy mudou a percepção do que é \"bicicleta elétrica\" no Brasil — ela parece moto elétrica pequena. Motor brushless de 1000W (com pico de 1500W) e 90Nm de torque, velocidade máxima de até 50 km/h, bateria 48V, 7 marchas, e pneus largos 20\"x4\" que devoram qualquer terreno (asfalto, terra, areia). Esta versão é a da loja oficial Bemmy-BR — garante peças, assistência e atualizações originais, contraponto a variantes não-autorizadas vendidas por outros sellers na Amazon. Estética intencional de moto: assento estofado largo, guidão alto, suspensão dianteira. **Importante:** com 1000W e velocidade real de 50 km/h, pode cair em zona regulatória de ciclomotor — verifique a legislação local antes de circular em via pública. Pra uso recreativo (trilha, praia, condomínio fechado) ou substituir moto pra trajetos casa-trabalho, é o melhor custo-benefício da categoria fat tire premium.",
      imageUrl: "https://m.media-amazon.com/images/I/71JKTWq9klL._AC_SL1500_.jpg",
      amazonAsin: "B0FQ586T2D",
      pros: [
        "Motor 1000W brushless com 90Nm de torque",
        "Pneu largo 20\"x4\" — anda em qualquer terreno",
        "7 marchas Shimano + suspensão dianteira",
        "Estética de moto, atrai público novo",
      ],
      cons: [
        "Velocidade 50 km/h pode requerer verificação regulatória",
        "Pesada (~30kg), não dobra pra transporte público",
      ],
    },
    {
      rank: 4,
      name: "Nado C2 1000W",
      tagline: "Performance urbana 1000W com bateria removível e 60km de autonomia",
      description:
        "A Nado C2 é uma das opções mais robustas do segmento performance urbana no ML. Motor 1000W com bateria 48V removível (vantagem real — você carrega a bateria dentro de casa/escritório sem precisar levar a bike), autonomia honesta de 60km, velocidade máxima ~50 km/h. Estrutura mais convencional de bicicleta urbana (não fat tire estilo moto como a Bemmy), o que pode agradar quem quer potência mas não quer visual de moto. Aceita 120kg. Atenção à mesma observação regulatória: 1000W + throttle podem requerer atenção em algumas cidades. Pra usuário que quer máxima autonomia e bateria removível pela praticidade do dia-a-dia, é uma escolha forte.",
      imageUrl: "https://http2.mlstatic.com/D_NQ_NP_2X_920387-MLA99928847403_112025-F.webp",
      mercadoLivreUrl:
        "https://www.mercadolivre.com.br/social/recomendou?matt_word=recomendou&matt_tool=73519280&forceInApp=true&ref=BFxD2C5GNYSk5V2NBoJ2dfOT3WANxQApEaHQnjB3pOiRce4iajfveHoCTVb7xo0i5tXPUwuI94ZI9H9xC%2BGfT%2BDEXyP67DozUOP3iKPLBGdObWw%2FV%2F%2BScCdA4%2BNJo1tkfzgqhQRqv4DQNOr3QYLbPsOmLYQNEYZYh%2Fs0muynpwgBuIWla6IuZOckjWuvZ5KY1oJ1T9g%3D",
      pros: [
        "Motor 1000W com autonomia honesta de 60km",
        "Bateria 48V removível — recarga separada da bike",
        "Estrutura urbana convencional (não fat tire)",
        "Suporta usuários até 120kg",
      ],
      cons: [
        "1000W + throttle requer atenção regulatória",
        "Sem marca consolidada no Brasil (suporte depende do vendedor)",
      ],
    },
    {
      rank: 5,
      name: "HDJ G60 Aro 20 1000W",
      tagline: "Compacto 1000W com suspensão dupla e freio hidráulico",
      description:
        "A HDJ G60 é o que mais se aproxima de \"bicicleta dobrável de performance\" no mercado brasileiro. Motor 1000W, bateria 48V 15Ah com autonomia até 50km, suspensão dupla (dianteira + traseira), freios hidráulicos, câmbio 7 velocidades, aro 20\". Suporta 150kg — uma das maiores capacidades da lista. Quadro carbon steel resistente. Velocidade limitada por padrão a 32 km/h pra segurança, mas pode chegar a 50 km/h se o limitador for desativado (mesma observação regulatória aplicada). Pra quem quer compactabilidade aro 20 + performance 1000W + capacidade de carga alta, é uma combinação rara em uma bike só. Boa pedida pra usuário de maior estatura, deliveries de carga pequena, ou pra uso recreativo intenso.",
      imageUrl: "https://m.media-amazon.com/images/I/61vGR09GeeL._AC_SL1088_.jpg",
      amazonAsin: "B0GPN3XW9T",
      pros: [
        "Suspensão dupla + freios hidráulicos (raro em e-bikes aro 20)",
        "Suporta 150kg (a maior da lista)",
        "1000W + 7 marchas + autonomia 50km",
        "Quadro carbon steel reforçado",
      ],
      cons: [
        "1000W + throttle requer atenção regulatória",
        "Pesada — não dobra pra transporte público convencional",
      ],
    },
    {
      rank: 6,
      name: "Nado K3 750W Aro 20",
      tagline: "Mid-premium estilo scooter com 750W e bateria 48V",
      description:
        "A Nado K3 é uma alternativa entre Bemmy 500W e o Bemmy 1000W — motor 750W, bateria 48V de íon-lítio, aro 20\". Estilo similar à fat tire premium (assento confortável, guidão alto, design de moto), mas em uma faixa de preço mais acessível. Pra quem quer a estética e o conforto da categoria fat tire sem precisar dos 1000W ou pagar o preço premium, é uma escolha justa. Não tenho specs exatas de velocidade máxima e autonomia (varia por configuração de bateria), mas a faixa típica é 35-45 km/h e 30-50km de autonomia. Disponível apenas no Mercado Livre.",
      imageUrl: "https://http2.mlstatic.com/D_NQ_NP_2X_637279-MLB94980462671_102025-F.webp",
      mercadoLivreUrl:
        "https://www.mercadolivre.com.br/social/recomendou?matt_word=recomendou&matt_tool=73519280&forceInApp=true&ref=BHllwuHz%2FYFuqp5k4N%2B%2Bu1bsWy%2Fats4CdgQJgjt8RmhyQEG2uH0Cd13NQd7NIQ9bdeL3QGEfuUXUrMOrBSI0dphpP%2F%2BXWZBVnDqS%2B9%2BXL6d%2F%2BrTOXXz53rdHVlhGWcPGAVLmdsEqhIVqi345vPbQgnEoO8G9cIEc12hn59q%2BPXEvYznj%2Bfz2RGuHIBB5ZRZKw2cHQS%2BKgguhB5SGYg%3D%3D",
      pros: [
        "Motor 750W + bateria 48V — entrega potência real",
        "Estilo scooter premium por preço médio",
        "Aro 20 + bateria de íon-lítio padrão",
        "Boa relação spec x preço pra fat tire mid",
      ],
      cons: [
        "Sem marca consolidada no Brasil",
        "Suporte/peças dependem do vendedor",
      ],
    },
    {
      rank: 7,
      name: "Bemmy 500W Fat Tire",
      tagline: "Versão entry da Bemmy com pneu largo e visual moto",
      description:
        "A Bemmy 500W é a versão de entrada da família fat tire da Bemmy — mesma estética de moto da 1000W mas com motor menor, focado em uso urbano honesto (não pra correr a 50 km/h). Motor 500W, velocidade máxima ~35 km/h, bateria 48V, 7 marchas, pneus 20\"x4\". Aceita 100kg. Custa significativamente menos que a 1000W (cerca de R$ 1.500 a menos), o que torna o visual de moto acessível pra mais gente. Pra quem quer a aparência e o conforto da fat tire Bemmy sem precisar dos 1000W (a maioria das pessoas, na prática), é a melhor escolha do segmento. Mesma observação regulatória: throttle pode requerer atenção em algumas cidades.",
      imageUrl: "https://m.media-amazon.com/images/I/71v4iEdY-yL._AC_SL1500_.jpg",
      amazonAsin: "B0GGGH5ZTH",
      pros: [
        "Mesma estética moto da 1000W por R$ 1.500 a menos",
        "Motor 500W suficiente pra uso urbano",
        "Pneu largo 20\"x4\" + 7 marchas",
        "Bateria 48V de boa autonomia",
      ],
      cons: [
        "Visualmente promete velocidade que o motor 500W não entrega",
        "Throttle requer atenção regulatória",
      ],
    },
    {
      rank: 8,
      name: "Honeywhale B20 Compact",
      tagline: "Compacta de 14 polegadas — cabe em qualquer carro/elevador",
      description:
        "A Honeywhale B20 é a opção mais portátil da lista: aro de apenas 14\" (menor que a maioria das e-bikes), motor 440W de pico, velocidade até 25 km/h (dentro da regulamentação PAS), autonomia 35km, bateria 36V 7.8Ah, certificação IP54 contra água/poeira. Dobra rapidamente em design vertical único que torna o conjunto extremamente compacto — cabe no porta-malas de qualquer carro, no elevador residencial, ou no canto da sala. Suporta 120kg. Pra quem prioriza portabilidade extrema (estudante universitário, profissional liberal que alterna trajeto, ou quem mora em apartamento pequeno), é a melhor escolha da lista. Trade-off: aro 14\" é menos confortável em piso muito irregular.",
      imageUrl: "https://m.media-amazon.com/images/I/61dX+2AughL._AC_SL1280_.jpg",
      amazonAsin: "B0FK298YDN",
      pros: [
        "Aro 14\" + dobra vertical = máxima portabilidade",
        "Velocidade 25 km/h (dentro da regulamentação CONTRAN)",
        "IP54 contra água e poeira",
        "3 modos: pedal, PAS, throttle puro",
      ],
      cons: [
        "Aro 14\" é menos estável em piso irregular",
        "Autonomia 35km menor que opções aro 20",
      ],
    },
    {
      rank: 9,
      name: "Zurbe W8 Dobrável",
      tagline: "Dobrável urbana com 400W dentro da regulamentação 25km/h",
      description:
        "A Zurbe W8 é uma dobrável urbana mid-tier que respeita a regulamentação CONTRAN: motor 400W com velocidade limitada a 25 km/h, bateria 48V 10Ah. Estilo de dobrável convencional (não fat tire), aro de 20\" provavelmente, peso razoável pra carregar em transporte público. Pra quem quer uma e-bike honesta sem cair em zona regulatória cinza, e ao mesmo tempo quer um motor mais potente que os 250W da Caloi Sport — é o ponto-doce. Disponível apenas no Mercado Livre. Bom equilíbrio entre potência prática e cumprimento da regulamentação brasileira.",
      imageUrl: "https://http2.mlstatic.com/D_NQ_NP_2X_680215-MLA98053808957_112025-F.webp",
      mercadoLivreUrl:
        "https://www.mercadolivre.com.br/social/recomendou?matt_word=recomendou&matt_tool=73519280&forceInApp=true&ref=BFMsuR9%2Fdn519ZJgxkbeO6QCSOTq%2FjkAKTfo5joghI0KJx24ZfQJbDMlhgDjhAhWVAz%2FbMtaSnVzMndQCZI1c0PmDlO8lEWLPXT5wZqBYl6wvLa%2FpN%2B99wXTHIaw%2Fo1anlJ%2Fv2X8JooqVEfr8R2Cs5Wj484D%2FMXnYMPXarJmNdyIwyg8hj%2Fa%2BUhIVhVdq08RIKagLSo%3D",
      pros: [
        "400W com 25 km/h — dentro da regulamentação CONTRAN",
        "Dobrável pra transporte público e armazenamento",
        "Bateria 48V 10Ah razoável",
        "Sem complicação regulatória",
      ],
      cons: [
        "Sem marca consolidada no Brasil",
        "Specs sem grande diferencial vs. concorrentes",
      ],
    },
    {
      rank: 10,
      name: "Yoo Mobility Y-200 350W",
      tagline: "Entry honesto da Yoo Mobility com 350W dentro da regulamentação",
      description:
        "A Yoo Mobility Y-200 fecha a lista como ponto de entrada. Motor 350W (exatamente o limite regulatório PAS), modelo 2025/2026 com pintura preto/vermelho. Estilo urbano padrão (não fat tire, não MTB), tamanho convencional. Não tem a portabilidade extrema da Honeywhale B20 nem a potência da Bemmy 500W, mas entrega bicicleta elétrica simples e funcional pra quem está testando a categoria pela primeira vez. Disponível no Mercado Livre. Pra estudante, primeira e-bike, ou trajeto curto casa-trabalho/casa-faculdade, é uma porta de entrada honesta na faixa R$ 2-3k.",
      imageUrl: "https://http2.mlstatic.com/D_NQ_NP_2X_899637-MLA99578800896_122025-F.webp",
      mercadoLivreUrl:
        "https://www.mercadolivre.com.br/social/recomendou?matt_word=recomendou&matt_tool=73519280&forceInApp=true&ref=BL1JAIomGHO%2Bb4y%2BXx%2BRVRRzqF5bTwA%2BRfVdLsBcDDyLdLoykTfEyJIMJFV4dz6M94MgAL6IocqdVlkG57cwkaF15N9XfvXOVoMpavZi%2FWAIKVsxbvib3EMhtkqt3Ni5SEzSL1maz2AaeXlIUtxgLJDDgZdt2X9Pg2hVf07cR6LwNJs0cH264KLzHZwkYQi0yEV3ODk%3D",
      pros: [
        "350W exatamente no limite regulatório (sem complicação)",
        "Versão 2026 atualizada",
        "Estilo urbano clássico",
        "Faixa de preço entry",
      ],
      cons: [
        "Sem grande diferencial sobre alternativas similares",
        "Sem marca consolidada com suporte amplo",
      ],
    },
  ],
};
