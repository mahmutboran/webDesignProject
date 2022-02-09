
let date = document.getElementById("date");
let year = document.getElementById("year");
let month = document.getElementById("month");
let day = document.getElementById("day");
let hour = document.getElementById("hour");
let minute = document.getElementById("minute");
let second = document.getElementById("second");

let snipper = document.getElementById("image");

date.addEventListener("change", function event(){
    let ageYear = new Date().getFullYear()-new Date(date.value).getFullYear();
    let ageMonth =new Date().getMonth()-new Date(date.value).getMonth();
    let ageDay = new  Date().getDate()-new Date(date.value).getDate();
    let ageHour = new  Date().getHours()-new Date(date.value).getHours();
    let ageMinute = new  Date().getMinutes()-new Date(date.value).getMinutes();
    let ageSecond = new  Date().getSeconds()-new Date(date.value).getSeconds();
    
    if (ageDay<0){
        ageDay+=30;
        ageMonth-=1;}
    if (ageMonth<0) {
        ageMonth+=12;
        ageYear-=1;        
    }
    year.innerText = (ageYear+"").padStart(2,"0");
    month.innerText= (ageMonth+"").padStart(2,"0");
    day.innerText=(ageDay+"").padStart(2,"0");
    hour.innerText=(ageHour+"").padStart(2,"0");
    minute.innerText=(ageMinute+"").padStart(2,"0");
    second.innerText=(ageSecond+"").padStart(2,"0");

    setInterval(event,1000);
    snipper.style.display = "none";


});

