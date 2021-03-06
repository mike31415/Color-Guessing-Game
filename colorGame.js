var numSquares = 6;
var colors = []; 
var squares = document.querySelectorAll(".square");
var pickedColor;
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode")


init();

function init () {

	setupModeButtons();
	setupSquares();
	reset();
}

function setupModeButtons () {
	for (var i = 0; i < modeButtons.length; i++) {
		modeButtons[i].addEventListener("click", function () {
		modeButtons[0].classList.remove("selected");
		modeButtons[1].classList.remove("selected");
		this.classList.add("selected");
		this.textContent === "Easy" ? numSquares = 3 : numSquares = 6;

			// if (this.textContent === "Easy") { #"this" because we are inside modeButtons code
			// 	numSquares = 3;
			// } else {
			// 	numSquares = 6;
			// }

		reset(); 
		});
	}
}


function setupSquares () {
	for (var i = 0; i < squares.length; i++) {
	//add initial colors to squares
	squares[i].style.backgroundColor = colors[i];
	//add click Listeners to squares
	squares[i].addEventListener("click", function () {
		//grab color of clicked square
		var clickedColor = this.style.backgroundColor;
		//compare it to pickedColor
		if (clickedColor === pickedColor) {
			messageDisplay.textContent = "Correct!";
			resetButton.textContent = "Play Again?";
			changeColors(clickedColor); 
			h1.style.backgroundColor = pickedColor;

		} else {
			this.style.backgroundColor = "#232323";
			messageDisplay.textContent = "Try again.";
		}

		});
	}
}



function reset () {
	//generate all new colors
	colors = generateRandomColors(numSquares);
	//pick new random color from array
	pickedColor = pickColor();
	//change colorDisplay to match picked color
	colorDisplay.textContent = pickedColor;
	resetButton.textContent = "New Colors";
	messageDisplay.textContent = "";
	//change colors of squares
	for (var i = 0; i < squares.length; i++) {
		if (colors[i]) {
			squares[i].style.display = "block";
			squares[i].style.backgroundColor = colors[i];
		} else {
			squares[i].style.display = "none";
		}
		
	}
	h1.style.backgroundColor = "steelblue";
}
// easyBtn.addEventListener("click", function() {
// 	this.classList.add("selected");
// 	hardBtn.classList.remove("selected");
// 	numSquares = 3;
// 	colors = generateRandomColors(numSquares); 
// 	pickedColor = pickColor(); 
// 	colorDisplay.textContent = pickedColor;

// 	for (var i= 0; i < squares.length; i++) {
// 		if(colors[i]) {
// 			squares[i].style.backgroundColor = colors[i];
// 		} else {
// 			squares[i].style.display = "none";
// 		}
// 	}
// });


// hardBtn.addEventListener("click", function() {
// 	this.classList.add("selected");
// 	easyBtn.classList.remove("selected");
// 	numSquares = 6;
// 	colors = generateRandomColors(numSquares); 
// 	pickedColor = pickColor(); 
// 	colorDisplay.textContent = pickedColor;

// 	for (var i= 0; i < squares.length; i++) {
// 		squares[i].style.backgroundColor = colors[i];
// 		squares[i].style.display = "block";
// 	}
// });

resetButton.addEventListener("click", function() {
	reset();
});



// colorDisplay.textContent = pickedColor;


function changeColors(color) {
	//loop through all squares
	for (var i = 0; i < squares.length; i++) {
		//change each color
		squares[i].style.backgroundColor = color;
	}
}

function pickColor() {
	var random = Math.floor(Math.random()*colors.length); 
	return colors[random];
}


function generateRandomColors(num) {
	//make array
	var arr = [];
	//repeat the following num times
	for (var i = 0; i < num; i++) { 
		//get random color, push into arr
		arr.push(randomColor());	
	}
	//return array
	return arr;
}


function randomColor() {
	//pick "red" from 0-255, 
	var r = Math.floor(Math.random() * 256);
	//pick "green" from 0-255, 
	var g = Math.floor(Math.random() * 256);
	//pick "blue" from 0-255, 
	var b = Math.floor(Math.random() * 256);
	//"rgb(r, g, b)"
	return "rgb(" + r + ", " + g + ", " + b + ")";
}
