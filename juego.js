
let posicion=1;
let tirada=0;
let respuestaCorrecta=0;

document.getElementById('nombreJugador').textContent=localStorage.getItem('nombre')||'';

const rios={9:5,18:11,27:20};

function crearTablero(){
const tablero=document.getElementById('tablero');
for(let i=1;i<=30;i++){
const d=document.createElement('div');
d.className='hoja';
if(rios[i]) d.classList.add('rio');
d.id='c'+i;
d.textContent=i;
tablero.appendChild(d);
}
mostrar();
}

function mostrar(){
for(let i=1;i<=30;i++){
const c=document.getElementById('c'+i);
if(c) c.textContent=i;
}
document.getElementById('c'+posicion).textContent='🐸';
}

function lanzarDado(){
tirada=Math.floor(Math.random()*6)+1;
document.getElementById('resultado').textContent='🎲 '+tirada;

const a=Math.floor(Math.random()*10)+1;
const b=Math.floor(Math.random()*10)+1;

respuestaCorrecta=a+b;

document.getElementById('pregunta').textContent=`${a} + ${b} = ?`;
}

function validar(){

const r=parseInt(document.getElementById('respuesta').value);

if(r===respuestaCorrecta){

posicion+=tirada;

if(posicion>30) posicion=30;

if(rios[posicion]){
alert('🌊 El río te arrastró');
posicion=rios[posicion];
}

mostrar();

if(posicion===30){
alert('🏆 ¡Ganaste!');
}

}else{
alert('❌ Incorrecto. No avanzas.');
}
}

crearTablero();
