// Obtendo as referências para os elementos do DOM
const menu = document.getElementById('menu');
const slide = document.getElementById('animation');
const listMenu = document.getElementById('list-menu');

let menuVisible = false; // Variável para controlar o estado do menu

// Lógica que ativa a lista suspensa do menu
menu.addEventListener('click', function() {
  // Definindo as animações para o menu deslizante
  const slideIn = [
    {transform: 'translateX(100%)', easing: 'ease-out'},
    {transform: 'translateX(0%)', easing: 'ease-out'}
  ];

  const slideOut = [
    {transform: 'translateX(0%)', easing: 'ease-out'},
    {transform: 'translateX(100%)', easing: 'ease-out'}
  ];

  const timing = {
    duration: 800,
  };

  // Se o menu está visível, anima para torná-lo invisível
  if (menuVisible) {
    const slideAnimation = slide.animate(slideOut, timing);
    slideAnimation.onfinish = function() {
      listMenu.classList.add('hidden');
    };
  } else { // Caso contrário, anima para torná-lo visível
    listMenu.classList.remove('hidden');
    slide.animate(slideIn, timing);
  }

  menuVisible = !menuVisible; // Inverte o estado do menu para a próxima interação
});

// Lógica para rolar para uma seção específica na página quando o botão de seta é clicado
const arrow = document.getElementById('arrow');
const destinationElement = document.getElementById('formacao');

arrow.addEventListener('click', function() {
  destinationElement.scrollIntoView({behavior: 'smooth'});
});
