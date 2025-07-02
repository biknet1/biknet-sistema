import productos from './datos.js';

const searchInput = document.getElementById('searchInput');
const resultsBody = document.querySelector('#results tbody');
const totalCount = document.getElementById('totalCount');

// Mostrar productos al inicio
renderProducts(productos);

// Escuchar búsqueda
searchInput.addEventListener('input', () => {
  const query = searchInput.value.trim().toLowerCase();
  const filtrados = productos.filter(p =>
    p.descripcion.toLowerCase().includes(query) ||
    p.codigo.toLowerCase().includes(query)
  );
  renderProducts(filtrados);
});

// Renderizar productos en la tabla
function renderProducts(lista) {
  resultsBody.innerHTML = '';
  totalCount.textContent = Total de productos: ${lista.length};

  lista.forEach(producto => {
    const fila = resultsBody.insertRow();

    fila.insertCell().textContent = producto.codigo;
    fila.insertCell().textContent = producto.descripcion;
    fila.insertCell().textContent = producto.stock;
    fila.insertCell().textContent = producto.ubicacion || '';
    fila.insertCell().textContent = producto.precio || '';
    fila.insertCell().textContent = producto.stock > 0 ? 'Disponible' : 'No disponible';
  });
}
