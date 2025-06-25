document.addEventListener('DOMContentLoaded', function(){

    const resultado = document.getElementById('resultado');

    const verificar = document.getElementById('verificar');

    function verificarTriângulo(){
        const seguimento1 = parseFloat(document.getElementById('seg1').value);

        const seguimento2 = parseFloat(document.getElementById('seg2').value);

        const seguimento3 = parseFloat(document.getElementById('seg3').value);


        if(isNaN(seguimento1)){
            resultado.textContent = 'Valores inválidos, digite valores válidos'
        }
        else if(seguimento1 <= 0 || seguimento2 <= 0 || seguimento3 <= 0){
            resultado.textContent = `os seguimentos ${seguimento1}, ${seguimento2} e ${seguimento3} não formam um triângulo`
        }
        else if((seguimento1 < (seguimento2 + seguimento3)) && (seguimento2 < (seguimento1 + seguimento3)) && (seguimento3 < (seguimento2 + seguimento1))){
            resultado.textContent = `os seguimentos ${seguimento1}, ${seguimento2} e ${seguimento3} podem formar um triângulo`
        }
        else{
            resultado.textContent = `os seguimentos ${seguimento1}, ${seguimento2} e ${seguimento3} não formam um triângulo`
        }
    }

    verificar.addEventListener('click',function(){
        verificarTriângulo()
    })
})