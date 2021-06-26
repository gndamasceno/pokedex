


console.log("oi")
const botao = document.querySelector('[data-btnCriaBolinha]')
botao.addEventListener('click', criaBolinha);

function criaBolinha() {
    const container = document.querySelector('[data-containerBolinhas]')
    const novaBolinha = document.createElement('div');

    novaBolinha.classList.add('bolinha')

    container.appendChild(novaBolinha);

}