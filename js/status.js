console.log("O script status.js foi carregado com sucesso!");

document.addEventListener('click', function(e) {
    if (window.location.hash) {
        if (!e.target.closest('a')) {
            history.pushState("", document.title, window.location.pathname + window.location.search);
        }
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const headers = document.querySelectorAll('.tier-toggle');

    headers.forEach(header => {
        header.addEventListener('click', () => {
            header.classList.toggle('collapsed');
            const tableContainer = header.nextElementSibling;

            if (tableContainer && tableContainer.classList.contains('table-container')) {
                tableContainer.classList.toggle('hidden');
            }
        });
    });

    const hash = window.location.hash; 
    
    if (hash) {
        const targetRow = document.querySelector(hash); 
        
        if (targetRow) {
            const tableContainer = targetRow.closest('.table-container');
            
            if (tableContainer) {
                tableContainer.classList.remove('hidden');
                
                const header = tableContainer.previousElementSibling;
                if (header && header.classList.contains('tier-toggle')) {
                    header.classList.remove('collapsed');
                }
                setTimeout(() => {
                    targetRow.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }, 150);
            }
        }
    }
});