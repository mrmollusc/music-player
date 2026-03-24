const canvas = document.getElementById('myCanvas');
const a = canvas.getContext('2d');
const audioElement = new Audio("decibat_yellow.ogg");
let z=0;
let i=0;
let rectx=0;
function beat(x, y, s){
    this.x=x;
    this.y=y;
    this.s=s;
    a.fillStyle='red';
    a.fillRect(this.x+rectx,this.y,100,100)
    a.clearRect(this.x+rectx-100,this.y,100,100)
    
}



//code
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
async function move(){
    a.fillStyle = 'white';
    a.fillRect(500,100,100,100);  

    if(rectx<500){
        rectx+=1;
        await delay(1);
        a.fillStyle = 'red';
        beat(100+rectx,200);
        beat(500+rectx,200);
        requestAnimationFrame(move);
    }
    else{
        rectx=0;
        requestAnimationFrame(move);
    }
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
requestAnimationFrame(move);

//sprites
