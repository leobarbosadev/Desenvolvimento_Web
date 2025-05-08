//Aguarda o carregamento completo do HTML antes de rodar o script
document.addEventListener('DOMContentLoaded', function (){

    //Obtém a referência ao elemento <ul> com id "saida"
    const ul = document.getElementById('saida');

    //Função que limpa o conteúdo da lista (zera o innerHTML da <ul>)
    const limpar = () => ul.innerHTML = '';

    //Função que adiciona um <li> com texto dentro da <ul>
    const addItem = texto =>{
        //Criar um novo elemento <li>
        const li = document.createElement('li');
        //Define o texto do <li>
        li.textContent = texto;
        //Adiciona o <li> como filho da <ul>
        ul.appendChild(li);
    };

    //Evento para o botão com id "btnWhile"
    document.getElementById('btnWhile').addEventListener('click', function(){
        //Limpa a lista antes de começar
        limpar();
        //Inicializa a variável de controle
        let i = 1;
        //Enquanto i for menor ou igual a 3
        while (i <= 3){
            //Adiciona item com número atual
            addItem('while: ' + i);
            i++;
        }
    });

    //Evento para o botão com id "btnDoWhile"
    document.getElementById('btnDoWhile').addEventListener('click', function(){
        limpar();
        const senhaCorreta = '123';
        //Variável para armazenar a entrada do usuário
        let tentativa;
        //Contador de tentativas
        let tentativas = 0;

        do{
            //Solicitar a senha
            tentativa = prompt('Digite a senha (tente 123): ')
            //Conta mais uma tentativa
            tentativas++;
            //Repete até a senha estar correta
        }while(tentativa != senhaCorreta);
        //Mostra resultado: Interpolação é feita com crase ``
        addItem(`Senha correta após ${tentativas} tentativa(s)`)
    });

    //Evento para o botão com id "btnFor"
    document.getElementById('btnFor').addEventListener('click', function(){
        limpar();
        for (let i = 1; i <= 5; i++){
            //Adiciona item para cada número
            addItem('for: ' + i);
        }
    });
})