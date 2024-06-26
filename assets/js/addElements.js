var btn = document.querySelector('.btn');
var despesas = document.querySelector('.despesas');
var valor = document.querySelector('.valor');

fetch('http://localhost:3333/data')
    .then(response => response.json())
    .then(data => {
        data.forEach(element => {
            var elemento = document.createElement("div")
            elemento.setAttribute('class', 'despesa')
            var despesa = `${element.despesa}`
            var valor = `${element.valor}`
            elemento.innerHTML = `<h3>${despesa}</h3>` + `<h3>${valor}</h3>`;
            despesas.appendChild(elemento)
        });
    })