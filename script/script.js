document.addEventListener("DOMContentLoaded", function() {
    // Manejo de los enlaces de las redes sociales
    const redes = document.querySelectorAll('.redes a');
    redes.forEach(red => {
        red.addEventListener('click', function(event) {
            event.preventDefault();
            const url = this.href;
            window.open(url, '_blank');
        });
    });

    // Manejo del formulario de generación de boleta
    document.getElementById("formularioBoleta").addEventListener("submit", function(event) {
        event.preventDefault();
        
        // Validación de nombre
        const nombreInput = document.getElementById("nombre");
        const nombre = nombreInput.value;
        if (!/^[a-zA-Z\s]+$/.test(nombre)) {
            alert("El nombre solo debe contener letras y espacios.");
            nombreInput.focus();
            return;
        }

        // Obtener los valores del formulario
        const fecha = document.getElementById("fecha").value;
        const producto = document.getElementById("producto").value;
        const cantidad = parseFloat(document.getElementById("cantidad").value);
        const precio = parseFloat(document.getElementById("precio").value);
        
        // Calcular el total, descuentos e impuestos
        const total = cantidad * precio;
        const descuentos = total > 100 ? total * 0.1 : 0;
        const impuestos = total * 0.18;
        const totalPagar = total - descuentos + impuestos;
        
        // Mostrar los resultados en la boleta
        document.getElementById("numeroBoleta").textContent = Math.floor(Math.random() * 1000000);
        document.getElementById("fechaEmision").textContent = new Date().toLocaleDateString();
        document.getElementById("boletaNombre").textContent = nombre;
        document.getElementById("boletaProducto").textContent = producto;
        document.getElementById("boletaCantidad").textContent = cantidad;
        document.getElementById("boletaPrecio").textContent = precio.toFixed(2);
        document.getElementById("boletaTotal").textContent = total.toFixed(2);
        document.getElementById("boletaDescuentos").textContent = descuentos.toFixed(2);
        document.getElementById("boletaImpuestos").textContent = impuestos.toFixed(2);
        document.getElementById("boletaTotalPagar").textContent = totalPagar.toFixed(2);
    });
});
