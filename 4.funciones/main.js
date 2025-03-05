let agregrarLibro = []

function coleccionDeLibros(libro) {
    agregrarLibro.push(libro)
    return agregrarLibro

};

function mostrarLibros (array){
    for (let i = 0; i < array.length; i++) {
        document.write(`${i + 1}.- ${array[i]}`);
      }
}

coleccionDeLibros ("La biblia");
coleccionDeLibros ("DSM5");