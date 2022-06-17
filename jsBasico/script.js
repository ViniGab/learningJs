let d = new Date();

// No js os meses começam do 0, 0-janeiro, 1-fevereiro... 
console.log(d);  // Data. Fri Jun 17 2022 13:31:58 GMT-0300 (Horário Padrão de Brasília).
console.log(d.toDateString() );  // Data mais resumida. Fri Jun 17 2022.
console.log(d.toUTCString())  // A data resumida com hora. Fri, 17 Jun 2022 16:31:58 GMT. (europa 3 horas a menos.)
console.log(d.toString()) // Data, igual o primeiro ex.. Fri Jun 17 2022 13:34:32 GMT-0300 (Horário Padrão de Brasília)

let f = new Date(2022, 0, 1, 12, 30, 12);  // Definindo data manualmente, ano, mês, dia, hora, minutos e segundos. 
let h = new Date('2020-01-01 15:42:17');  // Outra maneira de definir, neste caso o 01 é janeiro.
// Tanto o JS quanto o PHP Começam a contar os milisegundos a partir de 1970.

console.log(d.getFullYear()); //pega o ano

console.log(d.getMonth()); //pega o mes (0 a 11)

console.log(d.getDay()); //dia da semana (0 a 6) comeca no domingo

console.log(d.getDate()); //pega o dia atual

console.log(d.getHours()); //pega a hora atual

console.log(d.getMinutes()); //pega os minutos atuais

console.log(d.getSeconds()); //pega os segundos

console.log(d.getMilliseconds()); //pega os milisegundos. 

console.log(d.getTime()); //pega os milisegundos de 1970 até a data sinalizada, time stamp. 

// console.log(date.now()); //pega os milisegundos antigos até a data atual com timestamp.

d.setFullYear(2022);  // para mudar o ano.
d.setMonth(11); // Para mudar o mês.
d.setDate(10); // Para mudar o dia do mês. 
d.setDate(d.getDate()+ 5)  // para saber o dia daqui 5 dias por exemplo.
d.setHours(d.getHours() + 24)  // Para saber a data daqui 24 horas.
let novoValor = d;
console.log( novoValor)


