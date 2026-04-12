// Salva a ordem original das linhas assim que a página carregar
document.addEventListener("DOMContentLoaded", () => {
    const tbody = document.querySelector("table tbody");
    if (tbody) {
        const linhas = Array.from(tbody.querySelectorAll("tr"));
        linhas.forEach((linha, index) => {
            linha.setAttribute("data-index-original", index);
        });
    }
});

function aplicarOrdenacao() {
    const selecao = document.getElementById("criterio").value;
    const ordemDecrescente = document.getElementById("toggleOrdem").checked;
    const textoOrdem = document.getElementById("textoOrdem");
    
    const tabela = document.querySelector("table");
    const tbody = tabela.querySelector("tbody");
    const linhas = Array.from(tbody.querySelectorAll("tr"));

    textoOrdem.textContent = ordemDecrescente ? "Decrescente" : "Crescente";

    // Extrai o index da coluna e o sub-tipo (se houver g ou k)
    const partes = selecao.split('-');
    const colunaIndex = parseInt(partes[0]);
    const subTipo = partes[1]; // 'g' ou 'k'

    linhas.sort((a, b) => {
        // Lógica para a opção "Padrão" (valor 7)
        if (colunaIndex === 7) {
            const indexA = parseInt(a.getAttribute("data-index-original"));
            const indexB = parseInt(b.getAttribute("data-index-original"));
            return !ordemDecrescente ? indexA - indexB : indexB - indexA;
        }

        let valorA = a.cells[colunaIndex].textContent.trim().toLowerCase();
        let valorB = b.cells[colunaIndex].textContent.trim().toLowerCase();

        if (valorA === "n/a") return 1;
        if (valorB === "n/a") return -1;

        // Lógica específica para Recompensas (Ex: "5g / 1.65k")
        if (subTipo) {
            // Divide a string na barra "/"
            const recompensaA = valorA.split('/');
            const recompensaB = valorB.split('/');

            let numA, numB;

            if (subTipo === 'g') {
                // Pega a parte antes da barra e limpa o 'g'
                numA = parseFloat(recompensaA[0].replace(/[^0-9.]/g, '')) || 0;
                numB = parseFloat(recompensaB[0].replace(/[^0-9.]/g, '')) || 0;
            } else {
                // Pega a parte depois da barra (se existir) e limpa o 'k'
                numA = parseFloat((recompensaA[1] || "0").replace(/[^0-9.]/g, '')) || 0;
                numB = parseFloat((recompensaB[1] || "0").replace(/[^0-9.]/g, '')) || 0;
            }
            return !ordemDecrescente ? numA - numB : numB - numA;
        }

        // Lógica para Texto (Dinossauro)
        if (colunaIndex === 0) {
            return !ordemDecrescente ? valorA.localeCompare(valorB) : valorB.localeCompare(valorA);
        } 
        
        // Lógica para Números Simples (Tempo e XP)
        const numA = parseFloat(valorA.replace(/[^0-9.]/g, '')) || 0;
        const numB = parseFloat(valorB.replace(/[^0-9.]/g, '')) || 0;
        return !ordemDecrescente ? numA - numB : numB - numA;
    });

    linhas.forEach(linha => tbody.appendChild(linha));
}