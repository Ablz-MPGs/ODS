document.addEventListener('click', (e) => {
    if (window.location.hash && e.target && !e.target.closest('a')) {
        history.replaceState(null, '', window.location.pathname + window.location.search);
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const headers = document.querySelectorAll('.tier-toggle');

    headers.forEach(header => {
        const toggleTier = () => {
            header.classList.toggle('collapsed');
            const tableContainer = header.nextElementSibling;

            if (tableContainer?.classList.contains('table-container')) {
                const isHidden = tableContainer.classList.toggle('hidden');
                header.setAttribute('aria-expanded', String(!isHidden));
            }
        };

        header.addEventListener('click', toggleTier);
        header.addEventListener('keydown', (event) => {
            if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault();
                toggleTier();
            }
        });
    });

    const hash = window.location.hash; 
    
    if (hash && /^#[a-zA-Z0-9_-]+$/.test(hash)) {
        try {
            const targetRow = document.querySelector(hash); 
            
            if (targetRow) {
                const tableContainer = targetRow.closest('.table-container');
                
                if (tableContainer) {
                    tableContainer.classList.remove('hidden');
                    
                    const header = tableContainer.previousElementSibling;
                    if (header?.classList.contains('tier-toggle')) {
                        header.classList.remove('collapsed');
                        header.setAttribute('aria-expanded', 'true');
                    }
                    
                    setTimeout(() => {
                        targetRow.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    }, 150);
                }
            }
        } catch (error) {
            console.warn("Hash de URL inválido ou não encontrado:", hash);
        }
    }
});

const DEFESA_MULTIPLICADORES = {
    1: 0.80,
    2: 1.00,
    3: 1.20
};

function calcularDano(idAtacante, idAlvo, tipoDefesa) {
    const atacante = dinosData[idAtacante];
    const alvo = dinosData[idAlvo];

    if (!atacante || !alvo) {
        throw new Error("Dinossauro não encontrado na base de dados.");
    }

    const proporcaoPeso = atacante.peso / alvo.peso;
    const multiplicadorFinal = Math.max(0.75, proporcaoPeso);
    const danoBruto = atacante.dano_base * multiplicadorFinal;
    
    const multiplicadorDefesa = DEFESA_MULTIPLICADORES[tipoDefesa];
    if (multiplicadorDefesa === undefined) {
        throw new Error("Valor de defesa inválido.");
    }

    return Math.round(danoBruto * multiplicadorDefesa);
}

function defender(botaoClicado) {
    const selecionado = document.querySelector('.alvo.active');
    if (selecionado) {
        selecionado.classList.remove('active');
    }
    botaoClicado.classList.add('active');
    
    atualizarInterface();
}

function inicializarInterface() {
    const selectA = document.getElementById('combat-species-a');
    const selectB = document.getElementById('combat-species-b');
    const resultsDiv = document.getElementById('results');
    
    if (!selectA || !selectB || !resultsDiv) {
        return;
    }

    if (typeof dinosData === 'undefined' || !Array.isArray(dinosData)) {
        console.error("Dados de dinossauros não encontrados. Verifique se data/data.js foi carregado corretamente.");
        resultsDiv.innerHTML = '<div class="error">Dados de dinossauros não encontrados.</div>';
        return;
    }

    const optionsHtml = dinosData.map((dino, index) => {
        let nick = dino.nome.split(" ")[0];
        
        return `<option value="${index}">${nick}</option>`;
    }).join('');

    selectA.innerHTML = optionsHtml;
    selectB.innerHTML = optionsHtml;
    selectB.selectedIndex = Math.min(1, selectB.options.length - 1);

    selectA.addEventListener('change', atualizarInterface);
    selectB.addEventListener('change', atualizarInterface);
    
    atualizarInterface();
}

function atualizarInterface() {
    const selectA = document.getElementById('combat-species-a');
    const selectB = document.getElementById('combat-species-b');
    const botaoAtivo = document.querySelector('.alvo.active');
    const resultsDiv = document.getElementById('results');

    if (!selectA || !selectB || !resultsDiv) {
        return;
    }

    const idAtacante = selectA.value;
    const idAlvo = selectB.value;
    const tipoDefesa = botaoAtivo ? parseInt(botaoAtivo.value) : 1;
    
    if (!idAtacante || !idAlvo) return;

    try {
        const toma = calcularDano(idAtacante, idAlvo, tipoDefesa);
        const atacante = dinosData[idAtacante];
        const alvo = dinosData[idAlvo];
        
        const nomeAtacante = atacante.nome;
        const nomeAlvo = alvo.nome;

        resultsDiv.innerHTML = `
            <div class="result-row">
                <span class="fw-bold">${nomeAtacante}</span> <span> Dano base ${atacante.dano_base}</span>
            </div>
            <div class="result-row">
                <span class="fw-bold">${nomeAlvo}</span> <span>Dano recebido ${toma}</span>
            </div>
        `;
    } catch (e) {
        console.error(`Erro ao atualizar interface: ${e.message}`);
        resultsDiv.innerHTML = `<div class="error">Erro: ${e.message}</div>`;
    }
}

document.addEventListener('DOMContentLoaded', inicializarInterface);
