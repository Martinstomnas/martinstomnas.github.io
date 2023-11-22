// canvas api print
window.onload = function() {
    rectangleCanvas(0, 0, 500, 500, "solid", "rgb(204,255,204)") //himmel
    circleCanvas(480, 20, 80, "solid", "yellow") // måne
    rectangleCanvas(0, 410, 500, 90, "solid", "rgb(0, 51, 0)") // nederste gress
    rectangleCanvas(0, 340, 500, 70, "solid", "rgb(0, 102, 0)") // den over nederste
    rectangleCanvas(130, 0, 100, 340, "solid", "rgb(102, 58, 0)") // treet i midten
};


// svg print
document.addEventListener("DOMContentLoaded", function() {
    rectangleSVG(0, 0, 500, 500, "solid", "rgb(204,255,204)") //himmel
    circleSVG(480, 20, 80, "solid", "yellow") // måne
    rectangleSVG(0, 410, 500, 90, "solid", "rgb(0, 51, 0)") // nederste gress
    rectangleSVG(0, 340, 500, 70, "solid", "rgb(0, 102, 0)") // den over nederste
    rectangleSVG(130, 0, 100, 340, "solid", "rgb(102, 58, 0)") // treet i midten
  }
);