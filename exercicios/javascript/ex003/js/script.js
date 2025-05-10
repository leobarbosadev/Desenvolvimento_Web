document.addEventListener('DOMContentLoaded', function(){
    const caracteres = document.getElementById('palavra');

    const resultado = document.getElementById('resultado');

    document.getElementById('palavra').addEventListener('input', function(){
        // contar = caracteres.value.length;
        resultado.textContent = caracteres.value.length; //contar
    })
})

