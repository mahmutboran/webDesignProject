let spanP1 = document.getElementById("span-player1");
let spanP2 = document.getElementById("span-player2");
let buttonP1 =document.getElementById("player1");
let buttonP2 =document.getElementById("player2");
let buttonReset =document.getElementById("reset");
let inputScore = document.getElementById("number")

console.log(inputScore.value);
buttonP1.addEventListener("click",()=>{
   let scoreP1 = spanP1.innerText++; 
    if (scoreP1==inputScore.value-1) {
        buttonP1.disabled = true;
        buttonP2.disabled = true;
        spanP1.style.color="green";
        spanP2.style.color="red";
    }

});
buttonP2.addEventListener("click",()=>{
    let scoreP2 = spanP2.innerText++;
    if  (scoreP2 == inputScore.value-1)  {
        buttonP1.disabled = true;
        buttonP2.disabled = true;
        spanP1.style.color="red";
        spanP2.style.color="green";
    }
});
buttonReset.addEventListener("click",()=>{
    spanP1.innerText=0;
    spanP2.innerText=0;
    buttonP1.disabled = false;
    buttonP2.disabled = false;
    spanP1.style.color="black";
    spanP2.style.color="black";
})    
