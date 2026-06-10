function registrar() {

    const nombre = document.getElementById("nombre").value.trim();
    const edad = document.getElementById("edad").value.trim();
    const grado = document.getElementById("grado").value;

    if (!nombre || !edad || !grado) {
        alert("Por favor completa todos los campos.");
        return;
    }

    localStorage.setItem("nombre", nombre);
    localStorage.setItem("edad", edad);
    localStorage.setItem("grado", grado);

    window.location.href = "avatar.html";
}
