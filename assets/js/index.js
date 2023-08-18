const propiedadesJSON = [
    {
        name: "Casa de campo",
        description: "Un lugar ideal para descansar de la ciudad",
        src: "https://www.construyehogar.com/wp-content/uploads/2020/02/Dise%C3%B1o-casa-en-ladera.jpg",
        rooms: 2,
        m: 170,
    },
    {
        name: "Casa de playa",
        description: "Despierta tus días oyendo el oceano",
        src: "https://media.chvnoticias.cl/2018/12/casas-en-la-playa-en-yucatan-2712.jpg",
        rooms: 2,
        m: 130,
    },
    {
        name: "Casa en el centro",
        description: "Ten cerca de ti todo lo que necesitas",
        src: "https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg",
        rooms: 1,
        m: 80,
    },
    {
        name: "Casa rodante",
        description: "Conviertete en un nómada del mundo sin salir de tu casa",
        src: "https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg",
        rooms: 1,
        m: 6,
    },
    {
        name: "Departamento",
        description: "Desde las alturas todo se ve mejor",
        src: "https://www.adondevivir.com/noticias/wp-content/uploads/2016/08/depto-1024x546.jpg",
        rooms: 3,
        m: 200,
    },
    {
        name: "Mansión",
        description: "Vive una vida lujosa en la mansión de tus sueños ",
        src: "https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg",
        rooms: 5,
        m: 500,
    },
];

document.addEventListener("DOMContentLoaded", () => {
    const searchButton = document.getElementById("search-btn");
    searchButton.addEventListener("click", handleSearch);

    updateResults(propiedadesJSON);
});

const handleSearch = () => {
    const roomsInput = document.getElementById("rooms");
    const minInput = document.getElementById("min-input");
    const maxInput = document.getElementById("max-input");

    if (!roomsInput.value || !minInput.value || !maxInput.value) {
        alert("Por favor completa todos los campos para realizar la búsqueda.");
        return;
    }

    const filteredProperties = filterProperties(
        parseInt(roomsInput.value),
        parseInt(minInput.value),
        parseInt(maxInput.value)
    );

    updateResults(filteredProperties);
};

const filterProperties = (rooms, minMeters, maxMeters) => {
    return propiedadesJSON.filter(
        (property) =>
            property.rooms === rooms &&
            property.m >= minMeters &&
            property.m <= maxMeters
    );
};

const updateResults = (properties) => {
    const propiedadesSection = document.querySelector(".propiedades");
    const totalCountElement = document.querySelector("#Propiedades h4 span");

    const propertyTemplate = (property) =>
        `<div class="propiedad">
      <div class="img" style="background-image: url('${property.src}')"></div>
      <section>
        <h5>${property.name}</h5>
        <div class="d-flex justify-content-between">
          <p>Cuartos: ${property.rooms}</p>
          <p>Metros: ${property.m}</p>
        </div>
        <p class="my-3">${property.description}</p>
        <button class="btn btn-info">Ver más</button>
      </section>
    </div>`;

    let propertiesHTML = "";
    properties.forEach((property) => {
        propertiesHTML += propertyTemplate(property);
    });

    propiedadesSection.innerHTML = propertiesHTML;
    totalCountElement.textContent = properties.length;
};
