const cardsDinoDatabaseReady = window.dinoDatabaseReady || fetch("data/dinoDataBase.json")
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP ${response.status}`);
        }

        return response.json();
    })
    .catch(error => {
        console.error("Erro ao carregar os dados dos cards:", error);
        return {};
    });

window.dinoDatabaseReady = cardsDinoDatabaseReady;

let galleryCards = [];

const DIET_GROUPS = {
    herbivoros: {
        id: "diet1",
        matches: diet => diet.includes("\u{1f33f}") && !diet.includes("\u{1f969}") && !diet.includes("\u{1f988}")
    },
    carnivoros: {
        id: "diet2",
        matches: diet => diet.includes("\u{1f969}") && !diet.includes("\u{1f33f}")
    },
    onivoros: {
        id: "diet3",
        matches: diet => diet.includes("\u{1f33f}") && (diet.includes("\u{1f969}") || diet.includes("\u{1f988}"))
    }
};

function normalizeText(value = "") {
    return String(value)
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase()
        .trim();
}

function stripHtml(value = "") {
    const wrapper = document.createElement("div");
    wrapper.innerHTML = value;
    return wrapper.textContent || wrapper.innerText || "";
}

function getFirstName(value = "") {
    return normalizeText(value).split(/\s+/)[0] || "";
}

function getStatusItems() {
    return typeof dinosData !== "undefined" && Array.isArray(dinosData) ? dinosData : [];
}

function getStatusIndex() {
    return new Map(getStatusItems().map(status => [getFirstName(status.nome), status]));
}

function getDatabaseIndex(database) {
    return new Map(Object.entries(database).map(([key, info]) => [getFirstName(key), { key, info }]));
}

function getDietGroup(diet = "") {
    const match = Object.entries(DIET_GROUPS).find(([, group]) => group.matches(diet));
    return match ? match[0] : "carnivoros";
}

function getCardImage(image = "") {
    return image.includes("perfil") ? image.replace("perfil", "model") : image;
}

function getCardSearchText(card) {
    return normalizeText([
        card.key,
        card.id,
        card.name,
        card.fullName,
        card.description,
        card.diet,
        `tier ${card.tier}`,
        `tier${card.tier}`
    ].join(" "));
}

function buildGalleryCard({ key, info, status }) {
    const name = info.shortName || key;
    const fullName = status?.nome || stripHtml(info.fullName) || name;
    const diet = info.diet || status?.dieta || "";
    const tier = Number(status?.tier || info.tier || 0);
    const id = info.idStatus || normalizeText(key).replace(/\s+/g, "-");

    const card = {
        key,
        id,
        name,
        fullName,
        description: info.desc || "",
        image: getCardImage(info.image || "img/logo.png"),
        alt: `Modelo de ${name}`,
        diet,
        dietGroup: getDietGroup(diet),
        tier
    };

    card.searchText = getCardSearchText(card);
    return card;
}

function buildGalleryCards(database = {}) {
    const statusIndex = getStatusIndex();
    const databaseIndex = getDatabaseIndex(database);
    const usedKeys = new Set();
    const cards = [];

    getStatusItems().forEach(status => {
        const databaseEntry = databaseIndex.get(getFirstName(status.nome));

        if (!databaseEntry) return;

        usedKeys.add(databaseEntry.key);
        cards.push(buildGalleryCard({
            key: databaseEntry.key,
            info: databaseEntry.info,
            status
        }));
    });

    Object.entries(database).forEach(([key, info]) => {
        if (usedKeys.has(key)) return;

        cards.push(buildGalleryCard({
            key,
            info,
            status: statusIndex.get(getFirstName(key))
        }));
    });

    return cards;
}

function createDinoCard(cardData, idSuffix = "") {
    const column = document.createElement("div");
    column.className = "col-md-4 gallery-card-item";
    column.id = idSuffix ? `${cardData.id}-${idSuffix}` : cardData.id;
    column.dataset.dinoId = cardData.id;
    column.dataset.search = cardData.searchText;

    const card = document.createElement("article");
    card.className = "card-raca";
    card.dataset.dino = cardData.key;
    card.setAttribute("role", "button");
    card.setAttribute("tabindex", "0");
    card.setAttribute("aria-label", `Ver detalhes de ${cardData.name}`);

    const cardImage = document.createElement("img");
    cardImage.src = cardData.image;
    cardImage.alt = cardData.alt;
    cardImage.className = "img-dino";
    cardImage.loading = "lazy";

    const body = document.createElement("div");
    body.className = "card-body-custom";

    const title = document.createElement("h3");
    title.textContent = cardData.name;

    const meta = document.createElement("span");

    const text = document.createElement("p");
    text.textContent = cardData.description;

    body.append(title, meta, text);
    card.append(cardImage, body);
    column.appendChild(card);

    return column;
}

function getOrCreateEmptyMessage(container) {
    const parent = container.parentElement;
    let message = Array.from(parent.children).find(child => child.classList.contains("gallery-empty"));

    if (!message) {
        message = document.createElement("p");
        message.className = "gallery-empty";
        message.textContent = "Nenhum dinossauro encontrado.";
        parent.appendChild(message);
    }

    return message;
}

function renderCardsInContainer(container, cards, idSuffix) {
    if (!container) return;

    container.innerHTML = "";
    cards.forEach(card => {
        container.appendChild(createDinoCard(card, idSuffix));
    });

    getOrCreateEmptyMessage(container);
}

function renderDinoCards(database = {}) {
    galleryCards = buildGalleryCards(database);

    renderCardsInContainer(document.querySelector("#todos .linha-racas"), galleryCards, "");

    for (let tier = 1; tier <= 5; tier += 1) {
        renderCardsInContainer(
            document.querySelector(`#tier${tier} .linha-racas`),
            galleryCards.filter(card => card.tier === tier),
            `tier${tier}`
        );
    }

    Object.entries(DIET_GROUPS).forEach(([groupName, group]) => {
        renderCardsInContainer(
            document.querySelector(`#${group.id} .linha-racas`),
            galleryCards.filter(card => card.dietGroup === groupName),
            group.id
        );
    });

    applyGallerySearch(document.getElementById("dinoEspecifico")?.value || "");
}

function updateEmptyMessages() {
    document.querySelectorAll(".linha-racas").forEach(container => {
        const hasVisibleCards = Array.from(container.querySelectorAll(".gallery-card-item"))
            .some(card => card.style.display !== "none");
        const message = getOrCreateEmptyMessage(container);
        message.style.display = hasVisibleCards ? "none" : "block";
    });
}

function applyGallerySearch(term = "") {
    const normalizedTerm = normalizeText(term);

    document.querySelectorAll(".gallery-card-item").forEach(card => {
        const matches = !normalizedTerm || card.dataset.search.includes(normalizedTerm);
        card.style.display = matches ? "" : "none";
    });

    updateEmptyMessages();
}

function whenDocumentIsReady(callback) {
    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", callback, { once: true });
        return;
    }

    callback();
}

const dinoCardsReady = cardsDinoDatabaseReady.then(database => new Promise(resolve => {
    whenDocumentIsReady(() => {
        renderDinoCards(database);
        resolve(galleryCards);
    });
}));

function ordemPeso(){
    const toggle = document.getElementById("toggleOrdem");
    const labelTexto = document.getElementById("ordemPeso");
    const isDecrescente = toggle.checked;

    // 2. Atualiza o texto do Switch
    labelTexto.textContent = isDecrescente ? "Decrescente" : "Crescente";

    // 3. Obtém o índice de status gerado pelo seu script 
    // Isso cria um Map ligando o 'primeiro nome' ao objeto completo no dinosData
    const statusIndex = getStatusIndex();

    // 4. Itera sobre todas as divs contêineres dos cards (Aba todos, Tiers e Dietas)
    document.querySelectorAll(".linha-racas").forEach(container => {
        
        // Converte os NodeLists de cards num Array para usar o método .sort()
        const cards = Array.from(container.querySelectorAll(".gallery-card-item"));

        cards.sort((a, b) => {
            // Acessa o elemento <article> interno para resgatar o data-dino
            const articleA = a.querySelector(".card-raca");
            const articleB = b.querySelector(".card-raca");

            // Extrai as keys usando a sua própria função de normalização
            const keyA = articleA ? getFirstName(articleA.dataset.dino) : "";
            const keyB = articleB ? getFirstName(articleB.dataset.dino) : "";

            // Busca as informações completas no dinosData
            const statusA = statusIndex.get(keyA);
            const statusB = statusIndex.get(keyB);

            // Evita erros garantindo que o peso é um número ou cai para 0 caso falte a informação
            const pesoA = statusA ? Number(statusA.peso) || 0 : 0;
            const pesoB = statusB ? Number(statusB.peso) || 0 : 0;

            // Retorna a ordem correta baseada no toggle
            return isDecrescente ? pesoB - pesoA : pesoA - pesoB;
        });

        // 5. Reanexa os cards ordenados. 
        // Nota: O método appendChild em um elemento que já existe no DOM o move 
        // para a nova posição sem duplicá-lo e de maneira muito performática.
        cards.forEach(card => container.appendChild(card));
    });
}

window.renderDinoCards = renderDinoCards;
window.applyGallerySearch = applyGallerySearch;
window.dinoCardsReady = dinoCardsReady;
