# 🛠️ E3-M4 Ejercicio

## Galería de Imágenes Interactiva con el DOM 🖼️

### Objetivo:

Practicar la manipulación del Document Object Model (**DOM**) para crear una página web interactiva. Aprenderás a seleccionar elementos, escuchar eventos del usuario (`'click'`), modificar atributos y añadir nuevos elementos al DOM de forma dinámica.

### Actividad:

Se te proporciona una estructura **HTML** y estilos **CSS** básicos para una galería. Tu tarea es escribir el código **JavaScript** necesario para que, al hacer clic en una de las imágenes pequeñas (`.thumbnail`), esta se muestre en el visor principal y se añada un pie de foto correspondiente.

#### Estructura Inicial

**HTML** (_index.html_) -> _Se modifican URL de placeholders, para correcta visualización_
**CSS** (_style.css_)

#### Instrucciones de JavaScript (app.js):

**1. Selección de Elementos**:

- Selecciona el elemento de la imagen principal (`<img>` con `id="imagen-principal"`).

- Selecciona todos los elementos de las imágenes _thumbnail_ (las que tienen la clase `.thumbnail`). Esto te dará una colección de elementos o `NodeList`.

**2. Añadir Event Listeners a los Thumbnails**:

- Itera sobre la colección de thumbnails (puedes usar un bucle `forEach`).

- A cada thumbnail, añádele un `.addEventListener` que escuche el evento `'click'`.

**3. Definir la Lógica del Evento**:

- Dentro de la función que se ejecuta al hacer clic, haz lo siguiente:

- Obtén la URL (el `src`) del thumbnail que fue clickeado.

- Actualiza el `src` de la imagen principal con la URL del thumbnail.

- Obtén el texto alternativo (`alt`) del thumbnail clickeado. Este texto lo usarás como pie de foto.

**4. Crear y Añadir el Pie de Foto**:

**Importante**: Primero, busca si ya existe un pie de foto anterior y, si es así, **elimínalo** para evitar que se acumulen.

Usa `document.createElement('p')` para crear un nuevo elemento de párrafo.

Asígnale un id (ej: `"pie-de-foto"`) y su contenido de texto (`.textContent`) con el valor del `alt` que obtuviste.

Finalmente, usa `appendChild()` para añadir este nuevo párrafo al contenedor de la imagen principal (`div` con `id="imagen-principal-container"`).

### Conceptos a Aplicar:

- **Selección del DOM**: `document.querySelector()` y `document.querySelectorAll()`.

- **Manejo de Eventos**: `addEventListener('click', miFuncion{});`.

- **Manipulación de Atributos**: Acceder a (`elemento.src`, `elemento.alt`) y modificar propiedades (`elemento.src = ...`).

- **Creación de Elementos**: `document.createElement()`.

- **Inserción en el DOM**: `elemento.appendChild()`.

- **Eliminación de Elementos** (recomendado): `elemento.remove()`.

### Entrega:

El trabajo deberá ser entregado a través de un [repositorio público](https://github.com/Cuackzoide/E3_M4-Galeria_img_dom/) en GitHub que contenga los tres archivos (**_index.html_, _style.css_, _app.js_**).

_Se añade estructura de carpetas assets para mejor organización del codigo_
