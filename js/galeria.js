const modal = document.getElementById("myModal");
const closeBtn = document.getElementsByClassName("close")[0];
const modalImg = document.getElementById("modal-img");
const modalName = document.getElementById("modal-dino-name");
const modalDiet = document.getElementById("modal-diet-icon");

const statGroup = document.getElementById("stat-group");
const statGrowth = document.getElementById("stat-growth");
const statPrice = document.getElementById("stat-price");
const statSkin1 = document.getElementById("stat-skin1");
const statSkin2 = document.getElementById("stat-skin2");
const statFotinha = document.getElementById("stat-fotinha");
const statCorgema = document.getElementById("stat-corgema");
const statCormoeda = document.getElementById("stat-cormoeda");

const dinoHp = document.getElementById("hp-dino");
const dinoDano = document.getElementById("dmg-dino");
const dinoPeso = document.getElementById("peso-dino");
const dinoFratura = document.getElementById("frat-dino");
const dinoSangramento = document.getElementById("sangra-dino");
const dinoNata = document.getElementById("nata-dino");
const dinoVelo = document.getElementById("velo-dino");
const dinoVoo = document.getElementById("voo-dino");

const passivesContainer = document.getElementById("passives-container");
const activesContainer = document.getElementById("actives-container");
const paleoButton = document.getElementById("btn-paleo-modal");

const imgModal = document.getElementById("imgModal");
const imgModalContent = document.getElementById("imgModalContent");

const filterSelect = document.getElementById("filtroAtributo");
const searchInput = document.getElementById("dinoEspecifico");

let dinoDatabase = {};

const dinoDatabaseReady = (window.dinoDatabaseReady || fetch("data/dinoDataBase.json").then(response => response.json()))
    .then(data => {
        dinoDatabase = data;
        return data;
    })
    .catch(error => {
        console.error("Erro ao carregar a base de dados dos dinossauros:", error);
        return {};
    });

window.dinoDatabaseReady = dinoDatabaseReady;

function normalizeText(value = "") {
    return String(value)
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase()
        .trim();
}

function getDinoStatus(dinoKey) {
    if (typeof dinosData === "undefined" || !Array.isArray(dinosData)) return null;

    const normalizedKey = normalizeText(dinoKey);
    return dinosData.find(dino => normalizeText(dino.nome).split(/\s+/)[0] === normalizedKey) || null;
}

function createSkillHTML({ icon = "img/logo.png", title = "Habilidade", desc = "", effect = null }) {
    const effectMarkup = effect != null && effect !== "null"
        ? `<div class="skill-effect"><strong></strong> ${effect}</div>`
        : "";

    return `
        <div class="skill-item">
            <img src="${icon}" class="skill-icon" alt="${title}">
            <div class="skill-text">
                <h5>${title}</h5>
                <p>${desc}</p>
            </div>
        </div>
        ${effectMarkup}`;
}

function fecharModal() {
    modal.style.display = "none";
}

function preencherStatusModal(dinoStatus) {
    const setText = (element, value) => {
        element.innerText = value ?? "N/A";
    };

    setText(dinoHp, dinoStatus?.hp);
    setText(dinoDano, dinoStatus?.dano_base);
    setText(dinoPeso, dinoStatus?.peso);
    setText(dinoFratura, dinoStatus ? `${dinoStatus.fratura}%` : "N/A");
    setText(dinoSangramento, dinoStatus ? `${dinoStatus.sangramento}%` : "N/A");
    setText(dinoNata, dinoStatus?.vel_agua);
    setText(dinoVelo, dinoStatus?.vel_terra);
    setText(dinoVoo, dinoStatus?.vel_ar ?? "N/A");
}

function preencherModalDino(dinoKey, data) {
    modalName.innerHTML = data.fullName || data.shortName || dinoKey;
    modalImg.src = data.image || "img/logo.png";
    modalImg.alt = data.shortName || dinoKey;
    modalDiet.innerText = data.diet || "";

    statGroup.innerText = data.stats?.group ?? "N/A";
    statGrowth.innerText = data.stats?.growth ?? "N/A";
    statPrice.innerText = data.stats?.price ?? "N/A";
    statSkin1.innerText = data.stats?.skin1 ?? "N/A";
    statSkin2.innerText = data.stats?.skin2 ?? "N/A";
    statFotinha.innerText = data.stats?.fotinha ?? "N/A";
    statCorgema.innerText = data.stats?.corgema ?? "N/A";
    statCormoeda.innerText = data.stats?.cormoeda ?? "N/A";

    preencherStatusModal(getDinoStatus(dinoKey));

    passivesContainer.innerHTML = (data.passives || []).map(createSkillHTML).join("");
    activesContainer.innerHTML = (data.actives || []).map(createSkillHTML).join("");

    if (paleoButton) {
        paleoButton.href = `https://pt.wikipedia.org/wiki/${encodeURIComponent(data.shortName || dinoKey)}`;
        paleoButton.target = "_blank";
        paleoButton.rel = "noopener noreferrer";
    }

    modal.style.display = "block";
}

async function abrirModalDino(dinoKey) {
    if (!dinoKey) return;

    if (!Object.keys(dinoDatabase).length) {
        await dinoDatabaseReady;
    }

    const data = dinoDatabase[dinoKey];

    if (!data) return;

    preencherModalDino(dinoKey, data);
}

function abrirImagemDino(img) {
    imgModal.style.display = "flex";
    imgModalContent.src = img.src;
    imgModalContent.alt = img.alt || "Imagem ampliada";
}

function setActiveTab(button, buttonSelector, panelSelector) {
    const targetId = button.getAttribute("data-target");

    document.querySelectorAll(buttonSelector).forEach(tabButton => {
        const isActive = tabButton === button;
        tabButton.classList.toggle("active", isActive);
        tabButton.setAttribute("aria-selected", isActive ? "true" : "false");
    });

    document.querySelectorAll(panelSelector).forEach(panel => {
        const isActive = panel.id === targetId;
        panel.classList.toggle("active-content", isActive);
    });
}

function setupTabs(buttonSelector, panelSelector) {
    document.querySelectorAll(buttonSelector).forEach(button => {
        button.addEventListener("click", () => {
            setActiveTab(button, buttonSelector, panelSelector);
            window.applyGallerySearch?.(searchInput?.value || "");
        });
    });
}

function showGalleryView(view) {
    const sectionByView = {
        todos: document.getElementById("todos"),
        tier: document.getElementById("byTiers"),
        dieta: document.getElementById("byDiet")
    };

    Object.entries(sectionByView).forEach(([key, section]) => {
        if (!section) return;
        section.hidden = key !== view;
    });

    window.applyGallerySearch?.(searchInput?.value || "");
}

function focusHashTarget() {
    const hash = window.location.hash.substring(1);
    if (!hash) return;

    const targetElement = document.getElementById(hash);
    if (!targetElement) return;

    const parentTier = targetElement.closest(".tier-indicator");
    const parentDiet = targetElement.closest(".diet-indicator");

    if (parentTier) {
        filterSelect.value = "tier";
        showGalleryView("tier");
        const tierBtn = document.querySelector(`.tier-btn[data-target="${parentTier.id}"]`);
        if (tierBtn) setActiveTab(tierBtn, ".tier-btn", ".tier-indicator");
    } else if (parentDiet) {
        filterSelect.value = "dieta";
        showGalleryView("dieta");
        const dietBtn = document.querySelector(`.diet-btn[data-target="${parentDiet.id}"]`);
        if (dietBtn) setActiveTab(dietBtn, ".diet-btn", ".diet-indicator");
    } else {
        filterSelect.value = "todos";
        showGalleryView("todos");
    }

    setTimeout(() => {
        targetElement.scrollIntoView({ behavior: "smooth", block: "center" });
        const card = targetElement.querySelector(".card-raca");
        if (card) {
            abrirModalDino(card.dataset.dino);
        }
    }, 150);
}

document.addEventListener("click", event => {
    const img = event.target.closest(".img-dino");

    if (img) {
        abrirImagemDino(img);
        return;
    }

    const card = event.target.closest(".card-raca");

    if (card) {
        abrirModalDino(card.dataset.dino);
    }
});

document.addEventListener("keydown", event => {
    const card = event.target.closest(".card-raca");

    if (!card || (event.key !== "Enter" && event.key !== " ")) return;

    event.preventDefault();
    abrirModalDino(card.dataset.dino);
});

if (closeBtn) {
    closeBtn.addEventListener("click", fecharModal);
}

modal.addEventListener("click", event => {
    if (event.target === modal) {
        fecharModal();
    }
});

if (imgModal) {
    imgModal.addEventListener("click", () => {
        imgModal.style.display = "none";
    });
}

document.addEventListener("DOMContentLoaded", async () => {
    setupTabs(".tier-btn", ".tier-indicator");
    setupTabs(".diet-btn", ".diet-indicator");

    filterSelect?.addEventListener("change", event => {
        showGalleryView(event.target.value);
    });

    searchInput?.addEventListener("input", event => {
        window.applyGallerySearch?.(event.target.value);
    });

    showGalleryView(filterSelect?.value || "todos");

    if (window.dinoCardsReady) {
        await window.dinoCardsReady;
    }

    window.applyGallerySearch?.(searchInput?.value || "");
    focusHashTarget();
});

document.addEventListener("keydown", event => {
    if (event.key === "Escape") {
        if (modal.style.display === "block") fecharModal();
        if (imgModal?.style.display === "flex") imgModal.style.display = "none";
    }
});
