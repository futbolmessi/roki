var objectDector="";
var immage="";
var objects=[];
var status="";

function preload() {
immage=loadImmage("roki_adulto.jpg"); 
}

function setup() {
 canvas=createCanvas(500,500);
 canvas.center();   
objectDector=ml5.objectDector("cocossd", examen);
}

function examen() {
 console.log("si se cargo yupii");
 status=true;  
 objectDector.detect(immage,soy_añañi);
}

function soy_añañi() {
if (status!=undefined) {
image(immage,0,0,500,500);    
}   
}