canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

rover_width = 50;
rover_height = 40;

backgroung_image = "mars.jpg";
rover_image = "rover.png";

rover_x = 10;
rover_y = 10;

function add(){
    background_img1 = new Image ();
    background_img1.onload = uploadimage;
    background_img1.src = backgroung_image;
    rover_img1 = new Image ();
    rover_img1.onload = uploadimage1;
    rover_img1.src = rover_image;
}
function uploadimage(){
    ctx.drawImage(background_img1,0,0,canvas.width,canvas.height);
}
function uploadimage1(){
    ctx.drawImage(rover_img1,rover_x,rover_y,rover_width,rover_height);
}
window.addEventListener ("keydown",mykeydown);
function mykeydown(e){
    KeyPressed = e.keyCode;
    console.log("entered into keydown");
    if (KeyPressed == '38'){
        down();
        console.log("entered into down");
    }
    if (KeyPressed == '37'){
        up();
        console.log("entered into up");
    }
    if (KeyPressed == '39'){
        left();
        console.log("entered into left");
    }
    if (KeyPressed == '40'){
        right();
        console.log("entered into right");
    }
}