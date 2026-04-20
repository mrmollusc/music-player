//canvas constants
const canvas = document.getElementById('myCanvas');                         
const ctx = canvas.getContext('2d');

//sprite constants
const audioElement = new Audio("decibat_yellow.ogg");

//other constants
const RECT_WIDTH = 100;
const RECT_HEIGHT = 100;
const beatsx = [-800,-800,-800,-800,-800,-500,-500,-500,-500,-500,-700,-600,-300,-300,-300,-300,-300,200,200,100,200,300,400,500,400,400];
const beatsy = [100,200,300,400,500,100,200,300,400,500,300,300,100,200,300,400,500,100,200,400,500,500,500,400,100,200];

//variables
let z = 0;

//functions
function delay(ms){ //delay function
  return new Promise(resolve => setTimeout(resolve, ms));
}

function drawBeat(){ //draws beats duh
    for(i=0;i<beatsx.length;i++){
        ctx.fillStyle = 'blue';
        ctx.fillRect(beatsx[i],beatsy[i],RECT_WIDTH,RECT_HEIGHT);
    }
    
}

async function updater(){ //game ticking loop
for(let i = 0; i<1080; i++){
    await delay(1);
    for(let i = 0; i<beatsx.length; i++){
        beatsx[i]+=2;
    }
    
    console.log(beatsx[i],beatsy[i]);
    ctx.clearRect(0,0,10000,1000);
    drawBeat(); 
}
}

function play(){ //music control (will eventually replace as player controls)
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
updater();
play();
