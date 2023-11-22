
// Canvas API
function circleCanvas(x, y, radius, color) {
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, 2 * Math.PI);
    ctx.fillStyle = color;
    ctx.fill();
    }
    
function rectangleCanvas(x, y, width, height, rotate, color) {
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

const svg = document.getElementById("svg");
svg.setAttribute("weight", "350");
svg.setAttribute("height", "200");

function circleSVG(x, y, r, style){
    var circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    circle.setAttribute("cx", x);
    circle.setAttribute("cy", y); 
    circle.setAttribute("r", r);
    circle.setAttribute("style", style);

    document.getElementById("svg").appendChild(circle);


}
