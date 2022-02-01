noseX=0;
noseY=0;
left_wristX=0;
right_wristX=0;
difference=0;

function setup() {
    video=createCapture(VIDEO);
    video.size(500,500);
    canvas=createCanvas(500,500);
    canvas.position(550,100)
    posenet=ml5.poseNet(video,modelLoaded);
    posenet.on("pose",gotPoses)
    }

function modelLoaded(){
    console.log("posenet is loaded")
}

function gotPoses(results){
   if (results.length>0) {
    console.log(results); 
   noseX=results[0].pose.nose.x;
   noseY=results[0].pose.nose.y;
   left_wristX=results[0].pose.leftWrist.x;
   right_wristX=results[0].pose.rightWrist.x;
   difference=floor(left_wristX - right_wristX);
}
    
    
}

function draw(){
    background("grey")
    fill("blue")
    stroke("black")
    square(noseX,noseY,difference)
    
}