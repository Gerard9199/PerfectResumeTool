// Paso 1: Seleccionar el contenido HTML del resume
var resumeContentElement = document.getElementById('resumeDoc').cloneNode(true);

// Paso 1.1: Eliminar todos los elementos con clases que comienzan con "document-tool"
var elementsToRemove = resumeContentElement.querySelectorAll('[class^="document-tool"], [class*=" document-tool"]');
elementsToRemove.forEach(function(element) {
    element.parentNode.removeChild(element);
});

// Paso 1.2: Eliminar todos los elementos con la clase "rename-section text-rename"
var renameElements = resumeContentElement.querySelectorAll('.rename-section.text-rename');
renameElements.forEach(function(element) {
    element.parentNode.removeChild(element);
});

// Convertir el contenido actualizado a HTML
var resumeContent = resumeContentElement.innerHTML;

// Paso 2: Crear un elemento 'a' para permitir la descarga
var downloadElement = document.createElement('a');
downloadElement.href = 'data:text/html;charset=utf-8,' + encodeURIComponent(resumeContent);
downloadElement.download = 'MiResume.html';

// Paso 3: Simular un clic en el elemento para iniciar la descarga
document.body.appendChild(downloadElement); // Agrega el elemento al DOM para poder "clickearlo"
downloadElement.click(); // Simula el clic
document.body.removeChild(downloadElement); // Elimina el elemento del DOM después del clic
