window.onload = function() {
    setBackgroundColor("rgb(151, 210, 240)") // himmel



    circleCanvas(350, 150, 100, "solid", "yellow") // sol
    circleCanvas(100, 75, 25, "white") // sky
    circleCanvas(120, 100, 25, "white") //sky
    circleCanvas(130, 75, 25, "white") // sky
    circleCanvas(140, 100, 25, "white") // sky
    rectangleCanvas(0, 410, 500, 90, "rgb(184, 146, 70)") // sand
    rectangleCanvas(0, 340, 500, 70, "rgb(237, 192, 102)") // sand
    rectangleCanvas(0, 280, 500, 60, "rgb(109, 166, 227") // vann
    rectangleCanvas(0, 240, 500, 40, "rgb(71, 151, 237)") // vann
    rectangleCanvas(0, 220, 500, 20, "rgb(57, 135, 230)") // vann

};

//js

document.addEventListener("DOMContentLoaded", function() {
  rectangleSVG(0, 0, 500, 500, "solid", "blue");
  circleSVG(50, 50, 30, "solid", "red");
  circleSVG(100, 10, 30, "outline", "red");
  rectangleSVG(200, 50, 50, 50, "outline", "yellow");
  rectangleSVG(100, 50, 50, 50, "outline", "green");


});
