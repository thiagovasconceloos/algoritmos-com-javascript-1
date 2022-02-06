const livros = require('./lista-livros');



let maisBarato = 0 ;

for (let atual =0; atual < livros.length;atual++){

       if(livros[atual].preco <livros[maisBarato].preco){
                 
           maisBarato = atual        
             
       }else {



       }


      

}

 console.log(`o livro mais barato é ${livros[maisBarato].titulo}, cuja o preço é ${livros[maisBarato].preco}`)