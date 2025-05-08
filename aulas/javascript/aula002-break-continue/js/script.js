//Aguarda o carregamento completo do HTML antes de execuar o script
document.addEventListener('DOMContentLoaded', function(){

    //Obtém a referència ao elemento <ul> com id "listaBreakContinue"
    const ul = document.getElementById('listaBreakContinue');

    //Função que limpa todo o conteúdo da lista (zera o conteúdo da <ul>)
    const limpar = () => ul.innerHTML = ''; //innerHTML é menos seguro

    //Função que adiciona um item <li> com o texto especificado dentro da <ul>
    const add = texto =>{
        //Criar um novo elemento <li>
        const li = document.createElement('li');
        //Define o texto do <li>
        li.textContent = texto;
        //Adiciona o <li> dentro da <ul>
        //append: diciona um elemento filho dentro de outro elemento HTML.
        ul.appendChild(li);
    };

    //Evento ao clicar no botão com id "btnBreak"
    document.getElementById('btnBreak').addEventListener('click', function (){
        limpar();
        //Loop de 1 a 50
        for (let i = 1; i <=50; i++){
            
            //Se o número for divisível por 13...
            if(i % 13 ===0){
                //Adiciona mensagem
                add('Parou no ' + i + ' (divisível por 13!)');
                //Encerra o loop imediatamente
                break;
            }
            //Caso não seja divisível por 13, apenas adiciona o número na listagem
            add(i);
        }
    });

    //Evento ao clicar no botão com id "dtnContinue"
    document.getElementById('btnContinue').addEventListener('click', function(){
        limpar();

        //Loop de 1 a 5
        for(let i = 1; i <= 5; i++){

            //Se o número for 3, pula a interação atual (não adiciona o 3)
            if(i=== 3) continue;
            //Adiciona o número normalmente se não for 3
            add(i);
        }
    });

});