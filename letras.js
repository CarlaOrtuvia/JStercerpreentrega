


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
    <p>Puntos: ${s.puntos} </p>
`;
    document.body.appendChild (contenedor);   
    
}

const btnsumaPuntos= document.querySelector(".btn btn-danger");

let total = sumaLetras.reduce((accum, p) =>{
    return accum + p.puntos;
  },0 );
  btnsumaPuntos.addEventListener ("click" , ()=>{
    alert(total)
  });
