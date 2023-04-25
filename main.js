/* SIMULADOR INTERACTIVO DE DELIVERY (VERSION BETA) */


alert("Bienvenido al centro de delivery, aprieta en Aceptar para pedir tu combo");
let eleccion_bebida = false;
let bebida;
while (!eleccion_bebida) {
    bebida = prompt("Elige tu bebida, las opciones son: coca, fanta y sprite. Escribe una de ellas para continuar.");
    switch (bebida) {
        case "coca":
        case "sprite":
        case "fanta":
            eleccion_bebida = true;
            alert(`Has elegido ${bebida}. Para continuar con tu pedido pulsa en Aceptar.`);
            break;
        default:
            alert("Bebida no encontrada");
            break;
    }
}

let eleccion_hamburguesa = false;
let hamburguesa;
while (!eleccion_hamburguesa) {
    hamburguesa = prompt("Elegí una hamburguesa, en nuestro menú podes encontrar: cheddar, bacon, clasica, y simple");
    switch (hamburguesa) {
        case "cheddar":
        case "bacon":
        case "clasica":
        case "simple":
            eleccion_hamburguesa = true;
            alert(`Has elegido hamburguesa ${hamburguesa}. Pulsa en Aceptar para continuar con tu pedido`);
            break;
        default:
            alert("Hamburguesa no encontrada");
            break;
    }
}

let eleccion_guarnicion = false;
let guarnicion;
while (!eleccion_guarnicion)
 {
    guarnicion = prompt("Elegi tu guarnicion para terminar con el pedido. Las opciones que tenemos para vos son: papas, batatas o nuggets")
    switch(guarnicion) {
        case "papas":
        case "batatas":
        case "nuggets":
            eleccion_guarnicion = true;
            alert(`Tu guarnicion elegida es: ${guarnicion}. Pulsa en Aceptar para finalizar tu pedido`);
            break;
        default:
            alert("Guarnicion no encontrada");
            break;    
    }
 }

 alert(`Gracias por comprar con nosotros! El resumen de tu pedido es bebida ${bebida}, con una hamburguesa ${hamburguesa}, y una guarnicion de ${guarnicion}`);


 // Primera version del sistema de delivery 