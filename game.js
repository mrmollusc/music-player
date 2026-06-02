//canvas constants
const canvas = document.getElementById('myCanvas');                         
const ctx = canvas.getContext('2d');

//sprite constants
const audioElement = new Audio("decibat_yellow.ogg");

//other constants
const RECT_WIDTH = 100;
const RECT_HEIGHT = 100;
const def_beatsx = [0,200,200,200,200,300,500,500,600];
const def_beatsy = [100,200,300,400,100,100,200,300,100];

//variables
let fillclr = 'rgb(100,100,100)'
let score = 0;
let scene = 0;
let beatsx = def_beatsx;
let beatsy = def_beatsy;
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
        if(beatsx[i]>1260){
            score--;
            document.getElementById('H2').innerHTML = `Miss! ${score}`;
            beatsx.splice(i,1);
            beatsy.splice(i,1);
        }
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
    
async function collision(){
    addEventListener("keydown", async function(){
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

// I need to make a way to detect when you click it but idk im VERY SMART AND I DID IT
async function load_ready(){
    collision();
    updater();
    addEventListener('click', function(){
        window.location.reload();
    })

    
}
load_ready();





