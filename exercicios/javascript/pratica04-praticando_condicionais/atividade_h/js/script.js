document.addEventListener('DOMContentLoaded', function(){
    const resultado = document.getElementById('resultado');

    const verificar = document.getElementById('verificar');

    function calcularRaiz(){
        const valora = parseFloat(document.getElementById('valora').value);

        const valorb = parseFloat(document.getElementById('valorb').value);

        const valorc = parseFloat(document.getElementById('valorc').value);

        let delta = parseFloat((valorb**2) - 4*valora*valorc)

        let raiz_delta = delta **(1/2);
        // let raiz_delta = Math.sqrt(delta)

        if(delta < 0){
            resultado.textContent = `O valor de \u0394 é ${delta}, não existe raiz real`
        }
        else{
            if(valora === 0){
                resultado.textContent = 'ATENÇÃO!!! Valor de a não pode ser 0'

            }else{
                
                x1 = (-valorb + raiz_delta)/ (2 * valora)
    
                x2 = (-valorb -raiz_delta)/ (2 * valora)
                
                resultado.textContent = `O valor de \u0394 é ${delta}, os valores das raizes serão iguais a: x'= ${x1} e x''= ${x2}` // \u0394 É O SÍMBOLO DE DELTA EM UNICODE
            }
            //VALIDAR O VALOR DE a NÃO PODE SER 0

        }
    }

    verificar.addEventListener('click', function(){
        calcularRaiz()
    })
})