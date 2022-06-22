function loadPosts() {
    document.getElementById("posts").innerHTML = 'Carregando...'

    fetch('https://jsonplaceholder.typicode.com/posts')  // fetch retorna uma promisse
        .then(function(resultado){
            return resultado.json();
        })
        .then(function(json){
            document.getElementById("posts").innerHTML = json.length+' posts'
        })
        .catch(function(error){
            console.log("Deu problema!")
        })
}


/* Obs: logo após o fetch e os parênteses, nós podemos colocar uma chave e definir o método que vai ser utilizado, como Get, Post, etc. 
O padrão que já vem setado é GET. */


