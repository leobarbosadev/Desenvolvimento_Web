document.addEventListener('DOMContentLoaded', function () {

    let resultado = document.getElementById('resultado');

    //Se eu quiser iniciar a contagem ao carregar a páginam só tirar essa linha abaixo
    document.getElementById('iniciar').addEventListener('click', function() {
        //Define a variável de contagem
        let i = 10;
 
        const contadorRegressivo = 
        // Usar setInterval() reduzindo 1s (1000ms) para funcionar
        setInterval(() => {
            i--;

            resultado.textContent = `00:0${i}`;
            
            if (i < 0) {
                // clearInterval() remove as informações do contador anterior
                // clearInterval(contadorRegressivo);
                resultado.textContent = 'Tempo esgotado!';
            }
        }, 1000);
        
    });

})
