document.addEventListener('DOMContentLoaded', function(){

    const verificar = document.getElementById('verificar');

    const resultado = document.getElementById('resultado');

    function anoBissexto(){
        const ano = parseInt(document.getElementById('ano').value);

        if(ano <= 0 || isNaN(ano)){
            resultado.textContent = 'Ano inválido, favor digitar um ano válido'
        }
        else if ((ano % 4 == 0 && ano % 100 !=0 ) ||(ano % 400== 0)){
            resultado.textContent = `O ano digitado foi ${ano}, ele é bissexto`
        }
        else{
            resultado.textContent = `O ano digitado foi ${ano}, ele não é bissexto`
        }
    }
    verificar.addEventListener('click', function(){
        anoBissexto()
    })
})