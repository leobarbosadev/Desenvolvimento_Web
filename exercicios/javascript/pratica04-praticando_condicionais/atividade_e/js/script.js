document.addEventListener('DOMContentLoaded', function(){
    
    
    const verificar = document.getElementById('verificar');
    
    const resultado = document.getElementById('resultado');
    
    function calcularDistancia(){

        valor_ate_200km = 0.7;
        valor_acima_200km = 0.4;
        total = 0;

        const distancia = parseInt(document.getElementById('distancia').value);

        if(distancia <= 0 || isNaN(distancia)){
            resultado.textContent = 'valor inválido, digite um valor válido'
        }
        else if(distancia <= 200){
            total = distancia * valor_ate_200km
            resultado.textContent = `Sua viagem deu ${distancia} km, o valor foi de R$${total.toFixed(2)}`
        }
        else{
            total = distancia * valor_acima_200km
            resultado.textContent = `Sua viagem deu ${distancia} km, o valor foi de R$${total.toFixed(2)}`
        }
        
    }

    verificar.addEventListener('click', function(){
        calcularDistancia()
    })
})