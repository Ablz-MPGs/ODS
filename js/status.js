console.log("O script status.js foi carregado com sucesso!");

document.addEventListener('click', function(e) {
    if (window.location.hash) {
        if (!e.target.closest('a')) {
            // Remove o hash da URL se clicar fora de um link, 
            // limpando o destaque (animação CSS :target) da linha
            history.pushState("", document.title, window.location.pathname + window.location.search);
        }
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const headers = document.querySelectorAll('.tier-toggle');

    // Lógica para abrir/fechar as tabelas ao clicar no título
    headers.forEach(header => {
        header.addEventListener('click', () => {
            header.classList.toggle('collapsed');
            const tableContainer = header.nextElementSibling;

            if (tableContainer && tableContainer.classList.contains('table-container')) {
                tableContainer.classList.toggle('hidden');
            }
        });
    });

    // --- NOVA LÓGICA: Abrir a tabela automaticamente baseada na URL ---
    const hash = window.location.hash; // Pega o ID da URL (ex: #trike)
    
    if (hash) {
        const targetRow = document.querySelector(hash); // Busca a linha (<tr>) do dinossauro
        
        if (targetRow) {
            // Encontra o container da tabela que envolve essa linha
            const tableContainer = targetRow.closest('.table-container');
            
            if (tableContainer) {
                // Remove a classe 'hidden' para mostrar a tabela
                tableContainer.classList.remove('hidden');
                
                // Encontra o título (h2) acima da tabela e ajusta a setinha
                const header = tableContainer.previousElementSibling;
                if (header && header.classList.contains('tier-toggle')) {
                    header.classList.remove('collapsed');
                }

                // Dá um pequeno atraso para o navegador renderizar a tabela aberta 
                // e então rola a tela suavemente até o dinossauro
                setTimeout(() => {
                    targetRow.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }, 150);
            }
        }
    }
});