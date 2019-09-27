var numSquares = 6;
var colors = generateRandomColors(numSquares);
var square = document.querySelectorAll(".square");
var picked = pickedColor();
var colorDisplay = document.querySelector("#pickedColor");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");


//easy button script
easyBtn.addEventListener("click", function() {
	hardBtn.classList.remove("selected");
	easyBtn.classList.add("selected");
	numSquares = 3;
	colors = generateRandomColors(numSquares);
	picked = pickedColor();
	colorDisplay.textContent = picked;

	for(var i = 0; i < square.length; i++) {
		if(colors[i]) {
			square[i].style.backgroundColor = colors[i];
		}
		else {
			square[i].style.display = "none";
		}
	}
});

//hard button script
hardBtn.addEventListener("click", function() {
	easyBtn.classList.remove("selected");
	hardBtn.classList.add("selected");
	numSquares = 6;
	colors = generateRandomColors(numSquares);
	colors = generateRandomColors(6);
	picked = pickedColor();
	colorDisplay.textContent = picked;

	for(var i = 0; i < square.length; i++) {
		square[i].style.backgroundColor = colors[i];
		square[i].style.display = "block"; //to show property use block
	}
});

//play again/new colors script
resetButton.addEventListener("click", function() {
	//generate all new colors
	colors = generateRandomColors(numSquares);
	//pick new random color from array
	picked = pickedColor();
	//change coloredDisplay to match picked color
	colorDisplay.textContent = picked;
	this.textContent = "New Colors";
	messageDisplay.textContent = "";
	//change colors of squares on page
	for(var i = 0; i < square.length; i++) {
		square[i].style.backgroundColor = colors[i];
	}
	h1.style.backgroundColor = "steelblue";
});


colorDisplay.textContent = picked;

//color circles manipulation
for(var i = 0; i < square.length; i++) {
	square[i].style.backgroundColor = colors[i];

	square[i].addEventListener("click", function() {
		var clickedColor = this.style.backgroundColor;
		if(clickedColor === picked) { //if picked correct
			messageDisplay.textContent = "Correct!";
			resetButton.textContent = "Play Again?"
			changeColors(clickedColor); //sets all circles to same color if right one is picked
			h1.style.backgroundColor = clickedColor;
		}
		else { //if wrong turn circles black
			this.style.backgroundColor = "#232323";
			messageDisplay.textContent = "Try Again";
		}
	})
}

function changeColors(color) { //sets all circles to same color if right color is picked
	for(var i = 0; i < square.length; i++) {
		square[i].style.backgroundColor = color;
	}
}

function pickedColor() { //chooses random index in rgb combination array generated in generateRandomColors(num)
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num) { //generate random numbers from 1 to num
	//make array
	var array = [];
	//add random numbers to array
	for(var i = 0; i < num; i++) {
		array.push(randomColor());
	}

	return array;
}

	function randomColor() { //form string of rgb and push into array
		var r = Math.floor(Math.random() * 256);
		var g = Math.floor(Math.random() * 256);
		var b = Math.floor(Math.random() * 256);
		return "rgb(" + r + ", " + g + ", " + b + ")";
	
}