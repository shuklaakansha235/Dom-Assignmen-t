
const bulb = document.querySelector(".bulb");

const button = document.querySelector("button");


button.addEventListener("click", () => {
    if (bulb.style.backgroundColor === "white") {
      bulb.style.backgroundColor = "orange";
      bulb.style.boxShadow = "0 0 50px 50px greenyellow";
      button.textContent = "Off";
    } else {
      bulb.style.backgroundColor = "white";
      bulb.style.boxShadow = "none";
      button.textContent = "On";
    }
  });