const form = document.querySelector("form");
const searchInput = document.querySelector("#searchInput");
const card = document.querySelector("#card");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const username = searchInput.value;
  fetch(`https://api.github.com/users/${username}`)
    .then((response) => response.json())
    .then((data) => {
      card.innerHTML = `
        <img src="${data.avatar_url}" alt="${data.login}" width="100">
        <h2>${data.name} (${data.login})</h2>
        <p>${data.bio}</p>
        <ul>
          <li>Followers: ${data.followers}</li>
          <li>Following: ${data.following}</li>
          <li>Public Repos: ${data.public_repos}</li>
        </ul>
      `;
      card.style.display = "block";
    })
    .catch((error) => console.error(error));
});
