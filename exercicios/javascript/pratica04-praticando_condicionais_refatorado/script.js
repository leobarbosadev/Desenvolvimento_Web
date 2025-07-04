// //Função para validar as entradas
// function validarEntrada(id){
//     const entrada = document.getElementById(id)
//     if (entrada === null || entrada.trim() === ''){
        
        
//     }
// }

function validarEntrada(entrada, saida){
    if (entrada.value === null || entrada.value.trim() === ''){
        saida.textContent = 'Não é numero'        
    }
}


function adicionarEventoBotao(idBotao, funcao) {
    document.getElementById(idBotao).addEventListener('click', funcao);
}

adicionarEventoBotao('verificar', parImpar)

function parImpar(){
    const entrada = document.getElementById('numero')
    const saida = document.getElementById('resultado')
    const numero = validarEntrada(entrada, saida);
    if (numero !== null) {
        alert(`O número ${numero} é ${numero % 2 === 0 ? 'par' : 'ímpar'}!`);
    }
}
