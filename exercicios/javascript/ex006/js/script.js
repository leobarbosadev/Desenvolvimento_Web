//document.addEventListener('DOMContentLoaded', function() Garante que o código JavaScript seja executado apenas após o carregamento completo do conteúdo HTML.

document.addEventListener('DOMContentLoaded', function(){
    const palavra = document.getElementById('palavra');
    const saida = document.getElementById('saida');

    document.getElementById('verificar').addEventListener('click', function(){

        //toLowerCase() - deixa tudo em minúsculo
        //replace(/\s/g, '') - retira todos os espaços da string      
        textoSemEspaco = palavra.value.toLowerCase().replace(/\s/g, '');

        //split('') - Divide a string em um array de caracteres
        //reverse() - Inverte a ordem dos elementos no array
        //join('') - Junta os elementos do array novamente em uma string
        textoInvertido = textoSemEspaco.split('').reverse().join('')

        if(textoSemEspaco === textoInvertido){
            saida.textContent = `${palavra.value} é palíndromo `;
        }else{
            saida.textContent = `${palavra.value} não é palíndromo.`;
        }
    });
});