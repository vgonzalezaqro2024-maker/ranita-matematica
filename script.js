let jugador={nombre:'',edad:'',grado:''};
let posicion=1,puntos=0,racha=0,monedas=0,xp=0,nivelJugador=1,estrellas=0,respuestaCorrecta=0;

const rios={4:2,9:5,15:10,21:16,27:22};

function registrarJugador(){
const n=nombre.value.trim();
const e=edad.value.trim();
const g=grado.value;
if(!n||!e||!g){alert('Completa todos los campos');return;}
jugador={nombre:n,edad:e,grado:g};
registro.classList.add('oculto');
avatar.classList.remove('oculto');
}

function guardarAvatar(){
avatar.classList.add('oculto');
niveles.classList.remove('oculto');
}

function entrarNivelFacil(){
niveles.classList.add('oculto');
juego.classList.remove('oculto');
nombreJugador.textContent=jugador.nombre;
crearTablero();
actualizarPanel();
mostrarRanita();
}

function crearTablero(){
tablero.innerHTML='';
for(let i=1;i<=30;i++){
const d=document.createElement('div');
d.className='casilla';
if(rios[i]) d.classList.add('rio');
if(i===30) d.classList.add('meta');
d.id='c'+i;
d.textContent=i===30?'🏆':(rios[i]?'🌊':i);
tablero.appendChild(d);
}
}

function actualizarPanel(){
posicionActual.textContent=posicion;
puntos.textContent=puntos;
racha.textContent=racha;
monedas.textContent=monedas;
xp.textContent=xp;
nivelJugador.textContent=nivelJugador;
estrellas.textContent=estrellas;
}

function mostrarRanita(){
for(let i=1;i<=30;i++){
const c=document.getElementById('c'+i);
if(!c) continue;
c.textContent=i===30?'🏆':(rios[i]?'🌊':i);
}
document.getElementById('c'+posicion).textContent+=' 🐸';
}

function lanzarDado(){
const n=Math.floor(Math.random()*6)+1;
resultadoDado.textContent='Resultado: '+n;
moverRanita(n);
}

function moverRanita(pasos){
posicion=Math.min(30,posicion+pasos);
mostrarRanita();
actualizarPanel();
if(posicion===30){ganarJuego();return;}
generarPregunta();
}

function generarPregunta(){
let a=Math.floor(Math.random()*10)+1;
let b=Math.floor(Math.random()*10)+1;
respuestaCorrecta=a+b;
pregunta.textContent=`${a} + ${b} = ?`;
respuesta.value='';
}

function verificarRespuesta(){
if(respuesta.value==='') return;
if(parseInt(respuesta.value)===respuestaCorrecta){
puntos+=10;racha++;monedas+=5;xp+=20;estrellas++;
if(xp>=100){xp=0;nivelJugador++;}
}else{
racha=0;
}
if(rios[posicion]){
posicion=rios[posicion];
mostrarRanita();
}
actualizarPanel();
generarPregunta();
}

function ganarJuego(){
juego.classList.add('oculto');
victoria.classList.remove('oculto');
}

