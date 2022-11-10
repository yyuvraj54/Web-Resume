

console.log("print")
const buttonpress= ()=>{
    console.log("Button Pressed");
}


const navbtn=document.querySelector("#Imgnavbutton");
const Taglist=document.querySelector("#Taglist");

var flag=1;

window.onresize = function(){
    var w = window.innerWidth;
    if(w>=850){
        Taglist.style.display = "flex";
        flag=1;
    }    
    else if(w<850){
        Taglist.style.display = "none";
        flag=0;

    }
}
navbtn.addEventListener('click',function(e){
    console.log("Toggle Called")
    if(flag){Taglist.style.display = "none";flag=0;}
    else{Taglist.style.display = "flex";flag=1;}
})
