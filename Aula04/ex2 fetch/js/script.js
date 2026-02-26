const loadingElement = document.getElementById('loading')
const loadingproduto = document.getElementById('produto')
const errorElement = document.getElementById('error')

fetch('https://fakestoreapi.com/products/1')
.then(response => {
    if(!response.ok){
        throw new Error('Deu erro ao buscar os dados: ' + response.status);
    }
    return response.json();
})

.then(data => {
    loadingElement.style.display = 'none';
    loadingproduto.innerHTML = `
    <h2>${data.title}</h2>
    <p>${data.descriptio}</p>
    <img src='${data.image}' alt='${data.title}'>
    `
}) 
.catch(error => {
    loadingElement.style.display ='none'
    errorElement.textContent = error.message;
})
