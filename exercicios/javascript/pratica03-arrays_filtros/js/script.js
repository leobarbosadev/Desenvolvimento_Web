document.addEventListener('DOMContentLoaded', function(){
    const produtos = [
        {nome: 'Sabonete Natural', preco: 15, categoria: 'cosmeticos'},
        {nome: 'Shampoo Orgânico', preco: 25, categoria: 'cosmeticos'},
        {nome: 'Granola Artesanal', preco: 18.50, categoria: 'alimentos'},
        {nome: 'Mel Puro', preco: 22, categoria: 'alimentos'}
    ];

    const teste = document.getElementById('produtos');

    const res = document.getElementById('resultado');

    function mostrarTodos(){
        let saida = '';
            produtos.forEach(function(exibir){
                saida += `${exibir.nome}<br> ${exibir.preco}<br>`;
            });
        res.innerHTML = `${saida}`;
    }
    
    function mostrarAlimentos(){
        const arrayFiltrado = produtos.filter(function(categoria){
                return categoria.categoria === 'alimentos'
            });
            res.innerHTML = `${arrayFiltrado}`

        let saida = '';
        arrayFiltrado.forEach(function(exibir){
            saida += `${exibir.nome}<br> ${exibir.preco}<br>`;
        });
    res.innerHTML = `${saida}`;
    }
    mostrarTodos();//Mostrar todos os produtos quando carregar a página a primeira vez

    teste.addEventListener('change', function(){
        if(teste.value ==='todos'){
            mostrarTodos();
        }
        else if(teste.value ==='alimentos'){
            mostrarAlimentos();
        }
    });
});