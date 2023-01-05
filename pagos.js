



function capturar(){
    function Pagos(numeroLote,monto){
        this.numeroLote=numeroLote;
        this.monto=monto;
        
    }
    var loteCapturar = document.getElementById("numeroLote").value;
    var montoCapturar = document.getElementById("monto").value;
    

    nuevoControl = new Pagos(loteCapturar, montoCapturar);
    
       agregar();
}

var baseDatos=[];
function agregar(){
baseDatos.push(nuevoControl);
console.log(baseDatos)
document.getElementById("tabla").innerHTML +='<tbody><td>'+nuevoControl.numeroLote+'</td><td>'+nuevoControl.monto+'</td></tbody>';

localStorage.setItem(numeroLote , monto );

};

