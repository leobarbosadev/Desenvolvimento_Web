document.addEventListener('DOMContentLoaded', function(){
    const num = document.getElementById('numero');
    const btnVerificar = document.getElementById('verificar');
    const resultado = document.getElementById('saida');

    //Math.trunc() - Remove casa decimais
    //Math.random() - Gera um número aleatório de 0 a 0,999
    let aleatorio = Math.trunc(Math.random() * 10)+ 1;
    
    btnVerificar.addEventListener('click', function(){
        if(aleatorio > num.value){
            resultado.textContent = `Você digitou ${num.value}, o número sorteado é maior`
        } else if(aleatorio < num.value){
            resultado.textContent = `Você digitou ${num.value}, o número sorteador é menor`
        } else{
            resultado.textContent = 'Você acertou!!!'
        }      
    });
})