const palette = document.querySelector(".palette");

document.addEventListener("keydown", (event) => {
  if (event.metaKey && event.key === "k") {
    console.log("clicked");
    palette.classList.remove("fade-out");
    palette.classList.add("fade-in");
  }
});
