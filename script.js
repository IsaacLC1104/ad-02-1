/*### ⚙️ JavaScript
>- **Enlazar** JavaScript al HTML
>- **Modificar** el primer `"¡Hola mundo!"` para que diga `"Adiós"` usando JS
>- **Cambiar** el color de fuente de un encabezado a naranja con JS
>- **Agregar** un encabezado clickeable que cambie el color de la fuente a café con JS
*/
const h1FirstHolaMundo = document.getElementById("f-HM");
const h2ColorCyan = document.getElementById("cyan");
const h6ChangeColor = document.getElementById("changeColor");

h1FirstHolaMundo.textContent = "Adios";
h2ColorCyan.style.color = "orange";


h6ChangeColor.addEventListener("click", () => {
    h6ChangeColor.style.color = "brown";
    h6ChangeColor.style.fontSize = "4em";
}

);

