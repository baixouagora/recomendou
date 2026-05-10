import type { ProductList } from "@/lib/types";

// Imagens Amazon: hot-link via m.media-amazon.com/images/I/{HASH}
// Imagens Mercado Livre: hot-link via http2.mlstatic.com
// Links Mercado Livre: shortlinks afiliados meli.la/XXXX (substituir os placeholders abaixo)
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
    "Bicicleta elétrica saiu do nicho e virou alternativa real de transporte urbano no Brasil em 2026. Substitui carro pra trajetos curtos, vence trânsito, faz longa distância sem suar — e em muitos casos é mais barata na operação que um carro popular ao longo de 2 anos. A categoria tem três grandes famílias hoje: **urbana com pedal assist** (estilo Caloi E-Vibe — você pedala, o motor ajuda), **fat tire estilo motocicleta** (estilo BEMMY — acelerador no guidão, parecem moto pequena), e **dobráveis compactas** (HITWAY, Watts — pra quem combina com transporte público ou guarda em casa pequena).\n\nNa lista a seguir, comparamos modelos disponíveis no Brasil em maio de 2026 — alguns na Amazon, outros só no Mercado Livre — todos verificados como em estoque. Critérios principais: potência real do motor (250W-1000W), autonomia honesta por carga, peso suportado, e adequação ao tipo de uso (passeio leve, comuter diário, MTB, ou substituir moto). A regulamentação brasileira (CONTRAN 996/2023) limita bicicletas elétricas a 350W de potência nominal e 25 km/h com pedal assist — modelos com motores mais potentes ou throttle direto podem cair em zona regulatória de ciclomotor.",
  conclusion:
    "Se você quer uma bicicleta elétrica brasileira com pós-venda local e qualidade comprovada, vá de Caloi E-Vibe Easy Rider (urbana confortável) ou Caloi E-Vibe Rush (MTB premium). Para quem prioriza performance e visual de moto elétrica, as BEMMY com pneu largo e 1000W são imbatíveis na faixa de preço. Para uso urbano com transporte combinado (metrô, carro), as HITWAY dobráveis levam o título. E para quem está apenas testando a categoria sem investir caro, a Watts BW3 ou Xiaomi Mi Smart Bike fazem o trabalho.\n\nLembre-se: bicicletas com motor acima de 350W ou velocidade acima de 25 km/h com throttle direto exigem atenção regulatória — em algumas cidades brasileiras se aproximam da categoria de ciclomotor (CNH e placa). Verifique a legislação local antes de escolher modelos potentes pra uso em via pública.",
  faq: [
    {
      question: "Bicicleta elétrica precisa de CNH e placa?",
      answer:
        "Pela Resolução CONTRAN 996/2023, bicicletas elétricas com motor até 350W e velocidade máxima de 25 km/h (com pedal assist) não exigem CNH nem placa. Modelos com motor maior ou throttle direto (acelerador no guidão sem necessidade de pedalar) podem ser classificados como ciclomotor, exigindo CNH categoria ACC. Verifique a legislação da sua cidade.",
    },
    {
      question: "Qual a diferença entre pedal assist (PAS) e throttle?",
      answer:
        "Pedal Assist (PAS) significa que o motor SÓ liga quando você pedala — ele apenas amplifica seu esforço. É o sistema padrão de bicicletas elétricas (Caloi E-Vibe, Sense Move). Throttle é o acelerador no guidão (estilo moto) — funciona sem pedalar. Modelos fat tire estilo BEMMY normalmente têm throttle. Throttle direto pode entrar em zona regulatória mais restrita.",
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
      name: "Caloi E-Vibe Easy Rider",
      tagline: "Bicicleta elétrica urbana brasileira com 60km de autonomia",
      description:
        "A Caloi E-Vibe Easy Rider é o ponto-doce da linha elétrica da Caloi — marca brasileira com mais de 100 anos de tradição e pós-venda local sólido. Motor traseiro de 350W com pedal assist em 5 níveis, bateria 36V removível com autonomia até 60km no modo ECO (mais realistas 35-45km em uso misto), aro 27.5\" com guidão ergonômico. Pesa cerca de 23kg, suporta 110kg de carga. Não é a mais barata nem a mais potente, mas entrega qualidade de fabricação, garantia oficial Caloi (importante pra bicicleta cara), assistência técnica em todo Brasil, e estética limpa que combina com qualquer cenário urbano. Pra quem usa diariamente pra trabalho-casa, é a escolha mais segura.",
      imageUrl: "/placeholder-product.svg",
      mercadoLivreUrl: "https://www.mercadolivre.com.br/loja/caloi",
      pros: [
        "Marca brasileira centenária com pós-venda local",
        "Motor 350W com pedal assist 5 níveis",
        "Autonomia até 60km no modo ECO",
        "Bateria removível 36V para recarga separada",
      ],
      cons: [
        "Preço alto comparado a alternativas chinesas",
        "Sem throttle (só pedal assist) — pode ser limitação pra alguns",
      ],
    },
    {
      rank: 2,
      name: "BEMMY 1000W Fat Tire",
      tagline: "Estilo motocicleta com 1000W e pneu largo 20\"x4\"",
      description:
        "A BEMMY mudou a percepção do que é \"bicicleta elétrica\" no Brasil — ela parece moto elétrica pequena. Motor brushless de 1000W (pico maior) com 90Nm de torque, velocidade máxima de até 50 km/h, bateria 48V, 7 marchas Shimano, e pneus largos 20\"x4\" que devoram qualquer terreno (asfalto, terra, areia, neve em viagens). Suporta usuários robustos sem dificuldade. Estética intencional de moto: assento estofado largo, guidão alto, suspensão dianteira. **Importante:** com 1000W e velocidade real de 50 km/h, pode cair em zona regulatória de ciclomotor — verifique a legislação local antes de circular em via pública. Pra uso recreativo (trilha, praia, condomínio fechado) ou substituir moto pra trajetos casa-trabalho, é o melhor custo-benefício da categoria.",
      imageUrl: "/placeholder-product.svg",
      amazonAsin: "B0DS68JQG7",
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
      rank: 3,
      name: "HITWAY 750W Dobrável",
      tagline: "Dobrável com motor potente e autonomia até 120km",
      description:
        "A HITWAY 750W combina o melhor dos dois mundos: portabilidade de bicicleta dobrável + potência de bike fat tire. Motor 750W (pico maior) com bateria 48V/14Ah, autonomia 55-120km dependendo do modo (PAS, throttle, ou combinado), capacidade de subir rampas de 25°. Quadro dobra pra metade em 30 segundos — guarda no porta-malas de carro popular, leva no metrô em horário não-pico. Pneus largos 20\"x4\" aguentam terreno irregular. Aceita 100kg. É a escolha mais versátil da lista — funciona pra comuter urbano, fim de semana de trilha, viagem com carro. Como tem throttle, atenção à legislação local (mesma observação da BEMMY).",
      imageUrl: "/placeholder-product.svg",
      amazonAsin: "B0DCS18PGQ",
      pros: [
        "Motor 750W com autonomia até 120km",
        "Quadro dobrável — porta-malas, metrô",
        "Pneus 20\"x4\" pra qualquer terreno",
        "Sobe rampas 25° sem esforço",
      ],
      cons: [
        "Sem marca consolidada no Brasil (chinesa direta)",
        "Throttle pode requerer verificação regulatória",
      ],
    },
    {
      rank: 4,
      name: "Caloi E-Vibe Rush Aro 29",
      tagline: "MTB elétrica para trilha e uso esportivo intenso",
      description:
        "A E-Vibe Rush é a MTB elétrica da Caloi — aro 29\" com motor 250W e bateria 36V removível, autonomia até 25km no modo ECO. Pra entender o posicionamento: é uma mountain bike pra valer (suspensão completa, freios a disco hidráulicos, câmbio Shimano) que ganhou um motor pra ajudar nas subidas longas e trilhas técnicas. Não é pra circular na cidade — é pra fim de semana de trilha em parque, montanha, ou ciclismo intenso. Aceita 110kg. Diferencial sobre alternativas chinesas: quadro Caloi profissional, geometria pensada pra MTB, integração com componentes de bike comum (suporte, pedal SPD, etc). Pra ciclista que quer subir morro sem fadiga ou ampliar percurso, é um upgrade sólido.",
      imageUrl: "/placeholder-product.svg",
      mercadoLivreUrl: "https://www.mercadolivre.com.br/loja/caloi",
      pros: [
        "MTB Caloi profissional + motor 250W de assist",
        "Aro 29\" com suspensão completa",
        "Freios a disco hidráulicos, câmbio Shimano",
        "Bateria removível pra recarga separada",
      ],
      cons: [
        "Autonomia 25km — pra trilha curta, não comuter longo",
        "Preço alto (R$ 8-12k) só justifica pra ciclista sério",
      ],
    },
    {
      rank: 5,
      name: "HITWAY 500W Dobrável",
      tagline: "Versão mid da HITWAY: 500W, dobrável, ótimo custo-benefício",
      description:
        "A HITWAY 500W é a versão de entrada da família HITWAY dobrável. Motor 500W (pico) com bateria 36V/12Ah, autonomia 32-70km dependendo do modo. Pneus largos 20\"x4\" como a 750W mas com motor menos potente — suficiente pra uso urbano normal (subidas moderadas), mas não pra terreno extremo. Quadro Q195 carbon steel, peso ~25kg, aceita 100kg. Por R$ 2.000-3.000 (faixa típica), entrega o pacote completo de bicicleta elétrica dobrável com fat tire — algo que há 2 anos custava R$ 5k+. Pra primeira bicicleta elétrica de quem está testando a categoria sem investir caro, é uma excelente porta de entrada.",
      imageUrl: "/placeholder-product.svg",
      amazonAsin: "B0D32NQKMT",
      pros: [
        "Pacote completo (dobrável + fat tire + 500W) por R$ 2-3k",
        "Autonomia razoável: 32-70km dependendo do uso",
        "Pneus largos absorvem bem o piso brasileiro",
        "Quadro carbon steel resistente",
      ],
      cons: [
        "Motor 500W limita em subidas íngremes ou viagens longas",
        "Sem marca consolidada (suporte depende do vendedor)",
      ],
    },
    {
      rank: 6,
      name: "Sense Move E",
      tagline: "Urbana premium brasileira focada em design e leveza",
      description:
        "A Sense é a marca premium brasileira de bicicleta esportiva — e a linha elétrica mantém esse posicionamento. A Move E é uma urbana pensada pra estética e leveza: quadro aluminio, motor 250W discreto integrado, bateria interna escondida no tubo do quadro (visualmente parece bicicleta convencional), pedal assist sem throttle, freios a disco. Cabe em qualquer rack de carro, suporta 100kg, autonomia ~30km. É a escolha pra quem se importa com o visual da bicicleta tanto quanto com a tecnologia — não quer aparência de \"bicicleta elétrica chinesa\". Premium real, com posicionamento de marca, e pós-venda Sense (lojas autorizadas em todo Brasil).",
      imageUrl: "/placeholder-product.svg",
      mercadoLivreUrl: "https://www.mercadolivre.com.br/loja/sense",
      pros: [
        "Marca premium brasileira, posicionamento exclusivo",
        "Bateria integrada — visual de bicicleta convencional",
        "Quadro aluminio leve",
        "Freios a disco + componentes esportivos",
      ],
      cons: [
        "Preço alto (R$ 5-7k) pra spec técnica equivalente",
        "Autonomia mais curta vs. opções com bateria grande",
      ],
    },
    {
      rank: 7,
      name: "BEMMY 500W Fat Tire",
      tagline: "Versão entry da BEMMY com pneu largo e visual moto",
      description:
        "A BEMMY 500W é a versão de entrada da família fat tire da BEMMY — mesma estética de moto da 1000W mas com motor menor, focado em uso urbano honesto (não pra correr a 50 km/h). Motor 500W, velocidade máxima ~35 km/h, bateria 48V, 7 marchas, pneus 20\"x4\". Aceita 100kg. Custa significativamente menos que a 1000W (cerca de R$ 1.500 a menos), o que torna o visual de moto acessível pra mais gente. Pra quem quer a aparência e o conforto da fat tire BEMMY sem precisar dos 1000W (a maioria das pessoas, na prática), é a melhor escolha do segmento. Mesma observação regulatória: throttle pode requerer atenção em algumas cidades.",
      imageUrl: "/placeholder-product.svg",
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
      name: "Lev E-Bike",
      tagline: "Marca brasileira veterana com várias opções urbanas",
      description:
        "A Lev é uma das primeiras marcas brasileiras 100% dedicadas a bicicletas elétricas — antes da Caloi entrar no segmento. Tem várias variantes (urbana, dobrável, fat tire, com banco), todas com qualidade comprovada e suporte/peças no Brasil. Motor 250-350W dependendo do modelo, autonomia 25-40km, pedal assist com 3-5 níveis. O diferencial é a maturidade da marca: tempo de mercado, base de usuários grande, fóruns brasileiros ativos. Pra quem prefere uma marca brasileira com história comprovada vs. as recém-chegadas chinesas, vale considerar. Disponível principalmente no Mercado Livre e via revendedores autorizados.",
      imageUrl: "/placeholder-product.svg",
      mercadoLivreUrl: "https://www.mercadolivre.com.br/loja/lev",
      pros: [
        "Marca brasileira veterana especializada em e-bikes",
        "Várias variantes pra perfis diferentes",
        "Suporte local e peças disponíveis",
        "Comunidade de usuários ativa no Brasil",
      ],
      cons: [
        "Specs gerais sem grande diferencial vs. concorrentes",
        "Disponibilidade varia muito por região",
      ],
    },
    {
      rank: 9,
      name: "Watts BW3 Dobrável",
      tagline: "Dobrável brasileira budget de aro 20\"",
      description:
        "A Watts Mobilidade é uma marca brasileira nicho focada em mobilidade urbana acessível. A BW3 é a opção mais barata da linha dobrável: motor 350W, bateria com autonomia ~30km, 6 marchas Shimano, aro 20\", dobra rápido. Pesa cerca de 22kg, aceita 90kg. Por R$ 1.500-2.500 (faixa típica), entrega o conceito completo de bicicleta elétrica dobrável brasileira — sem performance extrema, mas com a tranquilidade de marca local e pós-venda no país. Pra estudante, primeiro usuário de bike elétrica, ou pra quem quer testar a categoria sem comprometer R$ 4k+, é a porta de entrada brasileira mais honesta.",
      imageUrl: "/placeholder-product.svg",
      mercadoLivreUrl: "https://www.mercadolivre.com.br/loja/watts",
      pros: [
        "Marca brasileira com pós-venda local",
        "Dobrável + 6 marchas Shimano por R$ 1.500-2.500",
        "Motor 350W suficiente pra uso urbano leve",
        "Bom ponto de entrada na categoria",
      ],
      cons: [
        "Autonomia 30km — pra trajeto curto",
        "Sem suspensão, pneus mais finos (20\")",
      ],
    },
    {
      rank: 10,
      name: "Xiaomi Mi Smart Bike",
      tagline: "Compacta tech com integração de app",
      description:
        "Encerramos com a Xiaomi Mi Smart Bike (e variantes), a opção mais tech-focused da lista. Bateria 36V removível, motor 250W com pedal assist, integração com app Mi Home pra rastreamento de quilometragem, velocidade, manutenção e localização anti-furto. Quadro aluminio leve, dobrável compacta, autonomia até 45km em modo ECO. Aceita 110kg. A vantagem real não é spec absoluta — é o ecossistema de software da Xiaomi, que faz a bike se integrar com seu telefone como qualquer outro device da marca. Pra quem já é usuário Mi (smartphone, casa inteligente, etc), faz sentido. Pra outros, é uma escolha equivalente em hardware às alternativas brasileiras mas com upside de software.",
      imageUrl: "/placeholder-product.svg",
      mercadoLivreUrl: "https://www.mercadolivre.com.br/loja/xiaomi",
      pros: [
        "Integração app Mi Home (rastreamento, manutenção)",
        "Quadro aluminio leve, dobrável compacta",
        "Bateria removível 36V",
        "Marca global Xiaomi com reconhecimento",
      ],
      cons: [
        "Spec hardware sem diferencial sobre concorrentes",
        "Suporte físico limitado no Brasil",
      ],
    },
  ],
};
