const menu = document.getElementById('menu');
const listMenu = document.getElementById('list-menu');

// Lógica que ativa a lista suspensa do menu
menu.addEventListener('click', function() {
    if (listMenu.classList.contains('hidden')) { // Se a classe está no elemento do Dom, remova-a
        listMenu.classList.remove('hidden');
    } else { // Caso não esteja, adicione-a
        listMenu.classList.add('hidden');
    }
});