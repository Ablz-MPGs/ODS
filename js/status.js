console.log("O script status.js foi carregado com sucesso!");

// Remove o hash da URL ao clicar fora de um link para "limpar" o destaque,
// usando replaceState para não sujar o histórico de navegação do usuário.
document.addEventListener('click', (e) => {
    if (window.location.hash && e.target && !e.target.closest('a')) {
        history.replaceState(null, '', window.location.pathname + window.location.search);
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const headers = document.querySelectorAll('.tier-toggle');

    // Lógica para alternar a exibição das tabelas de tiers
    headers.forEach(header => {
        header.addEventListener('click', () => {
            header.classList.toggle('collapsed');
            const tableContainer = header.nextElementSibling;

            // Uso do Optional Chaining (?.) para maior segurança
            if (tableContainer?.classList.contains('table-container')) {
                tableContainer.classList.toggle('hidden');
            }
        });
    });

    const hash = window.location.hash; 
    
    // Lógica para abrir automaticamente o tier correspondente caso um dinossauro
    // seja acessado através de um link com âncora (hash)
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