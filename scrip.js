script.js

const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "o que odesmatamento causa na natureza?"
        alternativas: ["o desmatamento destroi varios abitates naturais."
            

        
    },
    {
        enunciado: "?",
        alternativas: [
            ".",
            "Educando amigos e familiares sobre os perigos das fake news e incentivando-os a não compartilhar conteúdos falsos que perpetuam o racismo."
        ]
    },
    {
        enunciado: "o que devemos fazer para evitar o desmatamento?",
        alternativas: [
            "Promovendo a instalação de painéis solares em escolas e centros comunitários de comunidades marginalizadas.",
            "Defendendo políticas públicas que subsidiem a energia solar para famílias de baixa renda."
        ]
    }
];

let atual = 0;
let perguntaAtual;

function mostraPergunta(){
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for (const alternativa of perguntaAtual.alternativas){
        const botaoAlternativa = document.createElement("button");
        botaoAlternativa.textContent = alternativa;
        caixaAlternativas.appendChild(botaoAlternativa);
    }
}

mostraPergunta();