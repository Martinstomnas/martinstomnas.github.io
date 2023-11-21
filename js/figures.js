// Canvas funksjoner 

//funksjon for rektangel
Const rectangel = function(left, top, width, height, mode, color) {
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");

    ctx.fillStyle = color; 
    ctx.fillRect(left, top, width, height); 
};

//funksjon for sirkel 
Const circle = function(centerleft, centertop, radius, mode, color) {
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");

    ctx.fillStyle = color; 
    ctx.beginPath();
    ctx.ellipse(centerleft, centertop, radius, radius, color); 
    ctx.fill();
};
