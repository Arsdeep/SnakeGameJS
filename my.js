const canvas = document.getElementById("canvasMain")
const ctx = canvas.getContext("2d");

const CANVAS_WIDTH = canvas.width = 1500;
const CANVAS_HEIGHT = canvas.height = 1500;

const playerImage = new Image();

const STEP_SIZE = 100;


const coords = [[700, 700],[700, 700],[700, 700],[700, 700]];

function animate()
{
    ctx.clearRect(0,0,CANVAS_WIDTH,CANVAS_HEIGHT);
    for(const coord of coords)
        ctx.fillRect(coord[0],coord[1],100,100);
    requestAnimationFrame(animate);
};

animate();

function changeCoord(){
    for(let i = coords.length-1 ; i>0 ; i--)
    {
        coords[i] = coords[i-1];
    }
}


function keyPress(keyCode) {
    
    changeCoord();

    if(keyCode == 119 && coords[0][1] > 0)
        coords[0][1] -= STEP_SIZE;

    else if(keyCode == 115 && coords[0][1] < CANVAS_HEIGHT - STEP_SIZE)
        coords[0][1] += STEP_SIZE;
    
    else if(keyCode == 100 && coords[0][0] < CANVAS_WIDTH - STEP_SIZE)
        coords[0][0] += STEP_SIZE;

    else if(keyCode == 97 && coords[0][0] > 0)
        coords[0][0] -= STEP_SIZE;


    console.log(coords)
}


document.addEventListener('keypress', function(event) {
    keyPress(event.keyCode);
    // console.log(event.keyCode);
    // console.log(coords[0][0],coords[0][1]);
});
  