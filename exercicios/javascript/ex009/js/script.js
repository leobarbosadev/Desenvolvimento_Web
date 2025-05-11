document.addEventListener('DOMContentLoaded', function(){
    const resultado = document.getElementById('saida');

    const body = document.body;

    document.getElementById('tema').addEventListener('click', function(){
        
        console.log(body.style.backgroundColor);

        //Aqui preciso passar a cor como rgb pois é assim que o navegador entende internamente
        if(body.style.backgroundColor === 'rgb(0, 0, 0)'){
            resultado.style.color = 'rgb(0, 0, 0)';
            body.style.backgroundColor= 'rgb(255, 255, 255)';
        } else{
            resultado.style.color = 'rgb(255, 255, 255)';
            body.style.backgroundColor= 'rgb(0, 0, 0)'
        }
    });
});