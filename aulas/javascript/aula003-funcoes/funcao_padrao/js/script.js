//Aguarda o evento 'DOMContentLoaded' que é disparado quando o HTML está completamente carregado
document.addEventListener('DOMContentLoaded', () =>{
    //Obtém referência ao botão com o ID 'calcularBtn'
    const botao = document.getElementById('calcularBtn');
    
    //Adiciona um listener de evento clique ao botão
    botao.addEventListener('click', () => {
        //Obtém referência ao input com ID 'ladoInput
        const input = document.getElementById('ladoInput');
        //Converte o valor do input para um numero decimal
        const lado = parseFloat(input.value);

        //Verifica se o valor é inválido (não é número ou é <= 0)
        if (isNaN(lado) || lado <= 0){
            //Mensagem de erro caso o valor for inválido
            mostrarMensagem('Por favor, insira um valor válido maior que zero.');
            return; //Sai da função se o valor for inválido
        }
        
        //Calcula a area do quadrado com o lado fornecido
        const area = calcularAreaQuadrado(lado);
        //Mostra o resultado do cálculo
        mostrarMensagem(`A área do quadrado com lado ${lado} é: ${area}`);
    });
});
//Função que calcula a área de um quadrado (lado * lado)
function calcularAreaQuadrado(lado){
    return lado * lado;
}

//Função que exibe mensagens no elemento com ID 'resultado'
function mostrarMensagem(texto){
    const resultado = document.getElementById('resultado');
    resultado.textContent = texto;
}