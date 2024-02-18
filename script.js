let bulbImage = document.getElementById("bulbImage");
let catImage = document.getElementById("catImage");
let switchStatus = document.getElementById("switchStatus");
let offButton = document.getElementById("offSwitch");
let onButton = document.getElementById("onSwitch");


function switchOff() {
    bulbImage.src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-off-img.png";
    catImage.src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-eyes-img.png";
    switchStatus.textContent = "Switched Off";
    offButton.style.backgroundColor = "#cbd2d9";
    onButton.style.backgroundColor = "#22c55e";
}

function switchOn() {
    bulbImage.src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-on-img.png";
    catImage.src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-img.png";
    switchStatus.textContent = "Switched On";
    offButton.style.backgroundColor = "#e12d39";
    onButton.style.backgroundColor = "#cbd2d9";
}