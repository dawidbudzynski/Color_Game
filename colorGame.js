var colors = generateRandomColors(6);
var squares = document.querySelectorAll('.square');
var pickedColor = pickColor();
var colorDisplay = document.getElementById('colorDisplay');
var messageDisplay = document.getElementById('message');
var h1 = document.querySelector('h1');
var resetButton = document.querySelector('#resetButton');

resetButton.addEventListener('click', function () {
    colors = generateRandomColors(6);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    resetButton.textContent = 'New colors';
    for (var i = 0; i < squares.length; i++) {
        // add initial colors to squares
        squares[i].style.backgroundColor = colors[i];
    }
    h1.style.background = '#232323'
});

colorDisplay.textContent = pickedColor;

for (var i = 0; i < squares.length; i++) {
    // add initial colors to squares
    squares[i].style.backgroundColor = colors[i];

    // add click listeners to squares
    squares[i].addEventListener('click', function () {
        var clickedColor = this.style.backgroundColor;
        if (clickedColor === pickedColor) {
            messageDisplay.textContent = 'Correct! !';
            resetButton.textContent = 'Play again';
            changeColors(clickedColor);
            h1.style.background = clickedColor;
        } else {
            this.style.backgroundColor = '#232323';
            messageDisplay.textContent = 'Wrong Answer!'
        }
    })
}

function changeColors(color) {
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = color;
    }
}

function pickColor() {
    var randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex]
}


function generateRandomColors(num) {
    var arr = [];
    for (var i = 0; i < num; i++) {
        arr.push(randomColor())
    }
    return arr;
}

function randomColor() {
    var red = Math.floor(Math.random() * 256)
    var green = Math.floor(Math.random() * 256)
    var blue = Math.floor(Math.random() * 256)
    return "rgb(" + red + ", " + green + ", " + blue + ")"
}