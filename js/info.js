document.addEventListener('DOMContentLoaded', () => {
    const headers = document.querySelectorAll('.tier-toggle');
    headers.forEach(header => {
        header.addEventListener('click', () => {
            header.classList.toggle('collapsed');
            const tableContainer = header.nextElementSibling;
            if (tableContainer?.classList.contains('table-container')) {
                tableContainer.classList.toggle('hidden');
            }
        });
    });

    const searchInput = document.getElementById('searchInput');
    const tabelaCorpo = document.getElementById('tabela-corpo');
    
    if (searchInput && tabelaCorpo) {
        const originalRows = Array.from(tabelaCorpo.querySelectorAll('tr'));
        window.originalRowsData = originalRows.map(row => row.outerHTML);

        searchInput.addEventListener('input', function() {
            const termo = this.value.toLowerCase();
            const linhas = tabelaCorpo.querySelectorAll('tr');

            linhas.forEach(linha => {
                const nomeDino = linha.cells[0].textContent.toLowerCase();
                if (nomeDino.includes(termo)) {
                    linha.style.display = '';
                } else {
                    linha.style.display = 'none';
                }
            });
        });
    }

    const tabelaLancamento = document.getElementById('tabela-lancamento');
    if (tabelaLancamento) {
        fetch('data/dinoDataBase.json')
            .then(res => res.json())
            .then(data => {
                const lancamentos = Object.entries(data).map(([nome, info]) => {
                    return { nome, release: info.release };
                });
                
                lancamentos.sort((a, b) => {
                    const [diaA, mesA, anoA] = a.release.split(' / ');
                    const [diaB, mesB, anoB] = b.release.split(' / ');
                    const dataA = new Date(`${anoA}-${mesA}-${diaA}`);
                    const dataB = new Date(`${anoB}-${mesB}-${diaB}`);
                    return dataB - dataA;
                });

                tabelaLancamento.innerHTML = lancamentos.map(item => `<tr><td>${item.nome}</td><td>${item.release}</td></tr>`).join('');
            })
            .catch(err => console.error("Erro ao carregar dados de lançamento:", err));
    }
});

window.aplicarOrdenacao = function() {
    const criterio = document.getElementById('criterio').value;
    const toggleOrdem = document.getElementById('toggleOrdem').checked;
    const textoOrdem = document.getElementById('textoOrdem');
    const tabelaCorpo = document.getElementById('tabela-corpo');
    if (!tabelaCorpo) return;  

    textoOrdem.textContent = toggleOrdem ? 'Decrescente' : 'Crescente';

    if (criterio === '7') {
        if (window.originalRowsData) {
            tabelaCorpo.innerHTML = window.originalRowsData.join('');
        }
        const searchInput = document.getElementById('searchInput');
        if (searchInput) searchInput.dispatchEvent(new Event('input'));
        return;
    }

    const linhas = Array.from(tabelaCorpo.querySelectorAll('tr'));

    linhas.sort((a, b) => {
        let valA = extrairValor(a, criterio);
        let valB = extrairValor(b, criterio);

        if (criterio === '0') {
            return toggleOrdem ? valB.localeCompare(valA) : valA.localeCompare(valB);
        } else {
            return toggleOrdem ? valB - valA : valA - valB;
        }
    });

    linhas.forEach(linha => tabelaCorpo.appendChild(linha));
};

function extrairValor(row, criterio) {
    const cells = row.cells;
    const parseK = (val) => val.toLowerCase().includes('k') ? parseFloat(val) * 1000 : parseFloat(val);

    switch (criterio) {
        case '0': return cells[0].textContent.trim(); // Nome
        case '1': return parseFloat(cells[1].textContent) || 0;
        case '2-g': return parseFloat(cells[2].textContent.split('/')[0]) || 0; 
        case '2-k': return parseK(cells[2].textContent.split('/')[1] || '0'); 
        case '3': return parseFloat(cells[3].textContent) || 0; 
        case '4': return parseFloat(cells[4].textContent) || 0; 
        case '5-g': return parseFloat(cells[5].textContent.split('/')[0]) || 0; 
        case '5-k': return parseK(cells[5].textContent.split('/')[1] || '0'); 
        case '6': return parseFloat(cells[6].textContent) || 0; 
        default: return 0;
    }
}
