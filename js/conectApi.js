async function listaVideos() {
    const conexao = await fetch("http://localhost:300/videos");
    const conexaoConvertida = await conexao.json();
    return conexaoConvertida;
}

export const conectApi = {
    listaVideos
}