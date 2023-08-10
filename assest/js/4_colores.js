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
