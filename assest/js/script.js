/*
3.1. 
function pintar() {
  ele.style.backgroundColor = "yellow";
}
const ele = document.getElementById("ele1");
ele.addEventListener("click", pintar);*/

function pintar(event) {
  event.target.style.backgroundColor = "yellow";
}
const ele = document.getElementById("ele1");
ele.addEventListener("click", pintar);

elemento = document.getElementById("ele1");
function pintarVerde(parametro = "green") {
  elemento.style.backgroundColor = parametro;
}
pintarVerde();
