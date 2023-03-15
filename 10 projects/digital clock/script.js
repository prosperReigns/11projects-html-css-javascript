function getTime(){
    const date = new Date();
    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds(); 

    
    let format = formatHour(hour);
    hour =  hourFormat(hour)
    hour = generalFormat(hour);
    minute = generalFormat(minute)
    second = generalFormat(second)

    const output = document.querySelector('.clock');
    output.innerText = `${hour} : ${minute} : ${second} ${format}`;
}

//set time to AM and PM format
function  formatHour(time) {
    if(time >= 12){
        return ("PM"); 
    }
    return ("AM"); 
    hourFormat(hour);
}

//reset the hour mark to 1 once its past noon
function hourFormat(time){
    if(time > 12){
        return (time = 1);
    }
}
//set time to a double digit
function generalFormat(time) {
    if(time < 10){
        return ("0" + time)
    }
    return time;
} 

getTime();
setInterval(getTime, 1000)

