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
// ===== CÓDIGO DO CARROSSEL HERO (DESTAQUE INICIAL) =====
// =======================================================
let heroSlideAtual = 0;
const heroSlides = document.querySelectorAll('.hero-slide');
const heroDots = document.querySelectorAll('.hero-dot');

function mostrarHeroSlide(index) {
    // Se não existir o carrossel na página, não faz nada
    if (!heroSlides.length) return; 

    // Efeito de loop (se passar do último, volta pro primeiro)
    if (index >= heroSlides.length) heroSlideAtual = 0;
    if (index < 0) heroSlideAtual = heroSlides.length - 1;

    // Remove as classes 'active'
    heroSlides.forEach(slide => slide.classList.remove('active'));
    heroDots.forEach(dot => dot.classList.remove('active'));

    // Adiciona classe 'active' ao slide e dot atuais
    heroSlides[heroSlideAtual].classList.add('active');
    
    if(heroDots[heroSlideAtual]) {
        heroDots[heroSlideAtual].classList.add('active');
    }
}

function mudarHeroSlide(direcao) {
    heroSlideAtual += direcao;
    mostrarHeroSlide(heroSlideAtual);
}

function irParaHeroSlide(index) {
    if(index < heroSlides.length) {
        heroSlideAtual = index;
        mostrarHeroSlide(heroSlideAtual);
    }
}

// Opcional: Para fazer o carrossel passar sozinho a cada 6 segundos, descomente a linha abaixo
setInterval(() => { mudarHeroSlide(1); }, 6000);

// =======================================================
// ===== INICIALIZAÇÃO DOS CARROSSÉIS =====
// =======================================================
// Inicializa o carrossel de Projetos
initCustomCarousel('projects-viewport', 'projects-prev-btn', 'projects-next-btn');

// Inicializa o carrossel de Eixos
initCustomCarousel('eixos-viewport', 'eixos-prev-btn', 'eixos-next-btn');