const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
});

const dropdownToggle = document.querySelector(".dropdown-toggle");
const dropdownMenu = document.querySelector(".dropdown-menu");

dropdownToggle.addEventListener("click", (e) => {
    e.preventDefault();
    e.stopPropagation(); 
    dropdownMenu.classList.toggle("show");
});

window.addEventListener("click", (e) => {
    if (!dropdownToggle.contains(e.target)) {
        dropdownMenu.classList.remove("show");
    }
    
    if (!e.target.classList.contains('dropdown-toggle') && e.target.classList.contains('nav-link')) {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
    }
});
document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('searchInput');
    
    searchInput.addEventListener('keyup', function() {
        const termo = searchInput.value.toLowerCase();
        const linhas = document.querySelectorAll('tbody tr');

        linhas.forEach(linha => {
            const celulaNome = linha.querySelector('td:first-child');
            
            if (celulaNome) {
                const texto = celulaNome.textContent.toLowerCase();
                if (texto.includes(termo)) {
                    linha.style.display = '';
                } else {
                    linha.style.display = 'none';
                }
            }
        });
    });
});