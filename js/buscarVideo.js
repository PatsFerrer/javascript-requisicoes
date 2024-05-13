import { conexaoApi } from './conexaoApi.js';
import construirCard from './mostrarVideos.js';

async function buscarVideo(evento) {
  evento.preventDefault();

  const dadosDePesquisa = document.querySelector('[data-pesquisa]').value;
  const busca = await conexaoApi.buscarVideo(dadosDePesquisa);

  const lista = document.querySelector('[data-lista]');

  while (lista.firstChild) {
    lista.removeChild(lista.firstChild);
  }

  busca.forEach(element => lista.appendChild(construirCard(element.titulo, element.descricao, element.url, element.imagem)));
}

const botaoPesquisa = document.querySelector('[data-botao-pesquisa]');
botaoPesquisa.addEventListener('click', evento => buscarVideo(evento));