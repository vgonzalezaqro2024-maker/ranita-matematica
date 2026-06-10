function registrarJugador(){

let nombre = document.getElementById("nombre").value;
let edad = document.getElementById("edad").value;
let grado = document.getElementById("grado").value;

if(nombre==="" || edad==="" || grado===""){
    alert("Completa todos los campos");
    return;
}

localStorage.setItem("nombre",nombre);
localStorage.setItem("edad",edad);
localStorage.setItem("grado",grado);

alert("¡Registro completado!");

document.getElementById("registro").style.display="none";
document.getElementById("menu").style.display="block";
}
function entrarNivelFacil(){
    alert("¡Bienvenido al Nivel Fácil!");
}
