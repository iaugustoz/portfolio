// Obtendo referências para os elementos do DOM
const menu = document.getElementById('menu');
const slide = document.getElementById('animation');
const listMenu = document.getElementById('list-menu');

// Variável para controlar o estado do menu
let menuVisible = false;

menu.addEventListener('click', function () {

  // Definindo as animações para o menu deslizante
  const slideIn = [
    { transform: 'translateX(100%)', easing: 'ease-out' },
    { transform: 'translateX(0%)', easing: 'ease-out' }
  ];

  const slideOut = [
    { transform: 'translateX(0%)', easing: 'ease-out' },
    { transform: 'translateX(100%)', easing: 'ease-out' }
  ];

  const timing = {
    duration: 800,
  };

  // Verifica se o menu está visível ou não
  if (menuVisible) {

    // Se estiver visível, anima para torná-lo invisível
    const slideAnimation = slide.animate(slideOut, timing);
    slideAnimation.onfinish = function () {
      listMenu.classList.add('hidden'); // Oculta a lista de itens do menu após a animação
    };
  } else {

    // Caso contrário, anima para torná-lo visível
    listMenu.classList.remove('hidden'); // Exibe a lista de itens do menu
    const slideAnimation = slide.animate(slideIn, timing);
  }

  // Inverte o estado do menu para a próxima interação
  menuVisible = !menuVisible;
});

// Obtendo referências aos itens do menu
const itensMenu = document.getElementsByClassName("itens-menu");

// Adiciona eventos de clique aos itens do menu
for (let i = 0; i < itensMenu.length; i++) {
  itensMenu[i].addEventListener("click", function () {

    // Define a animação de saída do menu deslizante
    const slideOut = [
      { transform: 'translateX(0%)', easing: 'ease-out' },
      { transform: 'translateX(100%)', easing: 'ease-out' }
    ];

    const timing = {
      duration: 800,
    };

    // Inicia a animação de saída
    const slideAnimation = slide.animate(slideOut, timing);
    slideAnimation.onfinish = function () {
      listMenu.classList.add('hidden'); // Oculta a lista de itens do menu após a animação
    };

    menuVisible = false; // Garante que o menu esteja definido como invisível após clicar em um item do menu
  });
}

// Evento de clique na seta para rolar para uma seção específica da página
const arrow = document.getElementById('arrow');
const destinationElement = document.getElementById('formacoes');

arrow.addEventListener('click', function () {
  destinationElement.scrollIntoView({ behavior: 'smooth' }); // Rolagem suave para a seção de formações
});
