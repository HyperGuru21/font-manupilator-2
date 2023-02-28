function setup(){
    canvas = createCanvas(550 , 550);
    canvas.center();

    video = createCapture(VIDEO);
    video.size(550 , 550);


    posenet = ml5.poseNet(video , modelLoaded);

    posenet.on('pose' , gotPoses);

}

function draw(){
    background('#ffff4d');
}

function modelLoaded(){
    console.log("pose net is initialized");
}

function gotPoses(results){

    if (results.lenght > 0){
        console.log(results);
    }
    
}