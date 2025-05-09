document.addEventListener('DOMContentLoaded', function(){
    let valor = document.getElementById('valor');

    let resultado = document.getElementById('resultado');

    document.getElementById('verificar').addEventListener('click', function(){
        if (parseFloat(valor.value) > 0){
            resultado.textContent = `O número ${valor.value} é maior que 0`
        } else if (parseFloat(valor.value) < 0){
            resultado.textContent = `O número ${valor.value} é menor que 0`
        } else{
            resultado.textContent = 'O número digitado é 0'
        }
    })
})