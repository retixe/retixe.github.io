"use strict";

let ctx;
let fpsDisplay;

let upKey = false;
let downKey = false;
let leftKey = false;
let rightKey = false;

let cameraX = 0;
let cameraY = 0;

class Entity {

    constructor(x, y, imgPath, offsetX, offsetY, scale) {
        this.x = x;
        this.y = y;

        this.img = new Image();
        this.img.src = imgPath;
        this.offsetX = offsetX;
        this.offsetY = offsetY;
        this.scale = scale;
    }
}

let base = new Entity(0, 0, "image/chessboard.svg", -50, -50, 4);

function renderEntity(entity) {
    ctx.drawImage(entity.img,
        entity.x + (entity.offsetX * entity.scale) - cameraX,
        entity.y + (entity.offsetY * entity.scale) - cameraY,
        entity.img.width * entity.scale,
        entity.img.height * entity.scale);
}

let logFPS; 
{
    let timeLastFrame = 0;


    logFPS = (timeNow) => {
        
        fpsDisplay.textContent = `${1000 / (timeNow - timeLastFrame)}`;
        timeLastFrame = timeNow;
        
        requestAnimationFrame(logFPS);
    };
}

function updateFrame(){

}


function main() {
    const canvas = document.querySelector("#screen");
    fpsDisplay = document.querySelector("#fps");
    const width = canvas.width = 500;
    const height = canvas.height = 500;
    ctx = canvas.getContext("2d");

    window.addEventListener("keydown",(event) => {
        if(!event.repeat){
            switch(event.code){
                case "KeyE":
                    upKey = true;
                    break;

                case "KeyD":
                    downKey = true;
                    break;

                case "KeyS":
                    leftKey = true;
                    break;

                case "KeyF":
                    rightKey = true;
                    break;
            }
        }
    });
    window.addEventListener("keyup",(event) => {
        if(!event.repeat){
            switch(event.code){
                case "KeyE":
                    upKey = true;
                    break;

                case "KeyD":
                    downKey = true;
                    break;

                case "KeyS":
                    leftKey = true;
                    break;
                    
                case "KeyF":
                    rightKey = true;
                    break;
            }
        }
    });

    ctx.fillStyle = "rgb(0, 0, 0)";
    ctx.fillRect(0, 0, width, height);
    ctx.translate(width / 2, height / 2);

    renderEntity(base);

    requestAnimationFrame(logFPS);
}


window.onload = (event) => {
    main();
}