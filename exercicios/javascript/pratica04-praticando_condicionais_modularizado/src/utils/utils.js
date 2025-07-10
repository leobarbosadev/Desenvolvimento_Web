export function validarEntrada(valor){ //PRECISO USAR O export PARA TORNAR A FUNÇÃO DISPONÍVEL EM OUTROS ARQUIVOS
    
    const saida = document.getElementById('resultado')
    if(valor === ''){ 
        saida.style.color = '#FF0000'
        saida.textContent = 'Atenção!!! Nenhum campo pode ser vazio';
        return null
    }

    return valor;

    }


export function adicionarEventoBotao(idBotao, funcao) {
    if(idBotao){
        idBotao.addEventListener('click', funcao);
    }
}

