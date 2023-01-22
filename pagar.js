

let total = 0;

let celdasMonto = document.querySelectorAll('td + td');

for( let i = 0; i < celdasMonto.length; ++i){
    total += parseFloat(celdasMonto[i].firstChild.data);
}


let nuevaFila = document.createElement('tr');

let celdaTotal = document.createElement('td');

let textoCeldaTotal = document.createTextNode('Total a Pagar:');

celdaTotal.appendChild(textoCeldaTotal);
nuevaFila.appendChild(celdaTotal);

let celdaValorTotal = document.createElement('td');

let textoCeldaValorTotal = document.createTextNode(total);

celdaValorTotal.appendChild(textoCeldaValorTotal);
nuevaFila.appendChild(celdaValorTotal);

document.getElementById('tablaPagos').appendChild(nuevaFila);


const DateTime = luxon.DateTime;
console.log(DateTime.local)





