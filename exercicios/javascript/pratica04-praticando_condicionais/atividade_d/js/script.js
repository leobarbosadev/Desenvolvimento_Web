// Se o salário for menor que R$1000,00, aplica-se um aumento de 10%.
// Se o salário for maior que R$1500,00, aplica-se um aumento de 5%.
// Se o salário for entre R$1000,00 e R$1500,00 (inclusive), o salário permanece o mesmo.
// O sistema também deve verificar se o valor informado não é zero ou negativo e, nesse caso, exibir uma mensagem de erro.


document.addEventListener('DOMContentLoaded', function(){
    
    
    const verificar = document.getElementById('verificar');

    const resultado = document.getElementById('resultado');
    
    function calcularSalario(){
        let salario = parseFloat(document.getElementById('salario').value);
        
        let novo_salario = 0;

        if(salario <= 0 || isNaN(salario)){
            resultado.textContent = 'Valor inválido, favor inserir um valor válido'
        }
       else if(salario < 1000){
            novo_salario = salario + (salario * 0.1);
            resultado.textContent = `Seu salário atual é de R$${salario.toFixed(2)}, seu novo salário com 10% de acréscimo é de R$${novo_salario.toFixed(2)}`;
        }
        else if(salario > 1500){
            novo_salario = salario + (salario * 0.05);
            resultado.textContent = `Seu salário atual é de R$${salario.toFixed(2)}, seu novo salário com 10% de acréscimo é de R$${novo_salario.toFixed(2)}`
        }
        else{
            resultado.textContent = `Seu salário é de R$${salario.toFixed(2)}, não está no intervalo para aumento`
        }
    }

    verificar.addEventListener('click', function(){
        calcularSalario()
    });
})