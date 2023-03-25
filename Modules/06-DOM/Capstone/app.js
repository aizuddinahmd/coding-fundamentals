const header = document.querySelector("header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    console.log("scrolled");
    header.classList.add("hidden");
  } else {
    header.classList.remove("hidden");
  }
});

window.addEventListener("mousemove", (e) => {
  if (e.clientY < 50) {
    header.classList.remove("hidden");
  }
});
