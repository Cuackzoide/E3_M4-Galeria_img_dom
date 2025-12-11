document.addEventListener("DOMContentLoaded", (event) => {
  event.preventDefault();
  const imagenPrincipal = document.getElementById("imagen-principal");
  const thumbnails = document.querySelectorAll(".thumbnail");
  const container = document.getElementById("imagen-principal-container");

  thumbnails.forEach((img) => {
    img.addEventListener("click", (e) => {
      let imgSrc = e.target.src;
      let imgAlt = e.target.alt;
      imagenPrincipal.src = imgSrc;
      if (document.getElementById("pie-de-foto") !== null) {
        document.getElementById("pie-de-foto").remove();
      }
      let pieDeFoto = document.createElement("p");
      pieDeFoto.setAttribute("id", "pie-de-foto");
      pieDeFoto.textContent = imgAlt;
      container.appendChild(pieDeFoto);
    });
  });
});
