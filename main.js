canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

rover_width=100;
rover_height=90;

images_of_mars=["mars1.jpg", "mars2.jpg", "mars3.jpg", "gyardosmarsimage.jpg"];
random_number=Math.floor(Math.random() * 4);
console.log(random_number);

rover_x=10;
rover_y=10;

background_image=images_of_mars[random_number];
console.log("The image on the canvas is"+ background_image);
rover_image="rover.png";

function jomama(){
    background_background=new Image();
    background_background.onload=amogus;
    background_background.src=background_image;

    rover_rover=new Image();
    rover_rover.onload=amongus;
    rover_rover.src=rover_image;
}

function amogus(){
    ctx.drawImage(background_background, 0, 0, canvas.width, canvas.height);
}
function amongus(){
    ctx.drawImage(rover_rover, rover_x, rover_y, rover_width, rover_height);
}

window.addEventListener("keydown",mykeydown);

function mykeydown(e){
    var swag=e.keyCode;
    console.log(swag);

    if (swag=='38'){
        up();
        console.log("up");
    }
    if (swag=='40'){
        down();
        console.log("down");
    }
    if (swag=='37'){
        left();
        console.log("left");
    }
    if (swag=='39'){
        right();
        console.log("right");
    }

}
function up(){
    if (rover_y>=0){
        rover_y=rover_y-10;
        console.log("When your key is clicked, the x axis is" + rover_x + " and you y is" + rover_y);
        amogus();
        amongus();
    }
}
function down(){
    if (rover_y<=500){
        rover_y=rover_y+10;
        console.log("When your key is clicked, the x axis is" + rover_x + " and you y is" + rover_y);
        amogus();
        amongus();
    }
}

function left(){
    if (rover_x>=0){
        rover_x=rover_x-10;
        console.log("When your key is clicked, the x axis is" + rover_x + " and you y is" + rover_y);
        amogus();
        amongus();
    }
}
function right(){
    if (rover_x<=700){
        rover_x=rover_x+10;
        console.log("When your key is clicked, the x axis is" + rover_x + " and you y is" + rover_y);
        amogus();
        amongus();
    }
}

