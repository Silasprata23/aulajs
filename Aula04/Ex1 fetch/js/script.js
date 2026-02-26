fetch('https://jsonplaceholder.typicode.com/user/')

.then(response => response.json())

.then(usuario => {
    const todosusuarios = document.getElementById('listarUsuarios')

    usuario.foreach(user => {
        const cadaUsuario = document.createElement('li')
        cadaUsuario.textContent = user.name + '(' + user.email + '('
        todosusuarios.appendChild(cadaUsuario)
    })
})
.catch(Error => {
    document.getElementById('todosusuarios').textContent = 'erro ao buscar os usuarios'
});
