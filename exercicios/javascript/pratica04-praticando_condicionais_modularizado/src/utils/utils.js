export function validarEntrada(valor){ //PRECISO USAR O export PARA TORNAR A FUNÇÃO DISPONÍVEL EM OUTROS ARQUIVOS
    console.log(valor)
    
    const saida = document.getElementById('resultado')
    if(valor === ''){ 
        console.log('Validacao')
        saida.textContent = 'VAZIO';
        return null
    }

    return valor;

    }

export function adicionarEventoBotao(idBotao, funcao) {
    document.getElementById(idBotao).addEventListener('click', funcao);
}