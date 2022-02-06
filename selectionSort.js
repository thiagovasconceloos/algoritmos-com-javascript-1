 // o metodo selection sort seleciona a posicao inicial e faz a comparação com os outros elementos do vetor
 // caso o  proximo elemento seja menor, ele muda o valor do menor elemento
 // a partir do index do menor elemento, ele continua a buscar os demais elementos no array 
 // vamos supor temos o vetor  v=[1,2,3]
 // o selection vai olhar o elemento na posicao 0 é menor que o elemento na posicao 1 ?
 // se for, fara a mesma comparação com o elemento na posicao 2 
 // sendo menorAtual = 0 
 // posicao atual = 1 

 
 
 const livros = require('./lista-livros');
const menorValor = require('./menor-valor');
 for (let atual = 0; atual < livros.length;atual ++){

     let menor = menorValor(livros,atual)

     let livroAtual = livros[atual]
     let livroMaisBarato = livros[menor]


     livros[atual] = livroMaisBarato
     livros[menor] = livroAtual



 }

 console.log(livros)