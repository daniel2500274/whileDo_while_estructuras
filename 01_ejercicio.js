let opcion;

do {
    opcion = parseInt(prompt(
        "MENÚ DE OPCIONES:\n" +
        "1. Cálculo de promedio de 4 notas\n" +
        "2. Cálculo de área de un rectángulo\n" +
        "3. Suma de dos números\n" +
        "4. Retorno de nombre del día según número\n" +
        "5. Salir\n" +
        "Ingrese el número de la operación:"
    ));

    switch (opcion) {
        case 1: // Promedio de notas
            let sumaNotas = 0;
            for (let i = 1; i <= 4; i++) {
                let nota = parseFloat(prompt("Ingrese la nota " + i + ":"));
                if (isNaN(nota)) {
                    alert("Nota no valida intentalo de nuevo");
                    i = i - 1;
                    continue;
                }
                sumaNotas += nota;
            }
            let promedio = sumaNotas / 4;
            alert("El promedio es: " + promedio);
            break;

        case 5:
            alert("Saliendo del programa...");
            break;
        default:
            alert("Opción no válida. Intente de nuevo.");
            break;
    }
} while (opcion !== 5); 