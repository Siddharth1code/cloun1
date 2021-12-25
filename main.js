nosex=0;
nosey=0;
function preload()
{
    clown_nose = loadImage('https://i.postimg.cc/7ZBcjDqp/clownnose.png');
}

function setup()
{
    canvas=createCanvas(300,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300,300);
    video.hide();
}

function draw()
{
image(video,0,0,300,300);
image(clown_nose, nosex, nosey, 30, 30);
}

function take_snapshot()
{
    save('myfilterImage.png');
}

function gotresult(result)
{
    if(result.length>0)
    {
        console.log(result);
        console.log("nosex ="+result[0].pose.nose.x);
        console.log("nosey ="+result[0].pose.nose.y);
    }
}

function modelLoaded()
{
console.log('PoseNet is Initialized');
}