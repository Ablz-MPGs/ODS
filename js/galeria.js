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

const btns = document.querySelectorAll(".btn-verificar");
const imgModal = document.getElementById("imgModal");
const imgModalContent = document.getElementById("imgModalContent");
const imgDinoElements = document.querySelectorAll(".img-dino");

const tabButtons = document.querySelectorAll(".tier-btn");
const tierContents = document.querySelectorAll(".tier-indicator");

const btnStatusModal = document.getElementById("btn-status-modal");

let dinoDatabase = {};

fetch("data/dinoDataBase.json")
    .then(response => response.json())
    .then(data => {
        dinoDatabase = data;
    })
    .catch(error => console.error("Erro ao carregar a base de dados dos dinossauros:", error));

function createSkillHTML({ icon = 'img/logo.png', title, desc, effect }) {
    if(effect != null) {
    return `
        <div class="skill-item">
            <img src="${icon}" class="skill-icon" alt="${title}">
            <div class="skill-text">
                <h5>${title}</h5>
                <p>${desc}</p>
            </div>            
        </div>
        <div class="skill-effect"><strong></strong> ${effect}</div>`;
    } else {
        return `
        <div class="skill-item">
            <img src="${icon}" class="skill-icon" alt="${title}">
            <div class="skill-text">
                <h5>${title}</h5>
                <p>${desc}</p>
            </div>            
        </div>`;
    }
}

function fecharModal() {
    modal.style.display = "none";
}

btns.forEach(btn => {
    btn.addEventListener("click", function () {
        const dinoKey = this.getAttribute("data-dino");
        const data = dinoDatabase[dinoKey];

        if (!data) return;

        modalName.innerHTML = data.fullName;
        modalImg.src = data.image;
        modalDiet.innerText = data.diet;

        statGroup.innerText = data.stats.group;
        statGrowth.innerText = data.stats.growth;
        statPrice.innerText = data.stats.price;
        statSkin1.innerText = data.stats.skin1;
        statSkin2.innerText = data.stats.skin2;
        statFotinha.innerText = data.stats.fotinha;
        statCorgema.innerText = data.stats.corgema;
        statCormoeda.innerText = data.stats.cormoeda;

        dinosData.forEach(dino => {
            if (dino.nome.split(" ")[0] === dinoKey) {
                dinoHp.innerText = dino.hp;
                dinoDano.innerText = dino.dano_base;
                dinoPeso.innerText = dino.peso;
                dinoFratura.innerText = dino.fratura;
                dinoSangramento.innerText = dino.sangramento;
                dinoNata.innerText = dino.crescimento;
                dinoVelo.innerText = dino.vel_terra;
                dinoVoo.innerText = dino.vel_ar;
            }
        });

        if (data.idStatus) {
            btnStatusModal.href = `status.html#${data.idStatus}`;
            btnStatusModal.style.display = "inline-block"; 
        } else {
            btnStatusModal.style.display = "none"; 
        }

        passivesContainer.innerHTML = data.passives.map(createSkillHTML).join('');
        activesContainer.innerHTML = data.actives.map(createSkillHTML).join('');

        modal.style.display = "block";
    });
});

closeBtn.addEventListener("click", fecharModal);

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

document.addEventListener('keydown', (event) => {
    if (event.key === "Escape") {
        if (modal.style.display === "block") fecharModal();
        if (imgModal.style.display === "flex") imgModal.style.display = "none";
    }
});
