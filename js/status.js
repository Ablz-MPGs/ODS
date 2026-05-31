document.addEventListener('click', (e) => {
    if (window.location.hash && e.target && !e.target.closest('a')) {
        history.replaceState(null, '', window.location.pathname + window.location.search);
    }
});

document.addEventListener('DOMContentLoaded', async () => {
    const container = document.getElementById('tabelas-container');
    if (container && typeof dinosData !== 'undefined') {
        let dinoDbStatus = {};
        try {
            const response = await fetch('data/dinoDataBase.json');
            dinoDbStatus = await response.json();
        } catch (error) {
            console.error("Erro ao carregar dinoDataBase.json:", error);
        }

        const tierMap = { 5: [], 4: [], 3: [], 2: [], 1: [] };
        
        dinosData.forEach(dino => {
            if (dino.tier && tierMap[dino.tier]) {
                tierMap[dino.tier].push(dino);
            }
        });

        let html = '';
        for (let tier = 5; tier >= 1; tier--) {
            if (tierMap[tier].length === 0) continue;

            html += `
            <h2 class="tier-toggle collapsed" tabindex="0" role="button" aria-expanded="false">Tier ${tier}<span class="arrow"></span></h2>
            <div class="table-container hidden">
                <table>
                    <thead>
                        <tr class="head">
                            <th>Nome</th>
                            <th>HP</th>
                            <th>Dano base</th>
                            <th>Fratura</th>
                            <th>Sangramento</th>
                            <th>Velocidade: terra</th>
                            <th>Velocidade: água</th>
                            <th>Velocidade: ar</th>
                        </tr>
                    </thead>
                    <tbody>`;

            tierMap[tier].forEach(dino => {
                const dbKey = dino.nome.split(" ")[0];
                const info = dinoDbStatus[dbKey];
                const idStatus = info && info.idStatus ? info.idStatus : dbKey.toLowerCase();
                
                const dispHp = dino.hp || 'N/A';
                const dispDano = dino.dano_base || 'N/A';
                const dispFratura = dino.fratura !== undefined && dino.fratura !== null ? `${dino.fratura}%` : '0%';
                const dispSangramento = dino.sangramento !== undefined && dino.sangramento !== null ? `${dino.sangramento}%` : '0%';
                const dispVelTerra = dino.vel_terra || 'N/A';
                const dispVelAgua = dino.vel_agua || 'N/A';
                const dispVelAr = dino.vel_ar || 'N/A';

                html += `
                        <tr id="${idStatus}">
                            <td><a href="galeria.html#${idStatus}" class="dino-link">${dino.nome}</a></td>
                            <td>${dispHp}</td>
                            <td>${dispDano}</td>
                            <td>${dispFratura}</td>
                            <td>${dispSangramento}</td>
                            <td>${dispVelTerra}</td>
                            <td>${dispVelAgua}</td>
                            <td>${dispVelAr}</td>
                        </tr>`;
            });

            html += `
                    </tbody>
                </table>
            </div>`;
        }
        
        container.innerHTML = html;

        // Re-attach toggle events
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
    }

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

const NOMES_ATAQUE = {
    1: 'Dano base',
    2: 'Skill 1',
    3: 'Skill 2'
};

const NOMES_DEFESA = {
    1: 'Cauda',
    2: 'Corpo',
    3: 'Cabeca'
};

function ehDanoValido(valor) {
    return typeof valor === 'number' && Number.isFinite(valor) && valor > 0;
}

function obterDanoAtaque(atacante, tipoAtaque) {
    const ativas = atacante.ativas || {};
    const ATAQUE_DANO = {
        1: atacante.dano_base,
        2: ativas.skill1,
        3: ativas.skill2
    };

    const avisos = [];
    let tipoUsado = tipoAtaque;
    let dano = ATAQUE_DANO[tipoAtaque];

    if (ehDanoValido(dano)) {
        return {
            dano,
            tipoUsado,
            nomeAtaque: NOMES_ATAQUE[tipoUsado],
            avisos
        };
    }

    if (tipoAtaque === 1) {
        throw new Error("Dano base do atacante nao encontrado.");
    }

    const outroTipoAtiva = tipoAtaque === 2 ? 3 : 2;
    const danoOutraAtiva = ATAQUE_DANO[outroTipoAtiva];

    if (ehDanoValido(danoOutraAtiva)) {
        tipoUsado = outroTipoAtiva;
        dano = danoOutraAtiva;
        avisos.push(`${NOMES_ATAQUE[tipoAtaque]} nao possui dano cadastrado; usando ${NOMES_ATAQUE[tipoUsado]}.`);
    } else if (ehDanoValido(ATAQUE_DANO[1])) {
        tipoUsado = 1;
        dano = ATAQUE_DANO[1];
        avisos.push(`${NOMES_ATAQUE[tipoAtaque]} nao possui dano cadastrado; nenhuma ativa com dano foi encontrada, usando dano base.`);
    } else {
        throw new Error("Nenhum dano valido foi encontrado para o atacante.");
    }

    return {
        dano,
        tipoUsado,
        nomeAtaque: NOMES_ATAQUE[tipoUsado],
        avisos
    };
}

function obterTipoDefesaPorClasse(alvo, tipoDefesa) {
    const classe = Number(alvo.classe);
    const avisos = [];
    let tipoUsado = tipoDefesa;

    if (classe === 5 && tipoDefesa !== 2) {
        tipoUsado = 2;
        avisos.push("Esta espécie não sofre alteração de dano na cauda e cabeça; usando dano no corpo.");
    } else if (classe === 4 && tipoDefesa === 1) {
        tipoUsado = 2;
        avisos.push("Esta espécie não sofre alteração de dano na cauda; usando dano no corpo.");
    } else if (classe === 3 && tipoDefesa === 3) {
        tipoUsado = 2;
        avisos.push("Esta espécie não sofre alteração de dano na cabeca; usando dano no corpo.");
    }

    return {
        tipoUsado,
        multiplicador: DEFESA_MULTIPLICADORES[tipoUsado],
        nomeDefesa: NOMES_DEFESA[tipoUsado],
        avisos
    };
}

function calcularDano(idAtacante, idAlvo, tipoDefesa, tipoAtaque) {
    const atacante = dinosData[idAtacante];
    const alvo = dinosData[idAlvo];

    if (!atacante || !alvo) {
        throw new Error("Dinossauro não encontrado na base de dados.");
    }

    const ataque = obterDanoAtaque(atacante, tipoAtaque);
    const defesa = obterTipoDefesaPorClasse(alvo, tipoDefesa);

    if (defesa.multiplicador === undefined) {
        throw new Error("Valor de defesa invalido.");
    }

    const proporcaoPeso = atacante.peso / alvo.peso;
    const multiplicadorFinal = Math.max(0.75, proporcaoPeso);
    const danoBruto = ataque.dano * multiplicadorFinal;
    
    return {
        dano: Math.round(danoBruto * defesa.multiplicador),
        danoAtaque: ataque.dano,
        tipoAtaqueUsado: ataque.tipoUsado,
        nomeAtaque: ataque.nomeAtaque,
        tipoDefesaUsado: defesa.tipoUsado,
        nomeDefesa: defesa.nomeDefesa,
        avisos: [...ataque.avisos, ...defesa.avisos]
    };
}

function defender(botaoClicado) {
    const selecionado = document.querySelector('.alvo.active');
    if (selecionado) {
        selecionado.classList.remove('active');
    }
    botaoClicado.classList.add('active');
    localStorage.setItem('combat_tipoDefesa', botaoClicado.value);

    atualizarInterface();
}

function atacar(botaoClicado) {
    const selecionado = document.querySelector('.atacante.active');
    if (selecionado) {
        selecionado.classList.remove('active');
    }
    botaoClicado.classList.add('active');
    localStorage.setItem('combat_tipoAtaque', botaoClicado.value);
    
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

    // Recuperação de dados do Local Storage
    const savedSpeciesA = localStorage.getItem('combat_speciesA');
    const savedSpeciesB = localStorage.getItem('combat_speciesB');
    const savedTipoAtaque = localStorage.getItem('combat_tipoAtaque');
    const savedTipoDefesa = localStorage.getItem('combat_tipoDefesa');

    if (savedSpeciesA !== null) selectA.value = savedSpeciesA;
    if (savedSpeciesB !== null) {
        selectB.value = savedSpeciesB;
    } else {
        selectB.selectedIndex = Math.min(1, selectB.options.length - 1);
    }

    if (savedTipoAtaque) {
        document.querySelectorAll('.atacante').forEach(btn => {
            btn.classList.toggle('active', btn.value === savedTipoAtaque);
        });
    }

    if (savedTipoDefesa) {
        document.querySelectorAll('.alvo').forEach(btn => {
            btn.classList.toggle('active', btn.value === savedTipoDefesa);
        });
    }

    selectA.addEventListener('change', () => {
        localStorage.setItem('combat_speciesA', selectA.value);
        atualizarInterface();
    });
    selectB.addEventListener('change', () => {
        localStorage.setItem('combat_speciesB', selectB.value);
        atualizarInterface();
    });
    
    atualizarInterface();
}

function atualizarInterface() {
    const selectA = document.getElementById('combat-species-a');
    const selectB = document.getElementById('combat-species-b');
    const botaoAtivo = document.querySelector('.alvo.active');
    const botaoAtiva = document.querySelector('.atacante.active');
    const resultsDiv = document.getElementById('results');

    if (!selectA || !selectB || !resultsDiv) {
        return;
    }

    const idAtacante = selectA.value;
    const idAlvo = selectB.value;
    const tipoDefesa = botaoAtivo ? parseInt(botaoAtivo.value) : 1;

    const tipoAtaque = botaoAtiva ? parseInt(botaoAtiva.value) : 1;
    
    if (!idAtacante || !idAlvo) return;

    try {
        const resultado = calcularDano(idAtacante, idAlvo, tipoDefesa, tipoAtaque);
        const atacante = dinosData[idAtacante];
        const alvo = dinosData[idAlvo];
        
        const nomeAtacante = atacante.nome;
        const nomeAlvo = alvo.nome;
        const avisosHtml = resultado.avisos.length
            ? `<div class="result-row combat-warning">${resultado.avisos.join('<br>')}</div>`
            : '';



        resultsDiv.innerHTML = `
            <div class="result-row">
                <span class="fw-bold">${nomeAtacante}</span> <span>${resultado.nomeAtaque}: ${resultado.danoAtaque}</span>
            </div>
            <div class="result-row">
                <span class="fw-bold">${nomeAlvo}</span> <span>Dano recebido em ${resultado.nomeDefesa}: ${resultado.dano}</span>
            </div>
            ${avisosHtml}
        `;
    } catch (e) {
        console.error(`Erro ao atualizar interface: ${e.message}`);
        resultsDiv.innerHTML = `<div class="error">Erro: ${e.message}</div>`;
    }
}

document.addEventListener('DOMContentLoaded', inicializarInterface);
