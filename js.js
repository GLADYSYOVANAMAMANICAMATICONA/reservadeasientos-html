var celdas = document.getElementsByTagName('td');
for (var i = 0; i < celdas.length; i++) {
    celdas[i].addEventListener('click',redirect,false);
}
function redirect(event){
    document.getElementById("mostrar").innerHTML=(event.target.textContent);
    pintar=event.target;

}

var arrayDeAsientos = []
var records = document.getElementById('lista');
function Pasajero(n,nombre,apellido,dni){
	this.ndeasiento=n,
	this.nombrep=nombre,
	this.apellidop=apellido,
	this.dnip=dni
}

var pintar;
function reservarAsientos(){
	var n=document.getElementById("mostrar").textContent;
	console.log(n);
	var nombre=document.getElementById("nombre").value;
	var apellido=document.getElementById("apellido").value;
	var dni=document.getElementById("dni").value;
	/*var guardar=document.getElementById("lista");
	guardar.innerHTML+= "<center><div><h3>ASIENTOS RESERVADOS</h3><p>N° de asiento:"+n+"</p><p>Nombre: "+nombre+"</p></div><p>Apellido :"+apellido+"</p><p>Dni :"+dni+"</p></center>";
console.log(n)*/
    var reservadeasiento = new Pasajero(n, nombre, apellido, dni);
    arrayDeAsientos.push(reservadeasiento);
     pintar.style.backgroundColor="blue";
    console.log(arrayDeAsientos)



}


function cancelar(){

}
function listar(){
	var listartodo = "";
		for (var i = 0; i<arrayDeAsientos.length;i++) {
		listartodo+=arrayDeAsientos[i].ndeasiento+"<br>" 
				+arrayDeAsientos[i].nombrep+"<br>"
				+arrayDeAsientos[i].apellidop+"<br>"
				+arrayDeAsientos[i].dnip+"<br>";
	}
	//document.getElementById(listartodo).value;
document.getElementById("listar").innerHTML=listartodo;
}





function buscar() {

  if (dni==buscardni) {

  }

}

