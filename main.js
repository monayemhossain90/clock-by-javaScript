const hourHand = document.getElementById("data-hour-hand");
const minuteHand = document.getElementById("data-minute-hand");
const secondHand = document.getElementById("data-second-hand");

setInterval(setClock,1000);

 function setClock(){
    const currentDate = new Date();
    const secondRatio =  currentDate.getSeconds()/60;
    const minuteRatio = (secondRatio + currentDate.getMinutes())/60;
    const hourRatio = (minuteRatio + currentDate.getHours())/12;

    setRotation(secondHand,secondRatio);
    setRotation(minuteHand, minuteRatio);
    setRotation(hourHand, hourRatio);

}


function setRotation(element,rotationRatio){
    element.style.setProperty('--rotation',rotationRatio * 360)

}

setClock()