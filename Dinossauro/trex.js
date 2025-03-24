const Dino = document.querySelector('.Dino');
const cacto = document.querySelector('.cacto');
let score = 0;
const scoreElement = document.getElementById('score');

// Função de pulo
const jump = () => {
    Dino.classList.add('jump');
    setTimeout(() => {
        Dino.classList.remove('jump');
    }, 500);
};

// Atualizar pontuação
const scoreInterval = setInterval(() => {
    score += 50;
    scoreElement.textContent = `Pontuação: ${score}`;
}, 200);

// Loop de verificação de colisão
const loop = setInterval(() => {
    const cactoPosition = cacto.offsetLeft;
    const DinoPosition = +window.getComputedStyle(Dino).bottom.replace('px', '');

    if (cactoPosition <= 120 && cactoPosition > 0 && DinoPosition < 80) {
        // Parar animações
        cacto.style.animation = 'none';
        cacto.style.left = `${cactoPosition}px`;

        Dino.style.animation = 'none';
        Dino.style.bottom = `${DinoPosition}px`;

        // Trocar imagem
        Dino.src = './Imagens/dino_morto.png';
        Dino.style.width = '150px';
        Dino.style.marginLeft = '30px';

        // Parar o jogo
        clearInterval(loop);
        clearInterval(scoreInterval);

        // Mostrar pontuação e reiniciar
        setTimeout(() => {
            alert(`Game Over! Sua pontuação foi: ${score}`);
            location.reload();
        }, 100);
    }
}, 10);

document.addEventListener('keydown', jump);