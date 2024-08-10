let mainGrid = document.querySelectorAll(".grid-content");

for (let i = 0; i < mainGrid.length; i++) {
  mainGrid[i].addEventListener("click", () => {
    window.location.href = `recipe-${i+1}.html`;
  });
}