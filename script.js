class producto {
  constructor (nombre, id, precio) {
    this.nombre           = nombre.toUpperCase()
    this.id               = id
    this.precio           = parseFloat(precio)
    this.cantidadVendida  = 0
    this.precioTotal      = 0
  }
  vendido () {
    this.cantidadVendida++
  }
  NoVendido () {
    this.cantidadVendida--
  }
  precioVenta () {
    this.precioTotal = this.cantidadVendida * this.precio
  }
}
const producto1 = new producto("Struffules", 1, 200)
const producto2 = new producto("Tarales", 2, 250)
const producto3 = new producto("Bizcochos", 3, 300)
const listaDeProductos = [
  producto1, producto2, producto3
]
const carritoDeCompras      = []
let contenedorCarrito       = document.getElementById("container-carrito")
let contenedorProductos     = document.querySelector("#container-productos")

const clickProducto = (productoLista) => {
  const productosCarrito = document.createElement("div");
  productosCarrito.classList = "productos-carrito";
  productosCarrito.innerHTML = `
  <div class= "nombre-producto-carrito">
    <h4>
      ${productoLista.nombre}        
    </h4>
  </div>
  <div class= "imagen-producto-carrito">  
    <img src="#" alt="#">
  </div>
  <div class= "precio-producto-carrito">  
    <p>
      $${productoLista.precio}
    </p>
  </div>`
  contenedorCarrito.append(productosCarrito);
  carritoDeCompras.push(productoLista)
  console.log(carritoDeCompras)
}
const listarProductos = () => {
  for (const productoLista of listaDeProductos) {
    const producto = document.createElement("div");
    producto.classList = "producto";
    producto.innerHTML = `
    <div class= "nombre-producto-carrito">
      <h4>
        ${productoLista.nombre}        
      </h4>
    </div>
    <div class= "imagen-producto-carrito">  
      <img src="#" alt="#">
    </div>
    <div class= "precio-producto-carrito">  
      <p>
        $${productoLista.precio}
      </p>
    </div>`
    contenedorProductos.append(producto);
    producto.onclick = () => {clickProducto(productoLista)};
  }
}
listarProductos();