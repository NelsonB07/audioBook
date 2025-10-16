

const botaoPlayPause = document.querySelector("#play-pause");
const botaoProximoCapitulo = document.querySelector("#proximo");
const botaoCapituloAnterior = document.querySelector("#anterior");
const audio = document.querySelector("#audio-capitulo");
const textoCapitulo = document.querySelector("#capitulo");
const qtdCapitulos = 10;

let taTocando = false;
let capituloAtual = 1;

function tocarFaixa() {
    // console.log("Clicou");
    audio.play();
    taTocando = true;
    // console.log("Deu play")

    botaoPlayPause.classList.add("tocando");
};

function pausarFaixa() {
    // console.log("Clicou");
    audio.pause();
    taTocando = false;
    // console.log("Pausou")

    botaoPlayPause.classList.remove("tocando");
};

function tocarOuPausar() {
    if (taTocando === true) {
        pausarFaixa();
    } else {
        tocarFaixa();
    }
};

function proximoCapitulo() {
    pausarFaixa()

    if(capituloAtual < qtdCapitulos) {
        capituloAtual = capituloAtual + 1;
    } else {
        capituloAtual = 1;
    }

    audio.src = "./audios/" + capituloAtual + ".mp3";
    textoCapitulo.innerText = "Capítulo " + capituloAtual;
};

function capituloAnterior() {
    pausarFaixa()
    
    if( capituloAtual === 1) {
        capituloAtual = qtdCapitulos;
    } else {
        capituloAtual = capituloAtual - 1;
    }

    audio.src = "./audios/" + capituloAtual + ".mp3";
    textoCapitulo.innerText = "Capítulo " + capituloAtual;

};

botaoPlayPause.addEventListener("click", tocarOuPausar);
botaoProximoCapitulo.addEventListener("click", proximoCapitulo);
botaoCapituloAnterior.addEventListener("click", capituloAnterior);


