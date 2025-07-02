import productos from './datos.js';

const searchInput = document.getElementById("search");
const tableBody = document.querySelector("#results tbody");

function mostrarResultados(filtrados) {
    tableBody.innerHTML = "";
    filtrados.forEach(p => {
        const fila = document.createElement("tr");
        fila.innerHTML = `
            <td>${p.codigo}</td>
            <td>${p.descripcion}</td>
            <td>${p.stock}</td>
            <td>${p.ubicacion}</td>
            <td>${p.precio}</td>
            <td>${p.stock > 0 ? "Sí" : "No"}</td>
        `;
        tableBody.appendChild(fila);
    });
}

searchInput.addEventListener("input", () => {
    const texto = searchInput.value.toLowerCase();
    const resultados = productos.filter(p =>
        p.codigo.toLowerCase().includes(texto) ||
        p.descripcion.toLowerCase().includes(texto)
    );
    mostrarResultados(resultados);
});

mostrarResultados(productos);
