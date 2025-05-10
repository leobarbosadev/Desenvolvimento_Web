document.addEventListener('DOMContentLoaded',function(){

    const ul = document.getElementById('lista');

    const texto = document.getElementById('tarefa');

    const addItem = tarefa =>{
    const li = document.createElement('li');
    li.textContent = tarefa;
    ul.appendChild(li);
};

document.getElementById('adicionar').addEventListener('click', function(){
    addItem(texto.value);
});
});

