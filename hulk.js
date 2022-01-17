const colorDisplay = document.querySelector(".colour-display");
const codeDisplay = document.querySelector(".code-display");
const genBtn = document.querySelector(".generate");
const copyBtn = document.querySelector(".copy");
let colorString = "1234567890abcdef";
let colorOne = randomColor();
let colorTwo = randomColor();

function angle(){
	let angl = Math.floor(Math.random()*360);
	return angl;
}

function randomColor() {
	let hex = "#";
	for (i=0;i<6;i++){
		hex += colorString[Math.floor(Math.random()*colorString.length)];
	}
	return hex;	
}

window.addEventListener("load", function(){
	let gradient = `linear-gradient(${angle()}deg, ${colorOne}, ${colorTwo})`;
	colorDisplay.style.background = gradient;
	codeDisplay.innerHTML = "background: "+gradient;
	document.body.style.background = gradient;
})

genBtn.addEventListener("click", function(){
	let gradient2 = `linear-gradient(${angle()}deg, ${randomColor()}, ${randomColor()})`;
	colorDisplay.style.background = gradient2;
	codeDisplay.innerHTML = "background: "+gradient2;
	document.body.style.background = gradient2;
})

copyBtn.addEventListener("click", function(){
	navigator.clipboard.writeText(codeDisplay.innerHTML);
	alert("Text Copied To clipboard")
})
