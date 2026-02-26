const elementobotao = document.getElementById('alternarBotao')

const elementoDiv = document.getElementById('mensagem');

elementobotao.addEventListener('click',function(){
   
    if(mensagem.classList.contains('oculto')){
        mensagem.classList.remove('oculto')
    }
    else{
        mensagem.classList.add('oculto')
    }
})