//PRODUCTOS
class comidasItalianasCuarto {
  constructor (nombre, id, imagen) {
    this.nombre           = nombre.toUpperCase()
    this.id               = id
    this.imagen           = imagen
    this.precio           = 350
  }
}
const producto1Cuarto = new comidasItalianasCuarto("Struffules", 1, "./img/struffules.jpg")
const producto2Cuarto = new comidasItalianasCuarto("Tarales", 2, "./img/tarales.jpg")
const producto3Cuarto = new comidasItalianasCuarto("Bizcochos", 3, "./img/bizcochos.jpg")
class comidasItalianasMedio {
  constructor (nombre, id, imagen) {
    this.nombre           = nombre.toUpperCase()
    this.id               = id
    this.imagen           = imagen
    this.precio           = 600
  }
}
const producto1Medio = new comidasItalianasMedio("Struffules", 1, "./img/struffules.jpg")
const producto2Medio = new comidasItalianasMedio("Tarales", 2, "./img/tarales.jpg")
const producto3Medio = new comidasItalianasMedio("Bizcochos", 3, "./img/bizcochos.jpg")
class bizcochuelos {
  constructor (sabor, id, imagen) {
    this.sabor            = sabor.toUpperCase()
    this.id               = id
    this.imagen           = imagen
    this.precio           = 600
  }
}
const sabor1 = new bizcochuelos("Manzana", 4, "./img/bizcochuelo-manzana.jpg")
const sabor2 = new bizcochuelos("Banana", 5, "./img/bizcochuelo-banana.jpg")
const sabor3 = new bizcochuelos("Limon", 6, "./img/bizcochuelo-limon.jpg")
const sabor4 = new bizcochuelos("Naranja", 7, "./img/bizcochuelo-limon.jpg")
const sabor5 = new bizcochuelos("Vainilla", 8, "./img/bizcochuelo-vainilla.jpg")
const sabor6 = new bizcochuelos("Chocolate", 9, "./img/bizcochuelo-chocolate.jfif")
const productosItalianosCuarto = [
  producto1Cuarto, producto2Cuarto, producto3Cuarto
]
const productosItalianosMedio = [
  producto1Medio, producto2Medio, producto3Medio
]
const tortas = [
  sabor1, sabor2, sabor3, sabor4, sabor5, sabor6
]
//CANASTA
const canasta = [];
const canastaEnStorage = JSON.parse(localStorage.getItem('canasta'));
const precioTotalCarrito = 0
//DOM
const totalCarrito = document.getElementById("total-carrito")
const botonOcultar = document.getElementById("boton-ocultar");
const carrito = document.getElementById("imagen-carrito");
const contenedorCanasta = document.getElementById("canasta");
const listadoProductos = document.getElementById("listado-productos");
const productosCuarto = document.querySelector(".productos-cuarto");
const productosMedio = document.querySelector(".productos-medio");
const productosBizcochuelos = document.querySelector(".productos-bizcochuelos");
//FUNCIONES CUARTO
const clickProductoCuarto = (producto) => {
  insertarCanastaComidasItalianasCuarto(producto);
  canasta.push(producto);
  localStorage.setItem('producto-canasta', JSON.stringify(canasta));
  const precioCarrito = canasta.reduce((acc, el) => acc + el.precio, 0);
  totalCarrito.innerHTML = `$${precioCarrito}`
}
const insertarCanastaComidasItalianasCuarto = (producto) => {
  const contenedor = document.createElement('div');
  contenedor.classList = 'producto-canasta';
  contenedor.innerHTML = `<img src="${producto.imagen}">
  <div class="descripcion-producto">
    <p>${producto.nombre}</p>
    <p>1/4 KG $${producto.precio}</p>
  </div>`;
  contenedor.onclick = () => {clickCanasta(contenedor, producto)};
  contenedorCanasta.append(contenedor);
  localStorage.setItem('producto-canasta', JSON.stringify(contenedor));
}
//FUNCIONES MEDIO
const insertarCanastaComidasItalianasMedio = (producto) => {
  const contenedor = document.createElement('div');
  contenedor.classList = 'producto-canasta';
  contenedor.innerHTML = `<img src="${producto.imagen}">
  <div class="descripcion-producto">
    <p>${producto.nombre}</p>
    <p>1/2 KG $${producto.precio}</p>
  </div>`;
  contenedor.onclick = () => {clickCanasta(contenedor, producto)};
  contenedorCanasta.append(contenedor);
}
const clickProductoMedio = (producto) => {
  insertarCanastaComidasItalianasMedio(producto);
  canasta.push(producto);
  localStorage.setItem('canasta', JSON.stringify(canasta));
  const precioCarrito = canasta.reduce((acc, el) => acc + el.precio, 0);
  totalCarrito.innerHTML = `$${precioCarrito}`
}
//FUNCIONES TORTAS
const insertarCanastaTortas = (producto) => {
  const contenedor = document.createElement('div');
  contenedor.classList = 'producto-canasta';
  contenedor.innerHTML = `<img src="${producto.imagen}">
  <div class="descripcion-producto">
    <p>${producto.sabor}</p>
    <p>$${producto.precio}</p>
  </div>`;
  contenedor.onclick = () => {clickCanasta(contenedor, producto)};
  contenedorCanasta.append(contenedor);
}
const clickProductoTortas = (producto) => {
  insertarCanastaTortas(producto);
  canasta.push(producto);
  localStorage.setItem('canasta', JSON.stringify(canasta));
  const precioCarrito = canasta.reduce((acc, el) => acc + el.precio, 0);
  totalCarrito.innerHTML = `$${precioCarrito}`
}
//FUNCIONES
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
      canasta.splice(producto, 1)
      const precioCarrito = canasta.reduce((acc, el) => acc + el.precio, 0);
      totalCarrito.innerHTML = `$${precioCarrito}`
    } else if (result.isDenied) {
      Swal.fire('Producto no eliminado')
    }
  })
}
const insertarProductos = () => {
  for (const producto of productosItalianosCuarto) {
    const contenidoProducto = document.createElement("div");
    contenidoProducto.className = "producto";
    contenidoProducto.innerHTML = `
    <div>    
      <div class="imagen-producto">
        <img src="${producto.imagen}" alt="${producto.nombre}">
      </div>
      <div class="contenido-producto">
        <p>${producto.nombre}</p>
        <p>1/4 KG $${producto.precio}</p>
      </div>
    </div>`;
    productosCuarto.appendChild(contenidoProducto);
    contenidoProducto.onclick = () => {clickProductoCuarto(producto)};
  }
  for (const producto of productosItalianosMedio) {
    const contenidoProducto = document.createElement("div");
    contenidoProducto.className = "producto";
    contenidoProducto.id = producto.id;
    contenidoProducto.innerHTML = `
    <div>    
      <div class="imagen-producto">
        <img src="${producto.imagen}" alt="${producto.nombre}">
      </div>
      <div class="contenido-producto">
        <p>${producto.nombre}</p>
        <p>1/2 KG $${producto.precio}</p>
      </div>
    </div>`;
    productosMedio.appendChild(contenidoProducto);
    contenidoProducto.onclick = () => {clickProductoMedio(producto)};
  }
  for (const producto of tortas) {
    const contenidoProducto = document.createElement("div");
    contenidoProducto.className = "producto";
    contenidoProducto.id = producto.id;
    contenidoProducto.innerHTML = `
    <div>    
      <div class="imagen-producto">
        <img src="${producto.imagen}" alt="${producto.sabor}">
      </div>
      <div class="contenido-producto">
        <p>${producto.sabor}</p>
        <p>$${producto.precio}</p>
      </div>
    </div>`;
    productosBizcochuelos.appendChild(contenidoProducto);
    contenidoProducto.onclick = () => {clickProductoTortas(producto)};
  }
}
insertarProductos();
carrito.onclick = () => {
  contenedorCanasta.style = 'display:block'
  botonOcultar.style = 'display:block'
}
botonOcultar.onclick = () => {
  contenedorCanasta.style = 'display:none'
  botonOcultar.style = 'display:none'
}