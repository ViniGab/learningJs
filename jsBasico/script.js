let info = {
    nome: 'Larissa',
    sobrenome: 'Lacerta',
    idade: 40,
};

let novaInfo = {
    ...info,
    cidade:"Campina Grande",
    Estado:"Paraiba",
    País:"Brasil",
}

console.log(novaInfo)

// Resultado da operação acima com o ...spread.

/* {
    nome: 'Larissa',
    sobrenome: 'Lacerta',
    idade: 40,
    cidade: 'Campina Grande',
    Estado: 'Paraiba',
    'País': 'Brasil'
  } */