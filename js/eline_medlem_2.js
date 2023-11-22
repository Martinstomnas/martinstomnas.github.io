//Canavas 
window.onload = function() {
    setBackgroundColor("rgb(2, 35, 64)") // himmel

    circleCanvas(350, 150, 100, "solid", "white") // månen
    circleCanvas(400, 150, 100, "solid", "rgb(2, 35, 64)") // himmel til månen 
    rectangleCanvas(0, 440, 500, 60, "solid", "rgb(133, 166, 185)") // blå 1
    rectangleCanvas(0, 390, 500, 50, "solid", "rgb(100, 144, 209)") // blå 2
    rectangleCanvas(0, 350, 500, 40, "solid", "rgb(69, 120, 195)") // blå 3
    rectangleCanvas(0, 320, 500, 30, "solid", "rgb(29, 71, 135)") // blå 4
    rectangleCanvas(0, 300, 500, 20, "solid", "rgb(21, 56, 108)") // blå 5
    
    circleCanvas(130, 125, 20, "solid", "white") // star 1 
    circleCanvas(150, 110, 20, "solid", "rgb(2, 35, 64)")
    circleCanvas(150, 150, 20, "solid", "rgb(2, 35, 64)")
    circleCanvas(110, 150, 20, "solid", "rgb(2, 35, 64)")
    circleCanvas(110, 110, 20, "solid", "rgb(2, 35, 64)")

    circleCanvas(200, 50, 30, "solid", "white") // star 2 
    circleCanvas(230, 15, 30, "solid", "rgb(2, 35, 64)")
    circleCanvas(170, 15, 30, "solid", "rgb(2, 35, 64)")
    circleCanvas(170, 75, 30, "solid", "rgb(2, 35, 64)")
    circleCanvas(230, 75, 30, "solid", "rgb(2, 35, 64)")



};


//SVG
document.addEventListener("DOMContentLoaded", function() {

    rectangleSVG(0,0,500,500, "solid", "rgb(2, 35, 64)") // himmel
    circleSVG(350, 150, 100, "solid", "white") // månen
    circleSVG(400, 150, 100, "solid", "rgb(2, 35, 64)") // himmel til månen
    rectangleSVG(0, 440, 500, 60, "solid", "rgb(133, 166, 185)") // blå 1
    rectangleSVG(0, 390, 500, 50, "solid", "rgb(100, 144, 209)") // blå 2
    rectangleSVG(0, 350, 500, 40, "solid", "rgb(69, 120, 195)") // blå 3
    rectangleSVG(0, 320, 500, 30, "solid", "rgb(29, 71, 135)") // blå 4
    rectangleSVG(0, 300, 500, 20, "solid", "rgb(21, 56, 108)") // blå 5
    
    circleSVG(130, 125, 20, "solid", "white") // star 1 
    circleSVG(150, 110, 20, "solid", "rgb(2, 35, 64)")
    circleSVG(150, 150, 20, "solid", "rgb(2, 35, 64)")
    circleSVG(110, 150, 20, "solid", "rgb(2, 35, 64)")
    circleSVG(110, 110, 20, "solid", "rgb(2, 35, 64)")

    circleSVG(200, 50, 30, "solid", "white") // star 2
    circleSVG(230, 15, 30, "solid", "rgb(2, 35, 64)")
    circleSVG(170, 15, 30, "solid", "rgb(2, 35, 64)")
    circleSVG(170, 75, 30, "solid", "rgb(2, 35, 64)")
    circleSVG(230, 75, 30, "solid", "rgb(2, 35, 64)")

 
  
})
