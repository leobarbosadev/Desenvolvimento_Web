document.addEventListener('DOMContentLoaded', function(){
    // const numero = document.getElementById('numero');
    
    const numero = parseInt(document.getElementById('numero').value);

    const verificar = document.getElementById('verificar');

    const resultado = document.getElementById('resultado');

    function verificarParImpar(){
        
        if(isNaN(numero)){
            resultado.textContent = 'Não é número'
            return;
        }

        if(numero % 2 === 0){
            resultado.textContent = `O número ${numero} é par`
        }
        else{
            resultado.textContent = `O número ${numero} é ímpar`
        }
    };
    verificar.addEventListener('click',function(){
        verificarParImpar();
    })
})