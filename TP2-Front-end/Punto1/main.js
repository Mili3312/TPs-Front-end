
let numbers = [];
let outputElement = document.getElementById('output');

//MOSTRAR LOS RESULTADOS DE LAS OPERACIONES 
function Resultados() {
    outputElement.innerHTML = `
        <p>Suma de todos los números: ${sumar()}</p>
        <p>Promedio de todos los números: ${calcularPromedio()}</p>
        <p>Número máximo: ${encontrarMaximo()}</p>
        <p>Número mínimo: ${encontrarMinimo()}</p>
        <p>Arreglo después de modificaciones: [${numbers.join(', ')}]</p>
    `;
}
//SUMAR TODOS LOS NÚMEROS DEL ARREGLO
function sumar() {
    return numbers.reduce((acc, curr) => acc + curr, 0);
}
//CALCULAR PROMEDIO
function calcularPromedio() {
    return (sumar() / numbers.length).toFixed(2);
}
//ENCONTRAR NÚMERO MÁXIMO
function encontrarMaximo() {
    return Math.max(...numbers);
}
//ENCONTRAR NÚMERO MÍNIMO
function encontrarMinimo() {
    return Math.min(...numbers);
}
// ELIMINAR PRIMER Y ULTIMO ELEMENTO
function eliminarPrimerUltimo() {
    numbers.shift();
    numbers.pop();
    Resultados();
}
//AGREGAR NÚMERO NUEVO ALEATORIO
function agregarNuevo() {
    numbers.push(Math.floor(Math.random() * 100) + 1);
    Resultados();
}
//ORDENA NÚMEROS
function ordenar() {
    numbers.sort((a, b) => a - b);
    Resultados();
}
//INVERTIR ORDEN DE ELEMENTOS
function invertir() {
    numbers.reverse();
    Resultados();
}

//GENERA 10 NÚMEROS ALEATORIOS EN EL RANGO DE 1 Y 100
for (let i = 0; i < 10; i++) {
    numbers.push(Math.floor(Math.random() * 100) + 1);
}


Resultados();



