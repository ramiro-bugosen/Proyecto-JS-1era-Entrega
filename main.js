//se obtienen las bebidas desde un mock online
async function obtenerBebidas() {
  const resp = await fetch("https://www.mockachino.com/f4343f9b-caee-43/bebidas");
  const data = await resp.json();
  localStorage.setItem("bebidas", JSON.stringify(data.bebidas));
}
//se obtienen el resto de los productos desde json locales
async function obtenerGuarniciones() {
  const resp = await fetch("./data/guarniciones.json");
  const guarniciones = await resp.json();
  localStorage.setItem("guarniciones", JSON.stringify(guarniciones));
}

async function obtenerHamburguesas() {
  const resp = await fetch("./data/hamburguesas.json");
  const hamburguesas = await resp.json();
  localStorage.setItem("hamburguesas", JSON.stringify(hamburguesas));
}
//ejecuto las funciones para guardar todo en localstorage
obtenerBebidas()
obtenerGuarniciones()
obtenerHamburguesas()
//traigo la informacion de localstorage y la guardo en constantes
const bebidas = JSON.parse(localStorage.getItem("bebidas"))
const guarniciones = JSON.parse(localStorage.getItem("guarniciones"))
const hamburguesas = JSON.parse(localStorage.getItem("hamburguesas"))


const ElementoHamburguesa = document.getElementById("hamburguesas");
const ElementoGuarniciones = document.getElementById("guarniciones");
const ElementoBebida = document.getElementById("bebidas");

document.getElementById("iniciarPedido").addEventListener("click", function() {
  //mostrar bebidas
  document.getElementById("bebidas").innerHTML = "<h2>Bebidas</h2>"
  for (let i = 0; i < bebidas.length; i++) {
    ElementoBebida.innerHTML +=
      "<button id=" + bebidas[i].producto + ">" + bebidas[i].producto + " $" + bebidas[i].precio + "</button>";
    ElementoBebida.innerHTML +=
      "<img src=" + bebidas[i].img + ">";
  }

  //mostrar hamburguesas
  document.getElementById("hamburguesas").innerHTML = "<h2>Hamburguesas</h2>"
  for (let i = 0; i < hamburguesas.length; i++) {
    ElementoHamburguesa.innerHTML +=
      "<button id=" + hamburguesas[i].producto + ">" + hamburguesas[i].producto + " $" + hamburguesas[i].precio + "</button>";
    ElementoHamburguesa.innerHTML +=
      "<img src=" + hamburguesas[i].img + ">";
      
  }

  //mostrar guarniciones
  document.getElementById("guarniciones").innerHTML = "<h2>Guarniciones</h2>"
  for (let i = 0; i < guarniciones.length; i++) {
    ElementoGuarniciones.innerHTML +=
      "<button id=" + guarniciones[i].producto + ">" + guarniciones[i].producto + " $" + guarniciones[i].precio + "</button>";
    ElementoGuarniciones.innerHTML +=
      "<img src=" + guarniciones[i].img + ">";
  }

  document.getElementById("cartelInicio").style.display = "none";
});

//carrito de compras: Suma los precios de los productos clickeados
let numero = null
const sumaTotal = document.getElementById("total");

ElementoBebida.addEventListener("click", respuestaClickBebidas);
function respuestaClickBebidas(event) {
  const elementoClickeado = event.target;
  const productoId = elementoClickeado.id;

  if (productoId !== "") {
    const precio = bebidas.find(
      (producto) => producto.producto === productoId
    ).precio;
    numero += precio;
    sumaTotal.innerHTML = "<p>" +" $"+ numero + "</p>";
    Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
      }
    });

    Swal.fire({
      icon: 'success',
      title: 'Producto agregado exitosamente',
      text: 'Precio: $' + precio
    });
  }
}

ElementoHamburguesa.addEventListener("click", respuestaClickHamburguesas);
function respuestaClickHamburguesas(event) {
  const elementoClickeado = event.target;
  const productoId = elementoClickeado.id;

  if (productoId !== "") {
    const precio = hamburguesas.find(
      (producto) => producto.producto === productoId
    ).precio;
    numero += precio;
    sumaTotal.innerHTML = "<p>" +" $"+ numero + "</p>";
    Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
      }
    });

    Swal.fire({
      icon: 'success',
      title: 'Producto agregado exitosamente',
      text: 'Precio: $' + precio
    });
  }
}

ElementoGuarniciones.addEventListener("click", respuestaClickGuarniciones);
function respuestaClickGuarniciones(event) {
  const elementoClickeado = event.target;
  const productoId = elementoClickeado.id;

  if (productoId !== "") {
    const precio = guarniciones.find(
      (producto) => producto.producto === productoId
    ).precio;
    numero += precio;
    sumaTotal.innerHTML = "<p>" +" $"+ numero + "</p>";
    Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
      }
    });

    Swal.fire({
      icon: 'success',
      title: 'Producto agregado exitosamente',
      text: 'Precio: $' + precio
    });
  }
}

const contenido = document.getElementById("contenido");

//confirmar pedido
let recargarPagina = document.getElementById('realizarPedido');
recargarPagina.addEventListener('click', () => {
  Swal.fire({
    title: '¿Quieres confirmar el pedido?',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Confirmar'
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire(
        'Pedido Confirmado',
        '¡Gracias por comprar con nosotros!',
        'Confirmed'
      ).then((result) =>{
        if (result.isConfirmed) {
          location.reload();
        }
      })
    }
  })
})