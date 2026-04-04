const carousel = document.getElementById('carouselHero');
const titulo = document.getElementById('hero-titulo');
const descricao = document.getElementById('hero-descricao');

// Array com os textos para cada slide (na ordem das imagens)
const conteudos = [
    {
        titulo: "Planner dos Noivos",
        descricao: "Este é o companheiro definitivo para a sua jornada. Unimos o planejamento detalhado do evento — como controle financeiro e fornecedores — a um diferencial único: o cuidado com o relacionamento. Um guia completo que ensina a planejar o, 'Sim' sem esquecer do 'Depois', focando no fortalecimento emocional e na construção de um lar com conexão."
    },
    {
        titulo: "Controle financeiro total para o grande dia.",
        descricao: "Chega de dúvidas sobre por onde começar ou o que comprar. Criamos uma curadoria exclusiva com os itens essenciais da Shopee, organizados por ambiente, focando no melhor custo-benefício para transformar seu espaço no lar dos seus sonhos gastando pouco."
    },
    {
        titulo: "O Guia Definitivo para o seu Enxoval.",
        descricao: "Organize um casamento impecável sem precisar de uma fortuna. Reunimos curadorias de vestidos, acessórios, decoração e papelaria com links diretos de compra. Tudo o que você precisa para visualizar, escolher e realizar o evento dos seus sonhos de forma prática e econômica."
    }
    // Adicione mais se tiver mais imagens no carrossel
];

// Evento do Bootstrap que detecta a mudança de slide
carousel.addEventListener('slid.bs.carousel', function (event) {
    const index = event.to; // Pega o índice do slide atual (0, 1, 2...)

    if (conteudos[index]) {
        // Aplica um efeito de fade simples
        titulo.style.opacity = 0;
        descricao.style.opacity = 0;

        setTimeout(() => {
            titulo.innerText = conteudos[index].titulo;
            descricao.innerText = conteudos[index].descricao;
            titulo.style.opacity = 1;
            descricao.style.opacity = 1;
        }, 300);
    }
});
