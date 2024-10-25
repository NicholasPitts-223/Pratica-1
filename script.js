// Selecionar o botão e o elemento de texto
const meuBotão = document.getElementById('meuBotão');
const texto = document.getElementById('instrução');

// Adicionar listener para o evento de clique
meuBotão.addEventListener('click', () => {
    texto.innerText = 'Você clicou no botão!';
});