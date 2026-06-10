
const jugador={};

function mostrar(id){
document.querySelectorAll('.pantalla').forEach(p=>p.classList.remove('activa'));
document.getElementById(id).classList.add('activa');
}

function irDificultad(){
jugador.nombre=document.getElementById('nombre').value;
jugador.edad=document.getElementById('edad').value;
if(!jugador.nombre || !jugador.edad){alert('Completa los datos');return;}
mostrar('dificultad');
}

function guardarDificultad(nivel){
jugador.dificultad=nivel;
mostrar('avatar');
}

function iniciarJuego(){
jugador.avatar=document.getElementById('avatarSelect').value;
document.getElementById('info').innerText=jugador.avatar+' '+jugador.nombre+' - '+jugador.dificultad;
mostrar('juego');
}

