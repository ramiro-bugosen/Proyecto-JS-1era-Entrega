// SIMULADOR INTERACTIVO DE DELIVERY (VERSION BETA)

// Primera version del sistema de delivery

/*  alert("Bienvenido al centro de delivery, aprieta en Aceptar para pedir tu combo");
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

 alert(`Gracias por comprar con nosotros! El resumen de tu pedido es bebida ${bebida}, con una hamburguesa ${hamburguesa}, y una guarnicion de ${guarnicion}`); */




 // Segunda version del sistema de delivery
 
alert("Bienvenido al centro de delivery, aprieta en Aceptar para pedir tu combo");

const bebidas = [
    { id: 0, producto: "coca", precio: 350 },
    { id: 1, producto: "fanta", precio: 350 },
    { id: 2, producto: "sprite", precio: 350 },
    { id: 3, producto: "agua", precio: 300 },
  ];
  
  const hamburguesas = [
    { id: 0, producto: "cheddar", precio: 1200 },
    { id: 1, producto: "clasica", precio: 1300 },
    { id: 2, producto: "simple", precio: 1000 },
    { id: 3, producto: "doble", precio: 1500 },
  ];
  
  const guarniciones = [
    { id: 0, producto: "papas", precio: 800 },
    { id: 1, producto: "batatas", precio: 700 },
    { id: 2, producto: "nuggets", precio: 900 },
  ];
  
  let bebidaElegida;
  let hamburguesaElegida;
  let guarnicionElegida;
  
  while (!bebidaElegida || !bebidas.find((bebida) => bebida.producto === bebidaElegida)) {
    bebidaElegida = prompt("Elige tu bebida (coca, fanta, sprite, agua):");
  if (!bebidas.find((bebida) => bebida.producto === bebidaElegida)) {
    alert("Bebida no encontrada. Por favor, elige una opción correcta.");}
  }
  
  while (!hamburguesaElegida || !hamburguesas.find((hamburguesa) => hamburguesa.producto === hamburguesaElegida)) {
    hamburguesaElegida = prompt("Elige tu hamburguesa (cheddar, clasica, simple, doble):");
  if (!hamburguesas.find((hamburguesa) => hamburguesa.producto === hamburguesaElegida)) {
    alert("Hamburguesa no encontrada. Por favor, elige una opción correcta.");}
  }
  
  while (!guarnicionElegida || !guarniciones.find((guarnicion) => guarnicion.producto === guarnicionElegida)) {
    guarnicionElegida = prompt("Elige tu guarnición (papas, batatas, nuggets):");
  if (!guarniciones.find((guarnicion) => guarnicion.producto === guarnicionElegida)) {
    alert("Guarnicion no encontrada. Por favor, elige una opción correcta.");}
  }
  
  const pedido = [
    bebidas.find((bebida) => bebida.producto === bebidaElegida),
    hamburguesas.find((hamburguesa) => hamburguesa.producto === hamburguesaElegida),
    guarniciones.find((guarnicion) => guarnicion.producto === guarnicionElegida),
  ];
  
  let totalPrecio = 0;
  let resultadoPedido = "Resumen del pedido:\n";
  
  for (let i = 0; i < pedido.length; i++) {
    const { producto, precio } = pedido[i];
    totalPrecio += precio;
    resultadoPedido += `- ${producto}: $${precio}\n`;
  }
  
  resultadoPedido += `\nTotal: $${totalPrecio}`;
  
  alert(resultadoPedido);

