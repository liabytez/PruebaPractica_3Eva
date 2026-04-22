const productos = [
    { nombre: "Teclado", precio: 25, stock: 10, categoria: "informatica" },
    { nombre: "Ratón", precio: 15, stock: 0, categoria: "informatica" },
    { nombre: "Monitor", precio: 180, stock: 4, categoria: "informatica" },
    { nombre: "Silla", precio: 90, stock: 2, categoria: "mobiliario" },
    { nombre: "Libreta", precio: 3, stock: 50, categoria: "papeleria" },
    { nombre: "Boligrafo", precio: 1, stock: 100, categoria: "papeleria" },
]

const mayuscula = productos.map(
    p => {
        
        return `
                ${nombre.toUpperCase()}
                `;
    }
)
console.log(mayuscula);