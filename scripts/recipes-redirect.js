let moreRecipesA = document.querySelectorAll(".redirectA");
let moreRecipesB = document.querySelectorAll(".redirectB");
let moreRecipesC = document.querySelectorAll(".redirectC");
let moreRecipesD = document.querySelectorAll(".redirectD");
let moreRecipesE = document.querySelectorAll(".redirectE");
let moreRecipesF = document.querySelectorAll(".redirectF");

for (let i = 0; i < moreRecipesA.length; i++) {
  moreRecipesA[i].addEventListener("click", () => {
    window.location.href = `recipe-${i + 2}.html`;
  });
}

for (let i = 0; i < moreRecipesB.length; i++) {
  moreRecipesB[i].addEventListener("click", () => {
    window.location.href = `recipe-${i + 3}.html`;
  });
}

for (let i = 0; i < moreRecipesC.length; i++) {
  moreRecipesC[i].addEventListener("click", () => {
    window.location.href = `recipe-${i + 4}.html`;
  });
}

for (let i = 0; i < moreRecipesD.length; i++) {
  moreRecipesD[i].addEventListener("click", () => {
    if (i + 5 < 7) {
      window.location.href = `recipe-${i + 5}.html`;
    } else {
      window.location.href = `recipe-${i - 1}.html`;
    }
  });
}

for (let i = 0; i < moreRecipesE.length; i++) {
  moreRecipesE[i].addEventListener("click", () => {
    if (i + 6 < 7) {
      window.location.href = `recipe-${i + 6}.html`;
    } else {
      window.location.href = `recipe-${i}.html`;
    }
  });
}

for (let i = 0; i < moreRecipesF.length; i++) {
  moreRecipesF[i].addEventListener("click", () => {
    window.location.href = `recipe-${i + 1}.html`;
  });
}
