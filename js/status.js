console.log("O script status.js foi carregado com sucesso!");

document.addEventListener('click', function(e) {
    console.log("Clique detectado. Hash atual:", window.location.hash);
});
document.addEventListener('click', function(e) {
    if (window.location.hash) {
        if (!e.target.closest('a')) {
            history.pushState("", document.title, window.location.pathname + window.location.search);
            
            e.preventDefault();
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
});