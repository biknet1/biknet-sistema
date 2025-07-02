import productos from './datos.js';

const searchInput = document.getElementById('search');
const resultsBody = document.querySelector('#results tbody');
const totalText = document.getElementById('total');

// Mostrar todos los productos al iniciar
mostrarResultados(productos);

// Filtrar resultados mientras se escribe
searchInput.addEventListener('input', () => {
  const query = searchInput.value.trim().toLowerCase();
  const resultadosFiltrados = productos.filter(producto =>
    producto.descripcion.toLowerCase().includes(query) ||
    producto.codigo.toLowerCase().includes(query)
  );
  mostrarResultados(resultadosFiltrados);
});

function mostrarResultados(resultados) {
  resultsBody.innerHTML = '';

  resultados.forEach(producto => {
    const fila = document.createElement('tr');

    const disponibilidad = producto.stock > 0 ? 'Disponible' : 'No disponible';

    fila.innerHTML = `
      <td>${producto.codigo}</td>
      <td>${producto.descripcion}</td>
      <td>${producto.stock}</td>
      <td>${producto.ubicacion}</td>
      <td>${producto.precio || ''}</td>
      <td>${disponibilidad}</td>
    `;

    resultsBody.appendChild(fila);
  });

  // Mostrar la cantidad total
  totalText.textContent = Total de productos: ${resultados.length};
}
