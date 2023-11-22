window.onload = function() {

  //x, y, width, height, mode, color

      rectangleCanvas(0, 0, 500, 500, "solid", "rgb(102, 178, 255)") //bakgrunn


        rectangleCanvas(205, 200, 100, 300, "solid", "rgb(51, 51, 0)") //stamme
        circleCanvas(250, 150, 100, "solid", "green") // blader


        circleCanvas(0, 0, 100, "solid", "yellow") // sol


        circleCanvas(250, 850, 450, "solid", "lightgreen") // bakke


};

//js

document.addEventListener("DOMContentLoaded", function() {

  //Himmel
  rectangleSVG(0, 0, 500, 500, "solid", "rgb(102, 178, 255)");

  // Stamme
  rectangleSVG(205, 200, 100, 300, "solid", "rgb(51, 51, 0)");

  // Blader
  circleSVG(250, 150, 100, "solid", "green");

  // Sol
  circleSVG(0, 0, 100, "solid", "yellow");

  // Bakke
  circleSVG(250, 850, 450, "solid", "lightgreen");


});
