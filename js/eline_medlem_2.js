//Canavas 
window.onload = function() {
    setBackgroundColor("rgb(2, 35, 64)") // himmel

    circleCanvas(350, 150, 100, "solid", "white") // sol
    circleCanvas(400, 150, 100, "solid", "rgb(2, 35, 64)") // sky
    circleCanvas(120, 100, 25, "solid", "white") //sky
    circleCanvas(130, 75, 25, "solid", "white") // sky
    circleCanvas(140, 100, 25, "solid", "white") // sky
    rectangleCanvas(0, 420, 500, 300, "solid", "white")

};


//SVG
document.addEventListener("DOMContentLoaded", function() {

  circleSVG(50, 50, 30, "somMode", "red");
  circleSVG(100, 10, 30, "someMode", "blue");

 
  
});
