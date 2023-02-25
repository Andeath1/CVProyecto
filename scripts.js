// funciones particulares para colapsar bloques de info (buscar implementación universal)
let boton_mostrar_ocultar1 = document.getElementById("mostrar_ocultar1");
boton_mostrar_ocultar1.addEventListener("click", mostrar_ocultar1);
let boton_mostrar_ocultar2 = document.getElementById("mostrar_ocultar2");
boton_mostrar_ocultar2.addEventListener("click", mostrar_ocultar2);

function mostrar_ocultar1 (){
    let numero_info = document.getElementById("info1");
    let mas_menos = document.getElementById("mas_menos1");
    mostrar_ocultar_abs(numero_info, mas_menos);
}
function mostrar_ocultar2 (){
    let numero_info = document.getElementById("info2");
    let mas_menos = document.getElementById("mas_menos2");
    mostrar_ocultar_abs(numero_info, mas_menos);
}

// función absoluta para colapsar elementos
function mostrar_ocultar_abs(numero_info, mas_menos){
    if (numero_info.className === "blanco"){
        numero_info.className = "blanco oculto";
        mas_menos.className = "iconos icon-mas";
    } else {
        numero_info.className = "blanco";
        mas_menos.className = "iconos icon-menos";
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
    } else {
        seleccion_tema('tema_oscuro');
    }
}

// carga el tema que se guardó y el logo correspondiente
(function () {
    if (localStorage.getItem('tema') === 'tema_oscuro') {
        seleccion_tema('tema_oscuro');
    } else {
        seleccion_tema('tema_claro');
    }
})();

// aviso de mantenimiento
function aviso() {
    alert("Función aún no disponible.");
}

// despliega el aviso
let boton_plantilla = document.getElementById("plantilla");
boton_plantilla.addEventListener("click", aviso);