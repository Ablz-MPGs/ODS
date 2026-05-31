//herbívoro = 1, carnívoro = 2, ceratopsideo = 3, voador = 4, barba = 5 

const dinosData = [
    {
        nome: "Triceratops horridus",
        classe: 3,
        tier: 5,
        peso: 1650,
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
        ativas: {
            skill1: 668,
            skill2: 350
        }  
    },
    {
        nome: "Tyrannosaurus rex",
        classe: 2,
        tier: 5,
        peso: 1750,
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
        ativas: {
            skill1: null,
            skill2: 400 
        }
    },
    {
        nome: "Giganotosaurus carolini",
        classe: 2,
        tier: 5,
        peso: 1750,
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
        ativas: {
            skill1: 320,
            skill2: "undefined"
        }
    },
    {
        nome: "Spinosaurus aegyptiacus",
        classe: 2,
        tier: 5,
        peso: 1750,
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
        ativas: {
            skill1: 180,
            skill2: 265
        }
    },
    {
        nome: "Deinocheirus mirificus",
        classe: 1,
        tier: 5,
        peso: 1650,
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
        ativas: {
            skill1: null,
            skill2: 791
        }
    },
    {
        nome: "Stegosaurus ungulatus",
        classe: 1,
        tier: 4,
        peso: 1500,
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
        ativas: {
            skill1: 488,
            skill2: 350
        }
    },
    {
        nome: "Therizinosaurus cheloniformis",
        classe: 1,
        tier: 4,
        peso: 1500,
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
        ativas: {
            skill1: 150,
            skill2: 873
        }
    },
    {
        nome: "Parasaurolophus walkeri",
        classe: 1,
        tier: 4,
        peso: 1550,
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
        ativas: {
            skill1: 350,
            skill2: null
        }
    },
    {
        nome: "Suchomimus tenerensis",
        classe: 2,
        tier: 4,
        peso: 1450,
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
        ativas: {
            skill1: 240,
            skill2: 575
        }
    },
    {
        nome: "Sarcosuchus imperator",
        classe: 2,
        tier: 4,
        peso: 1500,
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
        ativas: {
            skill1: 300,
            skill2: 350
        }
    },
    {
        nome: "Amargasaurus cazaui",
        classe: 1,
        tier: 4,
        peso: 1500,
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
        ativas: {
            skill1: "indefinido",
            skill2: 300
        }
    },
    {
        nome: "Pachyrhinosaurus canadensis",
        classe: 3,
        tier: 4,
        peso: 1500,
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
        ativas: {
            skill1: 618,
            skill2: "indefinido"
        }
    },
    {
        nome: "Plateosaurus trossingensis",
        classe: 1,
        tier: 4,
        peso: 1500,
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
        ativas: {
            skill1: 220
        }
    },
    {
        nome: "Tarchia kielanae",
        classe: 1,
        tier: 4,
        peso: 1500,
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
        ativas: {
            skill1: 767,
            skill2: null
        }
    },
    {
        nome: "Styracosaurus albertensis",
        tier: 3,
        classe: 3,
        peso: 1400,
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
        ativas: {
            skill1: 270,
            skill2: 300
        }
    },
    {
        nome: "Allosaurus fragilis",
        classe: 2,
        tier: 3,
        peso: 1350,
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
        ativas: {
            skill1: 672
        }
    },
    {
        nome: "Fasolasuchus tenax",
        classe: 2,
        tier: 3,
        peso: 1250,
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
        ativas: {
            skill1: 245,
            skill2: 669
        }
    },
    {
        nome: "Gigantoraptor erlianensis",
        classe: 1,
        tier: 3,
        peso: 1350,
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
        ativas: {
            skill1: 250,
            skill2: 110
        }
    },
    {
        nome: "Carnotaurus satrei",
        classe: 2,
        tier: 3,
        peso: 1350,
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
        ativas: {
            skill1: 560,
            skill2: 245
        }
    },
    {
        nome: "Kentrosaurus aethiopicus",
        classe: 1,
        tier: 3,
        peso: 1500,
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
        fome: 150,
        ativas: {
            skill1: 0,
            skill2: null
        }
    },
    {
        nome: "Ceratosaurus nasicornis",
        classe: 2,
        tier: 3,
        peso: 1200,
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
        ativas: {
            skill1: 616
        }
    },
    {
        nome: "Megaraptor namunhuaiquii",
        classe: 2,
        tier: 3,
        peso: 1300,
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
        ativas: {
            skill1: null,
            skill2: 245
        }
    },
    {
        nome: "Dilophosaurus wetherilli",
        classe: 2,
        tier: 2,
        peso: 1200,
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
        ativas: {
            skill1: 100,
            skill2: 140
        }
    },
    {
        nome: "Concavenator corcovatus",
        classe: 2,
        tier: 2,
        peso: 1200,
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
        ativas: {
            skill1: 200
        }
    },
    {
        nome: "Pachycephalosaurus wyomingensis",
        classe: 1,
        tier: 2,
        peso: 1100,
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
        ativas: {
            skill1: 504,
            skill2: 457
        }
    },
    {
        nome: "Austroraptor cabazai",
        classe: 2,
        tier: 2,
        peso: 1200,
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
        ativas: {
            skill1: 200,
            skill2: null
        }
    },
    {
        nome: "Quetzalcoatlus northropi",
        tier: 2,
        classe: 4,
        peso: 1150,
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
        ativas: {
            skill1: 160
        }
    },
    {
        nome: "Ornithomimus velox",
        classe: 1,
        tier: 1,
        hp: 1200,
        peso: 900,
        dano_base: 100,
        fratura: 0,
        sangramento: 11,
        vel_terra: 2000,
        vel_agua: 450,
        vel_ar: null,
        crescimento: 17,
        dieta: "🌿",
        slots: 1,
        ativas: {
            skill1: null,
            skill2: 150
        }
    },
    {
        nome: "Guanlong wucaii",
        classe: 2,
        tier: 1,
        hp: 1150,
        peso: 1000,
        dano_base: 120,
        fratura: 0,
        sangramento: 24,
        vel_terra: 1880,
        vel_agua: 500,
        vel_ar: null,
        crescimento: 28,
        dieta: "🥩🦈",
        slots: 1.5,
        ativas: {
            skill1: null,
            skill2: 336
        }
    },
    {
        nome: "Deinonychus antirrhopus",
        classe: 2,
        tier: 1,
        hp: 850,
        peso: 950,
        dano_base: 120,
        fratura: 0,
        sangramento: 21,
        vel_terra: 1900,
        vel_agua: 400,
        vel_ar: null,
        crescimento: 18,
        dieta: "🥩🦈",
        slots: 1.5,
        ativas: {
            skill1: null,
            skill2: 160
        }
    },
    {
        nome: "Psittacosaurus sibiricus",
        classe: 1,
        tier: 1,
        hp: 980,
        peso: 1000,
        dano_base: 110,
        fratura: 0,
        sangramento: 14,
        vel_terra: 1880,
        vel_agua: 400,
        vel_ar: null,
        crescimento: 20,
        dieta: "🌿",
        slots: 1,
        ativas: {
            skill1: null
        }
    },
    {
        nome: "Coelophysis bauri",
        classe: 2,
        tier: 1,
        hp: 550,
        peso: 750,
        dano_base: 80,
        fratura: 0,
        sangramento: 28,
        vel_terra: 2050,
        vel_agua: 350,
        vel_ar: null,
        crescimento: 15,
        dieta: "🥩",
        slots: 1,
        ativas: {
            skill1: 125,
            skill2: null
        }
    },
    {
        nome: "Changyuraptor yangi",
        classe: 2,
        tier: 1,
        hp: 400,
        peso: 750,
        dano_base: 60,
        fratura: 0,
        sangramento: 25,
        vel_terra: 2050,
        vel_agua: 280,
        vel_ar: null,
        crescimento: 12,
        dieta: "🥩🦈",
        slots: 1,
        ativas: {
            skill1: null,
            skill2: null,
            skill3: null,
            skill4: null,
            skill5: null
        }
    },
    {
        nome: "Barbaridactylus grandis",
        classe: 5,
        tier: 1,
        hp: 1000,
        peso: 1000,
        dano_base: 120,
        fratura: 0,
        sangramento: 8,
        vel_terra: 1200,
        vel_agua: 600,
        vel_ar: 2800,
        crescimento: 31,
        dieta: "🥩🦈",
        slots: 2,
        ativas: {
            skill1: null
        }
    }
];