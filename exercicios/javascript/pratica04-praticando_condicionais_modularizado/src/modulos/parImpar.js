import { validarEntrada } from "../utils/utils.js";

export function calcularParImpar(){
    const entrada = document.getElementById('numero');
    const numero = validarEntrada(entrada.value)
    const saida = document.getElementById('resultado')
    
        if(numero !== null){
            if(numero % 2 === 0){
            console.log(saida);
            saida.style.color = '#000000'
            saida.textContent = `PAR`;
        }
        else{
            saida.style.color = '#000000'
            saida.textContent = 'ÍMPAR'
        }
        }
}