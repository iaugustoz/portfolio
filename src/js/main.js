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
const destinationElement = document.getElementById('formacoes');

arrow.addEventListener('click', function() {
  destinationElement.scrollIntoView({behavior: 'smooth'});
});


// Obtendo as referências para o elemento do DOM
const form = document.getElementById('form');

// Adiciona um evento de escuta ao formulário para quando for submetido
form.addEventListener('submit', function(event) {
  event.preventDefault(); // Impede o envio automático do formulário

  // Obtém as referências para os elementos do formulário
  const inputNome = document.getElementById('name');
  const inputEmail = document.getElementById('email');
  const inputMensagem = document.getElementById('message');

  if ( (!inputNome.value.trim()) && (!inputEmail.value.trim()) && (inputMensagem.value.trim()) ) {

    // Campos não preenchidos

  } else {
    // Campos preenchidos 

    // Define um atraso de 2 segundos antes de exibir uma mensagem de sucesso usando o Swal (SweetAlert)
    setTimeout(function() {

      Swal.fire({
        icon: 'success',
        title: 'Tudo certo por aqui!',
        text: 'Sucesso! Irei responder em breve.',
        footer: '<a href="#inicio" id="fecharPopup">Voltar à página inicial?</a>'
      });
    
      // Obtém a referência ao link de rodapé
      const linkRodape = document.getElementById('fecharPopup');
    
      // Adiciona um evento de clique ao link de rodapé
      linkRodape.addEventListener('click', function() {
        Swal.close(); // Fecha o pop-up do Sweet Alert
      });

    }, 800);
  }
});