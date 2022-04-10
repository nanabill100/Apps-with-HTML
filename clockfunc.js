
 //For clock
 const secondHand = document.querySelector('.second-hand');
 const minsHand = document.querySelector('.min-hand');
 const hourHand = document.querySelector('.hour-hand');
 
 function setDate() {
   const now = new Date();
 
   const seconds = now.getSeconds();
   const secondsDegrees = ((seconds / 60) * 360) + 90;
   secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
 
   const mins = now.getMinutes();
   const minsDegrees = ((mins / 60) * 360) + ((seconds/60)*6) + 90;
   minsHand.style.transform = `rotate(${minsDegrees}deg)`;
 
   const hour = now.getHours();
   const hourDegrees = ((hour / 12) * 360) + ((mins/60)*30) + 90;
   hourHand.style.transform = `rotate(${hourDegrees}deg)`;
 }
 
 setInterval(setDate, 1000);
 
 setDate();
 
 //For timer

 var timer = 0;
 var timerInterval;
 var ms = document.getElementById("milliseconds");
 var second = document.getElementById("mainsecond");
 var minute = document.getElementById("mainminute");


 function start(){
     timerInterval = setInterval(function(){
         timer += 1/60;
         msVal = Math.floor((timer - Math.floor(timer))*100);
         secondVal = Math.floor(timer) - Math.floor(timer/60)*60;
         minuteVal = Math.floor(timer/60);
         ms.innerHTML = msVal < 10 ? "0" + msVal.toString() : msVal;
         second.innerHTML = secondVal < 10 ? "0" + secondVal.toString() : secondVal;
         minute.innerHTML = minuteVal < 10 ? "0" + minuteVal.toString() : minuteVal; 
     }, 1000/60);
 }

 function stop(){
     clearInterval(timerInterval);
 }

 function reset(){
  stop();
  second.innerHTML = "00";
  minute.innerHTML = "00";
  ms.innerHTML = "00";
 
}
 