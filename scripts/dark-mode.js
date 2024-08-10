let darkModeButton = document.querySelector("#nav-icon-container");
let darkElements = document.querySelectorAll(
  "body, h1, h2, h3, h4, p, ul, ol, table, td, span, #grid, .grid-content, main, #grid-container, #ingredients, #more-recipes, #preparation-time, #form-container"
);
let navIcon = document.querySelector("#nav-icon-container img");

// verificar estado de modo oscuro
if (localStorage.getItem("darkMode") === "ON") {
  darkElements.forEach((element) => {
    element.classList.add("dark-mode");
  });
  navIcon.src = "./media/img/sun-icon.png";
}

// asignar modo oscuro
darkModeButton.addEventListener("click", () => {
  darkElements.forEach((element) => {
    element.classList.toggle("dark-mode");
  });

  // actualizar icono y guardar estado modo oscuro
  if (document.body.classList.contains("dark-mode")) {
    navIcon.src = "./media/img/sun-icon.png";
    localStorage.setItem("darkMode", "ON");
  } else {
    navIcon.src = "./media/img/moon-icon.png";
    localStorage.setItem("darkMode", "OFF");
  }
});
