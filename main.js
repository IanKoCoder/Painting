canvas=document.getElementById("myCanvas");

ctx=canvas.getContext("2d");

color="pink";

mouseEvent="";
var lastX,lastY;

canvas.addEventListener("mousedown",my_mousedown);

function my_mousedown(e)
{
mouseEvent="mouseDown"


}
canvas.addEventListener("mouseleave",my_mouseleave);
function my_mouseleave(e)
{
mouseEvent="mouseLeave"


}
canvas.addEventListener("mouseup",my_mouseup);
function my_mouseup(e)
{
mouseEvent="mouseUp"


}

canvas.addEventListener("mousemove",my_mousemove);
function my_mousemove(e)
{
currentx=e.clientX-canvas.offsetLeft;
currenty=e.clientY-canvas.offsetTop;

if (mouseEvent== "mouseDown"){
    ctx.beginPath();
 ctx.stokeStyle=color;
 ctx.lineWidth=3;
 ctx.moveTo(lastX,lastY);
 ctx.lineTo(currentx,currenty);
 ctx.stroke();


}
lastX=currentx;
lastY=currenty;

}