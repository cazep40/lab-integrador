/*01 Capturar los elementos y crear variables*/

let inptTituloLibro = document.querySelector("#tituloLibro");
let inptAutorLibro = document.querySelector("#autorLibro");
let inptIsbnLibro = document.querySelector("#isbnLibro");
let btnAgregarLibro = document.querySelector("#btnAgregarLibro");

let librosDisponibles = JSON.parse(localStorage.getItem("librosdisponibles")) || [];

/*02 Manipuación de eventos*/

btnAgregarLibro.addEventListener("click", agregarLibro )


/*03 Funciones*/

function agregarLibro() {
    let titulo = inptTituloLibro.value.trim();
    let autor = inptAutorLibro.value.trim();
    let isbn = inptIsbnLibro.value.trim();

    /*Validacion de campos obligatorios*/
    if(titulo==""|| autor=="" || isbn==""){
        alert("Por favor, complete todos los campos");
        return;
    }

    let libroNuevo = {
        isbn: isbn,
        titulo: titulo,
        autor: autor,
        estado: "disponible"
    }

    librosDisponibles.push(libroNuevo);

    //Guardar en el localstorage
    localStorage.setItem("librosDisponibles", JSON.stringify(librosDisponibles));

    //limpiar los campos de los formularios

    inptTituloLibro.value = "",
    inptAutorLibro.value = "",
    inptIsbnLibro.value = "",

    alert("Libro agregado exitosamente");


}