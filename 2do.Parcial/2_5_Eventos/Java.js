
    const imagenPrincipal = document.getElementById("imagen");
    const imagenes =["imagenes/cesar.jpg","imagenes/PerroChido.png"];
    let indice = 0;

    imagenPrincipal.addEventListener("click", () => {
        imagenPrincipal.classList.add("cambiando");
        setTimeout(() => {
            indice = (indice + 1) % imagenes.length
            imagenPrincipal.src = imagenes[indice];
            setTimeout(() => {
                imagenPrincipal.classList.remove("cambiando");
            }, 100);
        }, 300);
    });
