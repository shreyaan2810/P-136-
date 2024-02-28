status = "";

function setup(){
    canvas = createCanvas(480 , 380);
    canvas.position(600 , 300);

    video = createCapture(VIDEO);
    video.hide();
    video.size( 480, 380);
}

function start(){
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "STATUS : DETECTING OBJECTS";
}

function modelLoaded(){
     console.log("model Loaded!");
     status = true ;
}

function draw(){
    image(video , 0,0, 480, 380);
}