function mostrarProductos(filtro = '') {
  const contenedor = document.getElementById('resultado');
  const contador = document.getElementById('contador');
  contenedor.innerHTML = '';

  const filtroMinuscula = filtro.toLowerCase();

  const productosFiltrados = productos.filter(producto =>
    producto.descripcion.toLowerCase().includes(filtroMinuscula) ||
    producto.codigo.toLowerCase().includes(filtroMinuscula)
  );

  contador.textContent = Total de productos: ${productosFiltrados.length};

  productosFiltrados.forEach(producto => {
    const div = document.createElement('div');
    div.classList.add('producto');

    let estado = producto.stock === 0 ? '<span class="no-disponible">NO DISPONIBLE</span>' : 'DISPONIBLE';

    div.innerHTML = `
      <strong>${producto.descripcion}</strong><br>
      Código: ${producto.codigo}<br>
      Ubicación: ${producto.ubicacion}<br>
      Stock: ${producto.stock}<br>
      Precio: ${producto.precio ? '$' + producto.precio : 'Sin precio'}<br>
      Estado: ${estado}
    `;
    contenedor.appendChild(div);
  });
}

document.getElementById('buscador').addEventListener('input', e => {
  mostrarProductos(e.target.value);
});

mostrarProductos();
