//canvas constants
const canvas = document.getElementById('myCanvas');                         
const ctx = canvas.getContext('2d');

//sprite constants
const audioElement = new Audio("decibat_yellow.ogg");

//other constants
const RECT_WIDTH = 100;
const RECT_HEIGHT = 100;

//variables
let playpausestate = 0;
let fillclr = 'rgb(100,100,100)'
let score = 0;
let beatsx = [0,200,200,200,200,300,500,500,600];
let beatsy = [100,200,300,400,100,100,200,300,100];
//functions

    //delay function
function delay(ms){ 
  return new Promise(resolve => setTimeout(resolve, ms));
}

    //draws beats duh
function drawBeat(){
    for(i=0;i<beatsx.length;i++){
        ctx.fillStyle = 'red';
        ctx.fillRect(beatsx[i],beatsy[i],RECT_WIDTH,RECT_HEIGHT);
    }
    requestAnimationFrame(drawBeat);

}

    //draws bar duh
function drawBar(){
    ctx.fillStyle = fillclr;
    ctx.fillRect(1080,0,180,1000);
    this.addEventListener("keydown", function(){
        fillclr = 'rgb(0, 0, 0)'
        ctx.fillStyle = fillclr
        ctx.fillRect(1080,0,180,1000);

    })
    this.addEventListener("keyup", function(){
        fillclr = 'rgb(133, 133, 133)'
        ctx.fillStyle = fillclr
        ctx.fillRect(1080,0,180,1000);

    })
    
}
    
function collision(){ //processes beat detection
    addEventListener("keydown", function(){
        if(event.repeat){
            return;
        }
        
        let FOUND = beatsx.reduce((indexes, value, index) => {
            if(value > 1080 && value <1260){
                indexes.push(index);
            }
            return indexes;
        }, []);
        
        score+=(FOUND.length || -1);
        if(FOUND.length>0){
            document.getElementById("H2").innerHTML = `Hit! ${score}`
        }
        else{
            document.getElementById("H2").innerHTML = `Miss! ${score}`
        }
        

        for (let i = FOUND.length - 1; i >= 0; i--){
            beatsx.splice(FOUND[i], 1);
            beatsy.splice(FOUND[i], 1);
        }
    })
}



    //game ticking loop
async function updater(){
for(let i = 0; i<1080; i++){
    await delay(10);
    for(let i = 0; i<beatsx.length; i++){
        beatsx[i]+=2;
    }
    ctx.clearRect(0,0,1080,1000);
    ctx.clearRect(1260,0,1000,1000);
    drawBar();
    requestAnimationFrame(drawBeat);
    
}
}

    //music control (will eventually replace as player controls)
function play(){ 
    addEventListener('keydown', (e) =>{
        if(e.key === 'Shift'){
            if(playpausestate==0){
                audioElement.play();
                playpausestate=1;
                document.getElementById("click").innerHTML = "<b>pause</b>";
                return;
            }
            if(playpausestate==1){
                audioElement.pause();
                playpausestate=0;
                document.getElementById("click").innerHTML = "<b>play</b>";
                return;
            }
    }
            if(e.key === 'Enter'){
                audioElement.pause();
                audioElement.currentTime = 0;
                playpausestate=0;
                document.getElementById("click").innerHTML = "<b>play</b>";  
                alert('restart');
                return;
    }
    })  
}



// I need to make a way to detect when you click it but idk im dum.
collision();
updater();
play();


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
