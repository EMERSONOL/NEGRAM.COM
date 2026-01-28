const popupData = {
    "Eixo1": {
        title: "PEQUENA ÁFRICA",
        imageUrl: "assets/img/Nova Pasta/Eixo1.jpeg",
        description: "Contribuir para leitura espacial de geografias do racismo e antirracismo, mapeando grafagens espaciais e ativismos negros protagonistas na disputa pela sigificação dos lugares, dentro da Pequena África, analisando portanto os repertórios de ação na região:  a patrimonialização de bens, construção de lugares de memória, realização de atos e eventos, disputas por nomeações, dentre outros, e identificar signos ligados às tradições e culturais afrobrasileiras."
    },
    "Eixo2": {
        title: "SEGREGAÇÃO RACIAL",
        imageUrl: "assets/img/Nova Pasta/Eixo2.jpeg",
        description: "Compreender as dimensões raciais dos padrões de segregação nas cidades brasileiras. O aspecto racial é traço central estruturante no modelo social baseado na hiper-exploração e concentração de riqueza, e se imprime na urbanização através de diferenças e desigualdades na estrutura urbana. Historicidade, padrão centro-periferia, hierarquização de experiências sociais, papel do planejamento urbano e políticas públicas, dinâmicas e práticas do mercado imobiliário, entre outros, são temas da linha."
    },
    "Eixo3": {
        title: "ESPAÇO E SOCIABILIDADE DO CORPO NEGRO",
        imageUrl: "assets/img/Nova Pasta/Eixo3.jpeg",
        description: "Analisar como a produção e a espacialização de marcadores raciais incide sobre experiências e trajetórias espaciais de pessoas negras. Compreendendo a complexidade do padrão de relações raciais na sociedade brasileira, busca-se leituras espacializadas dos contextos de interação em que o marcador racial, inter-relacionado com gênero, classe, matriz de pertencimento cultural e outros, é mobilizado como regulador."
    },
    "Eixo4": {
        title: "TERRITÓRIOS E TERRITORIALIDADES",
        imageUrl: "assets/img/Nova Pasta/Eixo4.jpeg",
        description:"Conceituar Território é uma tarefa árdua devido à sua polissemia em várias áreas do conhecimento. Portanto, esse eixo não buscou conceituar o Território como algo imutável ou estanque. Ao contrário, o conceito com o qual trabalhamos, ele é vivo, por se constituir e ser constituído na relação entre o nós e o outro e entre o nós e o substrato material sobre o qual estabelecemos nossas trocas sociais, políticas e econômicas."
    },    
    "Eixo5": {
        title: "ATIVISMOS CARTOGRÁFICOS",
        imageUrl: "assets/img/Nova Pasta/Eixo5.jpeg",
        description:"O Eixo busca compreender, localizar e engendrar - junto aos grupos sociais territorializados, em distintas situações de conflitos - representações espaciais, com vistas ao fortalecimento de planejamentos populares, por e a partir do espaço e dos grupos sociais em luta.Ativismos Cartográficos é apontado como um conjunto de operações de decisão (o que é mapeado, como é representado, o que é válido e o que não é, etc.) que são exercícios de poder. Ao se apropriarem e questionarem as ferramentas cartográficas da representação espacial, grupos subalternizados disputam o poder da construção de narrativas, disputam regimes de produção do conhecimento legítimo (SANTOS, R. E. 2019)."
    }
    // Adicione outros eventos aqui...
};

function openPopup(key) {
  const data = popupData[key];
  if (!data) return;

  document.getElementById("popup-title").innerText = data.title;
  document.getElementById("popup-image").src = data.imageUrl;
  document.getElementById("popup-description").innerText = data.description;

  const popup = document.getElementById("myPopup");
  popup.classList.add("popup-is-open");
  document.body.classList.add("popup-active");
}

function closePopup() {
  const popup = document.getElementById("myPopup");
  popup.classList.remove("popup-is-open");
  document.body.classList.remove("popup-active");
}

document.addEventListener("DOMContentLoaded", () => {
  const popup = document.getElementById("myPopup");

  popup.addEventListener("click", (e) => {
    if (e.target === popup) closePopup();
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closePopup();
  });
});