    const exemploArryliteralDiv = document.getElementById("exemplo-array-literal");

    const frutas =['maça', 'uva', 'banana'];

    exemploArryliteralDiv.innerHTML =` 
    <h2>Exemplo de array com literal</h2>
    <p>Array: [${frutas}] </p>
    `;

    const exemploArryAcessoDiv = document.getElementById("exemplo-array-acesso")

    const num = [ 1, 2, 3, 4, 5, ];


    const primeiroElemento = num[0];
    const segundoElemento = num[1];
    const terceiraElemento = num[2];
    const quartaElemento = num[3];
    const quintaElemento = num[4];

    exemploArryAcessoDiv.innerHTML =`
    <h2>
    Exemplo de acesso aos elementos do array
    </h2>

    <p>Primeiro elemento: ${primeiroElemento}</p>
    <p>Segundo elemento: ${segundoElemento}</p>
    <p>Terceiro elemento: ${terceiraElemento}</p>
    <p>Quarta elemento: ${quartaElemento}</p>
    <p>Quinto elemento: ${quintaElemento}</p>
    `

    const exemploArryModificadoDiv = document.getElementById("exemplo-array-modificado")

    const cores = ["azul", "amarelo", "verde"]

    cores[0] = 'rosa';

    exemploArryModificadoDiv.innerHTML = `

    <h2>
    Exemplo de array modificado
    </h2>
    <p>Array: [${cores}]</p>
    `;