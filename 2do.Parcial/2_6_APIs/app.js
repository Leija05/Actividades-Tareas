document.getElementById("btn1").addEventListener("click", cargarDatosConXML);
document.getElementById("btn2").addEventListener("click", cargarDatosConFetch);

function cargarDatosConXML() {
    let solicitud = new XMLHttpRequest();

    solicitud.onload = function() {
        let objetoJs= JSON.parse(solicitud.response);
        document.getElementById("resp").innerHTML = objetoJs.value;
    }
    solicitud.open("GET", "https://api.chucknorris.io/jokes/random");
    solicitud.send();
}

function cargarDatosConFetch() {
    fetch("https://api.chucknorris.io/jokes/random")
    .then(respuesta => respuesta.json())
    .then(datos => {
        document.getElementById("resp").innerHTML = datos.value;
    })
}