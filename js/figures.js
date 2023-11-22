
// Canvas API
function circleCanvas(x, y, radius, color) {
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, 2 * Math.PI);
    ctx.fillStyle = color;
    ctx.fill();
    }

function rectangleCanvas(x, y, width, height, color) {
        const canvas = document.getElementById('canvas');
        const ctx = canvas.getContext('2d');
        ctx.fillStyle = color;
        ctx.fillRect(x, y, width, height);
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
