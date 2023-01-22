var contenido = document.querySelector('#contenido')


function traer() {
    fetch("/datos.json")
    .then(resp => resp.json() )
    .then(datos => {
        tabla(datos)
    });
};
function tabla(datos) {
   
    contenido.innerHTML = ''
    for(let valor of datos){
       contenido.innerHTML += `
       <tr>
       <th scope="row">${ valor.lote }</th>
       <td>${ valor.nombre }</td>
       <td>${ valor.estado }</td>
       <td>${ valor.deuda ? "Azul" : "Rojo" }</td>
     </tr>
       `
    }
}



let nuevoBoton = document.createElement ("buton");
nuevoBoton.setAttribute("class", "btn btn-primary");
nuevoBoton.setAttribute("id", "botonUno");
nuevoBoton.textContent = "Cupon de pago";

document.querySelector("#generador").appendChild(nuevoBoton);

nuevoBoton.addEventListener('click', () => {
    Toastify({
        text: "Click para generar el cupón AZUL!",
        duration: 3000,
        destination: 'cuponPago.html',
    }).showToast();

})



let botonExtra = document.createElement ("buton");
botonExtra.setAttribute("class", "btn btn-danger");
botonExtra.setAttribute("id","botonDos");
botonExtra.textContent = "Cupon de pago";

document.querySelector('#generador').appendChild(botonExtra);

botonExtra.addEventListener('click', () => {
    Toastify({
        text: "Click para generar el cupón ROJO!",
        duration: 3000,
        destination: 'cuponDeuda.html',
    }).showToast();
})




