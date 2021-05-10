
//Requisição API
const pegaPokemon = async () => {
    const inputPesquisar = (document.querySelector('[data-inputPokemon]'));
    const pokemonPesquisado = inputPesquisar.value;
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonPesquisado}`)
        const dadosPokemon = await response.json();
        exibePokemon(dadosPokemon)
    } catch (error) {
        console.log(error)
        const secaoPokemon = document.querySelector('[data-pokemon]');
        secaoPokemon.innerHTML = "";
        const conteudoErro = `   
        <p class="errom m-3">Nome ou id do pokemon não existe.<p>
        `
        secaoPokemon.innerHTML = conteudoErro;
    }


}

const exibePokemon = (dadosPokemon) => {
    const pokemonNome = dadosPokemon.name;
    const pokemonId = dadosPokemon.id;
    const pokemonTipo = dadosPokemon.types.map((tipo) => ` ${tipo.type.name}`).toString();
    const pokemonSkills = dadosPokemon.moves.map((habilidade) => ` ${habilidade.move.name}`).toString();
    const pokemonPeso = dadosPokemon.weight / 10;
    const pokemonAltura = dadosPokemon.height / 10;
    const imagemPokemon = dadosPokemon.sprites.front_default;
    const secaoPokemon = document.querySelector('[data-pokemon]');
    secaoPokemon.innerHTML = "";
    const conteudoSecaoPokemon = `
            <div data-imagemPokemon>
                <img class="imagem__pokemon m-3"src="${imagemPokemon}" alt="Imagem do ${pokemonNome}">
            </div>
            <div class="descricaoPokemon text-center">
                <div data-nomePokemon class="m-2">
                    <h1 class="nome__pokemon">${pokemonNome}</h1>
                </div>
                <div data-idEtipoPokemon class="m-3">
                    <h3>Nº ${pokemonId} - ${pokemonTipo} </h3>
                </div>
                <div data-skillsPokemon class="skills__pokemon text-start m-3">
                    <h6>Skills: ${pokemonSkills}</h6>
                </div>
                <div data-pesoPokemon class="peso__pokemon m-3">
                <h3>Weight: ${pokemonPeso}kg</h3>
                </div>
                <div data-tamanhoPokemon class="tamanho__pokemon m-3">
                    <h3>Height: ${pokemonAltura}m</h3>
                </div>
            </div>
    `
    secaoPokemon.innerHTML = conteudoSecaoPokemon;
}


const inputPesquisarEvento = (document.querySelector('[data-inputPokemon]'));
const btnPesquisar = document.querySelector('[data-pesquisar]');

btnPesquisar.addEventListener('click', pegaPokemon)
//Evento para clicar no botão com o enter
inputPesquisarEvento.addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        btnPesquisar.click();
    }
});



