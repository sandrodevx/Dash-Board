// Seleccionamos el canvas donde se dibujará el gráfico
let ctx = document.getElementById('miGrafico').getContext('2d');

// Creamos datos de ejemplo (ventas mensuales en miles de dólares)
let datos = {
    labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'], // Meses del año
    datasets: [{
        label: 'Ventas en $1000', // Etiqueta del gráfico
        data: [12, 19, 3, 5, 2, 3], // Datos de ventas (valores ficticios)
        backgroundColor: 'rgba(54, 162, 235, 0.5)', // Color de las barras
        borderColor: 'rgba(54, 162, 235, 1)', // Borde de las barras
        borderWidth: 1 // Grosor del borde
    }]
};

// Configuramos el gráfico
let config = {
    type: 'bar', // Tipo de gráfico (puede ser 'line', 'pie', etc.)
    data: datos, // Datos que definimos antes
    options: {
        responsive: true, // Que se ajuste al tamaño de la pantalla
        scales: {
            y: {
                beginAtZero: true // Para que el eje Y empiece desde 0
            }
        }
    }
};

// Creamos el gráfico con Chart.js
new Chart(ctx, config);
