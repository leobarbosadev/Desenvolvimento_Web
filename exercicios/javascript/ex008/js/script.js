document.addEventListener('DOMContentLoaded', function () {
    let dado = document.getElementById('dado');

    const verificar = document.getElementById('verificar');

    let resultado = document.getElementById('saida');

    verificar.addEventListener('click', function() {

         const tipoDado = dado.value.toLowerCase();
        if (tipoDado === 'true' || tipoDado === 'false'){
            resultado.textContent = `O tipo do dado é um booleno`;
        }else if(parseFloat(tipoDado) == tipoDado){

            resultado.textContent = `O tipo do dado é um numero`;
        }else{
            resultado.textContent = `O tipo do dado é uma string`;
        }
    });

});