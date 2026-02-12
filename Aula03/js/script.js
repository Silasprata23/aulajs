let produtos = []; 

//função para buscar os pordutos do arquivo JSON

async function carregarProdutos() {
    try{
        const resposta = await fetch('produtos.json')
        produtos = await resposta.json();
        exibirProdutos();    
    } catch(error){
        console.error('Erro ao carregar produtos', error);
        alert('Erro ao carregar os produtos');     
    }
}

function adicionarProdutos() {
    const nome = document.getElementById('nome').value;
    const preco = parseFloat(document.getElementById('preco').value);
    const disponivel = document.getElementById('disponivel').value;

    if(nome && !isNaN(preco)){
        const novoProduto = {
            nome: nome,
            preco: preco,
            disponivel: disponivel,
        }

        produtos.push(novoProduto);

        document.getElementById('nome').value = ' ';
        document.getElementById('preco').value = ' ';
        document.getElementById('disponivel').value = ' ';

        exibirProdutos();
    }else{
        alert('por favor preencha corretamente o nome e o preço ')
    }

}

function exibirProdutos() {
    const listarProdutosdiv = document.getElementById('lista-produtos');
    
    listarProdutosDiv.innerHTML = '';

    produtos.forEach((produto, index) => {
        const produtoDiv = document.createElement('div');
        produtoDiv.classList.add('produto')

        const nomeH3 = document.createElement('h3');
        nomeH3.textContent = produto.nome;

        const pPreco = document.createElement('p')
    pPreco.textContent = `Preço: R$ ${produto.preco.toFixed(2)}`;
   
        const disponibilidadeP = document.createElement('p')
        disponibilidadeP.textContent = `Disponibilidade `

        const spanDisponibilidade = document.createElement('span')
        spanDisponibilidade.textContent = produto.disponivel ? 'disponivel : indisponivel'
        spanDisponibilidade.classList.add(produto.disponivel ? 'disponivel : indisponivel')

        disponibilidadeP.appendChild(spanDisponibilidade)

        produtoDiv.appendChild(nomeH3);
        produtoDiv.appendChild(pPreco);
        produtoDiv.appendChild(disponibilidadeP);

        listarProdutosDiv.appendChild(produtoDiv);

    })
    
}

carregarProdutos();
