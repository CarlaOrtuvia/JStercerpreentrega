
const botonGenerar = document.querySelector(".button.button-danger");
const botonPagos = document.querySelector(".btn.btn-primary");



botonGenerar.onclick = () => {
    location.href = 'http://127.0.0.1:5500/generarCupon.html';
};
botonPagos.addEventListener("click", ()=> {
    location.href = 'http://127.0.0.1:5500/controlPagos.html'
})









