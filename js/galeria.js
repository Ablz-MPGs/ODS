const modal = document.getElementById("myModal");
const closeBtn = document.getElementsByClassName("close")[0];
const modalImg = document.getElementById("modal-img");
const modalName = document.getElementById("modal-dino-name");
const modalDiet = document.getElementById("modal-diet-icon");

const statGroup = document.getElementById("stat-group");
const statAge = document.getElementById("stat-age");
const statGrowth = document.getElementById("stat-growth");
const statPrice = document.getElementById("stat-price");
const statSkin1 = document.getElementById("stat-skin1");
const statSkin2 = document.getElementById("stat-skin2");

const passivesContainer = document.getElementById("passives-container");
const activesContainer = document.getElementById("actives-container");

const btns = document.querySelectorAll(".btn-verificar");
const imgModal = document.getElementById("imgModal");
const imgModalContent = document.getElementById("imgModalContent");
const imgDinoElements = document.querySelectorAll(".img-dino");

const tabButtons = document.querySelectorAll(".tier-btn");
const tierContents = document.querySelectorAll(".tier-indicator");

const btnStatusModal = document.getElementById("btn-status-modal");

const dinoDatabase = {
    "Coelophysis": {
        idStatus: "coelo",
        fullName: "COELOPHYSIS<br>BAURI",
        image: "img/pict/coeloperfil.png",
        diet: "🥩",
        stats: { group: "10 membros", age: 19, growth: "15 min", price: "N/A", skin1: "4.000", skin2: 40 },
        passives: [
            { title: "Juntos somos fortes!", desc: "Recupera stamina mais rápido perto da matilha.", icon: "img/skill/rebanho.png" },
            { title: "Apetite louco", desc: "Seu dinossauo se torna mais rápido quando carega algo na boca.", icon: "img/skill/apetite.png" },
            { title: "Surto de poder", desc: "Quando com baixo HP, seu dinossauro corre mais rápido e gasta menos stamina.", icon: "img/skill/poucohp.png" }
        ],
        actives: [
            { title: "Troféu de carne", desc: "O dinossauro usa um golpe forte, retirando um pedaço de carne caso atinja outro.", icon: "img/skill/trofeu.png" },
            { title: "Grito de guerra", desc: "O dinossauro grita, aumentando o seu dano em 20%.", icon: "img/skill/buffS.png" }
        ]
    },
     "Changyuraptor": {
        idStatus: "chang",
        fullName: "CHANGYURAPTOR<br>YANGI",
        image: "img/pict/changperfil.png",
        diet: "🥩🦈",
        stats: { group: "5 membros", age: 1, growth: "12 min", price: "550", skin1: "25.000", skin2: "150" },
        passives: [
            { title: "Juntos somos fortes!", desc: "Quando os membros da matilha estão perto de você, seu consumo de vigor é reduzido (até 3 vezes: -35% consumo de vigor).", icon: "img/skill/rebanho.png" },
            { title: "Força das Trevas", desc: "Seu dinossauro gasta menos stamina à noite (-20% consumo de vigor).", icon: "img/skill/hora.png" }
        ],
        actives: [
            { title: "Parkour", desc: "Capaz de escalar, ao precionar salto próximo a uma superfície adequada.", icon: "img/skill/park.png" },  
            { title: "Vento sob as asas", desc: "Quando no ar, precione o botão de salto para planar.", icon: "img/skill/planar.png" },      
            { title: "Escalador", desc: "Quando no ar, precione o botão de salto para tentar prender-se a uma superfície.", icon: "img/skill/prender.png" },
            { title: "Disparada", desc: "O dinossauro se impulsiona para a direção em que estiver olhando, funciona apenas no ar.", icon: "img/skill/impulso.png" },  
            { title: "Corrida alta", desc: "Seu dinossauro executa um grande salto.", icon: "img/skill/puloC.png" }
        ]
    },
    "Ornithomimus": {
        idStatus: "ornitho",
        fullName: "ORNITHOMIMUS<br>VELOX",
        image: "img/pict/orniperfil.png",
        diet: "🌿",
        stats: { group: "-", age: 21, growth: "17 min", price: "N/A", skin1: "5.500", skin2: 40 },
        passives: [
            { title: "Instinto materno", desc: "Quando perto de seu ninho, seu dano aumenta para cada ovo nele (até 3 vezes: +15% dano).", icon: "img/skill/ninho.png" },
            { title: "Corredor de maratona", desc: "Quando há membros da matilha perto de você, sua recuperação de vigor acelera (até 2 vezzes: +15% regeneração de vigor).", icon: "img/skill/rebanhoH.png" },
            { title: "Surto de poder", desc: "Quando seu dinossauro está com pouca saúde, sua defesa aumenta (+15% defesa).", icon: "img/skill/poucohp.png" },
        ],
        actives: [
            { title:"Incentivo", desc: "Emite um grito alto, reduzindo o consumo de vigor dos membros da matilha (-15% gasto de vigor).", icon: "img/skill/buffS.png" },
            { title: "Chute", desc: "Seu dinossauro ataca com as patas traseiras, causando dano adicional, com chance de atordoar e repelir alguns dinossauros.", icon: "img/skill/chute.png" }
        ]
    },
    "Deinonychus": {
        idStatus: "deino",
        fullName: "DEINONYCHUS<br>ANTIRHOPUS",
        image: "img/pict/deinoperfil.png",
        diet: "🥩🦈",
        stats: { group: "-", age: 5, growth: "18 min", price: "N/A", skin1: "6.500", skin2: 50 },
        passives: [
            { title: "O poder do bando", desc: "Quando os membros da matilha estão perto de você, sua defesa é aumentada.", icon: "img/skill/rebanho.png" },
            { title: "Surto de poder", desc: "Quando seu dinossauro está com pouco HP, o dano e chance de sangramento aumentam.", icon: "img/skill/poucohp.png" }
        ],
        actives: [
            { title: "Grito de Guerra.", desc: "O dinossauro ruge, elevando seu moral e o da matilha, diminuindo seu consumo de vigor por um tempo.", icon: "img/skill/buffS.png" },
            { title: "Lâminas Afiadas", desc: "Desfere um golpe penetrantes com as garras, causando mais dano e podendo atordoar.", icon: "img/skill/jump.png" }
        ]
    },
    "Pachycephalosaurus": {
        idStatus: "pachy",
        fullName: "PACHYCEPHALO<br>SAURUS WYOMINGENSIS",
        image: "img/pict/pachyperfil.png",
        diet: "🌿",
        stats: { group: "-", age: 21, growth: "28 min", price: "8.000", skin1: "6.000", skin2: 80 },
        passives: [
            { title: "O poder do bando", desc: "Quando os membros da matilha estão perto de você, sua defesa é aumentada.", icon: "img/skill/rebanhoH.png" },
            { title: "Surto de poder", desc: "Quando seu dinossauro está com pouco HP, a velociade e chance de quebrar aumentam (+5% velocidade, +5% chance de fratura).", icon: "img/skill/poucohpP.png" }
        ],
        actives: [
            { title: "Bater", desc: "O dinossauro avança, aumentando sua velocidade a cada segundo, ao atingir um inimigo causa dano aumentado, tem chance de infligir fratura. Pode repelir e atordoar inimigos, o dano aumenta de acordo com a distância e velocidade. ", icon: "img/skill/investidaP.png" },
            { title: "Ataque Carregado", desc: "Desfere um golpe poderoso com a cabeça, causando mais dano, aumentando a chance de fratura e podendo atordoar.", icon: "img/skill/carregada.png" }
        ]
    },
    "Guanlong": {
        idStatus: "guan",
        fullName: "GUANLONG<br>WUCAII",
        image: "img/pict/guanperfil.png",
        diet: "🥩🦈",
        stats: { group: "-", age: 19, growth: "28 min", price: "180", skin1: "8.000", skin2: 50 },
        passives: [
            { title: "Poder do bando", desc: "Quando os membros da matilha estão perto de você, sua defesa aumenta.", icon: "img/skill/rebanho.png" },
            { title: "Força das Trevas", desc: "Seu dinossauro gasta menos stamina à noite (-20% gasto de stamina).", icon: "img/skill/hora.png" }
        ],
        actives: [
            { title: "Grito de Guerra", desc: "Seu dinossauro ruge, aumentando a chance de infligir sangramento por um tempo (+15% chance de sangramento).", icon: "img/skill/sangra.png" },
            { title: "Ataque Carregado", desc: "O dinossauro prepara um ataque poderoso, desferindo-o em poucos segundos, aumenta a chance de infligir sangramento.", icon: "img/skill/carregada.png" }
        ]
    },
    "Barbaridactylus": {
        idStatus: "barba",
        fullName: "BARBARIDACTYLUS<br>GRANDIS",
        image: "img/pict/barbaperfil.png",
        diet: "🥩🦈",
        stats: { group: "-", age: 15, growth: "31 min", price: "600", skin1: "20.000", skin2: 200 },
        passives: [
            { title: "O poder do bando", desc: "Quando os membros da matilha estão perto de você, seu gasto de stamina é reduzido.", icon: "img/skill/rebanho.png" },
            { title: "Presente das Profundezas", desc: "Seu dinossauro gasta menos stamina após se alimentar de um peixe.", icon: "img/skill/aquatico.png" }
        ],
        actives: [
            { title: "Enxame Barulhento", desc: "O pterossauro emite um grito estridente, aumentando a sua capacidade de infligir sangramento, e a de aliados próximos, por um curto período.", icon: "img/skill/sangra.png" }
        ]
    },
    "Psittacosaurus": {
        idStatus: "psitta",
        fullName: "PSITTACOSAURUS<br>MONGOLIENSIS",
        image: "img/pict/psittaperfil.png",
        diet: "🌿",
        stats: { group: "-", age: 10, growth: "20 min", price: "5.000", skin1: "-", skin2: "-" },
        passives: [
            { title: "Surto de poder", desc: "Quando seu dinossauro está com pouca saúde, ele gasta menos stamina e sua velocidade aumenta.", icon: "img/skill/poucohp.png" },
            { title: "Instinto materno", desc: "Quando perto de seu ninho, seu dano aumenta para cada ovo nele.", icon: "img/skill/ninho.png" }
        ],
        actives: [
            { title: "Grito de Cura", desc: "O dinossauro emite um grito que acelera a própria regeneração de HP e dos membros da matilha próximos (+20% regeneração de HP).", icon: "img/skill/buffR.png" }
        ]
    },
    "Quetzalcoatlus": {
        idStatus: "quetzal",
        fullName: "QUETZALCOATLUS<br>NORTHROPI",
        image: "img/pict/quetzalperfil.png",
        diet: "🥩🦈",
        stats: { group: "-", age: 14, growth: "41 min", price: "125.000", skin1: "-", skin2: "-" },
        passives: [
            { title: "O poder do bando", desc: "Quando os membros da matilha estão perto de você, seu dano é aumentado.", icon: "img/skill/rebanho.png" },
            { title: "Surto de poder", desc: "Quando seu dinossauro está com pouco HP, seu consumo de stamina diminui e sua velocidade aumenta.", icon: "img/skill/poucohp.png" }
        ],
        actives: [
            { title: "Capturar", desc: "Seu dinossauro agarra uma presa com o bico podendo levá-lo consigo, gastando stamina para tal. Funciona apenas com animais menores.", icon: "img/skill/capturar.png" }
        ]
    },
    "Austroraptor": {
        idStatus: "austro",
        fullName: "AUSTRORAPTOR<br>CABAZAI",
        image: "img/pict/austroperfil.png",
        diet: "🥩🦈",
        stats: { group: "-", age: 4, growth: "24 min", price: "28.000", skin1: "15.000", skin2: "195g" },
        passives: [
            { title: "Vampirismo", desc: "Ao atacar, seu dinossauro pode restaurar parte de sua saúde com o dano causado.", icon: "img/skill/vamp.png" },
            { title: "Juntos somos fortes!", desc: "Quando os membros da matilha estão perto de você, o gasto de resistência é reduzido.", icon: "img/skill/rebanho.png" },
            {title: "Presente das Profundezas", desc: "Seu dinossauro gasta menos stamina após se alimentar de um peixe.", icon: "img/skill/aquatico.png"},             
            { title: "Frescor Marinho", desc: "Ao sair da água, sua velocidade de movimento e nado aumentam.", icon: "img/skill/enativo.png"}
        ],
        actives: [
            { title: "Ataque do céu", desc: "Salta rapidamente, atacando o inimigo, há chances de reduzir sua defesa.", icon: "img/skill/mordida.png" },
            { title: "Disparada", desc: "Salte para alcançar o inimigo ou escapar velozmente.", icon: "img/skill/dash.png" }
           
        ]
    },
    "Dilophosaurus": {
        idStatus: "dilo",
        fullName: "DILOPHOSAURUS<br>WETHERILLI",
        image: "img/pict/diloperfil.png",
        diet: "🥩🦈",
        stats: { group: "-", age: 6, growth: "28 min", price: "32.000", skin1: "18.000", skin2: "180g" },
        passives: [
            { title: "Sede de Sangue", desc: "Se você atacar um inimigo dentro de um curto período de tempo após seu ataque anterior, seu dinossauro ganhará um aumento temporário na chance de causar sangramento e velocidade de movimento (+6% velocidade, +4.5% chance de sangramento).", icon: "img/skill/sedesangue.png" },
            { title: "O poder do bando", desc: "Quando os membros da matilha estão perto de você, a recuperação de stamina acelera (Até +28% recuperação de stamina).", icon: "img/skill/rebanho.png" }
        ],
        actives: [
            { title: "Arranhão", desc: "Ataque com as garras, tem maior chance de causar sangramento, mas causando menos dano.", icon: "img/skill/garras.png" },
            { title: "Chuva de Golpes", desc: "O dinossauro desfere múltiplas mordidas com maior chance de causar sangramento. Ataques causam menos dano", icon: "img/skill/chuvagolpes.png" }
        ]
    },
    "Concavenator": {
        idStatus: "conca",
        fullName: "CONCAVENATOR<br>CORCOVATUS",
        image: "img/pict/concaperfil.png",
        diet: "🥩🦈",
        stats: { group: "-", age: 12, growth: "-", price: "280g", skin1: "-", skin2: "-" },
        passives: [
            { title: "O poder do bando", desc: "Quando os membros da matilha estão próximos, você recupera HP mais rápido.", icon: "img/skill/rebanho.png" },
            { title: "Surto de poder", desc: "Quando seu dinossauro está com pouco HP, seu dano aumenta e o consumo de stamina é reduzido.", icon: "img/skill/poucohp.png" }
        ],
        actives: [
            { title: "Golpe Esmagador", desc: "O dinossauro causa um golpe devastador com dano aumentado.", icon: "img/skill/mordida.png" }
        ]
    },
    "Fasolasuchus": {
        idStatus: "fasola",
        fullName: "FASOLASUCHUS<br>TENAX",
        image: "img/pict/fasolaperfil.png",
        diet: "🥩",
        stats: { group: "-", age: 9, growth: "29 min", price: "500g", skin1: "-", skin2: "-" },
        passives: [
            { title: "Surto de poder", desc: "Quando seu pseudosuchio está com baixo HP, o consumo de stamina diminui e a velocidade de movimento aumenta (+5% velocidade, -25% consumo de stamina).", icon: "img/skill/poucohp.png" },
            { title: "O poder do bando", desc: "Quando os membros da matilha estão perto de você, sua chance de causar uma fratura aumenta (até 3 vezes: +1% chance de fratura).", icon: "img/skill/rebanho.png" }
        ],
        actives: [
            { title: "Capturar", desc: "Seu dinossauro agarra uma presa com o boca podendo levá-lo consigo, gastando stamina para tal. Funciona apenas com animais menores", icon: "img/skill/capturarf.png" },
            { title: "Ataque Carregado", desc: "O dinossauro prepara um ataque poderoso, desferindo-o em poucos segundos, aumenta a chance de infligir sangramento e fratura.", icon: "img/skill/carregada.png" }
        ]
    },
    "Kentrosaurus": {
        idStatus: "kentro",
        fullName: "KENTROSAURUS<br>AETHIOPICUS",
        image: "img/pict/kentroperfil.png",
        diet: "🌿",
        stats: { group: "5 membros", age: 21, growth: "39 min", price: "30k", skin1: "12k", skin2: "120g" },
        passives: [
            { title: "Surto de poder", desc: "Quando seu dinossauro tem pouca vida, o consumo de vigor diminui e a velocidade de movimento aumenta (+5% velocide, -20% consumo de vigor).", icon: "img/skill/poucohp.png" },
            { title: "O poder do bando", desc: "Quando os membros da matilha estão perto de você, sua chance de causar sangramento aumenta (até +4% sangramento).", icon: "img/skill/rebanhoH.png" },
            { title: "Instinto Primordial", desc: "Se seu dinossauro estiver sangrando, seus ataques têm maior probabilidade de causar sangramento (+9% sangramento).", icon: "img/skill/instintop.png" }
        ],
        actives: [
            { title: "Chuva de Golpes", desc: "Faz várias batidas de cauda. O ataque pode causar dano várias vezes ao mesmo alvo.", icon: "img/skill/tago.png" },
            { title: "Armadura", desc: "O dinossauro se levanta, ganha força e então cai bruscamente. Suas placas se movem, aumentando temporariamente a defesa (+25% defesa).", icon: "img/skill/defesa.png" }
        ]
    },
    "Megaraptor": {
        idStatus: "mega",
        fullName: "MEGARAPTOR<br>NAMUNHUAIQUII",
        image: "img/pict/megaperfil.png",
        diet: "🥩",
        stats: { group: "4 membros", age: 3, growth: "38 min", price: "600g", skin1: "-", skin2: "300g" },
        passives: [
            { title: "Poder Acumulado", desc: "O primeiro ataque causa dano aumentado, há um tempo de recarga (+30% dano).", icon: "img/skill/poderacumulado.png" },
            { title: "Devorador da Noite", desc: "À noite a chance do seu dinossauro causar sangramento aumenta e o consumo de stamina diminui.", icon: "img/skill/devorador.png" },
             { title: "O poder do bando", desc: "Quando os membros da matilha estão perto de você, seu gasto de stamina é reduzido.", icon: "img/skill/rebanho.png" }
        ],
        actives: [
            { title: "Rugido Aterrorizante", desc: "Você solta um rugido aterrorizante, fazendo com que os dinossauros próximos fiquem com medo e percam o conforto.", icon: "img/skill/rugido.png" },
            { title: "Garras Afiadas", desc: "O dinossauro faz dois movimentos com suas garras. O ataque pode causar dano em ambas as vezes ao mesmo alvo.", icon: "img/skill/garras.png" }
        ]
    },
    "Ceratosaurus": {
        idStatus: "cerato",
        fullName: "CERATOSAURUS<br>NASICORNIS",
        image: "img/pict/ceratoperfil.png",
        diet: "🥩🦈",
        stats: { group: "-", age: 17, growth: "39 min", price: "120k", skin1: "-", skin2: "-" },
        passives: [
            { title: "Surto de poder", desc: "Quando seu dinossauro está com pouo HP, sua defesa e chance de sangrar aumentam.", icon: "img/skill/poucohp.png" },
            { title: "O poder do bando", desc: "Quando os membros da matilha estão perto de você, sua saúde recupera mais rápido.", icon: "img/skill/rebanho.png" }
        ],
        actives: [
            { title: "Ataque Carregado", desc: "O dinossauro prepara um ataque poderoso, desferindo-o em poucos segundos, aumenta a chance de infligir sangramento.", icon: "img/skill/carregada.png" }
        ]
    },
    "Carnotaurus": {
        idStatus: "carno",
        fullName: "CARNOTAURUS<br>SASTREI",
        image: "img/pict/carnoperfil.png",
        diet: "🥩",
        stats: { group: "-", age: 7, growth: "29 min", price: "100k", skin1: "-", skin2: "-" },
        passives: [
            { title: "Sede de Sangue", desc: "Se você atacar um inimigo dentro de um curto período de tempo após seu ataque anterior, seu dinossauro ganhará um aumento temporário na chance de causar sangramento e velocidade de movimento (até 10 vezes: +3,6% chance de sangramento, +6% velocidade).", icon: "img/skill/sedesangue.png" },
            { title: "O poder do bando", desc: "Quando há membros da matilha perto de você, seu gasto de resistência é reduzido.", icon: "img/skill/rebanho.png" }
        ],
        actives: [
            { title: "Ataque Carregado", desc: "O dinossauro prepara um ataque poderoso, desferindo-o em poucos segundos, aumenta a chance de infligir sangramento.", icon: "img/skill/carregada.png" },
            { title: "Crânio de Ferro", desc: "Seu dinossauro causa um golpe devastador com dano aumentado, podendo atordoar inimigos.", icon: "img/skill/cranio.png" }
        ]
    },
    "Gigantoraptor": {
        idStatus: "giganto",
        fullName: "GIGANTORAPTOR<br>ERLIANENSIS",
        image: "img/pict/gigantoperfil.png",
        diet: "🥩🌿",
        stats: { group: "-", age: 10, growth: "42 min", price: "50k", skin1: "-", skin2: "-" },
        passives: [
            { title: "Instinto Materno", desc: "Quando seu dinossauro está perto do ninho, o dano aumenta para cada ovo (até 3 vezes: +18% dano).", icon: "img/skill/ninho.png" },
            { title: "O poder do bando", desc: "Quando os membros da matilha estão perto de você, seu dano aumenta (até 2 vezes: +11% dano).", icon: "img/skill/rebanho.png" }
        ],
        actives: [
            { title: "Chute", desc: "Seu dinossauro ataca com as patas traseiras causando dano adicional, tem chance de atordoar e repele alguns dinossauros.", icon: "img/skill/chute.png" },
            { title: "Chuva de Golpes", desc: "Seu dinossauro desfere múltiplas bicadas com maior chance de causar sangramento. Ataques causam menos dano", icon: "img/skill/chuvagolpes.png" }
        ]
    },
    "Allosaurus": {
        idStatus: "allo",
        fullName: "ALLOSAURUS<br>FRAGILIS",
        image: "img/pict/alloperfil.png",
        diet: "🥩",
        stats: { group: "-", age: 17, growth: "38 min", price: "650g", skin1: "-", skin2: "-" },
        passives: [
            { title: "O poder do bando", desc: "Quando os membros da matilha estão perto de você, resistência recupera mais rápido.", icon: "img/skill/rebanho.png" },
            { title: "Bom Sono", desc: "Quando seu dinossauro gasta menos stamina enquanto o cansaço estiver acima de 79%. (-15% gasto de stamina)", icon: "img/skill/sono.png" },
            { title: "Instinto Primordial", desc: "Se seu dinossauro estiver sangrando, seus ataques têm maior probabilidade de causar sangramento (+9% sangramento).", icon: "img/skill/instintop.png" }
        ],
        actives: [
            { title: "Ataque Carregado", desc: "Seu dinossauro prepara um ataque poderoso, desferindo-o em poucos segundos, aumenta a chance de infligir sangramento.", icon: "img/skill/carregada.png" }
        ]
    },
    "Styracosaurus": {
        idStatus: "styra",
        fullName: "STYRACOSAURUS<br>ALBERTENSIS",
        image: "img/pict/styraperfil.png",
        diet: "🌿",
        stats: { group: "Tier 3", age: 7, growth: "39 min", price: "55k", skin1: "25k", skin2: "250g" },
        passives: [
            { title: "Fúria com Chifres", desc: "Quando seu dinossauro está com pouco HP, seu consumo de stamina é reduzido e sua chance de sangrar aumenta.", icon: "img/skill/sangra.png" },
            { title: "O poder do bando", desc: "Quando os membros da matilha estão perto de você, sua defesa é aumentada.", icon: "img/skill/rebanhoH.png" }
        ],
        actives: [
            { title: "Chute", desc: "Seu dinossauro ataca com as patas traseiras causando dano adicional, tem chance de atordoar e repele alguns dinossauros.", icon: "img/skill/coice.png" },
            { title: "Golpe Esmagador", desc: "O dinossauro golpeia com seu chifre, causa dano aumentado, podendo atordoar e repelir os dinossauros", icon: "img/skill/cranio.png" }
        ]
    },
    "Plateosaurus": {
        idStatus: "plateo",
        fullName: "PLATEOSAURUS<br>ENGELHARDTI",
        image: "img/pict/plateoperfil.png",
        diet: "🌿",
        stats: { group: "-", age: 18, growth: "31 min", price: "20.5k", skin1: "-", skin2: "-" },
        passives: [ 
            { title: "O poder do bando", desc: "Quando os membros de sua matilha estão perto de você, sua defesa é aumentada.", icon: "img/skill/poucohp.png" },
            { title: "Surto de poder", desc: "Quando seu dinossauro está com pouco HP seu consumo de stamina diminui e a velocidade aumenta.", icon: "img/skill/rebanhoH.png" }
        ],
        actives: [
            { title: "Chicote de cauda", desc: "Um golpe de cauda em área, causa repulsão.", icon: "img/skill/cauda.png" }
        ]
    },
    "Tarchia":{
        idStatus: "tachia",
        fullName: "TACHIA<br>KIELANAE",
        image: "img/pict/tarchiaperfil.png",
        diet: "🌿",
        stats: { group: "-", age: 23, growth: "39 min", price: "35k", skin1: "-", skin2: "-" },
        passives: [
            {title: "Surto de poder", desc: "Quando seu dinossauro está com HP baixo, seu dano e chance de fraturar aumentam. (+15% dano, +7,5% fratura)", icon: "img/skill/poucohp.png" }
        ],
        actives: [
        { title: "Ataque Carregado", desc: "Seu dinossauro prepara um ataque poderoso, desferindo-o em poucos segundos, aumenta a chance de infligir fratura, pode causar repulsão e atordoamento.", icon: "img/skill/carregadaT.png" },
        { title: "Armadura Resistente", desc: "Seu dinossauro chacoalha o corpo por alguns segundos, após isso, ganha defesa e perde velocidade. (+30% defesa, -12% velocidade)", icon: "img/skill/defesa.png"}
        ]
    },
    "Parasaurolophus":{
    idStatus: "parasaurolophus",
    fullName: "PARASAUROLOPHUS<br>WALKERI",
    image: "img/pict/paraperfil.png",
    diet: "🌿",
    stats: { group: "-", age: 18, growth: "-", price: "32k", skin1: "10k", skin2: "120g" },
    passives: [
        {title: "Surto de poder", desc: "Quando seu dinossauro tem pouco HP, o consumo de stamina é reduzido e a velocidade de movimento aumenta (-20% consumo de stamina, +5% velocidade).", icon: "img/skill/poucohp.png" }
    ],
    actives: [
        { title: "Chute", desc: "Ataca com as patas traseiras, causando dano adicional e tendo chance de atordoar e repelir certos dinossauros. Não pode ser usada enquanto estiver correndo.", icon: "img/skill/coice.png" },
        { title: "Um rugido aterrorizante", desc: "Solta um rugido que causa medo nos dinossauros, reduzindo sua defesa.", icon: "img/skill/rugido.png" }
    ]
    },
    "Pachyrhinosaurus":{
        idStatus: "rhino",
        fullName: "PACHYRHINOSAURUS",
        image: "img/pict/rhinoperfil.png",
        diet: "🌿",
        stats: { group: "-", age: 20, growth: "36 min", price: "75k", skin1: "-", skin2: "-" },
        passives: [
            { title: "O poder do bando", desc: "Quando os membros da matilha estão perto de você, sua saúde recupera mais rápido (+20% regeneração de HP).", icon: "img/skill/rebanhoH.png" },
            { title: "Surto de poder", desc: "Quando seu dinossauro tem pouco HP, o consumo de stamina é reduzido e a velocidade de movimento aumenta.", icon: "img/skill/poucohp.png" }
        ],
        actives: [
            { title: "Bater", desc: "O dinossauro avança, aumentando sua velocidade a cada segundo, ao atingir um inimigo causa dano aumentado, tem chance de infligir fratura. Pode repelir e atordoar inimigos, o dano aumenta de acordo com a distância e velocidade.", icon: "img/skill/investida.png" },
            { title: "Terremoto", desc: "O dinossauro levanta as patas dianteiras, acumulando energia, e então as bate com força no chão. O golpe causa dano em área, com chance de atordoar e empurrar inimigos.", icon: "img/skill/terra.png" }
        ]
    },
    "Stegosaurus":{
        idStatus: "stego",
        fullName: "STEGOSAURUS<br>UNGULATUS",
        image: "img/pict/stegoperfil.png",
        diet: "🌿",
        stats: { group: "-", age: 2, growth: "40 min", price: "80k", skin1: "-", skin2: "-" },
        passives: [
            { title: "O poder do bando", desc: "Quando os membros da matilha estão perto de você, sua chance de causar sangramento aumenta.", icon: "img/skill/rebanhoH.png" },
            { title: "Energia solar", desc: "Durante o dia, seu dinossauro consome menos stamina.", icon: "img/skill/hora.png" }
        ],
        actives: [
            { title: "Ataque Carregado", desc: "Seu dinossauro prepara um ataque poderoso, desferindo três movimentos de cauda em poucos segundos, aumenta a chance de infligir fratura e sangramento, pode causar atordoamento.", icon: "img/skill/tago.png" },
            { title: "Golpe Esmagador", desc: "Seu dinossauro causa um golpe devastador com dano aumentado, pode atordoar inimigos.", icon: "img/skill/esmaga.png" }
        ]
    },
    "Therizinosaurus":{
        idStatus: "theri",
        fullName: "THERIZINOSAURUS<br>CHELONIFORMIS",
        image: "img/pict/theriperfil.png",
        diet: "🌿",
        stats: { group: "4 membros", age: 13, growth: "48 min", price: "150k", skin1: "-", skin2: "-" },
        passives: [
            {
                title: "Surto de poder", 
                desc: "quando seu dinossauro está com pouca vida, seu dano e chance de sangrar aumentam.", 
                icon: "img/skill/poucohp.png" 
            },
            {
                title: "O poder do bando", 
                desc: "Quando os membros da matilha estão perto de você, sua defesa é aumentada.", 
                icon: "img/skill/rebanhoH.png" 
            }
        ],
        actives:
         [
            { 
                title: "Chuva de Golpes", 
                desc: "O dinossauro faz dois movimentos com suas garras, aumenta a chance de infligir sangramento.", 
                icon: "img/skill/garras.png" 
            },
            { 
                title: "Ataque Carregado", 
                desc: "Seu dinossauro prepara um ataque poderoso, desferindo-o em poucos segundos, aumenta a chance de infligir sangramento.", 
                icon: "img/skill/carregada.png" 
            }
        ]
    },
    "Suchomimus": {
        idStatus: "sucho",
        fullName: "SUCHOMIMUS<br>TENERENSIS",
        image: "img/pict/suchoperfil.png",
        diet: "🥩🦈",
        stats: { 
            group: "-", 
            age: 8, 
            growth: "41 min", 
            price: "110k", 
            skin1: "-", 
            skin2: "-" 
        },
        passives: [
            {
                title: "O poder do bando", 
                desc: "Quando os membros da matilha estão perto de você, sua defesa é aumentada.", 
                icon: "img/skill/rebanho.png" 
            },
            {
                title: "Elemento nativo", 
                desc: "Quando seu dinossauro nada, o dano aumenta.", 
                icon: "img/skill/enativo.png" 
            },
            {
                title: "Presente das Profundezas",
                desc: "Seu dinossauro gasta menos stamina após se alimentar de um peixe.",
                 icon: "img/skill/aquatico.png"
            }
        ],
        actives: [
            { 
                title: "Ataque Carregado", 
                desc: "Seu dinossauro prepara um ataque poderoso, desferindo-o em poucos segundos, aumenta a chance de infligir sangramento e fratura.", 
                icon: "img/skill/carregada.png" 
            },
            { 
                title: "Garras Afiadas", 
                desc: "O dinossauro faz dois movimentos com suas garras aumentando as chances de infligir sangramento.", 
                icon: "img/skill/garras.png" 
            }
        ]
    },
    "Amargasaurus": {
        idStatus: "amarga",
        fullName: "AMARGASAURUS<br>CAZAUI",
        image: "img/pict/amargaperfil.png",
        diet: "🌿",
        stats: { 
            group: "4 membros", age: 9, growth: "48 min", price: "120k", skin1: "-", skin2: "-" 
        },
        passives: [
            {
                title: "O poder do bando", 
                desc: "Quando os membros da matilha estão perto de você, seu gasto de stamina é reduzido (até 4 vezes: -12% consumo de stamina).", 
                icon: "img/skill/rebanhoH.png" 
            },
            {
                title: "Surto de poder", 
                desc: "Quando seu dinossauro está com pouca vida, sua defesa e chance de sangrar aumentam (+12% defesa, +4.5% sangramento).", 
                icon: "img/skill/poucohp.png" 
            }
        ],
        actives: [
            { 
                title: "Ataque do céu", 
                desc: "O dinossauro levanta as patas dianteiras, acumulando energia, e então as bate com força no chão. O golpe causa dano em área, com chance de atordoar e empurrar inimigos.", 
                icon: "img/skill/pisao.png" 
            },
            { 
                title: "Chicote de Cauda", 
                desc: "Um golpe de cauda em área, causa repulsão.", 
                icon: "img/skill/cauda.png" 
            }
        ]
    },
    "Sarcosuchus": {
        idStatus: "sarco",
        fullName: "SARCOSUCHUS<br>IMPERATOR",
        image: "img/pict/sarcoperfil.png",
        diet: "🥩🦈",
        stats: { group: "-", "age": 22, growth: "48 min", price: "650g", skin1: "-", skin2: "-" 
        },
        passives: [
            {
                title: "O poder do bando", 
                desc: "Quando os membros da matilha estão perto de você, sua chance de causar fratura aumenta.", 
                icon: "img/skill/rebanho.png" 
            },
            ,
            {
                title: "Presente das Profundezas",
                desc: "Seu dinossauro gasta menos stamina após se alimentar de um peixe.",
                icon: "img/skill/aquatico.png"
            },
            {
                title: "Surto de poder", 
                desc: "Quando seu dinossauro está com pouco HP, sua defesa aumenta.", 
                icon: "img/skill/poucohp.png" 
            },
            {
                title: "Elemento nativo", 
                desc: "quando seu dinossauro nada, sua defesa aumenta.", 
                icon: "img/skill/enativo.png" 
            }
        ],
        actives: [
            { 
                title: "Capturar", 
                desc: "Seu dinossauro agarra uma presa com o boca podendo levá-la consigo, gastando stamina para tal. Funciona apenas com animais menores.", 
                icon: "img/skill/capturarS.png" 
            },
            { 
                title: "Mordida Mortal", 
                desc: "Uma mordida poderosa que drena o oxigênio e a resistência do inimigo.", 
                icon: "img/skill/mordida.png" 
            }
        ]
    },
    "Spinosaurus": {
    idStatus: "spinosaurus",
    fullName: "SPINOSAURUS<br>AEGYPTIACUS",
    image: "img/pict/spinoperfil.png",
    diet: "🥩🦈",
    stats: { group: "3 membros", age: 16, growth: "-", price: "150k", skin1: "50k", skin2: "300g" },
    passives: [
        { title: "O poder do bando", desc: "Quando os membros da matilha estão perto de você, sua chance de causar sangramento aumenta.", icon: "img/skill/rebanho.png" },
        { title: "Elemento nativo", desc: "Quando seu dinossauro nada, a defesa aumenta.", icon: "img/skill/enativo.png" },
        { title: "Presente das Profundezas", desc: "Seu dinossauro gasta menos stamina após se alimentar de um peixe.", icon: "img/skill/aquatico.png" }
    ],
    actives: [
        { title: "Chuva de Golpes", desc: "O dinossauro realiza três movimentos com suas garras. Aumenta a chance de infligir sangramento.", icon: "img/skill/garras.png" },
        { title: "Chicote de Cauda", desc: "Um golpe de cauda em área, causa repulsão.", icon: "img/skill/cauda.png" }
    ]
    },
    "Deinocheirus": {
    idStatus: "pato",
    fullName: "DEINOCHEIRUS<br>MIRIFICUS",
    image: "img/pict/patoperfil.png",
    diet: "🌿🦈",
    stats: { group: "3 membros", age: 11, growth: "48 min", price: "800g", skin1: "-", skin2: "225g" },
    passives: [
        { title: "O poder do bando", desc: "Quando os membros da matilha estão perto de você, sua chance de causar sangramento aumenta.", icon: "img/skill/rebanhoH.png" },
        {
                title: "Elemento nativo", 
                desc: "Quando seu dinossauro nada, a defesa aumenta.", 
                icon: "img/skill/enativo.png" 
            },
            {
                title: "Presente das Profundezas",
                desc: "Seu dinossauro gasta menos stamina após se alimentar de um peixe.",
                icon: "img/skill/aquatico.png"
            }
    ],
    actives: [
        { title: "Estrondo do Lagarto", desc: "O dinossauro ruge aumentando temporariamente sua defesa e velocidade de movimento.", icon: "img/skill/buffS.png" },
        { title: "Ataque Carregado", desc: "Seu dinossauro prepara um ataque poderoso, desferindo-o em poucos segundos, aumenta a chance de infligir sangramento e fratura.", icon: "img/skill/carregada.png" }
    ]
    },
    "Triceratops": {
    idStatus: "trike",
    fullName: "TRICERATOPS<br>HORRIDUS",
    image: "img/pict/trikeperfil.png",
    diet: "🌿",
    stats: { group: "3 membros", age: 16, growth: "48 min", price: "110k", skin1: "30k", skin2: "300g" },
    passives: [
        { title: "Surto de poder", desc: "Quando seu dinossauro tem pouco HP, seu consumo de vigor diminui e sua velocidade de movimento aumenta (-20% consumo de stamina, + 5% velocidade).", icon: "img/skill/poucohp.png" },
        { title: "O poder do bando", desc: "Quando os membros da matilha estão perto de você, sua regeneração de stamina aumenta (até 2 vezes: +8% regeneração de stamina).", icon: "img/skill/rebanhoH.png" }
    ],
    actives: [
        { title: "Bater", desc: "O dinossauro avança, aumentando sua velocidade a cada segundo, ao atingir um inimigo causa dano aumentado, tem chance de infligir fratura e sangramento. Pode repelir e atordoar inimigos, o dano aumenta de acordo com a distância e velocidade.", icon: "img/skill/investida.png" },
        { title: "Golpe Esmagador", desc: "O dinossauro dá um golpe devastador com dano aumentado, pode atordoar e repelir os dinossauros.", icon: "img/skill/cranio.png" }
    ]
    },
    "Giganotosaurus": {
    idStatus: "giga",
    fullName: "GIGANOTOSAURUS<br>CAROLINI",
    image: "img/pict/gigaperfil.png",
    diet: "🥩",
    stats: { group: "3 membros", age: 17, growth: "48 min", price: "140k", skin1: "40k", skin2: "300g" },
    passives: [
        { title: "Sede de Sangue", desc: "Se você atacar um inimigo dentro de um curto período de tempo após seu ataque anterior, seu dinossauro ganhará um aumento temporário na chance de causar sangramento. (até +4% chance de sangramento)", icon: "img/skill/sedesangue.png" },
        { title: "O poder do bando", desc: "Quando os membros da matilha estão perto de você, sua defesa aumenta (+7% defesa).", icon: "img/skill/rebanho.png" },
        { title: "Surto de poder", desc: "Quando seu dinossauro está com pouco HP, o dano e chance de sangrar aumentam(+10% dano, +8,5% chance de sangramento).", icon: "img/skill/poucohp.png" }
    ],
    actives: [
        { title: "Ataque Carregado", desc: "Seu dinossauro prepara um ataque poderoso, desferindo-o em poucos segundos, aumenta a chance de infligir sangramento e fratura, podendo repelir e atordoar inimigos.", icon: "img/skill/carregada.png" },
        { title: "Terremoto", desc: "Seu dinossauro pisa o chão com força, causando dano em área. Pode atordoar e repelir outros dinossauros.", icon: "img/skill/terra.png" }
    ]
    },
    "Tyrannosaurus": {
    idStatus: "trex",
    fullName: "TYRANNOSAURUS<br>REX",
    image: "img/pict/trexperfil.png",
    diet: "🥩",
    stats: { group: "3 membros", age: 16, growth: "56 min", price: "800g", skin1: "40k", skin2: "450g" },
    passives: [
        { title: "O poder do bando", desc: "Quando os membros da matilha estão perto de você, seu gasto de stamina é reduzido (-10% gasto de stamina).", icon: "img/skill/rebanho.png" }
    ],
    actives: [
        { title: "Rugido Aterrorizante", desc: "Seu dinossauro ruge a defesa de inimigos próximos (-20% defesa inimiga).", icon: "img/skill/rugidoR.png" },
        { title: "Crânio de Ferro", desc: "O dinossauro golpeia com a cabeça, causando dano aumentado e podendo atordoar e repelir os dinossauros.", icon: "img/skill/cranio.png" }
    ]
    }
};

function createSkillHTML(skill) {
    const iconSrc = skill.icon ? skill.icon : 'img/logo.png';
    return `
        <div class="skill-item">
            <img src="${iconSrc}" class="skill-icon" alt="${skill.title}">
            <div class="skill-text">
                <h5>${skill.title}</h5>
                <p>${skill.desc}</p>
            </div>
        </div>`;
}

function fecharModal() {
    modal.style.display = "none";
}

btns.forEach(btn => {
    btn.addEventListener("click", function () {
        const dinoKey = this.getAttribute("data-dino");
        const data = dinoDatabase[dinoKey];

        if (data) {
            modalName.innerHTML = data.fullName;
            modalImg.src = data.image;
            modalDiet.innerText = data.diet;

            statGroup.innerText = data.stats.group;
            statAge.innerText = data.stats.age;
            statGrowth.innerText = data.stats.growth;
            statPrice.innerText = data.stats.price;
            statSkin1.innerText = data.stats.skin1;
            statSkin2.innerText = data.stats.skin2;

            if (data.idStatus) {
                btnStatusModal.href = `status.html#${data.idStatus}`;
                btnStatusModal.style.display = "inline-block"; 
            } else {
                btnStatusModal.style.display = "none"; 
            }

            passivesContainer.innerHTML = "";
            data.passives.forEach(skill => {
                passivesContainer.innerHTML += createSkillHTML(skill);
            });

            activesContainer.innerHTML = "";
            data.actives.forEach(skill => {
                activesContainer.innerHTML += createSkillHTML(skill);
            });

            modal.style.display = "block";
        }
    });
});

closeBtn.onclick = fecharModal;

modal.addEventListener("click", (e) => {
    if (e.target === modal) {
        fecharModal();
    }
});

tabButtons.forEach(btn => {
    btn.addEventListener("click", () => {
        tabButtons.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");

        tierContents.forEach(content => content.classList.remove("active-content"));

        const targetId = btn.getAttribute("data-target");
        const targetContent = document.getElementById(targetId);

        if (targetContent) {
            targetContent.classList.add("active-content");
        }
    });
});

imgDinoElements.forEach(img => {
    img.addEventListener("click", () => {
        imgModal.style.display = "flex";
        imgModalContent.src = img.src;
    });
});

imgModal.addEventListener("click", () => {
    imgModal.style.display = "none";
});

document.addEventListener('DOMContentLoaded', () => {
    const hash = window.location.hash.substring(1);
    if (!hash) return;

    const targetElement = document.getElementById(hash);
    if (targetElement) {
        const parentTier = targetElement.closest('.tier-indicator');

        if (parentTier) {
            const tierId = parentTier.id;
            const tierBtn = document.querySelector(`.tier-btn[data-target="${tierId}"]`);

            if (tierBtn) {
                document.querySelectorAll('.tier-btn').forEach(btn => btn.classList.remove('active'));
                document.querySelectorAll('.tier-indicator').forEach(content => content.classList.remove('active-content'));
                tierBtn.classList.add('active');
                parentTier.classList.add('active-content');
            }
        }
        setTimeout(() => {
            targetElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
            const btn = targetElement.querySelector('.btn-verificar');
            if (btn) {
                btn.click();
            }
        }, 150);
    }
});
