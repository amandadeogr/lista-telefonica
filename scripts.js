
let botao = document.querySelector('.botao')

let inputDoNome = document.querySelector('#nome');
let valorDoInput = inputDoNome.value;

let lista = document.querySelector('.lista__contatos');
let itemDaLista = document.createElement('li');

itemDaLista.innerHTML = 'Amanda';
lista.appendChild(itemDaLista);

/*
botao.addEventListener('click', (evento) => {
   
})
*/