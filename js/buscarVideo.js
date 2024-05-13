import { conexaoApi } from './conexaoApi.js';

async function buscarVideo(evento) {
  evento.preventDefault();

  const dadosDePesquisa = document.querySelector('[data-pesquisa]').value;
  const busca = await conexaoApi.buscarVideo(dadosDePesquisa);

  console.log(busca);
}

const botaoPesquisa = document.querySelector('[data-botao-pesquisa]');
botaoPesquisa.addEventListener('click', evento => buscarVideo(evento));