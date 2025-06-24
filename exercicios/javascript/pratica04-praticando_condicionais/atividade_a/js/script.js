document.addEventListener('DOMContentLoaded', function(){
    
    const verificar = document.getElementById('verificar');
    
    const resultado = document.getElementById('resultado');
    
    function verificarParImpar(){
        const numero = parseInt(document.getElementById('numero').value);
        
        if(isNaN(numero)){
            resultado.textContent = 'Não é número, favor digita um número válido!!!!'
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