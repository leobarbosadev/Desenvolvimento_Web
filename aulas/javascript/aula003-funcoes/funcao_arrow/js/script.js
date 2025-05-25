//=======================================
//FUNÇÕES DE CÁLCULO (Arrow Functions)
//=======================================
const dobrar = numero => numero * 2;
const triplicar = numero => numero * 3;

//=======================================
//FUNÇAÕ DE EXIBIÇÃO DE RESULTADOS
//=======================================
function mostrarResultado(operacao, texto){
    //Obtém referências aos elementos do DOM
    const input = document.getElementById('numero'); //Campo de entrada
    const resultado = document.getElementById('resultado'); //Elemento para exibir resultados

    //Converte o valor de string para número decimal
    const numero = parseFloat(input.value);

    //Velidação de entrada - verifica se não é número
    if(isNaN(numero)){
        resultado.textContent = 'Por favor, digite um número válido.'
        resultado.style.color = '#ff0000' // Define a mensagem como vermelha
        return;
    }
    
    //Executa a operação matemática (dobrar ou triplicar)
    const valor = operacao(numero);

    //Formata e exibe o resultado
    resultado.textContent = `${texto} de ${numero} é: ${valor}`;
    resultado.style.color ='#000000'; //Cor padrão para resultados válidos
}

//=======================================
//EVENT LISTENERS - INTERAÇÕES DO USUÁRIO
//=======================================

//Botão 'Dobro' - Calcula e exibe o dobro do número
document.getElementById('dobro').addEventListener('click', function(){
    mostrarResultado(dobrar, 'O dobro');
})

// Botão 'Triplo' - Calcula e exibe o triplo do número
document.getElementById('triplo').addEventListener('click', function(){
    mostrarResultado(triplicar, 'O triplo');
});

// Campo numérico - Permite calcular com a tecla Enter
document.getElementById('numero').addEventListener('keypress', function(enter){
    //Verifica se a tecla precionada foi o Enter (código 13)
    if(enter.key === 'Enter'){
        //Por padrão, calcula o dobro quando Enter é precionado
        mostrarResultado(dobrar, 'O dobro')
    }
});

// // document.getElementById('numero').addEventListener('keypress', (evento)=>{

// //     if(evento.key === 'd'){
// //         mostrarResultado(dobrar, 'O dobro')
// //     }

// //     if(evento.key === 't'){
// //         mostrarResultado(triplicar, 'O triplo')
// //     }
// // });