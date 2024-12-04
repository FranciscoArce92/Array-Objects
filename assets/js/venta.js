import { propiedadesVenta } from "./data/propiedades_venta.js";

const propertyContainer = document.getElementById("property-container");

function renderProperties(properties) {
  propertyContainer.innerHTML = "";

  for (let property of properties) {
    let smokeIcon = property.smoke
      ? '<p class="text-success"><i class="fas fa-smoking"></i> Permitido fumar</p>'
      : '<p class="text-danger"><i class="fas fa-smoking-ban"></i> Prohibido fumar</p>';

    let petsIcon = property.pets
      ? '<p class="text-success"><i class="fas fa-paw"></i> Mascotas permitidas</p>'
      : '<p class="text-danger"><i class="fas fa-paw"></i> Mascotas no permitidas</p>';

    const card = `
      <div class="col-md-4 mb-4">
        <div class="card">
          <img
            src="${property.src}"
            class="card-img-top"
            alt="Imagen de la propiedad"
          />
          <div class="card-body">
            <h5 class="card-title">${property.nombre}</h5>
            <p class="card-text">${property.descripcion}</p>
            <p><i class="fas fa-map-marker-alt"></i> ${property.ubicacion}</p>
            <p><i class="fas fa-bed"></i> ${property.habitaciones} Habitaciones</p>
            <p><i class="fas fa-dollar-sign"></i>${property.costo}</p>
            ${smokeIcon}
            ${petsIcon}
          </div>
        </div>
      </div>
    `;

    propertyContainer.innerHTML += card;
  }
}

renderProperties(propiedadesVenta);
