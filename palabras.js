
const btnEscribe= document.querySelector(".button button-outline")
const btnLetras= document.querySelector(".btn btn-primary")

btnEscribe.addEventListener("click", ()=> {
    location.href = 'escribePalabras.html'
});

btnLetras. addEventListener ( "click" , ()=>{
    location.href = `sumaLetras.html`
})


let sumaLetras = [
    { nombre: "c+o+c+i+n+a", puntos: 6 },
    { nombre: "m+e+s+a", puntos: 4},
    { nombre: "s+i+l+l+a", puntos:4},
    {nombre: "h+e+l+a+d+e+r+a", puntos:7},
 ]

for(let s of sumaLetras){
    let contenedor = document.createElement("div");
    contenedor.innerHTML = `
    <h3>Palabra: ${s.nombre}</h3>
    <p>Puntos: ${s.puntos}</p>
    `;
    document.body.appendChild(contenedor);   
    
}

const btnsumaPuntos= document.querySelector(".btn btn-danger");

let total = sumaLetras.reduce((accum, p) =>{
    return accum + p.puntos;
  },0 );
  btnsumaPuntos.addEventListener ("click" , ()=>{
    alert(total)
  });



















/*


const Palabras = [];
let cantidad = 5;

do {
    let entrada = prompt("Escribe palabras que comiencen con B");
    Palabras.push (entrada.toUpperCase());
} while (Palabras.length != cantidad);

alert (Palabras);
alert( "Vamos a sacar tu cuarta palabra");

const eliminar = (palabra) => {
    let index = Palabras. indexOf ( palabra);
    if (index !=-1){
        Palabras.splice(index, 1);
    }
};
eliminar( Palabras[3]);
alert(Palabras)

 alert("Sigamos");
 alert ("Te enseñaremos a sumar letras")
 
 constejemplo = [
    { nombre: "c+o+c+i+n+a", puntos: 6 },
    { nombre: "m+e+s+a", puntos: 4},
    { nombre: "s+i+l+l+a", puntos:4},
    {nombre: "h+e+l+a+d+e+r+a", puntos:7},
 ]
for ( const nombre of sumaLetras){
    alert(nombre.nombre);
    alert(nombre.puntos)
}
 alert("Vamos a sumar los totales! ")
*/
