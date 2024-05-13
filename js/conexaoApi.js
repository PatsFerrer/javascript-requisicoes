async function listarVideos() {
  const conexao = await fetch('http://localhost:3000/videos');
  const conexaoConvertida = await conexao.json();

  return conexaoConvertida;
}

async function criarVideo(titulo, descricao, url, imagem) {
  const conexao = await fetch('http://localhost:3000/videos', {
    method: 'POST',
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({
      titulo: titulo,
      descricao: `${descricao} visualizações`,
      url: url,
      imagem: imagem
    })
  });

  const conexaoConvertida = await conexao.json();
  return conexaoConvertida;
}

async function buscarVideo(termoDeBusca) {
  const conexao = await fetch(`http://localhost:3000/videos?q=${termoDeBusca}`);
  const conexaoConvertida = await conexao.json();

  return conexaoConvertida;
}

export const conexaoApi = {
  listarVideos,
  criarVideo,
  buscarVideo
};