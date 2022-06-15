HTML:

<img src="images/cachorro.jpg" data-animal='Cachorro' class="imagem" /><br/>

<button onclick="trocarImagem('cachorro.jpg', 'Cachorro')">Cachorro</button>
<button onclick="trocarImagem('gato.jpg', 'Gato')">Cachorro</button>

Script:

function trocarImagem(filename, animalname) {
    document.querySelector('.imagem').setAttribute('src', 'images/'+filename);
    document.querySelector('.imagem').setAttribute('data-animal', animalname);
}