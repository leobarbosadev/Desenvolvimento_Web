import { validarEntrada } from "../utils/utils.js";


export function calcularParImpar(){
    const entrada = document.getElementById('numero');
    const saida = document.getElementById('resultado')
    const numero = validarEntrada(entrada.value)
        if(numero === null){
            return;
        }

        if(numero % 2 === 0){
            console.log(saida);
            saida.textContent = `PAR`;
        }
        else{
            saida.textContent = 'ÍMPAR'
        }
}