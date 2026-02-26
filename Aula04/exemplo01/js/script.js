//Vamos pegar o elemento h1 com id = titulo

const texto = document.getElementById('titulo');

//Vamos pegar o elemento button com id = botao

const botao = document.getElementById('botao');

//Manipulador de evetos método addEvetlistener

botao.addEventListener('click', function(){

    //vamos alterar o texto do h1
    texto.textContent = 'Texto Alterado'
    
});
