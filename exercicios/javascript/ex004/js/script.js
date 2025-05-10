document.addEventListener('DOMContentLoaded', function(){
    const btnVermelho = document.getElementById('vermelho');
    const btnVerde = document.getElementById('verde');
    const btnAzul = document.getElementById('azul');

    const mostraQuadrado = document.getElementById('resultado');

    btnVermelho.addEventListener('click', function(){
        mostraQuadrado.style.backgroundColor = '#FF0000';
    });

    btnVerde.addEventListener('click', function(){
        mostraQuadrado.style.backgroundColor = '#00FF00';
    });

    btnAzul.addEventListener('click', function(){
        mostraQuadrado.style.backgroundColor = '#0000FF'
    });
})