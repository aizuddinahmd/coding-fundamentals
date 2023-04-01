const registerBtn = document.querySelector(".register");
const slideOverContainer = document.querySelector(".slide-over-container");
const closeBtn = document.querySelector(".close-button");

registerBtn.addEventListener("click", () => {
  console.log("event started");
  slideOverContainer.classList.add("slide-in");
  slideOverContainer.classList.remove("slide-out");
});

closeBtn.addEventListener("click", () => {
  console.log("event started");
  slideOverContainer.classList.remove("slide-in");
  slideOverContainer.classList.add("slide-out");
});
