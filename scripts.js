// selecciona y guarda un tema específico
function seleccion_tema(nombre_tema) {
    localStorage.setItem('tema', nombre_tema);
    document.documentElement.className = nombre_tema;
}

// cambia entre los dos temas
function cambiar_tema() {
    if (localStorage.getItem('tema') === 'tema_oscuro') {
        seleccion_tema('tema_claro');
    } else {
        seleccion_tema('tema_oscuro');
    }
}

// carga el tema que se guardó
(function () {
    if (localStorage.getItem('tema') === 'tema_oscuro') {
        seleccion_tema('tema_oscuro');
    } else {
        seleccion_tema('tema_claro');
    }
})();