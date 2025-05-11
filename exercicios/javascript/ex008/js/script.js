document.addEventListener('DOMContentLoaded', function () {
    let dado = document.getElementById('dado');

    const verificar = document.getElementById('verificar');

    let resultado = document.getElementById('saida');

    verificar.addEventListener('click', function() {
        let teste = dado.value;

        const tipoDado = typeof(teste);
        // Sempre retornará string vindo de um input
        resultado.textContent = `O tipo do dado inserido é: ${tipoDado}.`;
    });

})