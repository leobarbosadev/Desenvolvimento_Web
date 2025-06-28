document.addEventListener('DOMContentLoaded', function(){
    
    const verificar = document.getElementById('verificar');
    
    const resultado = document.getElementById('resultado')
    
    function verificarIgualdade(){
        const num1 = parseFloat(document.getElementById('numero1').value);
    
        const num2 = parseFloat(document.getElementById('numero2').value);
    
        const num3 = parseFloat(document.getElementById('numero3').value);

        if(num1 == num2 && num2 == num3){
            resultado.textContent = 'Os números são iguais'
        }
        else{
            const maior = Math.max(num1, num2, num3)
            const menor = Math.min(num1, num2, num3)
            
            resultado.textContent = `O maior número é ${maior} e o menor é ${menor}`
        }
    }

    verificar.addEventListener('click', function(){
        verificarIgualdade()
    })
})