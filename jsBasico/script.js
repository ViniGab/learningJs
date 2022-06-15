document.getElementById('Exemplo').innerHTML = 'Pedro'; // Com ID.
document.getElementsByClassName('lista') // Para classes.
document.getElementsByClassName('lista')[0].innerHTML = 'Item alterado!'; // Para um valor de classe em específico.
document.getElementsByTagName('button') // Para as tags.
document.getElementsByTagName('input') // Para as tags.
document.getElementsByName('text') // Para os campos de inputs e derivados.

document.querySelector('#procurarpeloID') // ID
document.querySelector('.lista') // Classes, sempre mostra o primeiro que for achado.
document.querySelectorAll('.lista') // O mesmo do acima, porém mostra todos os achados.
document.querySelector('button') // Procura pela tag.
document.querySelector('button').innerHTML = 'Inscreva-se'; // Alterando o conteúdo dentro do button.

