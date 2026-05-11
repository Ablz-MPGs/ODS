document.addEventListener('DOMContentLoaded', () => {
    const tabela = document.querySelector("table");
    if (tabela) {
        const tbody = tabela.querySelector("tbody");
        if (tbody) {
            const linhas = Array.from(tbody.querySelectorAll("tr"));
            linhas.forEach((linha, index) => {
                linha.setAttribute("data-index-original", index);
            });
            
            const container = tabela.closest('.table-container');
            if (container && container.classList.contains('hidden')) {
                container.classList.remove('hidden');
            }
        }
    }
});

function aplicarOrdenacao() {
    const selecao = document.getElementById("criterio").value;
    const ordemDecrescente = document.getElementById("toggleOrdem").checked;
    const textoOrdem = document.getElementById("textoOrdem");
    
    const tabela = document.querySelector("table");
    if (!tabela) return;
    
    const tbody = tabela.querySelector("tbody");
    if (!tbody) return;
    
    const linhas = Array.from(tbody.querySelectorAll("tr"));

    if (textoOrdem) {
        textoOrdem.textContent = ordemDecrescente ? "Decrescente" : "Crescente";
    }

    const partes = selecao.split('-');
    const colunaIndex = parseInt(partes[0]);
    const subTipo = partes[1]; 

    linhas.sort((a, b) => {
        if (colunaIndex === 7) {
            const attrA = a.getAttribute("data-index-original");
            const attrB = b.getAttribute("data-index-original");
            const indexA = attrA !== null ? parseInt(attrA) : 0;
            const indexB = attrB !== null ? parseInt(attrB) : 0;
            return !ordemDecrescente ? indexA - indexB : indexB - indexA;
        }

        const cellA = a.cells[colunaIndex];
        const cellB = b.cells[colunaIndex];
        
        let valorA = cellA ? cellA.textContent.trim().toLowerCase() : "";
        let valorB = cellB ? cellB.textContent.trim().toLowerCase() : "";

        if (valorA === "n/a") return 1;
        if (valorB === "n/a") return -1;

        if (subTipo) {
            const recompensaA = valorA.split('/');
            const recompensaB = valorB.split('/');

            let numA, numB;

            if (subTipo === 'g') {
                numA = parseFloat(recompensaA[0]?.replace(/[^0-9.]/g, '')) || 0;
                numB = parseFloat(recompensaB[0]?.replace(/[^0-9.]/g, '')) || 0;
            } else {
                numA = parseFloat((recompensaA[1] || "0").replace(/[^0-9.]/g, '')) || 0;
                numB = parseFloat((recompensaB[1] || "0").replace(/[^0-9.]/g, '')) || 0;
            }
            return !ordemDecrescente ? numA - numB : numB - numA;
        }

        if (colunaIndex === 0) {
            return !ordemDecrescente ? valorA.localeCompare(valorB) : valorB.localeCompare(valorA);
        } 
        
        const numA = parseFloat(valorA.replace(/[^0-9.]/g, '')) || 0;
        const numB = parseFloat(valorB.replace(/[^0-9.]/g, '')) || 0;
        return !ordemDecrescente ? numA - numB : numB - numA;
    });

    linhas.forEach(linha => tbody.appendChild(linha));
    linhas.forEach(linha => {
        Array.from(linha.cells).forEach(celula => celula.classList.remove("coluna-brilho"));
    });

    if (colunaIndex !== 7) {
        linhas.forEach(linha => {
            if (linha.cells[colunaIndex]) {
                linha.cells[colunaIndex].classList.add("coluna-brilho");
            }
        });
    }
}