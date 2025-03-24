let pontos = 0;
let tempoRestante = 10;
let jogo = document.getElementById("jogo");
let displaypontos = document.getElementById("pontos")
let displaytempo = document.getElementById("tempo")
let mensagemfinal = document.getElementById("mensagemfinal")
let comecar = false
let temporizador;

function startGame() {

    pontos = 0;
    tempoRestante = 10;
    displaypontos.textContent = pontos;
    displaytempo.textContent = tempoRestante;
    mensagemfinal.textContent = "";
    gameActive = true;
    spawnButton();

    temporizador = setInterval(() => {
        tempoRestante--;
        displaytempo.textContent = tempoRestante;
        if (tempoRestante <= 0) {
            endGame();
        }
    }, 1000);
}


function spawnbutton() {
    if (!comecar) return;

    let button = document.createElement("div")
    button.classList.add("button")

    let x = Math.random() * (jogo.clientWidth - 50)
    let y = Math.random() * (jogo.clientHeight - 50)

    button.style.left = `${x}px`;
    button.style.top = `${y}px`;

    let timeoutId = setTimeout(() => {
        if(jogo.contains(button)){
            jogo.removeChild(button);
            spawnButton();
        }
    }, 1000);

    button.onclick = function() {
        clearTimeout(timeoutId);
        pontos++;
        displaypontos.textContent = pontos;
        jogo.removeChild(button);
        spawnButton();
    };

    jogo.appendChild(button);
}
    function final() {
        gameActive = false;
        clearInterval(temporizador);
        jogo.innerHTML = "";
        mensagemfinal.textContent =  `Fim de jogo! Sua pontuação foi: ${pontos}`;
    }


}