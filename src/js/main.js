// Obtendo referências para os elementos do DOM
const menu = document.getElementById('menu');
const slide = document.getElementById('animation');
const listMenu = document.getElementById('list-menu');

// Variável para controlar o estado do menu
let menuVisible = false;

// Função para verificar se o elemento está no campo de visão
function isElementInViewport(el) {
  const rect = el.getBoundingClientRect();

  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// Função para fechar a lista suspensa com a animação de SlideOut
function closeMenu() {
  const slideOut = [
    { transform: 'translateX(0%)', easing: 'ease-out' },
    { transform: 'translateX(100%)', easing: 'ease-out' }
  ];

  const timing = {
    duration: 800,
  };

  const slideAnimation = slide.animate(slideOut, timing);
  slideAnimation.onfinish = function () {
    listMenu.classList.add('hidden'); // Oculta a lista de itens do menu após a animação
  };

  menuVisible = false; // Define o menu como invisível
}

// Evento de clique no menu
menu.addEventListener('click', function () {
  // Definindo as animações para o menu deslizante
  const slideIn = [
    { transform: 'translateX(100%)', easing: 'ease-out' },
    { transform: 'translateX(0%)', easing: 'ease-out' }
  ];

  const timing = {
    duration: 800,
  };

  // Verifica se o menu está visível ou não
  if (menuVisible) {
    // Se estiver visível, anima para torná-lo invisível
    closeMenu();
  } else {
    // Caso contrário, anima para torná-lo visível
    listMenu.classList.remove('hidden'); // Exibe a lista de itens do menu
    const slideAnimation = slide.animate(slideIn, timing);
  }

  // Inverte o estado do menu para a próxima interação
  menuVisible = !menuVisible;
});

// Obtém referências aos itens do menu
const itensMenu = document.getElementsByClassName("itens-menu");

// Adiciona eventos de clique aos itens do menu
for (let i = 0; i < itensMenu.length; i++) {
  itensMenu[i].addEventListener("click", function () {
    closeMenu(); // Fecha o menu quando um item do menu é clicado
  });
}

// Verifica a visibilidade do elemento e fecha o menu se estiver fora do campo de visão
function checkVisibility() {
  if (!isElementInViewport(menu) && menuVisible) {
    closeMenu();
  }
}

// Adiciona um evento de rolagem (scroll) para verificar a visibilidade continuamente
window.addEventListener('scroll', checkVisibility);

// Verifica a visibilidade inicialmente
checkVisibility();


// Evento de clique na seta para rolar para uma seção específica da página
const arrow = document.getElementById('arrow');
const destinationElement = document.getElementById('formacoes');

arrow.addEventListener('click', function () {
  destinationElement.scrollIntoView({ behavior: 'smooth' }); // Rolagem suave para a seção de formações
});
