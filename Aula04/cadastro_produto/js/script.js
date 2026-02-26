document.addEventListener('DOMContentLoaded', function(){

    const produtoFormElement = document.getElementById('produtoForm');

    const produtotableElement = document.getElementById('produtotable');

    this.getElementsByTagName('tbody')[0]

    const produtoIdElement = document.getElementById('produtoId');
    const cancelarBnElement = document.getElementById('cancelar')

    let editing = false;

    function getProduto(){
        const produtos = localStorage.getItem('produtos');
        return produtos ? JSON.parse('produto') :[];
    }
        function salvar(){
            localStorage.setItem('produto', JSON.stringify(produtos));
       }

       function excluirprodutos(){
        produtotableElement.innerHTML = '';

        const produto = getProduto();

        for(let i = 0; i < produto.length; i++){
            const produto = produtos[i];

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
                
            }
            
        }
        
       })
    
})