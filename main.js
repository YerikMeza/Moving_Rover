canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");


rover_width = 100;
rover_height = 90;

bg_img_array = ["Bg_img_1.jpg","Bg_img_2.jpg","Bg_img_3.jpg","Bg_img_4.jpg","Bg_img_5.jpg"];

rover_x = 10;
rover_y = 10;
rover_img = "rover.png";

var random_number = random_number = Math.floor(Math.random() * 5);

background_img = bg_img_array[random_number];

function add() {
    background_imgTag = new Image();
    background_imgTag.onload = uploadBackground;
    background_imgTag.src = background_img;

    rover_imgTag = new Image();
    rover_imgTag.onload = uploadrover;
    rover_imgTag.src = rover_img;
}

function uploadBackground(){
    ctx.drawImage(background_imgTag,0,0,canvas.width,canvas.height);
}

function uploadrover(){
    ctx.drawImage(rover_imgTag,rover_x,rover_y,rover_width,rover_height);
}

window.addEventListener("keydown" , my_keydown);

function my_keydown(e)
{
    KeyPressed = e.keyCode;
    console.log(KeyPressed);
    if (KeyPressed == "38" )
    {
        up();
        console.log("up")
    }

    if (KeyPressed == "40" )
    {
        down();
        console.log("down")
    }

    if (KeyPressed == "37" )
    {
        left();
        console.log("left")
    }

    if (KeyPressed == "39" )
    {
        right();
        console.log("right")
    }
}

function up()
{
    if(rover_y > 0)
    {
        rover_y -= 10;
        console.log("When Up arrow key is pressed = " + rover_x + " - " + rover_y);
        uploadBackground();
        uploadrover();
    }
}

function down()
{
    if(rover_y < 510)
    {
        rover_y += 10;
        console.log("When Down arrow key is pressed = " + rover_x + " - " + rover_y);
        uploadBackground();
        uploadrover();
    }
}

function left()
{
    if(rover_x > 0)
    {
        rover_x -= 10;
        console.log("When Left arrow key is pressed = " + rover_x + " - " + rover_y);
        uploadBackground();
        uploadrover();
    }
}

function right()
{
    if(rover_x < 700)
    {
        rover_x += 10;
        console.log("When Right arrow key is pressed = " + rover_x + " - " + rover_y);
        uploadBackground();
        uploadrover();
    }
}