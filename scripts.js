// funciones particulares para colapsar bloques de info (buscar implementación universal)
let boton_mostrar_ocultar1 = document.getElementById("mostrar_ocultar1");
boton_mostrar_ocultar1.addEventListener("click", mostrar_ocultar1);
let boton_mostrar_ocultar2 = document.getElementById("mostrar_ocultar2");
boton_mostrar_ocultar2.addEventListener("click", mostrar_ocultar2);
let boton_mostrar_ocultar3 = document.getElementById("mostrar_ocultar3");
boton_mostrar_ocultar3.addEventListener("click", mostrar_ocultar3);
let boton_mostrar_ocultar4 = document.getElementById("mostrar_ocultar4");
boton_mostrar_ocultar4.addEventListener("click", mostrar_ocultar4);

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
function mostrar_ocultar3 (){
    let numero_info = document.getElementById("info3");
    let mas_menos = document.getElementById("mas_menos3");
    mostrar_ocultar_abs(numero_info, mas_menos);
}
function mostrar_ocultar4 (){
    let numero_info = document.getElementById("info4");
    let mas_menos = document.getElementById("mas_menos4");
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

// redirección a GitHub
function redirección() {
    if (confirm("¿Desea ver el repositorio en GitHub?")){
        window.open("https://github.com/Andeath1/CVProyecto", "Gracias, ahora se le redirigirá.")
    }
}
// despliega el aviso
let boton_plantilla = document.getElementById("plantilla");
boton_plantilla.addEventListener("click", redirección);


// traductor de Google
function googleTranslateElementInit() {
    new google.translate.TranslateElement({pageLanguage: 'es', layout: google.translate.TranslateElement.InlineLayout.SIMPLE}, 'google_translate_element');
}

// Insertar foto dentro del módulo
let modulo = document.getElementById("modulo");
let foto = document.getElementById("foto");
let foto_modulo = document.getElementById("foto_grande");
foto.addEventListener("click", foto_grande)

function foto_grande() {
  modulo.style.display = "block";
  foto_modulo.src = this.src;
}
// Botón para cerrar y cerrado por click afuera de la foto
let x = document.getElementsByClassName("cerrar")[0];
x.addEventListener("click", cerrar)
function cerrar() {
    modulo.style.display = "none";
}
window.addEventListener("click", cerrar2)
function cerrar2 (evento) {
    if (evento.target == modulo) {
      modulo.style.display = "none";
    }
}