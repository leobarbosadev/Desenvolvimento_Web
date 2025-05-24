//FUNÇÕES DE CÁLCULO (Arrow Functions)
const dobrar = numero => numero * 2;
const triplicar = numero => numero * 3;


//FUNÇAÕ DE EXIBIÇÃO DE RESULTADOS
function mostrarResultado(operacao, texto){

    const input = document.getElementById('numero');
    const resultado = document.getElementById('resultado');

    const numero = parseFloat(input.value);

    if(isNaN(numero)){
        resultado.textContent = 'Por favor, digite um número válido.'
        resultado.style.color = '#ff0000'
        return;
    }

    const valor = operacao(numero);

    resultado.textContent = `${texto} de ${numero} é: ${valor}`;
    resultado.style.color ='#000000';
}

//EVENT LISTENERS - INTERAÇÕES DO USUÁRIO
document.getElementById('dobro').addEventListener('click', function(){
    mostrarResultado(dobrar, 'O dobro');
})

document.getElementById('triplo').addEventListener('click', function(){
    mostrarResultado(triplicar, 'O triplo');
});