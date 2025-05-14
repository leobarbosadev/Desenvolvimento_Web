document.addEventListener('DOMContentLoaded', function(){
    let numero = document.getElementById('numero');

    const saida = document.getElementById('saida');

    //Quando criar os 10 elementos, se eu clicar no botão novamente vai ser limpado e criado mais 10, sem essa função, vai criando de 10 em 10.
    const limpar = () => lista.innerHTML = '';

    const lista = document.createElement('ul');

    saida.appendChild(lista);

    const criarItem = texto =>{
        const item = document.createElement('li');
        
        item.textContent = texto;

        lista.appendChild(item);
    }

    document.getElementById('tabuada').addEventListener('click', function(){
        //Quando criar os 10 elementos, se eu clicar no botão novamente vai ser limpado e criado mais 10, sem essa função, vai criando de 10 em 10.
        limpar();
        let c = 1;
        let num = parseInt(numero.value);

        while (c <=10){
            criarItem(`${num} x ${c} = ${c * num}`);
            c++;
        }
    });
})