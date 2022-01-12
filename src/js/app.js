import "../scss/app.scss";

window.addEventListener("DOMContentLoaded", () => {
  // This block will be executed once the page is loaded and ready

  const button = document.querySelector(".button");
  button.addEventListener("click", () => {
    alert("💣");
  });

  let img = document.querySelector(".image");

  img.addEventListener("click", function change() {
    img.style.transform = "scale(2)";
    img.className = "active";
    console.log(img.className);
  });
});
