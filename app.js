function mostrarProductos(lista) {
  const contenedor = document.getElementById("resultados");
  contenedor.innerHTML = "";

  lista.forEach((producto) => {
    const div = document.createElement("div");
    div.classList.add("producto");
    div.textContent = ${producto.codigo} - ${producto.descripcion} | Stock: ${producto.stock} | Ubicación: ${producto.ubicacion} | Precio: ${producto.precio || 'Sin precio'};
    contenedor.appendChild(div);
  });

  if (lista.length === 0) {
    contenedor.innerHTML = "<p>No se encontraron productos.</p>";
  }
}

document.getElementById("buscador").addEventListener("input", function () {
  const texto = this.value.toLowerCase();
  const filtrados = productos.filter(p =>
    (p.descripcion && p.descripcion.toLowerCase().includes(texto)) ||
    (p.codigo && p.codigo.toLowerCase().includes(texto))
  );
  mostrarProductos(filtrados);
});

mostrarProductos(productos);
