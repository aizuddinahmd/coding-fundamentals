const notification = document.querySelector(".notification");
const addButton = document.querySelector(".add__button");

addButton.addEventListener("click", () => {
  notification.classList.add("show");
});
