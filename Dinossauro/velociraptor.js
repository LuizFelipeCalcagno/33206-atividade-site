let pontos = 0;
let tempoRestante = 10;
let jogo = document.getElementById("jogo");
let displaypontos = document.getElementById("pontos");
let displaytempo = document.getElementById("tempo");
let mensagemfinal = document.getElementById("mensagemfinal");
let gameActive = false; 
let temporizador;

function startGame() {
    pontos = 0;
    tempoRestante = 10;
    displaypontos.textContent = pontos;
    displaytempo.textContent = tempoRestante;
    mensagemfinal.textContent = "";
    mensagemfinal.style.display = "none"; 
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

function spawnButton() {
    if (!gameActive) return;

    let button = document.createElement("div");
    button.classList.add("button");

    let x = Math.random() * (jogo.offsetWidth - 50);
    let y = Math.random() * (jogo.offsetHeight - 50);

    button.style.left = `${x}px`;
    button.style.top = `${y}px`;

    button.onclick = function() {
        pontos++;
        displaypontos.textContent = pontos;
        jogo.removeChild(button);
        spawnButton(); 
    };

    jogo.appendChild(button);
}

function endGame() {
    gameActive = false;
    clearInterval(temporizador);
    jogo.innerHTML = "";
    mensagemfinal.textContent = `Fim de jogo! Sua pontuação foi: ${pontos}`;
    mensagemfinal.style.display = "block";
}