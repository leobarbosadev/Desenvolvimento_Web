document.addEventListener('DOMContentLoaded', function(){
    let valor1 = document.getElementById('valor1');

    let valor2 = document.getElementById('valor2');

    let resultado = document.getElementById('resultado');
    
    // const btnSoma = document.getElementById('soma')
    
    // btnSoma.addEventListener('click', function(){
    //     let calculo = parseFloat(valor1.value) + parseFloat(valor2.value)

    //     resultado.textContent = calculo
    // });

    document.getElementById('soma').addEventListener('click', function(){
        calculo = parseFloat(valor1.value) + parseFloat(valor2.value)
        resultado.textContent = calculo
    });

    document.getElementById('subtracao').addEventListener('click', function(){
        calculo = parseFloat(valor1.value) - parseFloat(valor2.value)
        resultado.textContent = calculo
    });

    document.getElementById('divisao').addEventListener('click', function(){
        if (parseFloat(valor2.value) == 0){

            resultado.textContent = 'Não existe divisão por 0'

        }else{
            calculo = parseFloat(valor1.value) / parseFloat(valor2.value)
        
            resultado.textContent = calculo
        }
    });

    document.getElementById('multiplicacao').addEventListener('click', function(){
        calculo = parseFloat(valor1.value) * parseFloat(valor2.value)

        resultado.textContent = calculo
    });
});