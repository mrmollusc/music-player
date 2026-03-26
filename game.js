const canvas = document.getElementById('myCanvas');                         
const ctx = canvas.getContext('2d');
const audioElement = new Audio("decibat_yellow.ogg");

const RECT_WIDTH = 100;
const RECT_HEIGHT = 100;
const rectx=0;
const beats = [
    {x: 200, y: 100, speed: 100},
    {x: 200, y: 200, speed: 100},
    {x: 100, y: 400, speed: 100},
    {x: 200, y: 500, speed: 100},
    {x: 300, y: 500, speed: 100},
    {x: 400, y: 500, speed: 100},
    {x: 500, y: 400, speed: 100},
    {x: 400, y: 100, speed: 100},
    {x: 400, y: 200, speed: 100}

];



function drawBeat(i){
    const beat = beats[i];                                                      
    console.log(beats[0], beats[1])
    ctx.fillStyle = 'blue';
    ctx.fillRect(beat.x + rectx,beat.y,RECT_WIDTH,RECT_HEIGHT)
}

for(i=0;i<beats.length;i++){
    drawBeat(i);
}



//code
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}





function play(){
    addEventListener('keydown', (e) =>{
    if(e.keyCode===80){
        if(z==0){
            audioElement.play();
            z=1;
            document.getElementById("click").innerHTML = "<b>pause</b>";
            return;
        }
        if(z==1){
            audioElement.pause();
            z=0;
            document.getElementById("click").innerHTML = "<b>play</b>";
            return;
        }
    }
    if(e.keyCode===82){
            audioElement.pause();
            audioElement.currentTime = 0;
            z=0;
            document.getElementById("click").innerHTML = "<b>play</b>";  
            alert('restart');
            return;
    }

        
        
       
    })  
}


//run
play();

//sprites
