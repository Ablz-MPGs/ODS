const dinosData = [
    {
        nome: "Triceratops horridus",
        tier: 5,
        hp: 4875,
        dano_base: 270,
        fratura: 5,
        sangramento: 22,
        vel_terra: 1265,
        vel_agua: 450,
        vel_ar: null,
        crescimento: 48,
        dieta: "🌿",
        slots: 3,
        habilidades: {
            passivas: [
                { titulo: "Surto de poder", desc: "Quando seu dinossauro tem pouco HP, seu consumo de vigor diminui e sua velocidade de movimento aumenta (-20% consumo de stamina, + 5% velocidade)." },
                { titulo: "O poder do bando", desc: "Quando os membros da matilha estão perto de você, sua regeneração de vigor aumenta (até 2 vezes: +8% regeneração de stamina)." }
            ],
            ativas: [
                { titulo: "Bater", desc: "Seu dinossauro avança, aumentando sua velocidade a cada segundo, ao atingir um inimigo causa dano aumentado, tem chance de infligir fratura e sangramento. Pode repelir e atordoar inimigos, o dano aumenta de acordo com a distância e velocidade (+25% velocidade, +15% consumo de vigor). Dano base máximo: 668." },
                { titulo: "Golpe Esmagador", desc: "Seu dinossauro desfere um golpe devastador com dano aumentado, pode atordoar e repelir os dinossauros. Dano base: 350." }
            ]
        }
    },
    {
        nome: "Tyrannosaurus rex",
        tier: 5,
        hp: 4500,
        dano_base: 340,
        fratura: 22,
        sangramento: 4,
        vel_terra: 1285,
        vel_agua: 450,
        vel_ar: null,
        crescimento: 56,
        dieta: "🥩",
        slots: 3,
        habilidades: {
            passivas: [
                { titulo: "O poder do bando", desc: "Quando os membros da matilha estão perto de você, seu gasto de vigor é reduzido (-10% gasto de stamina)." }
            ],
            ativas: [
                { titulo: "Rugido Aterrorizante", desc: "Seu dinossauro ruge, reduzindo a defesa de inimigos próximos (-20% defesa inimiga)." },
                { titulo: "Crânio de Ferro", desc: "Seu dinossauro golpeia com a cabeça, causando dano aumentado e podendo atordoar e repelir os dinossauros. Dano base: 400." }
            ]
        }
    },
    {
        nome: "Giganotosaurus carolini",
        tier: 5,
        hp: 4450,
        dano_base: 280,
        fratura: 3,
        sangramento: 34,
        vel_terra: 1335,
        vel_agua: 520,
        vel_ar: null,
        crescimento: 48,
        dieta: "🥩",
        slots: 3,
        habilidades: {
            passivas: [
                { titulo: "Sede de Sangue", desc: "Se você atacar um inimigo dentro de um curto período de tempo após seu ataque anterior, seu dinossauro ganhará um aumento temporário na chance de causar sangramento. (até +4% chance de sangramento)" },
                { titulo: "O poder do bando", desc: "Quando os membros da matilha estão perto de você, sua defesa aumenta (+7% defesa)." },
                { titulo: "Surto de poder", desc: "Quando seu dinossauro está com pouco HP, o dano e chance de sangrar aumentam (+10% dano, +8,5% chance de sangramento)." },
                { titulo: "Fúria insaciável", desc: "Se você atacar um inimigo dentro de um curto período de tempo após seu ataque anterior, seu dinossauro ganhará um aumento temporário na defesa (até +5% defesa)." },
                { titulo: "Armadura resistente", desc: "Sua mordida é capaz de roubar a força da vítima, restaurando o vigor roubada do inimigo." }
            ],
            ativas: [
                { titulo: "Mordida dupla", desc: "Seu dinossauro desfere duas mordidas rápidas com maior dano e chance de causar sangramento. É possível atordoar. Dano base: 320 (por mordida)." },
                { titulo: "Terremoto", desc: "Seu dinossauro pisa o chão com força, causando dano em área. Pode atordoar e repelir outros dinossauros. Dano base: indefinido." }
            ]
        }
    },
    {
        nome: "Spinosaurus aegyptiacus",
        tier: 5,
        hp: 4440,
        dano_base: 265,
        fratura: 2,
        sangramento: 25,
        vel_terra: 1250,
        vel_agua: 1250,
        vel_ar: null,
        crescimento: 48,
        dieta: "🥩🦈",
        slots: 3,
        habilidades: {
            passivas: [
                { titulo: "O poder do bando", desc: "Quando os membros da matilha estão perto de você, sua chance de causar sangramento aumenta (+2.5% sangramento)." },
                { titulo: "Elemento nativo", desc: "Quando seu dinossauro nada, a defesa aumenta (+15% defesa)." },
                { titulo: "Presente das Profundezas", desc: "Durante um tempo, seu dinossauro gasta menos vigor após se alimentar de um peixe (-10% gasto de stamina)." }
            ],
            ativas: [
                { titulo: "Chuva de Golpes", desc: "Seu dinossauro desfere três golpes com suas garras. Aumenta a chance de infligir sangramento. Dano base: 180 (por ataque)." },
                { titulo: "Chicote de Cauda", desc: "Um golpe de cauda em área, causa repulsão. Dano base 265." }
            ]
        }
    },
    {
        nome: "Deinocheirus mirificus",
        tier: 5,
        hp: 4375,
        dano_base: 250,
        fratura: 4,
        sangramento: 28,
        vel_terra: 1310,
        vel_agua: 800,
        vel_ar: null,
        crescimento: 48,
        dieta: "🌿🦈",
        slots: 3,
        habilidades: {
            passivas: [
                { titulo: "O poder do bando", desc: "Quando os membros da matilha estão perto de você, sua chance de causar sangramento aumenta (+2% sangramento)." },
                { titulo: "Elemento nativo", desc: "Quando seu dinossauro nada, a defesa aumenta (+15% defesa)." },
                { titulo: "Presente das Profundezas", desc: "Durante um tempo, seu dinossauro gasta menos stamina após se alimentar de um peixe (-10% gasto de stamina)." }
            ],
            ativas: [
                { titulo: "Estrondo do Lagarto", desc: "Seu dinossauro ruge, aumentando temporariamente sua defesa e velocidade de movimento." },
                { titulo: "Ataque Carregado", desc: "Seu dinossauro prepara um ataque poderoso, desferindo-o em poucos segundos, aumenta a chance de infligir sangramento e fratura. Dano base máximo 791." }
            ]
        }
    },
    {
        nome: "Stegosaurus ungulatus",
        tier: 4,
        hp: 3900,
        dano_base: 300,
        fratura: 6,
        sangramento: 18,
        vel_terra: 1310,
        vel_agua: 450,
        vel_ar: null,
        crescimento: 40,
        dieta: "🌿",
        slots: 3,
        habilidades: {
            passivas: [
                { titulo: "O poder do bando", desc: "Quando os membros da matilha estão perto de você, sua chance de causar sangramento aumenta (até 2x: +11% de sangramento)." },
                { titulo: "Energia solar", desc: "Durante o dia, seu dinossauro consome menos vigor (-20% gasto de vigor)." }
            ],
            ativas: [
                { titulo: "Ataque Carregado", desc: "Seu dinossauro prepara um ataque poderoso, desferindo três movimentos de cauda em poucos segundos, aumenta a chance de infligir fratura e sangramento, pode causar atordoamento." },
                { titulo: "Golpe Esmagador", desc: "Seu dinossauro causa um golpe devastador com dano aumentado, pode atordoar inimigos." }
            ]
        }
    },
    {
        nome: "Therizinosaurus cheloniformis",
        tier: 4,
        hp: 3700,
        dano_base: 305,
        fratura: 0,
        sangramento: 19,
        vel_terra: 1365,
        vel_agua: 450,
        vel_ar: null,
        crescimento: 48,
        dieta: "🌿",
        slots: 2.5,
        habilidades: {
            passivas: [
                { titulo: "Surto de poder", desc: "quando seu dinossauro está com pouco HP, seu dano e chance de sangrar aumentam (+15% dano e chance de sangramento)." },
                { titulo: "O poder do bando", desc: "Quando os membros da matilha estão perto de você, sua defesa é aumentada (até 2 vezes: +11% defesa)." }
            ],
            ativas: [
                { titulo: "Chuva de Golpes", desc: "Seu dinossauro faz dois movimentos com suas garras, aumenta a chance de infligir sangramento." },
                { titulo: "Ataque Carregado", desc: "Seu dinossauro prepara um ataque poderoso, desferindo-o em poucos segundos, aumenta a chance de infligir sangramento." }
            ]
        }
    },
    {
        nome: "Parasaurolophus walkeri",
        tier: 4,
        hp: 3600,
        dano_base: 200,
        fratura: 7,
        sangramento: 0,
        vel_terra: 1500,
        vel_agua: 500,
        vel_ar: null,
        crescimento: 29,
        dieta: "🌿",
        slots: 2,
        habilidades: {
            passivas: [
                { titulo: "Surto de poder", desc: "Quando seu dinossauro tem pouco HP, o consumo de vigor é reduzido e a velocidade de movimento aumenta (-20% consumo de stamina, +5% velocidade)." }
            ],
            ativas: [
                { titulo: "Chute", desc: "Ataca com as patas traseiras, causando dano adicional e tendo chance de atordoar e repelir outros dinossauros. Não pode ser usada enquanto estiver correndo." },
                { titulo: "Um rugido aterrorizante", desc: "Solta um rugido que causa medo nos dinossauros, reduzindo sua defesa." }
            ]
        }
    },
    {
        nome: "Suchomimus tenerensis",
        tier: 4,
        hp: 3700,
        dano_base: 210,
        fratura: 2,
        sangramento: 25,
        vel_terra: 1425,
        vel_agua: 850,
        vel_ar: null,
        crescimento: 41,
        dieta: "🥩🦈",
        slots: 2.5,
        habilidades: {
            passivas: [
                { titulo: "O poder do bando", desc: "Quando os membros da matilha estão perto de você, sua defesa é aumentada (até 2 vezes: +8% defesa)." },
                { titulo: "Elemento nativo", desc: "Quando seu dinossauro nada, seu dano aumenta (+15% dano)." },
                { titulo: "Presente das Profundezas", desc: "Durante um tempo, seu dinossauro gasta menos vigor após se alimentar de um peixe (-10% gasto de stamina)." }
            ],
            ativas: [
                { titulo: "Ataque Carregado", desc: "Seu dinossauro prepara um ataque poderoso, desferindo-o em poucos segundos, aumenta a chance de infligir sangramento e fratura." },
                { titulo: "Garras Afiadas", desc: "O dinossauro faz dois movimentos com suas garras aumentando as chances de infligir sangramento e fratura." }
            ]
        }
    },
    {
        nome: "Sarcosuchus imperator",
        tier: 4,
        hp: 3650,
        dano_base: 300,
        fratura: 11,
        sangramento: 21,
        vel_terra: 1100,
        vel_agua: 2100,
        vel_ar: null,
        crescimento: 48,
        dieta: "🥩🦈",
        slots: 2.5,
        habilidades: {
            passivas: [
                { titulo: "O poder do bando", desc: "Quando os membros da matilha estão perto de você, sua chance de causar fratura aumenta (até 2 vezes: +1% chance de fratura)." },
                { titulo: "Presente das Profundezas", desc: "Durante um tempo, seu dinossauro gasta menos vigor após se alimentar de um peixe (-10% gasto de stamina)." },
                { titulo: "Surto de poder", desc: "Quando seu dinossauro está com pouco HP, sua defesa aumenta (+10% defesa)." },
                { titulo: "Elemento nativo", desc: "quando seu dinossauro nada, sua defesa aumenta (+10% defesa)." }
            ],
            ativas: [
                { titulo: "Capturar", desc: "Seu dinossauro agarra uma presa com o boca podendo levá-la consigo, gastando stamina para tal. Funciona apenas com animais menores." },
                { titulo: "Mordida Mortal", desc: "Uma mordida poderosa que drena o oxigênio e a resistência do inimigo." }
            ]
        }
    },
    {
        nome: "Amargasaurus cazaui",
        tier: 4,
        hp: 4000,
        dano_base: 250,
        fratura: 5,
        sangramento: 20,
        vel_terra: 1390,
        vel_agua: 500,
        vel_ar: null,
        crescimento: 48,
        dieta: "🌿",
        slots: 2.5,
        habilidades: {
            passivas: [
                { titulo: "O poder do bando", desc: "Quando os membros da matilha estão perto de você, seu gasto de stamina é reduzido (até 4 vezes: -12% consumo de stamina)." },
                { titulo: "Surto de poder", desc: "Quando seu dinossauro está com pouca vida, sua defesa e chance de sangrar aumentam (+12% defesa, +4.5% sangramento)." }
            ],
            ativas: [
                { titulo: "Ataque do céu", desc: "O dinossauro levanta as patas dianteiras, acumulando energia, e então as bate com força no chão. O golpe causa dano em área, com chance de atordoar e empurrar inimigos." },
                { titulo: "Chicote de Cauda", desc: "Um golpe de cauda em área, causa repulsão." }
            ]
        }
    },
    {
        nome: "Pachyrhinosaurus canadensis",
        tier: 4,
        hp: 3600,
        dano_base: 250,
        fratura: 13,
        sangramento: 0,
        vel_terra: 1370,
        vel_agua: 500,
        vel_ar: null,
        crescimento: 36,
        dieta: "🌿",
        slots: 2,
        habilidades: {
            passivas: [
                { titulo: "O poder do bando", desc: "Quando os membros da matilha estão perto de você, sua saúde recupera mais rápido (+20% regeneração de HP)." },
                { titulo: "Surto de poder", desc: "Quando seu dinossauro tem pouco HP, o consumo de vigor é reduzido e a velocidade de movimento aumenta (+5% velocidade, -20% gasto de vigor)." }
            ],
            ativas: [
                { titulo: "Bater", desc: "Seu dinossauro avança, aumentando sua velocidade a cada segundo, ao atingir um inimigo causa dano aumentado, tem chance de infligir fratura. Pode repelir e atordoar inimigos, o dano aumenta de acordo com a distância e velocidade (+25% velocidade, +15% consumo de vigor)." },
                { titulo: "Terremoto", desc: "Seu dinossauro levanta as patas dianteiras, acumulando energia, e então as bate com força no chão. O golpe causa dano em área, com chance de atordoar e empurrar inimigos, mas o dano é baixo." }
            ]
        }
    },
    {
        nome: "Plateosaurus trossingensis",
        tier: 4,
        hp: 3450,
        dano_base: 180,
        fratura: 0,
        sangramento: 10,
        vel_terra: 1500,
        vel_agua: 700,
        vel_ar: null,
        crescimento: 31,
        dieta: "🌿",
        slots: 2,
        habilidades: {
            passivas: [
                { titulo: "O poder do bando", desc: "Quando os membros de sua matilha estão perto de você, sua defesa é aumentada (até 2 vezes: +11% defesa)." },
                { titulo: "Surto de poder", desc: "Quando seu dinossauro está com pouco HP seu consumo de vigor diminui e a velocidade aumenta (+5% velocidade, -20% gasto de vigor)." }
            ],
            ativas: [
                { titulo: "Chicote de cauda", desc: "Um golpe de cauda em área, que causa repulsão (5 segundos)." }
            ]
        }
    },
    {
        nome: "Tarchia kielanae",
        tier: 4,
        hp: 3735,
        dano_base: 325,
        fratura: 25,
        sangramento: 0,
        vel_terra: 1215,
        vel_agua: 400,
        vel_ar: null,
        crescimento: 39,
        dieta: "🌿",
        slots: 2.5,
        habilidades: {
            passivas: [
                { titulo: "Surto de poder", desc: "Quando seu dinossauro está com HP baixo, seu dano e chance de fraturar aumentam. (+15% dano, +7,5% fratura)" }
            ],
            ativas: [
                { titulo: "Ataque Carregado", desc: "Seu dinossauro prepara um ataque poderoso, desferindo-o em poucos segundos, aumenta a chance de infligir fratura, pode causar repulsão e atordoamento." },
                { titulo: "Armadura Resistente", desc: "Seu dinossauro chacoalha o corpo por alguns segundos, após isso, ganha defesa e perde velocidade. (+30% defesa, -12% velocidade)" }
            ]
        }
    },
    {
        nome: "Styracosaurus albertensis",
        tier: 3,
        hp: 3000,
        dano_base: 220,
        fratura: 0,
        sangramento: 23,
        vel_terra: 1450,
        vel_agua: 500,
        vel_ar: null,
        crescimento: 39,
        dieta: "🌿",
        slots: 2,
        habilidades: {
            passivas: [
                { titulo: "Fúria com Chifres", desc: "Quando seu dinossauro está com pouco HP, seu consumo de vigor é reduzido e sua chance de sangrar aumenta (-15% gasto de vigor, +7% chance de sangrar)." },
                { titulo: "O poder do bando", desc: "Quando os membros da matilha estão perto de você, sua defesa é aumentada (até 2 vezes: +11% defesa)." }
            ],
            ativas: [
                { titulo: "Chute", desc: "Seu dinossauro ataca com as patas traseiras causando dano adicional, tem chance de atordoar e repele alguns dinossauros." },
                { titulo: "Golpe Esmagador", desc: "O dinossauro golpeia com seu chifre, causa dano aumentado, podendo atordoar e repelir os dinossauros" }
            ]
        }
    },
    {
        nome: "Allosaurus fragilis",
        tier: 3,
        hp: 3300,
        dano_base: 240,
        fratura: 0,
        sangramento: 29,
        vel_terra: 1500,
        vel_agua: 550,
        vel_ar: null,
        crescimento: 38,
        dieta: "🥩",
        slots: 2.5,
        habilidades: {
            passivas: [
                { titulo: "O poder do bando", desc: "Quando os membros da matilha estão perto de você, seu vigor recupera mais rápido (até 3 vezes: +9% regeneração de vigor)." },
                { titulo: "Bom Sono", desc: "Seu dinossauro gasta menos vigor enquanto o cansaço estiver acima de 79%. (-15% gasto de stamina)" },
                { titulo: "Instinto Primordial", desc: "Se seu dinossauro estiver sangrando, seus ataques têm maior probabilidade de causar sangramento (+9% sangramento)." }
            ],
            ativas: [
                { titulo: "Ataque Carregado", desc: "Seu dinossauro prepara um ataque poderoso, desferindo-o em poucos segundos, aumenta a chance de infligir sangramento." }
            ]
        }
    },
    {
        nome: "Fasolasuchus tenax",
        tier: 3,
        hp: 3000,
        dano_base: 245,
        fratura: 15,
        sangramento: 12,
        vel_terra: 1500,
        vel_agua: 625,
        vel_ar: null,
        crescimento: 29,
        dieta: "🥩",
        slots: 2,
        habilidades: {
            passivas: [
                { titulo: "Surto de poder", desc: "Quando seu pseudosuchio está com baixo HP, o consumo de stamina diminui e a velocidade de movimento aumenta (+5% velocidade, -25% consumo de stamina)." },
                { titulo: "O poder do bando", desc: "Quando os membros da matilha estão perto de você, sua chance de causar uma fratura aumenta (até 3 vezes: +1% chance de fratura)." }
            ],
            ativas: [
                { titulo: "Capturar", desc: "Seu dinossauro agarra uma presa com o boca podendo levá-lo consigo, gastando vigor para tal. Funciona apenas com animais menores e reduz sua velocidade." },
                { titulo: "Ataque Carregado", desc: "Seu dinossauro prepara um ataque poderoso, desferindo-o em poucos segundos, aumenta a chance de infligir sangramento e fratura." }
            ]
        }
    },
    {
        nome: "Gigantoraptor erlianensis",
        tier: 3,
        hp: 3100,
        dano_base: 180,
        fratura: 0,
        sangramento: 15,
        vel_terra: 1700,
        vel_agua: 480,
        vel_ar: null,
        crescimento: 42,
        dieta: "🥩🌿",
        slots: 2,
        habilidades: {
            passivas: [
                { titulo: "Instinto Materno", desc: "Quando seu dinossauro está perto do ninho, o dano aumenta para cada ovo (até 3 vezes: +18% dano)." },
                { titulo: "O poder do bando", desc: "Quando os membros da matilha estão perto de você, seu dano aumenta (até 2 vezes: +11% dano)." }
            ],
            ativas: [
                { titulo: "Chute", desc: "Seu dinossauro ataca com as patas traseiras causando dano adicional, tem chance de atordoar e repele alguns dinossauros." },
                { titulo: "Chuva de Golpes", desc: "Seu dinossauro desfere múltiplas bicadas com maior chance de causar sangramento. Ataques causam menos dano" }
            ]
        }
    },
    {
        nome: "Carnotaurus satrei",
        tier: 3,
        hp: 3000,
        dano_base: 200,
        fratura: 0,
        sangramento: 24,
        vel_terra: 1800,
        vel_agua: 500,
        vel_ar: null,
        crescimento: 29,
        dieta: "🥩",
        slots: 2.5,
        habilidades: {
            passivas: [
                { titulo: "Sede de Sangue", desc: "Se você atacar um inimigo dentro de um curto período de tempo após seu ataque anterior, seu dinossauro ganhará um aumento temporário na chance de causar sangramento e velocidade de movimento (até 10 vezes: +3,6% chance de sangramento, +6% velocidade)." },
                { titulo: "O poder do bando", desc: "Quando há membros da matilha perto de você, seu gasto de vigor é reduzido." }
            ],
            ativas: [
                { titulo: "Ataque Carregado", desc: "Seu dinossauro prepara um ataque poderoso, desferindo-o em poucos segundos, aumenta a chance de infligir sangramento." },
                { titulo: "Crânio de Ferro", desc: "Seu dinossauro causa um golpe devastador com dano aumentado, podendo atordoar inimigos." }
            ]
        }
    },
    {
        nome: "Kentrosaurus aethiopicus",
        tier: 3,
        hp: 2700,
        dano_base: 250,
        fratura: 0,
        sangramento: 30,
        vel_terra: 1480,
        vel_agua: 500,
        vel_ar: null,
        crescimento: 39,
        dieta: "🌿",
        slots: 2,
        habilidades: {
            passivas: [
                { titulo: "Surto de poder", desc: "Quando seu dinossauro está com pouco HP, o consumo de vigor diminui e a velocidade de movimento aumenta (+5% velocidade, -20% consumo de vigor)." },
                { titulo: "O poder do bando", desc: "Quando os membros da matilha estão perto de você, sua chance de causar sangramento aumenta (até +4% sangramento)." },
                { titulo: "Instinto Primordial", desc: "Se seu dinossauro estiver sangrando, seus ataques têm maior probabilidade de causar sangramento (+9% sangramento)." }
            ],
            ativas: [
                { titulo: "Chuva de Golpes", desc: "Seu dinossauro bate a cauda várias vezes, causando dano várias vezes ao mesmo alvo." },
                { titulo: "Armadura", desc: "Seu dinossauro se levanta, ganha força e então cai bruscamente. Suas placas se movem, aumentando temporariamente a defesa (+25% defesa)." }
            ]
        }
    },
    {
        nome: "Ceratosaurus nasicornis",
        tier: 3,
        hp: 2650,
        dano_base: 220,
        fratura: 0,
        sangramento: 24,
        vel_terra: 1700,
        vel_agua: 650,
        vel_ar: null,
        crescimento: 39,
        dieta: "🥩🦈",
        slots: 2.5,
        habilidades: {
            passivas: [
                { titulo: "Surto de poder", desc: "Quando seu dinossauro está com pouco HP, sua defesa e chance de sangrar aumentam (+12% defesa, +3.6% chance de sangramento)." },
                { titulo: "O poder do bando", desc: "Quando os membros da matilha estão perto de você, sua saúde recupera mais rápido (até 2 vezes: +20% recuperação de HP)." }
            ],
            ativas: [
                { titulo: "Ataque Carregado", desc: "Seu dinossauro prepara um ataque poderoso, desferindo-o em poucos segundos, aumenta a chance de infligir sangramento." }
            ]
        }
    },
    {
        nome: "Megaraptor namunhuaiquii",
        tier: 3,
        hp: 2845,
        dano_base: 245,
        fratura: 0,
        sangramento: 25,
        vel_terra: 1660,
        vel_agua: 550,
        vel_ar: null,
        crescimento: 38,
        dieta: "🥩",
        slots: 2.5,
        habilidades: {
            passivas: [
                { titulo: "Poder Acumulado", desc: "Seu primeiro ataque causa dano aumentado, há um tempo de recarga (+30% dano)." },
                { titulo: "Devorador da Noite", desc: "À noite a chance do seu dinossauro causar sangramento aumenta e o consumo de vigor diminui (+20% chance de sangramento, -15% gasto de vigor)." },
                { titulo: "O poder do bando", desc: "Quando os membros da matilha estão perto de você, seu gasto de vigor é reduzido (até 2 vezes, -10% gasto de vigor)." }
            ],
            ativas: [
                { titulo: "Rugido Aterrorizante", desc: "Seu dinossauro ruge, fazendo com que os jogadores próximos fiquem com medo e percam parte do conforto, manter-se próximo fará com que o efeito se torne continuo (-30% conforto imediato, podendo escalar)." },
                { titulo: "Garras Afiadas", desc: "O dinossauro faz dois movimentos com suas garras. O ataque causa dano aumentado e aumenta as chances de infligir sangramento." }
            ]
        }
    },
    {
        nome: "Dilophosaurus wetherilli",
        tier: 2,
        hp: 1800,
        dano_base: 160,
        fratura: 0,
        sangramento: 33,
        vel_terra: 1750,
        vel_agua: 550,
        vel_ar: null,
        crescimento: 28,
        dieta: "🥩🦈",
        slots: 2,
        habilidades: {
            passivas: [
                { titulo: "Sede de Sangue", desc: "Se você atacar um inimigo dentro de um curto período de tempo após seu ataque anterior, seu dinossauro ganhará um aumento temporário na chance de causar sangramento e velocidade de movimento (até 10 vezes: +6% velocidade, 5% chance de sangramento)." },
                { titulo: "O poder do bando", desc: "Quando os membros da matilha estão perto de você, a recuperação de vigor acelera (até 5 vezes: +28% recuperação de vigor)." }
            ],
            ativas: [
                { titulo: "Arranhão", desc: "Ataque com as garras, tem maior chance de causar sangramento, mas causando menos dano. Dano base: 100." },
                { titulo: "Chuva de Golpes", desc: "Seu dinossauro desfere três mordidas com maior chance de causar sangramento. Dano base: 140 (por mordida)." }
            ]
        }
    },
    {
        nome: "Concavenator corcovatus",
        tier: 2,
        hp: 2200,
        dano_base: 140,
        fratura: 0,
        sangramento: 25,
        vel_terra: 1720,
        vel_agua: 630,
        vel_ar: null,
        crescimento: 32,
        dieta: "🥩🦈",
        slots: 2,
        habilidades: {
            passivas: [
                { titulo: "O poder do bando", desc: "Quando os membros da matilha estão próximos, você recupera HP mais rápido (até 3 vezes: +20% recuperação de HP)." },
                { titulo: "Surto de poder", desc: "Quando seu dinossauro está com pouco HP, seu dano aumenta e o consumo de vigor é reduzido (+15% dano, -20% consumo de vigor)." }
            ],
            ativas: [
                { titulo: "Golpe Esmagador", desc: "O dinossauro causa um golpe devastador com dano e chance de sangrar aumentados. Dano base: 200." }
            ]
        }
    },
    {
        nome: "Pachycephalosaurus wyomingensis",
        tier: 2,
        hp: 2000,
        dano_base: 185,
        fratura: 14,
        sangramento: 0,
        vel_terra: 1650,
        vel_agua: 400,
        vel_ar: null,
        crescimento: 28,
        dieta: "🌿",
        slots: 2,
        habilidades: {
            passivas: [
                { titulo: "O poder do bando", desc: "Quando os membros da matilha estão perto de você, sua defesa é aumentada (até 3 vezes: +13% defesa)." },
                { titulo: "Surto de poder", desc: "Quando seu dinossauro está com pouco HP, sua velociade e chance de fraturar aumentam (+5% velocidade e chance de fratura)." }
            ],
            ativas: [
                { titulo: "Bater", desc: "O dinossauro avança, aumentando sua velocidade a cada segundo, ao atingir um inimigo causa dano aumentado, tem chance de infligir fratura. Pode repelir e atordoar inimigos, o dano aumenta de acordo com a distância e velocidade (+25% velocidade, +15% consumo de vigor). Dano base máximo aproximado: 457" },
                { titulo: "Ataque Carregado", desc: "Após algum tempo de carregameto, seu dinossauro desfere um golpe poderoso com a cabeça, causando dano aumentado, aumentando a chance de fratura e podendo atordoar. Dano base máximo: 557." }
            ]
        }
    },
    {
        nome: "Austroraptor cabazai",
        tier: 2,
        hp: 1550,
        dano_base: 150,
        fratura: 0,
        sangramento: 18,
        vel_terra: 1820,
        vel_agua: 780,
        vel_ar: null,
        crescimento: 24,
        dieta: "🥩🦈",
        slots: 2,
        habilidades: {
            passivas: [
                { titulo: "Vampirismo", desc: "Ao atacar, seu dinossauro pode restaurar parte de sua saúde com o dano causado." },
                { titulo: "Juntos somos fortes!", desc: "Quando os membros da matilha estão perto de você, o gasto de vigor é reduzido (até 3 vezes: -15% gasto de vigor)." },
                { titulo: "Presente das Profundezas", desc: "Durante um tempo seu dinossauro gasta menos stamina após se alimentar de um peixe (-10% gasto de stamina)." },
                { titulo: "Frescor Marinho", desc: "Ao sair da água, sua velocidade de corrida e nado aumentam (+5% velocidade)." }
            ],
            ativas: [
                { titulo: "Ataque do céu", desc: "Salta rapidamente, atacando o inimigo, há chances de reduzir sua defesa (-15% defesa inimiga). Dano base: 200." },
                { titulo: "Disparada", desc: "Salte para alcançar o inimigo ou escapar velozmente, pode ser usado na água." }
            ]
        }
    },
    {
        nome: "Quetzalcoatlus northropi",
        tier: 2,
        hp: 1800,
        dano_base: 160,
        fratura: 0,
        sangramento: 9,
        vel_terra: 1400,
        vel_agua: 600,
        vel_ar: 2200,
        crescimento: 41,
        dieta: "🥩🦈",
        slots: 3,
        habilidades: {
            passivas: [
                { titulo: "O poder do bando", desc: "Quando os membros da matilha estão perto de você, seu dano é aumentado (até 3 vezes: +11% dano)." },
                { titulo: "Surto de poder", desc: "Quando seu dinossauro está com pouco HP, seu consumo de vigor diminui e sua velocidade aumenta (+5% velocidade, -20% gasto de vigor)." }
            ],
            ativas: [
                { titulo: "Capturar", desc: "Seu dinossauro agarra uma presa com o bico podendo levá-lo consigo, gastando vigor para tal. Funciona apenas com animais menores e reduz sua velocidade (-15% velocidade). Dano base: 160." }
            ]
        }
    },
    {
        nome: "Ornithomimus velox",
        tier: 1,
        hp: 1200,
        dano_base: 100,
        fratura: 0,
        sangramento: 11,
        vel_terra: 2000,
        vel_agua: 450,
        vel_ar: null,
        crescimento: 17,
        dieta: "🌿",
        slots: 1,
        habilidades: {
            passivas: [
                { titulo: "Instinto materno", desc: "Quando perto de seu ninho, seu dano aumenta para cada ovo nele (até 3 vezes: +15% dano)." },
                { titulo: "Corredor de maratona", desc: "Quando há membros da matilha perto de você, sua recuperação de vigor acelera (até 2 vezes: +15% regeneração de vigor)." },
                { titulo: "Surto de poder", desc: "Quando seu dinossauro está com pouca saúde, sua defesa aumenta (+15% defesa)." }
            ],
            ativas: [
                { titulo: "Incentivo", desc: "Seu dinossauro emite um grito alto, reduzindo o consumo de vigor dos membros da matilha (-15% gasto de vigor)." },
                { titulo: "Chute", desc: "Seu dinossauro ataca com as patas traseiras, causando dano adicional, com chance de atordoar e repelir alguns dinossauros. Dano base: 150." }
            ]
        }
    },
    {
        nome: "Guanlong wucaii",
        tier: 1,
        hp: 1150,
        dano_base: 120,
        fratura: 0,
        sangramento: 24,
        vel_terra: 1880,
        vel_agua: 500,
        vel_ar: null,
        crescimento: 28,
        dieta: "🥩🦈",
        slots: 1.5,
        habilidades: {
            passivas: [
                { titulo: "Poder do bando", desc: "Quando os membros da matilha estão perto de você, sua defesa aumenta (até 3 vezes: +13% defesa)." },
                { titulo: "Força das Trevas", desc: "Seu dinossauro gasta menos stamina à noite (-20% gasto de stamina)." }
            ],
            ativas: [
                { titulo: "Grito de Guerra", desc: "Seu dinossauro ruge, aumentando a chance de infligir sangramento por um tempo (+15% chance de sangramento)." },
                { titulo: "Ataque Carregado", desc: "O dinossauro prepara um ataque poderoso, desferindo-o em poucos segundos, aumenta a chance de infligir sangramento. Bano base: 336." }
            ]
        }
    },
    {
        nome: "Deinonychus antirrhopus",
        tier: 1,
        hp: 850,
        dano_base: 120,
        fratura: 0,
        sangramento: 21,
        vel_terra: 1900,
        vel_agua: 400,
        vel_ar: null,
        crescimento: 18,
        dieta: "🥩🦈",
        slots: 1.5,
        habilidades: {
            passivas: [
                { titulo: "O poder do bando", desc: "Quando os membros da matilha estão perto de você, sua defesa é aumentada (até 3 vezes: + 9% defesa)." },
                { titulo: "Surto de poder", desc: "Quando seu dinossauro está com pouco HP, o dano e chance de sangramento aumentam (+20% dano e sangramento)." }
            ],
            ativas: [
                { titulo: "Grito de Guerra.", desc: "O dinossauro ruge, elevando seu moral e o da matilha, diminuindo seu consumo de vigor por um tempo (-20% gasto de vigor)." },
                { titulo: "Lâminas Afiadas", desc: "Desfere um golpe penetrantes com as garras, causando mais dano e podendo atordoar dinossauros menores. Dano base: 160." }
            ]
        }
    },
    {
        nome: "Psittacosaurus mongoliensis",
        tier: 1,
        hp: 980,
        dano_base: 110,
        fratura: 0,
        sangramento: 14,
        vel_terra: 1880,
        vel_agua: 400,
        vel_ar: null,
        crescimento: 20,
        dieta: "🌿",
        slots: 1,
        habilidades: {
            passivas: [
                { titulo: "Surto de poder", desc: "Seu dinossauro gasta menos stamina e sua velocidade aumenta quando está com HP baixo (+5% velocidade, -20% gasto de vigor)." },
                { titulo: "Instinto materno", desc: "Quando perto de seu ninho, seu dano aumenta para cada ovo nele (até +18% dano)." }
            ],
            ativas: [
                { titulo: "Grito de Cura", desc: "Seu dinossauro emite um grito que acelera a própria regeneração de HP e dos membros da matilha próximos (+20% regeneração de HP)." }
            ]
        }
    },
    {
        nome: "Coelophysis bauri",
        tier: 1,
        hp: 550,
        dano_base: 80,
        fratura: 0,
        sangramento: 28,
        vel_terra: 2050,
        vel_agua: 350,
        vel_ar: null,
        crescimento: 15,
        dieta: "🥩",
        slots: 1,
        habilidades: {
            passivas: [
                { titulo: "Juntos somos fortes!", desc: "Recupera stamina mais rápido perto da matilha." },
                { titulo: "Apetite louco", desc: "Seu dinossauro se torna mais rápido quando carrega algo na boca (+10% velocidade)." },
                { titulo: "Surto de poder", desc: "Quando com baixo HP, seu dinossauro corre mais rápido e gasta menos vigor (-20% gasto de vigor, +5% velocidade)." }
            ],
            ativas: [
                { titulo: "Troféu de carne", desc: "Seu dinossauro desfere um golpe forte, retirando um pedaço de carne caso atinja um player dano base: 125." },
                { titulo: "Grito de guerra", desc: "Seu dinossauro grita, aumentando o seu dano (+20% dano)." }
            ]
        }
    },
    {
        nome: "Changyuraptor yangi",
        tier: 1,
        hp: 400,
        dano_base: 60,
        fratura: 0,
        sangramento: 25,
        vel_terra: 2050,
        vel_agua: 280,
        vel_ar: null,
        crescimento: 12,
        dieta: "🥩🦈",
        slots: 1,
        habilidades: {
            passivas: [
                { titulo: "Juntos somos fortes!", desc: "Quando os membros da matilha estão perto de você, seu consumo de vigor é reduzido (até 3 vezes: -35% consumo de vigor)." },
                { titulo: "Força das Trevas", desc: "Seu dinossauro gasta menos stamina à noite (-20% consumo de vigor)." }
            ],
            ativas: [
                { titulo: "Parkour", desc: "Capaz de escalar ao precionar salto próximo a uma superfície adequada." },
                { titulo: "Vento sob as asas", desc: "Quando no ar, pressione o botão de salto para planar." },
                { titulo: "Escalador", desc: "Quando no ar, pressione o botão de salto para tentar prender-se a uma superfície." },
                { titulo: "Disparada", desc: "O dinossauro se impulsiona para a direção em que estiver olhando, funciona apenas no ar." },
                { titulo: "Corrida alta", desc: "Seu dinossauro executa um grande salto." }
            ]
        }
    },
    {
        nome: "Barbaridactylus grandis",
        tier: 1,
        hp: 1000,
        dano_base: 120,
        fratura: 0,
        sangramento: 8,
        vel_terra: 1200,
        vel_agua: 600,
        vel_ar: 2800,
        crescimento: 31,
        dieta: "🥩🦈",
        slots: 2,
        habilidades: {
            passivas: [
                { titulo: "O poder do bando", desc: "Quando os membros da matilha estão perto de você, seu gasto de vigor é reduzido (até 3 vezes: -18% gasto de stamina)." },
                { titulo: "Presente das Profundezas", desc: "Durante um tempo, seu dinossauro gasta menos vigor após se alimentar de um peixe (-10% gasto de stamina)." }
            ],
            ativas: [
                { titulo: "Enxame Barulhento", desc: "O pterossauro emite um grito estridente, aumentando a sua capacidade de infligir sangramento e a de aliados próximos por um curto período (+15% chance de sangramento)." }
            ]
        }
    }
];