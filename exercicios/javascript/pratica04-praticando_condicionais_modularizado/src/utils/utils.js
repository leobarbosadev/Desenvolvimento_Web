export function validarEntrada(entrada, saida){ //PRECISO USAR O export PARA TORNAR A FUNÇÃO DISPONÍVEL EM OUTROS ARQUIVOS
    const entrada = document.getElementById(entrada);
    const saida = document.getElementById(saida);
    if(entrada == 2){ 
        saida.textContent = 'TESTE';
    }

    }

export function adicionarEventoBotao(idBotao, funcao) {
    document.getElementById(idBotao).addEventListener('click', funcao);
}