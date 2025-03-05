// Declarar el arreglo de frutas
const frutas = ['fresa', 'plátano', 'fresa', 'mandarina', 'plátano', 'manzana', 'mora'];

// Crear un objeto para almacenar el contador de frutas
const contadorDeFrutas = {};

// Usar un bucle for para recorrer el arreglo
for (const fruta of frutas) {
    // Si la fruta ya está en el objeto, incrementar el conteo
    if (contadorDeFrutas[fruta]) {
        contadorDeFrutas[fruta]++;
    } else {
        // Si la fruta no está en el objeto, inicializar el conteo en 1
        contadorDeFrutas[fruta] = 1;
    }
}


console.log(contadorDeFrutas);