const themeBtn = document.querySelector("#themeBtn");
const moonInfoBtn = document.querySelector("#moonInfoBtn");
const contenedor = document.querySelector("#contenedor");

function changeStyle() {
  document.body.classList.toggle("dark");
}

function cargarTarjetas() {
  fetch('JSON/data.json')
    .then(res => res.json())
    .then(datos => {
      let htmlAcumulado = "";

      datos.forEach(item => {
        htmlAcumulado += `<div class="card">`;
        htmlAcumulado += `<h2>${item.title}</h2>`;
        htmlAcumulado += `<p>${item.description}</p>`;
        htmlAcumulado += `<p>${item.details}</p>`;
        htmlAcumulado += `</div>`;
      });

      contenedor.innerHTML = htmlAcumulado;
    });
}

themeBtn.addEventListener("click", changeStyle);
moonInfoBtn.addEventListener("click", cargarTarjetas);