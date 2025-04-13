const grid = document.getElementById("grid"); 
const rows = 5;
const cols = 5;
const cells = [];
let fossilPositions = []; 
let tentativas = 3;
let pontos = 0;

function initializeGrid() {
    grid.innerHTML = "";
    cells.length = 0; 
    for (let i = 0; i < rows * cols; i++) {
        let cell = document.createElement("div");
        cell.classList.add("cell");
        cell.dataset.index = i;
        cell.addEventListener("click", () => revealCell(i, cell));
        grid.appendChild(cell); 
        cells.push(cell);
    }
}

function setFossils() {
    fossilPositions = []; 
    const numFossils = Math.floor(Math.random() * 10) + 3; 
    while (fossilPositions.length < numFossils) {
        const randomPos = Math.floor(Math.random() * (rows * cols)); 
        if (!fossilPositions.includes(randomPos)) {
            fossilPositions.push(randomPos);
        }
    }
}

function revealCell(index, cell) {
    if (cell.classList.contains("revealed") || tentativas <= 0) return;
    cell.classList.add("revealed");

    if (fossilPositions.includes(index)) {
        cell.innerHTML = "🦴"; 
        pontos += 100;
        fossilPositions = fossilPositions.filter(pos => pos !== index); 
        if (fossilPositions.length === 0) {
            alert("Você encontrou todos os fósseis! 🏆");
            resetGame();
        }
    } else {
        cell.innerHTML = "❌"; 
        tentativas--;
        document.getElementById("tentativas").innerText = tentativas;
        if (tentativas === 0) {
            alert("Game Over! Tente novamente. " +"Pontuação: " + pontos);
            resetGame();
        }
    }
    document.getElementById("pontos").innerText = pontos; 
}

function resetGame() {
    tentativas = 3; 
    pontos = 0; 
    document.getElementById("tentativas").innerText = tentativas;
    document.getElementById("pontos").innerText = pontos;
    initializeGrid();
    setFossils();
}

initializeGrid();
setFossils();
