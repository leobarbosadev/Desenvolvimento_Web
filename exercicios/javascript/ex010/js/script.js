document.addEventListener('DOMContentLoaded', function(){
    const senha = document.getElementById('senha');

    const resultado = document.getElementById('saida');

    
    document.getElementById('validar').addEventListener('click', function(){
        const regex = /^(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
        const senhaValidada = regex.test(senha.value);

        if(senhaValidada == true){
            resultado.textContent = `Senha forte ${senha.value}`;
        } else{
            resultado.textContent = `Senha fraca ${senha.value}`
        }
    });
})