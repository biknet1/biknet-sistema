
const productos = [
    {codigo: "123", descripcion: "Farol trasero Fiat", stock: 3, ubicacion: "Estantería A3", precio: "$15000"},
    {codigo: "456", descripcion: "Guardabarros Hilux 2010", stock: 0, ubicacion: "Caja 2", precio: "$38000"},
    {codigo: "789", descripcion: "Parrilla Peugeot 308", stock: 5, ubicacion: "Pasillo 4", precio: "$22000"},
];

const input = document.getElementById("search");
const tbody = document.querySelector("#results tbody");

input.addEventListener("input", () => {
    const texto = input.value.toLowerCase().trim();
    tbody.innerHTML = "";

    const resultados = productos.filter(p => 
        p.codigo.toLowerCase().includes(texto) ||
        texto.split(" ").every(palabra => p.descripcion.toLowerCase().includes(palabra))
    );

    resultados.forEach(p => {
        const tr = document.createElement("tr");
        if (parseInt(p.stock) === 0) tr.classList.add("unavailable");

        tr.innerHTML = `
            <td>${p.codigo}</td>
            <td>${p.descripcion}</td>
            <td>${p.stock}</td>
            <td>${p.ubicacion}</td>
            <td>${p.precio}</td>
            <td>${p.stock > 0 ? "Disponible" : "NO DISPONIBLE"}</td>
        `;
        tbody.appendChild(tr);
    });
});
