let body = document.body;
let lamp = document.querySelector("#lamp");
let head = document.querySelector(".header");

function lightsoff(){
	lamp.classList.toggle("darkmode");
	body.classList.toggle("darkmode");
	head.classList.toggle("changetext");

}

lamp.addEventListener("click", lightsoff);
