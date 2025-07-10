import {adicionarEventoBotao } from "./utils/utils.js";
import {calcularParImpar } from "./modulos/parImpar.js";
import { calcularMaiorMenor } from "./modulos/maiorMenor.js";
import { calcularVelocidade } from "./modulos/monitorVelocidade.js";


const verificarParImpar = document.getElementById('btnVerificarParImpar');
const verifcarMaiorMenor = document.getElementById('btnVerificarMaior');
const verificarVelocidade = document.getElementById('btnVelocidade');


adicionarEventoBotao(verificarParImpar, calcularParImpar);
adicionarEventoBotao(verifcarMaiorMenor, calcularMaiorMenor);
adicionarEventoBotao(verificarVelocidade, calcularVelocidade)