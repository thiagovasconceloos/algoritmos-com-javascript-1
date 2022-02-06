const arrProdutos = require('./lista-livros');

function menorValor(arrProdutos,posicaoinicial){

    let maisBarato = posicaoinicial;

    for (let atual =posicaoinicial; atual < arrProdutos.length;atual++){
    
           if(arrProdutos[atual].preco <arrProdutos[maisBarato].preco){
                     
               maisBarato = atual        
                 
           }
    
          
    
    }

     return maisBarato;


}



module.exports = menorValor;