let body = document.body;
let coffee = document.querySelector(".coffee")

function caffeinated(){
	body.classList.toggle("funbackground");
	coffee.classList.toggle("coffeeGone");
}


coffee.addEventListener("click", caffeinated);
