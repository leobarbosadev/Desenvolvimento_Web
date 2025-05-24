const saudacao = function (nome){
    return `Olá, ${nome}! Seja bem-vindo(a).`;
};

const mostrarResultado = (mensagem) =>{
    const resultadoELement = document.getElementById('resultado');

    resultadoELement.innerHTML = `<p>${mensagem}</p>`;
};

document.addEventListener('DOMContentLoaded', () =>{
    const saudarBtn = document.getElementById('saudar');
    const limparBtn = document.getElementById('limpar');
    const nome = document.getElementById('nome')

    saudarBtn.addEventListener('click', function(){
        const mensagem = saudacao(nome.value)
        mostrarResultado(mensagem)
    });

    limparBtn.addEventListener('click', () =>{
        document.getElementById('resultado').innerHTML = '';
    });
});