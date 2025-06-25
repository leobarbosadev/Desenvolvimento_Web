document.addEventListener('DOMContentLoaded', function(){
    
    const verificar = document.getElementById('verificar');
    
    const resultado = document.getElementById('resultado')
    
    function verificarIgualdade(){
        const num1 = document.getElementById('numero1');
    
        const num2 = document.getElementById('numero2');
    
        const num3 = document.getElementById('numero3');

        if(num1.value == num2.value == num3.value){
            resultado.textContent = 'Os números são iguais'
        }
        else{
            const maior = Math.max(num1.value, num2.value, num3.value)
            const menor = Math.min(num1.value, num2.value, num3.value)
            
            resultado.textContent = `O maior número é ${maior} e o menor é ${menor}`
        }
    }

    verificar.addEventListener('click', function(){
        verificarIgualdade()
    })
})