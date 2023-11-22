window.onload = function() {

  //x, y, width, height, mode, color

      rectangleCanvas(0, 0, 500, 500, "solid", "rgb(102, 178, 255)")
      circleCanvas(200, 650, 300, "solid", "rgb(255, 204, 102)") // bakke

        rectangleCanvas(205, 200, 100, 300, "solid", "rgb(51, 51, 0)") //stamme
        circleCanvas(250, 150, 100, "solid", "green") // blader
        rectangleCanvas(420, 300, 30, 150, "solid", "rgb(51, 51, 0)") //stamme_liten
        circleCanvas(435, 300, 50, "solid", "green") // blader_liten

        circleCanvas(0, 0, 100, "solid", "yellow") // sol

        circleCanvas(0, 600, 200, "solid", "rgb(0, 204, 102)") // bakke
        circleCanvas(400, 600, 200, "solid", "rgb(0, 204, 102)") // bakke
        circleCanvas(250, 850, 450, "solid", "lightgreen") // bakke


};

//js

document.addEventListener("DOMContentLoaded", function() {



//Himmel
  rectangleSVG(0, 0, 500, 500, "solid", "rgb(102, 178, 255)");

  // Bakke
  circleSVG(200, 650, 300, "solid", "rgb(255, 204, 102)");

  // Stamme
  rectangleSVG(205, 200, 100, 300, "solid", "rgb(51, 51, 0)");

  // Blader
  circleSVG(250, 150, 100, "solid", "green");

  // Liten stamme
  rectangleSVG(420, 300, 30, 150, "solid", "rgb(51, 51, 0)");

  // Liten blader
  circleSVG(435, 300, 50, "solid", "green");

  // Sol
  circleSVG(0, 0, 100, "solid", "yellow");

  // Bakke
  circleSVG(0, 600, 200, "solid", "rgb(0, 204, 102)");
  circleSVG(400, 600, 200, "solid", "rgb(0, 204, 102)");
  circleSVG(250, 850, 450, "solid", "lightgreen");



});
