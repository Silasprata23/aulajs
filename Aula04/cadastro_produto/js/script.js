document.addEventListener('DOMContentLoaded', function(){

    // Seleciona elementos HTML importantes
    const produtoFormElement = document.getElementById('produtoForm');

    const produtotableElement = document.getElementById('produtoTable').getElementsByTagName('tbody')[0];

    const produtoIdElement = document.getElementById('produtoId');

    const cancelarBnElement = document.getElementById('cancelar')

      // Variável para rastrear se estamos editando um produto existente
    let editing = false;

    // Função para obter todos os produtos do LocalStorage
    function getProduto(){
        const produtos = localStorage.getItem('produtos');
        return produtos ? JSON.parse('produtos') :[];
    }
    // Função para salvar os produtos no LocalStorage
        function salvar(produtos){
            localStorage.setItem('produtos', JSON.stringify(produtos));
       }

       
    // Função para exibir os produtos na tabela
       function exibirprodutos(){
        // Limpa a tabela antes de exibir os produtos
        produtotableElement.innerHTML = '';

        const produto = getProduto();

        for(let i = 0; i < produto.length; i++){
            const produto = produtos[i];
              // Cria uma nova linha na tabela
            const row = produtoFormElement.insertRow();

            const nomecell = row.insertcell()
            nomecell.textContent = 'R$ ' + produto.preço.toFixed(2);
            const disponibildadeCell = row.insertcell();
            disponibildadeCell.textContent = produto.disponibilidade
            disponibildadeCell.Classlis.add(produto.disponibilidade === 'Diponivel' ? disponivel : 'indisponivel');

            const actioncell = row.insertcell()

            const editarbtn = document.createElement('button');
            editarbtn.textContent = 'Editar';
            editarbtn.onclick = () => editarproduto(i)
            actioncell.appendChild(editarbtn)


            const excluirbtn = document.createElement('button');
            excluirbtn.textContent = 'Excluir';
            excluirbtn.onclick = () => excluirprodutos(i)
            actioncell.appendChild(excluirbtn)
        }
       }



       produtoFormElement.addEventListener('submit' , function(event) {
        eventPreventDefeult();
        const nome = document.getElementById('nome').value;
        const preço = parseFloat(document.getElementById('preco').value);
        const disponibilidade = document.getElementById('disponibilade').value;

        const produtoId = produtoIdElement.value

        if (nome && !isNaN(preco)) {

            const produto = getProduto()

            if(editing){
                produto[produtoId].nome = nome 
                produto[produtoId].preco = preco
                produto[produtoId].disponibildade = disponibilidade
                editing = false
            }else{
                produto.push({ nome: nome, preco: preco, disponibilidade: disponibilidade })
                
            }
            salvar(produtos);
            exibirprodutos();
            produtoFormElement.reset();
            produtoIdElement.value = '';
    
        } else {
            alert('Por favor, preencha o nome e o preço corretamente.');

        }});

            function editarproduto(index) {
                editing = true;
                const produtos = getProduto();
                const produto = produtos[index];

                document.getElementById('nome').value = produto.nome;
                document.getElementById('preco').value = produto.preco;
                document.getElementById('disponibilidade').value = produto.disponibildade;

                produtoIdElement.value = index;

                cancelarBnElement.style.display = 'inline-block';

            }

            function excluirprodutos(index) {

                if(confirm('Tem certeza que deseja excluir este produto?')) {
                    const produto = getProduto();
                    produto.splice(index, 1);
                    salvar();
                    exibirprodutos();
                }
                
                cancelarBnElement.addEventListener('click', function() {
                    editing = false;
                    produtoFormElement.reset();
                    produtoIdElement.value = '';
                    cancelarBnElement.style.display = 'none';
                
                });

                cancelarBnElement.style.display = 'none';

                exibirprodutos();

                    

            
        }
        
       });
    
