```javascript
// =============================
// VARIABLES DEL JUEGO
// =============================

let jugador = {
    nombre: "",
    edad: "",
    grado: ""
};

let avatar = {
    sombrero: "🎩",
    color: "#7CFC00"
};

let posicion = 1;
let puntos = 0;
let racha = 0;
let estrellas = 0;

let monedas = 0;

let xp = 0;

let nivelJugador = 1;

let estrellas = 0;
let respuestaCorrecta = 0;
// =============================
// SISTEMA DE EXPERIENCIA
// =============================

function ganarXP(cantidad){

    xp += cantidad;

    if(xp >= 100){

        xp = 0;

        nivelJugador++;

        monedas += 20;

        alert(
            "🎉 ¡Subiste al nivel " +
            nivelJugador + "!"
        );

    }

}
// =============================
// REGISTRO DEL JUGADOR
// =============================

function registrarJugador(){

    let nombre = document.getElementById("nombre").value.trim();
    let edad = document.getElementById("edad").value.trim();
    let grado = document.getElementById("grado").value;

    if(nombre === "" || edad === "" || grado === ""){
        alert("Completa todos los campos.");
        return;
    }

    jugador.nombre = nombre;
    jugador.edad = edad;
    jugador.grado = grado;

    localStorage.setItem("nombre", nombre);
    localStorage.setItem("edad", edad);
    localStorage.setItem("grado", grado);

    document.getElementById("registro").style.display = "none";
    document.getElementById("avatar").style.display = "block";
}

// =============================
// PERSONALIZACIÓN DE AVATAR
// =============================

document.addEventListener("DOMContentLoaded", () => {

    let sombrero = document.getElementById("sombrero");
    let color = document.getElementById("colorRanita");

    if(sombrero){
        sombrero.addEventListener("change", actualizarAvatar);
    }

    if(color){
        color.addEventListener("change", actualizarAvatar);
    }

});

function actualizarAvatar(){

    let sombreroElegido =
        document.getElementById("sombrero").value;

    let colorElegido =
        document.getElementById("colorRanita").value;

    document.getElementById("sombreroVista").innerHTML =
        sombreroElegido;

    document.getElementById("ranita").style.color =
        colorElegido;
}

function guardarAvatar(){

    avatar.sombrero =
        document.getElementById("sombrero").value;

    avatar.color =
        document.getElementById("colorRanita").value;

    localStorage.setItem(
        "sombrero",
        avatar.sombrero
    );

    localStorage.setItem(
        "colorRanita",
        avatar.color
    );

    document.getElementById("avatar").style.display =
        "none";

    document.getElementById("niveles").style.display =
        "block";
}

// =============================
// NIVEL FÁCIL
// =============================

function entrarNivelFacil(){

    document.getElementById("niveles").style.display =
        "none";

    document.getElementById("juego").style.display =
        "block";

    document.getElementById("nombreJugador").innerText =
        jugador.nombre;

    actualizarPanel();

    mostrarRanita();
}

// =============================
// PANEL DE INFORMACIÓN
// =============================

function actualizarPanel(){

    document.getElementById("posicionActual").innerText =
        posicion;

    document.getElementById("puntos").innerText =
        puntos;

    document.getElementById("racha").innerText =
        racha;
        document.getElementById("monedas").innerText =
monedas;

document.getElementById("xp").innerText =
xp;

document.getElementById("nivelJugador").innerText =
nivelJugador;
}

// =============================
// MOSTRAR RANITA EN TABLERO
// =============================

function mostrarRanita(){

    for(let i=1;i<=30;i++){

        let casilla =
            document.getElementById("c"+i);

        if(casilla){

            if(casilla.classList.contains("rio")){
                casilla.innerHTML = "🌊";
            }
            else if(casilla.classList.contains("meta")){
                casilla.innerHTML = "🏆";
            }
            else{
                casilla.innerHTML = i;
            }

        }

    }

    let actual =
        document.getElementById("c"+posicion);

    if(actual){

        actual.innerHTML += " 🐸";

    }

}
```
```javascript
// =============================
// LANZAR DADO
// =============================

function lanzarDado(){

    let contador = 0;

    let animacion = setInterval(() => {

        document.getElementById(
            "resultadoDado"
        ).innerText =
        "🎲 " +
        (Math.floor(Math.random()*6)+1);

        contador++;

        if(contador >= 10){

            clearInterval(animacion);

            let numero =
            Math.floor(Math.random()*6)+1;

            document.getElementById(
                "resultadoDado"
            ).innerText =
            "🎲 Resultado: " + numero;

            moverRanita(numero);

        }

    },100);

}

// =============================
// MOVER RANITA
// =============================

function moverRanita(pasos){

    let nuevaPosicion = posicion + pasos;

    if(nuevaPosicion > 30){
        nuevaPosicion = 30;
    }

    posicion = nuevaPosicion;

    mostrarRanita();

    actualizarPanel();

    if(posicion >= 30){

        ganarJuego();
        return;

    }

    generarPregunta();

}

// =============================
// PREGUNTAS MATEMÁTICAS
// =============================

function generarPregunta(){

    let grado =
        parseInt(jugador.grado);

    let pregunta = "";

    let respuesta = 0;

    if(grado === 1){

        let a =
            Math.floor(Math.random()*10)+1;

        let b =
            Math.floor(Math.random()*10)+1;

        pregunta =
            a + " + " + b + " = ?";

        respuesta =
            a + b;

    }

    else if(grado === 2){

        let operacion =
            Math.floor(Math.random()*2);

        let a =
            Math.floor(Math.random()*20)+1;

        let b =
            Math.floor(Math.random()*20)+1;

        if(operacion === 0){

            pregunta =
                a + " + " + b + " = ?";

            respuesta =
                a + b;

        }

        else{

            if(a < b){

                let temp = a;
                a = b;
                b = temp;

            }

            pregunta =
                a + " - " + b + " = ?";

            respuesta =
                a - b;

        }

    }

    else{

        let operacion =
            Math.floor(Math.random()*3);

        let a =
            Math.floor(Math.random()*12)+1;

        let b =
            Math.floor(Math.random()*12)+1;

        if(operacion === 0){

            pregunta =
                a + " + " + b + " = ?";

            respuesta =
                a + b;

        }

        else if(operacion === 1){

            pregunta =
                a + " - " + b + " = ?";

            respuesta =
                a - b;

        }

        else{

            pregunta =
                a + " × " + b + " = ?";

            respuesta =
                a * b;

        }

    }

    respuestaCorrecta =
        respuesta;

    document.getElementById("pregunta").innerText =
        pregunta;

    document.getElementById("respuesta").value = "";

}

// =============================
// VERIFICAR RESPUESTA
// =============================
function verificarRespuesta(){

    let respuestaUsuario =
    document.getElementById("respuesta")
    .value.trim();

    if(respuestaUsuario === ""){

        alert("Escribe una respuesta.");
        return;

    }

    if(
        parseInt(respuestaUsuario)
        === respuestaCorrecta
    ){

        puntos += 10;

        monedas += 5;

        estrellas++;

        racha++;

        ganarXP(20);

        alert(
            "✅ ¡Correcto!\n" +
            "+10 puntos\n" +
            "+5 monedas\n" +
            "+20 XP"
        );

    }
    else{

        racha = 0;

        alert(
            "❌ Incorrecto.\n" +
            "La respuesta correcta era: " +
            respuestaCorrecta
        );

    }

    actualizarPanel();

    verificarRacha();

    revisarRio();

    generarPregunta();

}
```
```javascript
// =============================
// CASILLAS DE RÍO
// =============================

const rios = {
    4: 2,
    9: 5,
    15: 10,
    21: 16,
    27: 22
};

// =============================
// REVISAR SI CAYÓ EN UN RÍO
// =============================

function revisarRio(){

    if(rios[posicion]){

        let destino = rios[posicion];

        setTimeout(() => {

            alert(
                "🌊 ¡Oh no! La corriente te arrastró hacia atrás."
            );

            posicion = destino;

            mostrarRanita();

            actualizarPanel();

        }, 300);

    }

}

// =============================
// SISTEMA DE RACHAS
// =============================

function verificarRacha(){

    if(racha === 5){

        puntos += 50;

        actualizarPanel();

        alert(
            "🔥 ¡Racha de 5 respuestas correctas! +50 puntos"
        );

    }

    if(racha === 10){

        puntos += 100;

        actualizarPanel();

        alert(
            "⭐ ¡Súper racha! +100 puntos"
        );

    }

}

// =============================
// GANAR JUEGO
// =============================
function ganarJuego(){

    localStorage.setItem(
        "nivelFacilCompletado",
        "si"
    );

    monedas += 100;

    puntos += 200;

    document.getElementById("juego")
    .style.display = "none";

    document.getElementById("victoria")
    .style.display = "block";

}
// =============================
// DESBLOQUEAR NIVEL INTERMEDIO
// =============================

function revisarProgreso(){

    let completado =
        localStorage.getItem(
            "nivelFacilCompletado"
        );

    if(completado === "si"){

        let botonIntermedio =
            document.getElementById(
                "btnIntermedio"
            );

        if(botonIntermedio){

            botonIntermedio.disabled = false;

            botonIntermedio.innerHTML =
                "🟡 Intermedio";

        }

    }

}

// =============================
// CARGA INICIAL
// =============================

window.addEventListener("load", () => {

    revisarProgreso();

});

// =============================
// NIVEL INTERMEDIO
// =============================

function entrarNivelIntermedio(){

    alert(
        "🚧 Próximamente disponible."
    );

}

// =============================
// NIVEL DIFÍCIL
// =============================

function entrarNivelDificil(){

    alert(
        "🚧 Próximamente disponible."
    );

}
function ganarXP(cantidad){

    xp += cantidad;

    if(xp >= 100){

        xp = 0;

        nivelJugador++;

        monedas += 20;

        alert(
        "🎉 ¡Subiste al nivel "
        + nivelJugador + "!"
        );

    }

    actualizarPanel();
    function actualizarPanel(){

    document.getElementById(
        "posicionActual"
    ).innerText = posicion;

    document.getElementById(
        "puntos"
    ).innerText = puntos;

    document.getElementById(
        "racha"
    ).innerText = racha;

    let monedasElemento =
    document.getElementById("monedas");

    if(monedasElemento){
        monedasElemento.innerText =
        monedas;
    }

    let xpElemento =
    document.getElementById("xp");

    if(xpElemento){
        xpElemento.innerText =
        xp;
    }

    let nivelElemento =
    document.getElementById(
        "nivelJugador"
    );

    if(nivelElemento){
        nivelElemento.innerText =
        nivelJugador;
    }
let estrellasElemento =
document.getElementById("estrellas");

if(estrellasElemento){
    estrellasElemento.innerText =
    estrellas;
}
}

}
```
