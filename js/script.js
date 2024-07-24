let bandera = true;
let menu = [
    { nombre: "Hamburguesa", precio: 1000 },
    { nombre: "Pizza", precio: 1200 },
    { nombre: "Ensalada", precio: 800 },
    { nombre: "Sushi", precio: 1500 },
    { nombre: "Tacos", precio: 1100 }
];
let totalComidas = 0;
let totalCosto = 0;

function seleccionarComida() {
    while (true) {
        let mensaje = "Selecciona una comida ingresando el número:\n";

        
        menu.forEach((comida, index) => {
            mensaje += `${index + 1}. ${comida.nombre} - $${comida.precio}\n`;
        });

        let seleccion = prompt(mensaje);

        if (seleccion === null) {
            alert("Has cancelado la selección.");
            break;
        } else {
            seleccion = parseInt(seleccion);

            if (!isNaN(seleccion) && seleccion >= 1 && seleccion <= menu.length) {
                let comidaSeleccionada = menu[seleccion - 1];
                totalComidas++; 
                totalCosto += comidaSeleccionada.precio; // Sumar el precio de la comida seleccionada
                alert(`Has seleccionado: ${comidaSeleccionada.nombre}. ¡Buen provecho!`);
            } else {
                alert("Selección inválida. Por favor ingresa un número válido.");
                continue;
            }
         }

        let seguirComprando = confirm("¿Deseas seguir comprando?");
        if (!seguirComprando) {
            break;
        }
    }

    
    if (totalComidas > 0) {
        alert(`Resumen de la compra:\nTotal de comidas seleccionadas: ${totalComidas}\nCosto total: $${totalCosto}`);
        alert("Gracias por tu compra. ¡Buen provecho!");
    } else {
        alert("No seleccionaste ninguna comida. ¡Hasta luego!");
    }
}

seleccionarComida();
