import { propiedadesAlquiler } from './data/propiedades_alquiler.js';

const propertyContainer = document.getElementById("property-container");

function renderProperties(properties) {
  propertyContainer.innerHTML = "";

  for (let property of properties) {
    let smokeIcon = property.smoke
      ? '<i class="fas fa-smoking text-success"></i>'
      : '<i class="fas fa-smoking-ban text-danger"></i>';
    let petsIcon = property.pets
      ? '<i class="fas fa-paw text-success"></i>'
      : '<i class="fas fa-paw text-danger"></i>';

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
            <p>${smokeIcon} ${property.smoke ? "Permitido fumar" : "Prohibido fumar"}</p>
            <p>${petsIcon} ${
              property.pets ? "Se permiten mascotas" : "No se permiten mascotas"
            }</p>
          </div>
        </div>
      </div>
    `;

    propertyContainer.innerHTML += card;
  }
}

renderProperties(propiedadesAlquiler);