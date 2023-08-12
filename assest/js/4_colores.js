const divAzul = document.getElementById("div1");
const divRojo = document.getElementById("div2");
const divVerde = document.getElementById("div3");
const divAmarillo = document.getElementById("div4");
function cambiarColorNegro() {
  this.style.backgroundColor = "black";
}
divAzul.addEventListener("click", cambiarColorNegro);
divRojo.addEventListener("click", cambiarColorNegro);
divVerde.addEventListener("click", cambiarColorNegro);
divAmarillo.addEventListener("click", cambiarColorNegro);

document.addEventListener("keydown", function (event) {
  elemento = this.querySelector("#div5");
  if (event.key === "a") {
    elemento.style.backgroundColor = "pink";
  } else if (event.key === "s") {
    elemento.style.backgroundColor = "orange";
  } else if (event.key === "d") {
    elemento.style.backgroundColor = "#87CEEB";
  } else if (event.key === "q") {
    createElement("purple");
  } else if (event.key === "w") {
    createElement("gray");
  } else if (event.key === "e") {
    createElement("brown");
  }
});

function createElement(color) {
  const newDiv = document.createElement("div");
  newDiv.style.width = "200px";
  newDiv.style.height = "200px";
  newDiv.style.backgroundColor = color;
  document.body.appendChild(newDiv);
}
