nose_x=0;
nose_y=0;
function preload(){
    img= loadImage('https://i.postimg.cc/FHJm5wkX/lips.jpg');
}
function setup(){
canvas=createCanvas(300, 300);
canvas.center();
video=createCapture(VIDEO);
video.size(300, 300);
video.hide();
poseNet=ml5.poseNet(video, modelLoaded);
poseNet.on('pose', gotResults);
}
function modelLoaded(){
    console.log("Model Loaded");
}
function gotResults(){
    if(gotResults.length>0){
        console.log(results);
        nose_x=results[0].pose.nose.x;
        nose_y=results[0].pose.nose.y;
        console.log("nose x "+nose_x);
        console.log("nose y "+nose_y);
    }
    else{
        console.log(error);
    }
}
function draw(){
image(video, 0, 0, 300, 300);
image(img, nose_x-30, nose_y-30, 30, 30)
}
function takeSnapshot(){
    save("filter_img.png")
}