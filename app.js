import productos from "./datos.js";

const searchInput = document.getElementById("search");
const resultsTable = document.getElementById("results").getElementsByTagName("tbody")[0];
const totalSpan = document.getElementById("total");

function renderResults(filteredProducts) {
    resultsTable.innerHTML = "";

    filteredProducts.forEach(producto => {
        const row = resultsTable.insertRow();
        row.insertCell().textContent = producto.codigo;
        row.insertCell().textContent = producto.descripcion;
        row.insertCell().textContent = producto.stock;
        row.insertCell().textContent = producto.ubicacion;
        row.insertCell().textContent = producto.precio;
        row.insertCell().textContent = producto.stock > 0 ? "Disponible" : "No disponible";
    });

    totalSpan.textContent = Total de productos: ${filteredProducts.length};
}

// Mostrar todos los productos al inicio
renderResults(productos);

// Filtrado dinámico
searchInput.addEventListener("input", () => {
    const query = searchInput.value.toLowerCase();
    const filtered = productos.filter(p =>
        p.codigo.toLowerCase().includes(query) ||
        p.descripcion.toLowerCase().includes(query)
    );
    renderResults(filtered);
});
