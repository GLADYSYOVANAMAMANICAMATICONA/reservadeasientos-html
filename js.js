var celdas = document.getElementsByTagName('td');
for (var i = 0; i < celdas.length; i++) {
    celdas[i].addEventListener('click',redirect,false);
}
function redirect(event){
    document.getElementById("mostrar").innerHTML=(event.target.textContent);

}
function reservarAsintos(){
	var n=document.getElementById("mostrar").textContent;
	var nombre=document.getElementById("nombre").value;
	var apellido=document.getElementById("apellido").value;
	var dni=document.getElementById("dni").value;
	var guardar=document.getElementById("lista");
	guardar.innerHTML+= "<center><div><h3>ASIENTOS RESERVADOS</h3><p>Nombre: </p><p>"+nombre+"</p></div><p>Apellido :</p><p>"+apellido+"</p><p>Dni :</p><p>"+dni+"</p></center>";

	

console.log(n)
}
function cancelar(){
   
}

function Mostrar(){
	var resultado ="";
	resultado += "<p>N° de asiento:+n + </p>";
    resultado += "<p>Nombre:+ nombre+ </p>";
    resultado += "<p>Apellido:+ apellido + </p>";
    resultado += "<p>Dni:+ dni + </p>";
     return resultado;
}

