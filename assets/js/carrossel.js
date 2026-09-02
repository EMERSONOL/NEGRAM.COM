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
initCustomCarousel('eixos-viewport', 'eixos-prev-btn', 'eixos-next-btn');