let timer;

// setTimeout(function() {
//     alert("Rodou :D");

// }, 2000);


function rodar() {
    timer = setTimeout(function() {
        document.querySelector('.demo').innerHTML = 'Rodou!';
    }, 2000);
}

function parar() {
    clearTimeout(timer);
}