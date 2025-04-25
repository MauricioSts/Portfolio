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
  