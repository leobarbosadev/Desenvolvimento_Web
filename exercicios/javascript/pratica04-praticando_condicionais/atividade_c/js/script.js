document.addEventListener('DOMContentLoaded', function(){
    const velocidade = document.getElementById('velocidade');

    const verificar = document.getElementById('btnVelocidade');

    const resultado = document.getElementById('resultado');

    function verificarVelocidade(){
        if(velocidade.value <= 0 || isNaN(velocidade.value)){
            resultado.textContent = 'Digite uma velocidade válida'
        }
       else if(velocidade.value <= 60){
            resultado.textContent = `Sua velociade é de ${velocidade.value}KM/h, está dentro do limite da via, use sempre o sinto de segurança`
        }
        else{
            resultado.textContent = `ATENÇÃO!!!! sua velocidade é ${velocidade.value}KM/h, acima da velocidade permitida`
        }
    }

    verificar.addEventListener('click', function(){
        verificarVelocidade()
    })
})