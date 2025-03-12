// Función para cambiar el color de fondo de la página
function changeBackgroundColor() {
    document.body.style.backgroundColor = document.body.style.backgroundColor === 'lightblue' ? '#f4f4f4' : 'lightblue';
}

// Función para mostrar/ocultar un elemento de la página
function toggleElement() {
    const imgElement = document.querySelector('img');
    if (imgElement.style.display === 'none') {
        imgElement.style.display = 'block';
    } else {
        imgElement.style.display = 'none';
    }
}

