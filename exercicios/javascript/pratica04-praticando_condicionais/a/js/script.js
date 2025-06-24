document.addEventListener('DOMContentLoaded', function(){
    const numero = document.getElementById('numero');
    
    // const numero = parseInt(document.getElementById('numero').value);

    const verificar = document.getElementById('verificar');

    const resultado = document.getElementById('resultado');

    function verificarParImpar(){
        if(isNaN(numero.value)){
            resultado.textContent = 'Não é número'
            return;
        }

        // if(isNaN(numero)){
        //     resultado.textContent = 'Não é número'
        //     return;
        // }

        else if(numero.value % 2 == 0){
            resultado.textContent = `O número ${numero.value} é par`
        }
        else{
            resultado.textContent = `O número ${numero.value} é ímpar`
        }
    }
    verificar.addEventListener('click',function(){
        verificarParImpar()
    })
})