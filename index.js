let count =1;

function increase(){
    count++;
    document.getElementById("data").innerHTML=count;
}
function decrease(){
    if(count>=1){
    count--;
    document.getElementById("data").innerHTML=count;
}
}
