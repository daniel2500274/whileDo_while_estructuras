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

        case 2: // Área de un rectángulo
            let base = parseFloat(prompt("Ingrese la base del rectángulo:"));
            let altura = parseFloat(prompt("Ingrese la altura del rectángulo:"));
            if (isNaN(base) || isNaN(altura) || base < 0 || altura < 0) {
                alert("Datos ingresados no validos");
                break;
            }
            let area = base * altura;
            alert("El área del rectángulo es: " + area);
            break;

        case 3: // Suma de dos números
            const num1 = parseFloat(prompt("Ingrese el primer número:"));
            const num2 = parseFloat(prompt("Ingrese el segundo número:"));
            if (isNaN(num1) || isNaN(num2)) {
                alert("Datos ingresados no validos");
                break;
            }
            const suma = num1 + num2;
            alert("La suma es: " + suma);
            break;

        case 4: // Nombre del día
            let numDia = parseInt(prompt("Ingrese el número del día (1-7):"));
            if (isNaN(numDia) || numDia < 1 || numDia > 7) {
                alert("Dia ingresado no valido");
                break;
            }
            let nombreDia;
            switch (numDia) {
                case 1:
                    nombreDia = "Domingo";
                    break;
                case 2:
                    nombreDia = "Lunes";
                    break;
                case 3:
                    nombreDia = "Martes";
                    break;
                case 4:
                    nombreDia = "Miércoles";
                    break;
                case 5:
                    nombreDia = "Jueves";
                    break;
                case 6:
                    nombreDia = "Viernes";
                    break;
                case 7:
                    nombreDia = "Sábado";
                    break;

            }
            alert("El día es: " + nombreDia);
            break;

        case 5:
            alert("Saliendo del programa...");
            break;
        default:
            alert("Opción no válida. Intente de nuevo.");
            break;
    }
} while (opcion !== 5); 