var btn = document.querySelector('.btn');
var despesas = document.querySelector('.despesas');
var valor = document.querySelector('.valor');

var totalValor = 0;

fetch('http://localhost:3333/data')
    .then(response => response.json())
    .then(data => {
        data.forEach((element, index) => {

            totalValor += parseFloat(element.valor)
            valor.innerHTML = totalValor

            var elemento = document.createElement("div")
            elemento.setAttribute('class', 'despesa')
            elemento.setAttribute('id', `${index}`)
            var despesa = `${element.despesa}`
            var valor_despesa = parseFloat(`${element.valor}`)
            elemento.innerHTML = `<h3>${despesa}</h3>` + `<h3>${valor_despesa}</h3>`;

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