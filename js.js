var celdas = document.getElementsByTagName('td');
for (var i = 0; i < celdas.length; i++) {
    celdas[i].addEventListener('click',redirect,false);
}
function redirect(event){
    document.getElementById("mostrar").innerHTML=(event.target.textContent);
    pintar=event.target;

}

var arrayDeAsientos = []
//var records = document.getElementById('lista');
function Pasajero(n,nombre,apellido,dni){
	this.ndeasiento = n,
	this.nombrep = nombre,
	this.apellidop = apellido,
	this.dnip = dni
};

var pintar;
function reservarAsientos(){
	var n=document.getElementById("mostrar").textContent;
	console.log(n);
	var nombre=document.getElementById("nombre").value;
	var apellido=document.getElementById("apellido").value;
	var dni=document.getElementById("dni").value;
	var reservadeasiento = new Pasajero(n, nombre, apellido, dni);
    arrayDeAsientos.push(reservadeasiento);
     pintar.style.backgroundColor="blue";
    console.log(arrayDeAsientos)
limpiar()


}


function cancelar(){

}
function listar(){
	var listartodo = "";
	for (var i = 0; i<arrayDeAsientos.length; i++) {
		listartodo+=arrayDeAsientos[i].ndeasiento+"  Nombre: "+ 
		arrayDeAsientos[i].nombrep+" Apellido: "+
		arrayDeAsientos[i].apellidop+" DNI: "+
		arrayDeAsientos[i].dnip+"<br>";
	}

console.log(listartodo)
document.getElementById("lista").innerHTML=listartodo;
}





function buscar() {

  if (dni==buscardni) {

  }

}
function limpiar(){
  document.getElementById("mostrar").value="";
  document.getElementById("nombre").value="";
  document.getElementById("apellido").value="";
 document.getElementById("dni").value="";
}
