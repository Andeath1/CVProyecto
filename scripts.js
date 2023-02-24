let boton_mostrar_ocultar1 = document.getElementById("mostrar_ocultar1");
boton_mostrar_ocultar1.addEventListener("click", mostrar_ocultar1);
let boton_mostrar_ocultar2 = document.getElementById("mostrar_ocultar2");
boton_mostrar_ocultar2.addEventListener("click", mostrar_ocultar2);

// funciones particulares para colapsar bloques de info (buscar implementación universal)
function mostrar_ocultar1 (){
    let numero_info = document.getElementById("info1");
    mostrar_ocultar_abs(numero_info);
}
function mostrar_ocultar2 (){
    let numero_info = document.getElementById("info2");
    mostrar_ocultar_abs(numero_info);
}

// función absoluta para colapsar elementos
function mostrar_ocultar_abs(numero_info){
    if (numero_info.className === "blanco"){
        numero_info.className = "blanco oculto";
    } else {
        numero_info.className = "blanco";
    }
}

// evento click en el botón de temas, dispara las funciones
let boton_tema = document.getElementById("switch");
boton_tema.addEventListener("click", cambiar_tema);

// selecciona y guarda un tema específico
function seleccion_tema(nombre_tema) {
    localStorage.setItem('tema', nombre_tema);
    document.documentElement.className = nombre_tema;
}

// cambia entre los dos temas (junto al logo)
function cambiar_tema() {
    if (localStorage.getItem('tema') === 'tema_oscuro') {
        seleccion_tema('tema_claro');
        document.getElementById("logo_tema").src = "css/tema_oscuro.png";
    } else {
        seleccion_tema('tema_oscuro');
        document.getElementById("logo_tema").src = "css/tema_claro.png";
    }
}

// carga el tema que se guardó y el logo correspondiente
(function () {
    if (localStorage.getItem('tema') === 'tema_oscuro') {
        seleccion_tema('tema_oscuro');
        document.getElementById("logo_tema").src = "css/tema_claro.png";
    } else {
        seleccion_tema('tema_claro');
        document.getElementById("logo_tema").src = "css/tema_oscuro.png";
    }
})();