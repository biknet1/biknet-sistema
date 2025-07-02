import products from './datos.js';

const searchInput = document.getElementById('searchInput');
const resultsDiv = document.getElementById('results');
const totalCountSpan = document.getElementById('totalCount');

// Mostrar cantidad total de productos
totalCountSpan.textContent = Total de productos: ${products.length};

// Función para mostrar productos
function displayProducts(productsToDisplay) {
  resultsDiv.innerHTML = '';
  if (productsToDisplay.length === 0) {
    resultsDiv.innerHTML = '<p>No se encontraron productos.</p>';
    return;
  }

  productsToDisplay.forEach(product => {
    const productDiv = document.createElement('div');
    productDiv.classList.add('product');

    const codigo = document.createElement('p');
    codigo.innerHTML = <strong>Código:</strong> ${product.codigo};
    productDiv.appendChild(codigo);

    const descripcion = document.createElement('p');
    descripcion.innerHTML = <strong>Descripción:</strong> ${product.descripcion};
    productDiv.appendChild(descripcion);

    const stock = document.createElement('p');
    stock.innerHTML = <strong>Stock:</strong> ${product.stock};
    productDiv.appendChild(stock);

    const ubicacion = document.createElement('p');
    ubicacion.innerHTML = <strong>Ubicación:</strong> ${product.ubicacion};
    productDiv.appendChild(ubicacion);

    if (product.precio !== '') {
      const precio = document.createElement('p');
      precio.innerHTML = <strong>Precio:</strong> $${product.precio};
      productDiv.appendChild(precio);
    }

    resultsDiv.appendChild(productDiv);
  });
}

// Mostrar todos los productos al inicio
displayProducts(products);

// Buscador dinámico
searchInput.addEventListener('input', () => {
  const searchTerm = searchInput.value.toLowerCase();
  const filteredProducts = products.filter(product =>
    product.descripcion.toLowerCase().includes(searchTerm) ||
    product.codigo.toLowerCase().includes(searchTerm)
  );
  displayProducts(filteredProducts);
});
