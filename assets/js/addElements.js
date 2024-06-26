var btn = document.querySelector('.btn');
var despesas = document.querySelector('.despesas');
var valor = document.querySelector('.valor');

fetch('http://localhost:3333/data')
    .then(response => response.json())
    .then(data => {
        console.log(data)
    })