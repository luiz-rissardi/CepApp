
import { renderCotainerCep, rewriteContainerCep, temporarilyShowInvalidContainer} from "./ContainerSetup.js"

async function takeData() {
    const cep = document.getElementById("cep").value;
    const ContentCep = await getContentCepApi(cep);
    return ContentCep;
}

function loadContent(Content) {
    rewriteContainerCep(Content);
    renderCotainerCep();
}

async function getContentCepApi(cep) {
    const response = await fetch(`https://viacep.com.br/ws/${cep}/json`)
    const data = await response.json();
    return data
}


document.getElementById("SearchCep").addEventListener("click", async () => {
    try {
        const Content = await takeData();
        loadContent(Content);
    } catch (error) {
        temporarilyShowInvalidContainer()
    }
})

