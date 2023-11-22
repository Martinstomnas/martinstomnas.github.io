
// Canvas API
function circleCanvas(x, y, radius, mode, color) {
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, 2 * Math.PI);
    if (mode == "outline") {
        ctx.stroke()
    } else if (mode == "solid") {
        ctx.fill()
    } else {
        console.log ("Skriv enten output eller solid for at objektet skal vises")    
    }  
}
   
function rectangleCanvas(x, y, width, height, mode, color) {
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = color;
    if (mode == "outline") {
        ctx.strokeStyle = color;
        ctx.strokeRect(x, y, width, height)
    } else if (mode == "solid") {
        ctx.fillRect(x, y, width, height);
    } else {
        console.log ("Skriv enten output eller solid for at objektet skal vises") 
    }
}
    
function setBackgroundColor(color) {
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = color;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}  

// SVG

const rectangleSVG = function (left, top, width, height, mode, color) {
  const svgDoc = document.getElementById("svg");

  const rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
  rect.setAttributeNS(null, "x", left);
  rect.setAttributeNS(null, "y", top);
  rect.setAttributeNS(null, "width", width); // Corrected typo: widt to width
  rect.setAttributeNS(null, "height", height); // Corrected typo: heigt to height
  rect.setAttributeNS(null, "fill", color);

  svgDoc.appendChild(rect);
};

const circleSVG = function (centerleft, centertop, radius, mode, color) {
  const svgDoc = document.getElementById("svg");

  const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
  circle.setAttributeNS(null, "cx", centerleft);
  circle.setAttributeNS(null, "cy", centertop);
  circle.setAttributeNS(null, "r", radius);
  circle.setAttributeNS(null, "fill", color);

  svgDoc.appendChild(circle);
};
