let nome = 'Maria Silva Santos';

console.log(nome.indexOf('Silva')); // Onde a string inicia. 6.  

console.log(nome.slice(10, 15));  // serve para procurar o valor no local indicado, no caso "a San". pode ser usado negativo também.

console.log(nome.length)  // Tamanho, 18.

console.log(nome.substring(2, 8));  // ria Si

console.log(nome.replace('Silva', 'Rodrigues'));  // Maria Rodrigues Santos, substitui o elemento para vizualização.

// Lembrando que, como o replace acima não foi armazenado na variável principal a mesma continua com o valor anterior.

console.log(nome.toUpperCase());  // MARIA SILVA SANTOS
console.log(nome.toLowerCase());  // maria silva santos
console.log(nome.trim()); // Serve para reduzir os espaços do início e final. muito importante para formulários e acessos de usuários.
console.log(nome.charAt(4)); // Para saber o elemento que está nesta posição informada, no caso "a"
console.log(nome[4]); // O mesmo do acima, porém melhor utilizado.
console.log(nome.split(' '));  // separa a string, gera array. [ 'Maria', 'Silva', 'Santos' ].
// Obs: Caso a string acima estivesse sendo separada com outro simbolo ao invés do espaço, como o ";" ou outro, colocariamos este simbolo.




