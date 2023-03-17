
function renderCotainerCep() {
    const ContentCepContainer = document.getElementById("content-container");
    const SearchContainer = document.getElementById("SearchCep-container")
    ContentCepContainer.classList.remove("d-none");
    [ContentCepContainer, SearchContainer].forEach(el => {
        el.animate([
            { opacity: 0 },
            { opacity: 0.2 },
            { opacity: 0.4 },
            { opacity: 0.6 },
            { opacity: 0.8 },
        ], 500);
    })
}

function rewriteContainerCep(contentCep) {
    document.getElementById("estateAddres").innerText = `Estado: ${contentCep.uf}`;
    document.getElementById("cityAddress").innerText = `Cidade: ${contentCep.localidade}`;
    document.getElementById("streetAddres").innerText = `Logradouro: ${contentCep.logradouro}`;
    document.getElementById("neighborhoodAddres").innerText = `Bairro: ${contentCep.bairro}`;
    document.getElementById("cepAddres").innerText = `${contentCep.cep}`;
}


function temporarilyShowInvalidContainer(){
    const container = document.getElementsByClassName("invalid-cep")[0]
    container.classList.add("is-show");
    setTimeout(()=>{
        container.classList.remove("is-show");
    },2000)
}

export {
    rewriteContainerCep,
    renderCotainerCep,
    temporarilyShowInvalidContainer,
}