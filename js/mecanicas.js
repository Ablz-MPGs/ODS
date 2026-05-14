document.addEventListener('DOMContentLoaded', () => {
    const accordions = document.querySelectorAll('.accordion-header');

    accordions.forEach(acc => {
        acc.addEventListener('click', function() {
            // Alterna a classe 'active'
            this.classList.toggle('active');

            // Obtém o elemento de conteúdo
            const panel = this.nextElementSibling;
            
            // Controle de abertura e fechamento
            if (panel.style.maxHeight) {
                panel.style.maxHeight = null;
                panel.style.paddingTop = "0";
                panel.style.paddingBottom = "0";
            } else {
                panel.style.maxHeight = panel.scrollHeight + 50 + "px"; // +50 para dar margem extra
                panel.style.paddingTop = "15px";
                panel.style.paddingBottom = "15px";
            } 
        });
    });
});
