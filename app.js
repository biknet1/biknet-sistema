import productos from "./datos.js";

const searchInput = document.getElementById("search");
const resultsBody = document.querySelector("#results tbody");
const totalText = document.getElementById("totalProductos");

// Mostrar todos los productos al iniciar
mostrarResultados(productos);

// Filtrar resultados mientras se escribe
searchInput.addEventListener("input", () => {
  const query = searchInput.value.trim().toLowerCase();
  const resultadosFiltrados = productos.filter(producto =>
    producto.descripcion.toLowerCase().includes(query) ||
    producto.codigo.toLowerCase().includes(query)
  );
  mostrarResultados(resultadosFiltrados);
});

function mostrarResultados(resultados) {
  resultsBody.innerHTML = "";
  totalText.textContent = Total de productos: ${resultados.length};

  resultados.forEach(producto => {
    const fila = document.createElement("tr");

    fila.insertCell().textContent = producto.codigo;
    fila.insertCell().textContent = producto.descripcion;
    fila.insertCell().textContent = producto.stock;
    fila.insertCell().textContent = producto.ubicacion;
    fila.insertCell().textContent = producto.precio;
    fila.insertCell().textContent = producto.stock > 0 ? "Disponible" : "No disponible";

    resultsBody.appendChild(fila);
  });
}
