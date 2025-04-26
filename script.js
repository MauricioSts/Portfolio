// Função para rolar suavemente até a seção
document.querySelectorAll('.nav-link').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Função para verificar se o elemento está visível na tela
function isElementInViewport(el) {
  const rect = el.getBoundingClientRect();
  return rect.top >= 0 && rect.left >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && rect.right <= (window.innerWidth || document.documentElement.clientWidth);
}

// Função para adicionar a classe 'visible' nas seções à medida que aparecem
function checkSections() {
  const sections = document.querySelectorAll('section');
  sections.forEach(section => {
    if (isElementInViewport(section)) {
      section.classList.add('visible');
    }
  });
}

// Detectar o scroll
window.addEventListener('scroll', checkSections);

// Verificar as seções ao carregar a página
document.addEventListener('DOMContentLoaded', checkSections);

// Ativa o carrossel de experiências profissionais
var myCarousel = document.querySelector('#experienciasCarousel');
var carousel = new bootstrap.Carousel(myCarousel, {
  interval: 5000,  // Intervalo de 5 segundos entre cada slide
  ride: 'carousel' // Inicia o carrossel automaticamente
});

// Ativa o carrossel de projetos
var myCarouselProjetos = document.querySelector('#projetosCarousel');
var carouselProjetos = new bootstrap.Carousel(myCarouselProjetos, {
  interval: 5000,  // Intervalo de 5 segundos entre cada slide
  ride: 'carousel' // Inicia o carrossel automaticamente
});
