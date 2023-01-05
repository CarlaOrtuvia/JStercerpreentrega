const inputSearch = document.querySelector("#inputSearch");

const propietarios = `

[
  {
        "lote": 1,
        "nombre": "Facundo Lopez",
        "estado": "Vivienda",
        "deuda": "False"
    },
    {
        "lote": 2,
        "nombre": "Domingo Lopez",
        "estado": "Vivienda",
        "deuda": "False"
    },
    {
        "lote": 3,
        "nombre": "Alberto Molina",
        "estado": "Lote",
        "deuda": "True"
    },
    {
        "lote": 4,
        "nombre": "Pedro Gonzales",
        "estado": "Lote",
        "deuda": "True"
    },
    {
        "lote": 5,
        "nombre": "Antonieta Cañas",
        "estado": "Pileta",
        "deuda": "False"
    },
    {
        "lote": 6,
        "nombre": "Federico Cañas",
        "estado": "Lote",
        "deuda": "True"
    },
    {
        "lote": 7,
        "nombre": "Pedro Cañas",
        "estado": "Lote",
        "deuda": "True"
    },
    {
        "lote": 8,
        "nombre": "Laura Maidana",
        "estado": "Lote",
        "deuda": "True"
    },
    {
        "lote": 9,
        "nombre": "Angeles Andrada",
        "estado": "Pileta",
        "deuda": "False"
    },
    {
        "lote": 10,
        "nombre": "Facundo Fernandez",
        "estado": "Vivienda",
        "deuda": "False"
    }
]
`;
const jsonDato = JSON.parse(propietarios);
console.log(typeof jsonDato);

formartabla(jsonDato);
{
  return `<tr>
                 <td>${jsonDato.lote}</td>
                 <td>${jsonDato.nombre}</td>
                 <td>${jsonDato.estado}</td>
                 <td>${jsonDato.deuda}</td>
 </tr> `
};

const cargarDatos = (array) => {
  let tabla = "";
  if (array.length > 0) {
    array.forEach((jsonDato) => {
      tabla += formarTabla(jsonDato);
    });
    tbody.innerHTML = tabla;
  }
};

cargarDatos(jsonDato);
