function mostrarProductos(lista) {
  const contenedor = document.getElementById("resultados");
  contenedor.innerHTML = "";

  lista.forEach((producto) => {
    const div = document.createElement("div");
    div.innerHTML = `
      <strong>${producto.codigo}</strong> - ${producto.descripcion}<br><hr>`;
    contenedor.appendChild(div);
  });

  if (lista.length === 0) {
    contenedor.innerHTML = "<p>No se encontraron productos.</p>";
  }
}

document.getElementById("buscador").addEventListener("input", function () {
  const texto = this.value.toLowerCase();
  const filtrados = productos.filter(p =>
    p.descripcion.toLowerCase().includes(texto) ||
    p.codigo.toLowerCase().includes(texto)
  );
  mostrarProductos(filtrados);
});

mostrarProductos(productos);
