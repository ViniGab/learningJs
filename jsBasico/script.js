let pessoa = { 
    nome: 'João',
    sobrenome: 'Silvano',
    social: {
        facebook: 'Joaozin',
        instagram: 'Jão',
    },
    nomeCompleto: function() {
        return `${this.nome} ${this.sobrenome}`
    }
};

// Da maneira antiga. 
// let nome = pessoa.nome;
// let idade = pessoa.idade;
// let sobrenome = pessoa.sobrenome;
// let instagram = pessoa.social.instagram;

// Com destructuring.

let {nome:renomeandoVariavelNome, sobrenome, idade = 18} = pessoa // Para renomear o elemento no destructuring basta nomeVariável:novoNome.
// No caso de não existir a variável no objeto nós podemos fazer como o exemplo acima de idade. 

console.log(renomeandoVariavelNome, idade, sobrenome)  // João 40 Silvano