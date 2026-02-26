const elementolista = document.getElementById('lista');

const elementoinput = document.getElementById('novoItem');

const elementobotao = document.getElementById('botaoAdicionar');

elementobotao.addEventListener('click', function(){

    const novoProduto = elementoinput.value;

    if(novoProduto !== ""){
        const novoitemElemento = document.createElement('li');

        novoitemElemento.textContent = novoProduto;

        elementolista.appendChild(novoitemElemento);

        elementoinput.value = '';
    }

});