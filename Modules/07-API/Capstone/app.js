const BASE_URL = "https://api.thecatapi.com/v1/breeds";
const container = document.querySelector(".container");

const getName = async () => {
  const response = await fetch(`${BASE_URL}`);
  const data = await response.json();
  console.log(data);
  data.forEach((cat) => {
    if (cat.reference_image_id) {
      const card = document.createElement("div");
      card.classList.add("card");
      const img = document.createElement("img");
      img.onerror = function () {
        this.onerror = null;
        this.src = "./missing.jpeg";
      };
      img.src = `https://cdn2.thecatapi.com/images/${cat.reference_image_id}.jpg `;
      card.appendChild(img);

      const name = document.createElement("h2");
      name.textContent = cat.name;
      card.appendChild(name);

      const desc = document.createElement("p");
      desc.textContent = cat.description;
      card.appendChild(desc);

      container.appendChild(card);
    }
  });
};

getName();
