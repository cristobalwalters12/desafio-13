/* ESTE ES EL REQUERIMIENTO 3  
3.1. 
function pintar() {
  ele.style.backgroundColor = "yellow";
}
const ele = document.getElementById("ele1");
ele.addEventListener("click", pintar);*/

/* 
3.2
function pintar(event){
    event.target.style.backgroundColor = 'yellow';
}
const ele = document.getElementById("ele1");
ele.addEventListener("click", pintar);

*/

//3.3

function pintar(event, color = "green") {
  event.target.style.backgroundColor = color;
}
const ele = document.getElementById("ele1");
ele.addEventListener("click", (event) => pintar(event, "yellow"));
pintar({ target: ele });
