const produtos = {
    produto1: {
        nome: "Camiseta algodão premium",
        preco : 59.99,
        disponivel: true,
    },
    produto2: {
        nome: "Calça Jeans slim fit ",
        preco : 89.99,
        disponivel: false,
    },
    produto3: {
        nome: "Tenis esportivo Nike",
        preco : 400.00,
        disponivel: true,
    },

};

const listarProdutosDiv = document.getElementById("listar-produtos");


for(const key in produtos){

    if(produtos.hasOwnProperty(key)){
        const produto = produtos[key]


        const produtoDiv = document.createElement('div');
    produtoDiv.classList.add('produto');


    const nomeH3 = document.createElement('h3');

    nomeH3.textContent = produto.nome;


    const precoP = document.createElement('P');

    precoP.textContent = `Preço: R$ ${produto.preco.toFixed(2)}`;

    const disponibilidadeP = document.createElement('p');

    disponibilidadeP.textContent = `Disponibilidade: `;

    const spanDisponibilidade = document.createElement('span');
    spanDisponibilidade.textContent = produto.disponivel ? 'Disponivel' : 'Indisponível';

    spanDisponibilidade.classList.add(produto.disponivel ? 'disponivel' : 'indisponivel');

    disponibilidadeP.appendChild(spanDisponibilidade);

    produtoDiv.appendChild(nomeH3);
    produtoDiv.appendChild(precoP);
    produtoDiv.appendChild(disponibilidadeP);



    listarProdutosDiv.appendChild(produtoDiv)
    }




}