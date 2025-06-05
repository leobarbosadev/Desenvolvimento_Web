document.addEventListener('DOMContentLoaded', function(){
    const produtos = [
        {nome: 'Sabonete Natural', preco: 15.0, categoria: 'cosmeticos'},
        {nome: 'Shampoo Orgânico', preco: 25.0, categoria: 'cosmeticos'},
        {nome: 'Granola Artesanal', preco: 18.5, categoria: 'alimentos'},
        {nome: 'Mel Puro', preco: 22.0, categoria: 'alimentos'}
    ];

    const arrayProdutos = document.getElementById('produtos');

    const resultado = document.getElementById('resultado');

    const total = document.getElementById('total');

    function mostrarTodos(){
        let saida = '';
        let soma = 0;

        produtos.forEach(function(exibir){
            saida += `<div class='produto'><strong>${exibir.nome}</strong><br> R$ ${exibir.preco.toFixed(2)}<br></div>`;
            soma += exibir.preco;
            });
        resultado.innerHTML = `${saida}`;
        total.innerHTML = `Total: R$ ${soma.toFixed(2)}`;
    };
    
    function mostrarAlimentos(){
        const arrayFiltrado = produtos.filter(function(categoria){
                return categoria.categoria === 'alimentos';
            });
            resultado.innerHTML = `${arrayFiltrado}`

        let saida = '';
        let soma = 0;

        arrayFiltrado.forEach(function(exibir){
            saida += `<div class='produto'><strong>${exibir.nome}</strong><br> R$ ${exibir.preco.toFixed(2)}<br></div>`;
            soma += exibir.preco;
            });
        resultado.innerHTML = `${saida}`;
        total.innerHTML = `Total: R$ ${soma.toFixed(2)}`;
    };
    
    function mostrarCosmeticos(){
        const arrayFiltrado = produtos.filter(function(categoria){
            return categoria.categoria === 'cosmeticos';
        });
        resultado.innerHTML = `${arrayFiltrado}`

        let saida = '';
        let soma = 0;

        arrayFiltrado.forEach(function(exibir){
            saida += `<div class='produto'><strong>${exibir.nome}</strong><br> R$ ${exibir.preco.toFixed(2)}<br></div>`
            soma += exibir.preco;
            });
        resultado.innerHTML = `${saida}`;
        total.innerHTML = `Total: R$ ${soma.toFixed(2)}`;

    };

    mostrarTodos();//Mostrar todos os produtos quando carregar a página a primeira vez

    arrayProdutos.addEventListener('change', function(){
        if(arrayProdutos.value ==='todos'){
            mostrarTodos();
        }else if(arrayProdutos.value ==='alimentos'){
            mostrarAlimentos();
        }else{
            mostrarCosmeticos();
        }

    });
});

