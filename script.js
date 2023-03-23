//CANASTA
const canasta = [];
const precioTotalCarrito = 0
//DOM
const totalCarrito = document.getElementById("total-carrito")
const botonOcultar = document.getElementById("boton-ocultar");
const botonCompra = document.getElementById("boton-compra")
const carrito = document.getElementById("imagen-carrito");
const contenedorCanasta = document.getElementById("canasta");
const listadoProductos = document.getElementById("listado-productos");
const productosCuarto = document.querySelector(".productos-cuarto");
const productosMedio = document.querySelector(".productos-medio");
const productosBizcochuelos = document.querySelector(".productos-bizcochuelos");
const divCanasta = document.querySelector(".div-canasta");
//CLICK BOTONES
carrito.onclick = () => {
  contenedorCanasta.style = 'display:block; overflow-y: scroll; max-height: 450px'
  botonOcultar.style = 'display:block'
  totalCarrito.style = 'display:block'
  botonCompra.style = 'display:block'
  carrito.style = 'display:none'
  divCanasta.style = 'display:block'
}
botonOcultar.onclick = () => {
  contenedorCanasta.style = 'display:none'
  botonOcultar.style = 'display:none'
  totalCarrito.style = 'display:none'
  botonCompra.style = 'display:none'
  carrito.style = 'display:block'
  divCanasta.style = 'display:none'
}
botonCompra.onclick = () => {
  Swal.fire({
    title: '¿Desea realizar la compra?',
    showDenyButton: true,
    showCancelButton: true,
    confirmButtonText: 'Si',
    denyButtonText: `No`,
  }).then((result) => {
    /* Read more about isConfirmed, isDenied below */
    if (result.isConfirmed) {
      Swal.fire('¡Su compra ha sido realizada con éxito!');
      canasta.splice(0, canasta.length)
      const precioCarrito = canasta.reduce((acc, el) => acc + el.precio, 0);
      totalCarrito.innerHTML = `TOTAL $${precioCarrito}`
      while (contenedorCanasta.firstChild) {
        contenedorCanasta.removeChild(contenedorCanasta.firstChild);
      }
    } else if (result.isDenied) {
      Swal.fire('Compra no realizada')
    }
  })
}
//FUNCIONES
const insertarCanasta = (producto) => {
  const contenedor = document.createElement('div');
  contenedor.classList = 'producto-canasta';
  contenedor.innerHTML = `<img src="${producto.imagen}">
  <div class="descripcion-producto">
    <p>${producto.nombre.toUpperCase()}</p>
    <p>${producto.tamaño} $${producto.precio}</p>
  </div>`;
  contenedor.onclick = () => {clickCanasta(contenedor, producto)};
  contenedorCanasta.append(contenedor);
}
const clickProducto = (producto) => {
  insertarCanasta(producto);
  canasta.push(producto);
  const precioCarrito = canasta.reduce((acc, el) => acc + el.precio, 0);
  totalCarrito.innerHTML = `TOTAL $${precioCarrito}`
}
const clickCanasta = (contenedor, producto) => {
  Swal.fire({
    title: 'Desea eliminar el producto?',
    showDenyButton: true,
    showCancelButton: true,
    confirmButtonText: 'Si',
    denyButtonText: `No`,
  }).then((result) => {
    /* Read more about isConfirmed, isDenied below */
    if (result.isConfirmed) {
      Swal.fire('Producto eliminado');
      contenedor.remove();
      canasta.splice(canasta.indexOf(producto), 1)
      const precioCarrito = canasta.reduce((acc, el) => acc + el.precio, 0);
      totalCarrito.innerHTML = `TOTAL $${precioCarrito}`
    } else if (result.isDenied) {
      Swal.fire('Producto no eliminado')
    }
  })
}
const insertarProductosCuarto = () => {
  fetch('./json/productos-cuarto.json')
  .then( (res) => res.json())
  .then( (data) => {
    data.forEach((producto) => {
      const contenidoProductoCuarto = document.createElement("div");
      contenidoProductoCuarto.className = "producto";
      contenidoProductoCuarto.innerHTML = `
      <div>    
        <div class="imagen-producto">
          <img src="${producto.imagen}" alt="${producto.nombre}">
        </div>
        <div class="contenido-producto">
          <p>${producto.nombre.toUpperCase()}</p>
          <p>${producto.tamaño} $${producto.precio}</p>
        </div>
      </div>`;
      productosCuarto.appendChild(contenidoProductoCuarto);
      contenidoProductoCuarto.onclick = () => {clickProducto(producto)}
    })
  })
}
const insertarProductosMedio = () => {
  fetch('./json/productos-medio.json')
  .then( (res) => res.json())
  .then( (data) => {
    data.forEach((producto) => {
      const contenidoProductoMedio = document.createElement("div");
      contenidoProductoMedio.className = "producto";
      contenidoProductoMedio.innerHTML = `
      <div>    
      <div class="imagen-producto">
      <img src="${producto.imagen}" alt="${producto.nombre}">
      </div>
        <div class="contenido-producto">
          <p>${producto.nombre.toUpperCase()}</p>
          <p>${producto.tamaño} $${producto.precio}</p>
        </div>
      </div>`;
      productosMedio.appendChild(contenidoProductoMedio);
      contenidoProductoMedio.onclick = () => {clickProducto(producto)}
    })
  })
}
const insertarProductosTortas = () => {
  fetch('./json/tortas.json')
  .then( (res) => res.json())
  .then( (data) => {
    data.forEach((producto) => {
      const contenidoProductoTortas = document.createElement("div");
      contenidoProductoTortas.className = "producto";
      contenidoProductoTortas.innerHTML = `
      <div>    
      <div class="imagen-producto">
      <img src="${producto.imagen}" alt="${producto.nombre}">
      </div>
        <div class="contenido-producto">
          <p>${producto.nombre.toUpperCase()}</p>
          <p>${producto.tamaño} $${producto.precio}</p>
        </div>
      </div>`;
      productosBizcochuelos.appendChild(contenidoProductoTortas);
      contenidoProductoTortas.onclick = () => {clickProducto(producto)}
    })
  })
}
insertarProductosCuarto();
insertarProductosMedio();
insertarProductosTortas();
//MEDIA QUERY
if (window.matchMedia("(min-width: 481px) and (max-width: 768px)").matches) {

} else if (window.matchMedia("(max-width: 480px)").matches) {

}