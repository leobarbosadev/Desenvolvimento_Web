import { validarEntrada } from "../utils/utils.js";

export function calcularVelocidade(){
    const velocidade = document.getElementById('velocidade');
    const valorVelocidade = validarEntrada(velocidade.value)
    const saida = document.getElementById('resultado')

        if(valorVelocidade !== null){
            if(valorVelocidade > 60){
                saida.style.color = "#FF0000"
                saida.textContent = `ATENÇÃO!!!! sua velocidade é ${velocidade.value}KM/h, acima da velocidade permitida`
            }
            else{
                saida.style.color = '#000000'
                saida.textContent = `Sua velociade é de ${velocidade.value}KM/h, está dentro do limite da via, use sempre o sinto de segurança`
            }
        }
       
    }