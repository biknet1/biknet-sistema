<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8" />
  <title>Buscador - Biknet Autopartes</title>
  <link rel="stylesheet" href="styles.css" />
</head>
<body>
  <h1>Buscador de Productos</h1>

  <div style="display: flex; justify-content: space-between; align-items: center;">
    <input type="text" id="search" placeholder="Buscar por código o descripción..." style="flex-grow: 1;" />
  </div>

  <table id="results">
    <thead>
      <tr>
        <th>Código</th>
        <th>Descripción</th>
        <th>Stock</th>
        <th>Ubicación</th>
        <th>Precio</th>
        <th>Disponibilidad</th>
      </tr>
    </thead>
    <tbody>
      <!-- Resultados van acá -->
    </tbody>
  </table>

  <script type="module" src="app.js"></script>
</body>
</html>
[15:37, 2/7/2025] Marce Lucero: import productos from './datos.js';

const searchInput = document.getElementById('search');
const resultsBody = document.querySelector('#results tbody');

mostrarResultados(productos);

searchInput.addEventListener('input', () => {
  const query = searchInput.value.trim().toLowerCase();
  const resultadosFiltrados = productos.filter(producto =>
    producto.descripcion.toLowerCase().includes(query) ||
    producto.codigo.toLowerCase().includes(query)
  );
  mostrarResultados(resultadosFiltrados);
});
