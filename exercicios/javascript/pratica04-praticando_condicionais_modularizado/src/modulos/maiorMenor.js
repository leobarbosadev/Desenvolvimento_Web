import { validarEntrada } from "../utils/utils.js";


export function calcularMaiorMenor(){
    const numero1 = document.getElementById('numero1');
    const numero2 = document.getElementById('numero2');
    const numero3 = document.getElementById('numero3');

    const valorNumero1 = validarEntrada(numero1.value)
    const valorNumero2 = validarEntrada(numero2.value)
    const valorNumero3 = validarEntrada(numero3.value)

    const saida = document.getElementById('resultado')
    if((valorNumero1 && valorNumero2 && valorNumero3) !== null){
        if(valorNumero1 == valorNumero2 && valorNumero2 == valorNumero3){
        saida.style.color = '#000000'
        saida.textContent = 'Os números são iguais'
        return;
        }
        else{
            const maior = Math.max(valorNumero1, valorNumero2, valorNumero3)
            const menor = Math.min(valorNumero1, valorNumero2, valorNumero3)
            saida.style.color = '#000000'
            saida.textContent = `O maior número é ${maior} e o menor é ${menor}`
        }
        }   
}