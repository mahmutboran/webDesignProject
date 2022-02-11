
let submit = document.getElementById("buttonMove");
let result = document.getElementById("resultSpan");

submit.addEventListener("mouseover",()=>{
    let firstNumber = +document.getElementById("inputNumber1").value;
    let secondNumber =+document.getElementById("inputNumber2").value;
    let selectSign = document.getElementById("selectSign").value;
    submit.innerHTML="Now move out mouse from here!"
    if (selectSign=="+") {
        result.innerHTML=firstNumber+secondNumber
    } else if(selectSign=="-"){
        result.innerHTML=firstNumber-secondNumber
    }else if(selectSign=="/"){
        result.innerHTML=firstNumber/secondNumber
    }else {
        result.innerHTML=firstNumber*secondNumber
    }
})
submit.addEventListener("mouseout",()=>{
    submit.innerHTML="Move Mouse Here!"
})
