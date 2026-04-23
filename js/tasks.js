function aplicarOrdenacao() {
    const selecao = document.getElementById("criterio").value;
    const ordemDecrescente = document.getElementById("toggleOrdem").checked;
    const textoOrdem = document.getElementById("textoOrdem");
    
    const tabela = document.querySelector("table");
    const tbody = tabela.querySelector("tbody");
    const linhas = Array.from(tbody.querySelectorAll("tr"));

    textoOrdem.textContent = ordemDecrescente ? "Decrescente" : "Crescente";

    const partes = selecao.split('-');
    const colunaIndex = parseInt(partes[0]);
    const subTipo = partes[1]; 

    linhas.sort((a, b) => {
        if (colunaIndex === 7) {
            const indexA = parseInt(a.getAttribute("data-index-original"));
            const indexB = parseInt(b.getAttribute("data-index-original"));
            return !ordemDecrescente ? indexA - indexB : indexB - indexA;
        }

        let valorA = a.cells[colunaIndex].textContent.trim().toLowerCase();
        let valorB = b.cells[colunaIndex].textContent.trim().toLowerCase();

        if (valorA === "n/a") return 1;
        if (valorB === "n/a") return -1;

        if (subTipo) {
            const recompensaA = valorA.split('/');
            const recompensaB = valorB.split('/');

            let numA, numB;

            if (subTipo === 'g') {
                numA = parseFloat(recompensaA[0].replace(/[^0-9.]/g, '')) || 0;
                numB = parseFloat(recompensaB[0].replace(/[^0-9.]/g, '')) || 0;
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