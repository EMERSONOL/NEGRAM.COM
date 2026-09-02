// =======================================================
// ===== CÓDIGO DO CARROSSEL DA EQUIPE (SWIPER) =====
// =======================================================
const swiper = new Swiper(".mySwiper", {
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  loop: true,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

// =======================================================
// ===== FUNÇÃO REUTILIZÁVEL PARA CARROSSÉIS PERSONALIZADOS =====
// =======================================================
function initCustomCarousel(viewportId, prevBtnId, nextBtnId) {
  const viewport = document.getElementById(viewportId);
  const prevBtn = document.getElementById(prevBtnId);
  const nextBtn = document.getElementById(nextBtnId);

  if (!viewport || !prevBtn || !nextBtn) return;

  // Função para rolar o carrossel
  function slide(direction) {
    const card = viewport.querySelector('.news-card');
    if (!card) return;

    const cardWidth = card.offsetWidth;
    const gap = 20; // Espaçamento entre cards em px
    const scrollAmount = cardWidth + gap;

    viewport.scrollBy({
      left: direction * scrollAmount,
      behavior: 'smooth'
    });
  }

  // Adiciona os eventos de clique aos botões
  nextBtn.addEventListener('click', () => slide(1));
  prevBtn.addEventListener('click', () => slide(-1));

  // Funcionalidade de arraste (Drag)
  let isDown = false;
  let startX;
  let scrollLeft;

  viewport.addEventListener('mousedown', (e) => {
    isDown = true;
    viewport.classList.add('grabbing');
    startX = e.pageX - viewport.offsetLeft;
    scrollLeft = viewport.scrollLeft;
  });

  viewport.addEventListener('mouseleave', () => {
    isDown = false;
    viewport.classList.remove('grabbing');
  });

  viewport.addEventListener('mouseup', () => {
    isDown = false;
    viewport.classList.remove('grabbing');
  });

  viewport.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - viewport.offsetLeft;
    const walk = (x - startX) * 2;
    viewport.scrollLeft = scrollLeft - walk;
  });
}

// =======================================================
// ===== INICIALIZAÇÃO DOS CARROSSÉIS =====
// =======================================================
// Inicializa o carrossel de Projetos
initCustomCarousel('projects-viewport', 'projects-prev-btn', 'projects-next-btn');

// Inicializa o carrossel de Eixos
initCustomCarousel('eixos-viewport', 'eixos-prev-btn', 'eixos-next-btn');// =======================================================
// ===== CÓDIGO DO CARROSSEL DA EQUIPE (SWIPER) - ATUALIZADO =====
// =======================================================

// Inicializa o Swiper com as configurações para um carrossel lado a lado
const swiper = new Swiper(".mySwiper", {
  // Efeito "coverflow" foi removido para obter o layout plano.
  // O efeito padrão "slide" será usado.

  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",   // Mantém a visualização automática, que é ótima para responsividade.
  loop: true,

  // ADICIONADO: Esta é a nova forma de controlar o espaço entre os cards.
  // Ajuste o valor '30' conforme necessário.
  spaceBetween: 30,

  // O bloco "coverflowEffect" foi completamente REMOVIDO daqui.

  // Configura a paginação (bolinhas)
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});


// =======================================================
// ===== CÓDIGO DO CARROSSEL DE NOTÍCIAS (SEM ALTERAÇÃO) =====
// =======================================================
const newsViewport = document.querySelector('.news-carousel-viewport');

if (newsViewport) {
  const prevBtn = document.getElementById('news-prev-btn');
  const nextBtn = document.getElementById('news-next-btn');

  // Função para rolar o carrossel de notícias
  function slideNews(direction) {
    const card = newsViewport.querySelector('.news-card');
    if (!card) return;

    const cardWidth = card.offsetWidth;
    const gap = 20; // O mesmo valor do 'gap' no CSS
    const scrollAmount = cardWidth + gap;

    newsViewport.scrollBy({
      left: direction * scrollAmount,
      behavior: 'smooth'
    });
  }

  // Adiciona os eventos de clique aos botões
  nextBtn.addEventListener('click', () => slideNews(1));
  prevBtn.addEventListener('click', () => slideNews(-1));


  // =======================================================
  // ===== FUNCIONALIDADE DE ARRASTO (DRAG) - SEM ALTERAÇÃO =====
  // =======================================================
  let isDown = false;
  let startX;
  let scrollLeft;

  newsViewport.addEventListener('mousedown', (e) => {
    isDown = true;
    newsViewport.classList.add('grabbing');
    startX = e.pageX - newsViewport.offsetLeft;
    scrollLeft = newsViewport.scrollLeft;
  });

  newsViewport.addEventListener('mouseleave', () => {
    isDown = false;
    newsViewport.classList.remove('grabbing');
  });

  newsViewport.addEventListener('mouseup', () => {
    isDown = false;
    newsViewport.classList.remove('grabbing');
  });

  newsViewport.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - newsViewport.offsetLeft;
    const walk = (x - startX) * 2;
    newsViewport.scrollLeft = scrollLeft - walk;
  });
};