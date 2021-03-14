const daysEl = document.getElementById('days') 
const hoursEl = document.getElementById('hours') 
const minsEl = document.getElementById('mins') 
const secondsEl = document.getElementById('seconds') 

const newYear= '1 Jan 2022'

function coutdown(){
    
    const newYearDate= new Date(newYear)
    const currentDate = new Date();

    const totalSeconds = (newYearDate- currentDate)/1000;

    const days= Math.floor(totalSeconds/ 3600/ 24)

    const hours= Math.floor(totalSeconds/3600)%24

    const mins= Math.floor(totalSeconds/60)%60
    
    const seconds = Math.floor(totalSeconds)%60

    daysEl.innerHTML= days
    hoursEl.innerHTML= hours;
    minsEl.innerHTML= mins;
    secondsEl.innerHTML= seconds;
    
}

coutdown();

setInterval(coutdown, 1000)