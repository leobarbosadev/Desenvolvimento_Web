import { validarEntrada } from "../utils/utils.js";


export function calcularParImpar(){
    const numero = validarEntrada('numero', 'resultado')
        if(numero % 2 === 0){
            console.log(numero);
            return textContent = `PAR`;
        }
}