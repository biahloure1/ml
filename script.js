const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");
const pergunta1 = "Pergunta 1";
const pergunta2 = "Pergunta 2";
const perguntas = ["Pergunta 1", "Pergunta 2"];
const perguntas = [
  {
    enunciado: "Pergunta 1",
    alternativas: ["Alternativa 1", "Alternativa 2"],
  },
  {
    enunciado: "Pergunta 2",
    alternativas: ["Alternativa 1", "Alternativa 2"],
  },
];
let atual = 0;
let perguntaAtual;

function mostraPergunta() {
  perguntaAtual = perguntas[atual];
  caixaPerguntas.textContent = perguntaAtual.enunciado;
}

mostraPergunta();
let atual = 0;
let perguntaAtual;

function mostraPergunta() {
  perguntaAtual = perguntas[atual];
  caixaPerguntas.textContent = perguntaAtual.enunciado;
  mostraAlternativas();
}
function mostraAlternativas() {}

mostraPergunta();
function mostraAlternativas() {
  for (const alternativa of perguntaAtual.alternativas) {
  }
}
function mostraAlternativas() {
  for (const alternativa of perguntaAtual.alternativas) {
    const botaoAlternativas = document.createElement("button");
  }
}
function mostraAlternativas() {
  for (const alternativa of perguntaAtual.alternativas) {
    const botaoAlternativas = document.createElement("button");
    botaoAlternativas.textContent = alternativa;
  }
}
function mostraAlternativas() {
  for (const alternativa of perguntaAtual.alternativas) {
    const botaoAlternativas = document.createElement("button");
    botaoAlternativas.textContent = alternativa;
    caixaAlternativas.appendChild(botaoAlternativas);
  }
}