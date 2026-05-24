document.addEventListener('DOMContentLoaded', () => {
    const selectA = document.getElementById('species-a');
    const selectB = document.getElementById('species-b');
    let dinoDb = null;

    // Inicializa a ferramenta de comparação
    async function initCompare() {
        if (!selectA || !selectB) return;

        try {
            // Busca o JSON com as habilidades (ajuste o caminho se necessário)
            const response = await fetch('data/dinoDataBase.json');
            dinoDb = await response.json();
        } catch (error) {
            console.error("Erro ao carregar dinoDataBase.json. Certifique-se de estar rodando em um servidor local.", error);
        }

        // Popula os selects com os dinossauros de data.js
        const optionsHtml = dinosData.map((dino, index) => {
            return `<option value="${index}">${dino.nome}</option>`;
        }).join('');

        selectA.innerHTML = optionsHtml;
        selectB.innerHTML = optionsHtml;

        // Define um dinossauro diferente para o Select B por padrão
        if (selectB.options.length > 1) {
            selectB.selectedIndex = 1;
        }

        // Adiciona os eventos de mudança
        selectA.addEventListener('change', renderComparison);
        selectB.addEventListener('change', renderComparison);

        // Renderiza a tela inicial
        renderComparison();
    }

    // Função principal que atualiza a interface
    function renderComparison() {
        const idA = selectA.value;
        const idB = selectB.value;
        
        if (!idA || !idB) return;

        const dinoA = dinosData[idA];
        const dinoB = dinosData[idB];

        // Pega a primeira palavra do nome para buscar no dinoDataBase.json
        const dbKeyA = dinoA.dbKey || dinoA.nome.split(" ")[0];
        const dbKeyB = dinoB.dbKey || dinoB.nome.split(" ")[0];

        const infoA = dinoDb ? dinoDb[dbKeyA] : null;
        const infoB = dinoDb ? dinoDb[dbKeyB] : null;

        updateSummary(dinoA, dinoB, infoA, infoB);
        updateStatsTable(dinoA, dinoB);
        updateSkills(dbKeyA, dbKeyB, infoA, infoB);
    }

    // 1. Atualiza o grid de resumo (Tier, Dieta, Peso, Crescimento)
    function updateSummary(dinoA, dinoB, infoA, infoB) {
        const grid = document.getElementById('summary-grid');
        
        document.getElementById('table-species-a').textContent = dinoA.nome.split(" ")[0];
        document.getElementById('table-species-b').textContent = dinoB.nome.split(" ")[0];

        grid.innerHTML = `
            ${createSummaryCard(dinoA, infoA)}
            ${createSummaryCard(dinoB, infoB)}
        `;
    }

    function createSummaryCard(dino, info) {
        const diet = info ? info.diet : dino.dieta;
        return `
            <div class="species-summary">
                <h3>${dino.nome}</h3>
                <div class="summary-stats">
                    <div class="summary-stat"><span>Tier</span><strong>${dino.tier}</strong></div>
                    <div class="summary-stat"><span>Dieta</span><strong>${diet}</strong></div>
                    <div class="summary-stat"><span>Peso de combate</span><strong>${dino.peso}</strong></div>
                    <div class="summary-stat"><span>Crescimento</span><strong>${dino.crescimento} min</strong></div>
                </div>
            </div>
        `;
    }

    // 2. Atualiza a tabela de atributos comparando valores
    function updateStatsTable(dinoA, dinoB) {
        const tbody = document.getElementById('comparison-body');
        const statsToCompare = [
            { label: 'HP', key: 'hp' },
            { label: 'Dano Base', key: 'dano_base' },
            { label: 'Fratura (%)', key: 'fratura' },
            { label: 'Sangramento (%)', key: 'sangramento' },
            { label: 'Velocidade (Terra)', key: 'vel_terra' },
            { label: 'Velocidade (Água)', key: 'vel_agua' },
            { label: 'Velocidade (Ar)', key: 'vel_ar' }
        ];

        tbody.innerHTML = statsToCompare.map(stat => {
            const valA = dinoA[stat.key] || 0;
            const valB = dinoB[stat.key] || 0;

            let classA = '', classB = '';
            let diffText = '';

            // Lógica para definir o vencedor do atributo
            if (valA > valB) {
                classA = 'winner';
                diffText = `${dinoA.nome} (+${valA - valB})`;
            } else if (valB > valA) {
                classB = 'winner';
                diffText = `${dinoB.nome} (+${valB - valA})`;
            } else {
                classA = 'tie';
                classB = 'tie';
                diffText = 'Empate';
            }

            // Tratamento visual para valores zero ou nulos
            const dispA = valA === 0 ? 'N/A' : valA;
            const dispB = valB === 0 ? 'N/A' : valB;

            return `
                <tr>
                    <td>${stat.label}</td>
                    <td class="${classA}">${dispA}</td>
                    <td class="${classB}">${dispB}</td>
                    <td class="${valA !== valB ? 'difference-positive' : 'difference-neutral'}">${diffText}</td>
                </tr>
            `;
        }).join('');
    }

    // 3. Atualiza os cards de habilidades
    function updateSkills(nomeA, nomeB, infoA, infoB) {
        const grid = document.getElementById('skills-grid');
        grid.innerHTML = `
            ${createSkillColumn(nomeA, infoA)}
            ${createSkillColumn(nomeB, infoB)}
        `;
    }

    function createSkillColumn(nome, info) {
        if (!info) {
            return `
                <div class="skill-column">
                    <h3>${nome}</h3>
                    <p class="empty-skill">Habilidades não encontradas na base de dados.</p>
                </div>
            `;
        }

        const buildCard = (s) => `
            <div class="skill-card">
                <strong>${s.title}</strong>
                <p>${s.desc}</p>
                ${s.effect && s.effect !== "null" ? `<p class="text-muted"><small>Efeito: ${s.effect}</small></p>` : ''}
            </div>
        `;

        const passivesHtml = (info.passives && info.passives.length) 
            ? info.passives.map(buildCard).join('') 
            : '<span class="empty-skill">Nenhuma passiva disponível</span>';

        const activesHtml = (info.actives && info.actives.length) 
            ? info.actives.map(buildCard).join('') 
            : '<span class="empty-skill">Nenhuma ativa disponível</span>';

        return `
            <div class="skill-column">
                <h3>${info.fullName ? info.fullName.replace('<br>', ' ') : nome}</h3>
                <h4>Passivas</h4>
                <div class="skill-list">${passivesHtml}</div>
                <h4>Ativas</h4>
                <div class="skill-list">${activesHtml}</div>
            </div>
        `;
    }
    // Inicia o script
    initCompare();
});