// Inicializa o Swiper com as configurações do efeito Coverflow
const swiper = new Swiper(".mySwiper", {
  effect: "coverflow",      // Mantemos o "coverflow" pois ele controla o scaling do item central
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",    // Deixa o Swiper calcular quantos slides cabem na tela
  loop: true,

  // Configurações específicas do efeito Coverflow ATUALIZADAS
  coverflowEffect: {
    rotate: 0,              // <<-- PONTO CHAVE: Remove a rotação 3D, deixando os slides "retos".
    stretch: 40,            // <<-- Adiciona um espaçamento horizontal entre os slides. Ajuste se quiser mais ou menos espaço.
    depth: 150,             // <<-- Aumenta a percepção de profundidade para o efeito de escala.
    modifier: 1.2,          // <<-- Aumenta a diferença de tamanho entre o slide central e os laterais.
    slideShadows: true,     // Mantém as sombras para dar uma sensação de profundidade.
  },
  
  // Configura a paginação (bolinhas)
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

// =======================================================
// ===== CÓDIGO DO CARROSSEL DE NOTÍCIAS EM DESTAQUE =====
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
  // ===== NOVO: FUNCIONALIDADE DE ARRASTO (DRAG) =====
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
    if (!isDown) return; // Para a função se o mouse não estiver pressionado
    e.preventDefault(); // Previne a seleção de texto e outros comportamentos padrão
    const x = e.pageX - newsViewport.offsetLeft;
    const walk = (x - startX) * 2; // O *2 torna o arrasto mais rápido
    newsViewport.scrollLeft = scrollLeft - walk;
  });

};