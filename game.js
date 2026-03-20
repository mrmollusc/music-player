const canvas = document.getElementById('myCanvas');
const a = canvas.getContext('2d');

const audioElement = new Audio("decibat_yellow.ogg");
let z=0;
let i=0;




function play(){
    addEventListener('click', (event) =>{
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
        
    })  
}



play();


