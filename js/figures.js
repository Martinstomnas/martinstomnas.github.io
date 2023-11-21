const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");


//fuksjon for rektangel
function tegnRektangel (height, width, x, y, mode, color) {
    ctx.fillstyle = color;
    if (mode === "outline") {
        // set the outline color
        ctx.strokeStyle = color;
        // Draw the rectangles outline
        ctx.strokeRect(x, y, width, height);
        // Draw the filled rectangle
        ctx.fillRect(x, y, width, height);
    }
}

//funksjon for sirkel
circle = function (radius, mode, farge, x, y) {
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2, true); //outer circle
    if (mode === "solid") {
        ctx.fill()
    } else {
        ctx.stroke()
    }
}


