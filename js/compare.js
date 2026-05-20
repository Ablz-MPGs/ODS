const speciesASelect = document.getElementById("species-a");
const speciesBSelect = document.getElementById("species-b");
const summaryGrid = document.getElementById("summary-grid");
const comparisonBody = document.getElementById("comparison-body");
const skillsGrid = document.getElementById("skills-grid");
const tableSpeciesA = document.getElementById("table-species-a");
const tableSpeciesB = document.getElementById("table-species-b");

const attributes = [
    { key: "tier", label: "Tier" },
    { key: "peso", label: "Peso de combate" },
    { key: "hp", label: "HP" },
    { key: "dano_base", label: "Dano base" },
    { key: "fratura", label: "Fratura", suffix: "%" },
    { key: "sangramento", label: "Sangramento", suffix: "%" },
    { key: "vel_terra", label: "Velocidade em terra" },
    { key: "vel_agua", label: "Velocidade na água" },
    { key: "vel_ar", label: "Velocidade no ar" },
    { key: "crescimento", label: "Crescimento", suffix: " min" },
];

const attrbutesout = [       
    { key: "slots", label: "Slots" },
    { key: "preco", label: "Preço" },
    { key: "skin1", label: "Skin moedas" },
    { key: "skin2", label: "Skin gemas" },
    { key: "fotinha", label: "Fotinha" },
    { key: "cormoeda", label: "Cor moedas" },
    { key: "corgema", label: "Cor gemas" }
];

function formatValue(value, suffix = "") {
    if (value === null || value === undefined || value === "") {
        return "N/A";
    }

    if (typeof value === "number") {
        return `${value.toLocaleString("pt-BR")}${suffix}`;
    }

    return `${value}${suffix}`;
}

function getShortName(name) {
    return name.split(" ")[0];
}

function createGroupedOptions(selectElement) {
    selectElement.innerHTML = "";

    for (let tier = 5; tier >= 1; tier -= 1) {
        const tierSpecies = dinosData
            .filter(dino => dino.tier === tier)
            .sort((a, b) => a.nome.localeCompare(b.nome, "pt-BR"));

        if (!tierSpecies.length) continue;

        const group = document.createElement("optgroup");
        group.label = `Tier ${tier}`;

        tierSpecies.forEach(dino => {
            const option = document.createElement("option");
            option.value = dino.nome;
            option.textContent = dino.nome;
            group.appendChild(option);
        });

        selectElement.appendChild(group);
    }
}

function findDino(name) {
    return dinosData.find(dino => dino.nome === name);
}

function createSummaryCard(dino) {
    const card = document.createElement("article");
    card.className = "species-summary";

    const title = document.createElement("h3");
    title.textContent = dino.nome;
    card.appendChild(title);

    const stats = document.createElement("div");
    stats.className = "summary-stats";

    [
        ["Tier", dino.tier],
        ["Dieta", dino.dieta],
        ["Slots", dino.slots],
        ["Crescimento", formatValue(dino.crescimento, " min")]
    ].forEach(([label, value]) => {
        const item = document.createElement("div");
        item.className = "summary-stat";

        const labelElement = document.createElement("span");
        labelElement.textContent = label;

        const valueElement = document.createElement("strong");
        valueElement.textContent = formatValue(value);

        item.append(labelElement, valueElement);
        stats.appendChild(item);
    });

    card.appendChild(stats);
    return card;
}

function createComparisonRow(attribute, dinoA, dinoB) {
    const valueA = dinoA[attribute.key];
    const valueB = dinoB[attribute.key];
    const row = document.createElement("tr");

    const labelCell = document.createElement("td");
    labelCell.textContent = attribute.label;

    const cellA = document.createElement("td");
    cellA.textContent = formatValue(valueA, attribute.suffix);

    const cellB = document.createElement("td");
    cellB.textContent = formatValue(valueB, attribute.suffix);

    const diffCell = document.createElement("td");

    if (typeof valueA === "number" && typeof valueB === "number") {
        const diff = valueA - valueB;
        const formattedDiff = formatValue(Math.abs(diff), attribute.suffix);

        if (diff > 0) {
            cellA.classList.add("winner");
            diffCell.textContent = `${getShortName(dinoA.nome)} +${formattedDiff}`;
            diffCell.className = "difference-positive";
        } else if (diff < 0) {
            cellB.classList.add("winner");
            diffCell.textContent = `${getShortName(dinoB.nome)} +${formattedDiff}`;
            diffCell.className = "difference-positive";
        } else {
            cellA.classList.add("tie");
            cellB.classList.add("tie");
            diffCell.textContent = "Empate";
            diffCell.className = "difference-neutral";
        }
    } else if (valueA === valueB) {
        cellA.classList.add("tie");
        cellB.classList.add("tie");
        diffCell.textContent = "Mesmo valor";
        diffCell.className = "difference-neutral";
    } else {
        diffCell.textContent = "Valores distintos";
        diffCell.className = "difference-neutral";
    }

    row.append(labelCell, cellA, cellB, diffCell);
    return row;
}

function createSkillSection(title, skills = []) {
    const fragment = document.createDocumentFragment();
    const heading = document.createElement("h4");
    heading.textContent = title;
    fragment.appendChild(heading);

    const list = document.createElement("div");
    list.className = "skill-list";

    if (!skills.length) {
        const empty = document.createElement("p");
        empty.className = "empty-skill";
        empty.textContent = "Sem habilidades cadastradas.";
        list.appendChild(empty);
    }

    skills.forEach(skill => {
        const card = document.createElement("article");
        card.className = "skill-card";

        const skillTitle = document.createElement("strong");
        skillTitle.textContent = skill.titulo;

        const description = document.createElement("p");
        description.textContent = skill.desc;

        card.append(skillTitle, description);
        list.appendChild(card);
    });

    fragment.appendChild(list);
    return fragment;
}

function createSkillColumn(dino) {
    const column = document.createElement("article");
    column.className = "skill-column";

    const title = document.createElement("h3");
    title.textContent = dino.nome;
    column.appendChild(title);
    column.appendChild(createSkillSection("Passivas", dino.habilidades?.passivas));
    column.appendChild(createSkillSection("Ativas", dino.habilidades?.ativas));

    return column;
}

function updateComparison() {
    const dinoA = findDino(speciesASelect.value);
    const dinoB = findDino(speciesBSelect.value);

    if (!dinoA || !dinoB) return;

    tableSpeciesA.textContent = dinoA.nome;
    tableSpeciesB.textContent = dinoB.nome;

    summaryGrid.innerHTML = "";
    summaryGrid.append(createSummaryCard(dinoA), createSummaryCard(dinoB));

    comparisonBody.innerHTML = "";
    attributes.forEach(attribute => {
        comparisonBody.appendChild(createComparisonRow(attribute, dinoA, dinoB));
    });

    skillsGrid.innerHTML = "";
    skillsGrid.append(createSkillColumn(dinoA), createSkillColumn(dinoB));
}

if (typeof dinosData !== "undefined" && Array.isArray(dinosData) && dinosData.length >= 2) {
    createGroupedOptions(speciesASelect);
    createGroupedOptions(speciesBSelect);

    speciesASelect.value = dinosData[0].nome;
    speciesBSelect.value = dinosData[1].nome;

    speciesASelect.addEventListener("change", updateComparison);
    speciesBSelect.addEventListener("change", updateComparison);

    updateComparison();
}
