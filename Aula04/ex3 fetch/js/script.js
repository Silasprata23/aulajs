const fatogatoElement = document.getElementById('fatogato') 
const buscarfatoElement = document.getElementById('buscarfato')

async function busacargato() {

    try{
        const response = await fetch('https://catfact.ninja/fact')
        const dados = await response.json();
        fatogatoElement.textContent = dados.fact;
    }catch (error){
        fatogatoElement.textContent = 'Erro ao buscar um fato'
    }
    
}
buscarfatoElement.addEventListener('click', busacargato);
busacargato();