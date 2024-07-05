var btn = document.querySelector('.btn');
var despesas = document.querySelector('.despesas');
var valor = document.querySelector('.valor');

var idColetado;

fetch('http://localhost:3333/data')
    .then(response => response.json())
    .then(data => {
        data.forEach((element, index) => {
            var elemento = document.createElement("div")
            elemento.setAttribute('class', 'despesa')
            elemento.setAttribute('id', `${index}`)
            var despesa = `${element.despesa}`
            var valor = `${element.valor}`
            elemento.innerHTML = `<h3>${despesa}</h3>` + `<h3>${valor}</h3>`;
            despesas.appendChild(elemento)
        });
    })

    document.addEventListener('click', (e) => {
        if(e.target.classList.contains('despesa')) {
            idColetado = e.target.id
            console.log(idColetado)
            window.location.href = `/delete/${idColetado}`;
        }
    })