 /*let clock = setInterval(stopClock, 1000);
var hrs = 0;
var min = 0;
 var sec = 0;  


function stopClock(){
    sec = sec +1 ;
    
     if (sec > 59){
    sec = 0;
    min += 1;
    }if (min > 59){
    min =0;
    hrs += 1;
    }
    if (hrs === 6){
clearInterval(clock)
    }
    console.log(`${hrs} : ${min} : ${sec}`);
}

*/
var  displayTimer = setInterval(countDown, 1000)
var count = 0 
var hrs = 2;
 var min = 0; 
 
 console.log(`${hrs}hr ${min}m ${count}s`);
 
function countDown(){
    count = count - 1;
    if( count < 0){
      min -= 1
    count  = 59;

    }if (min < 0){
        hrs -= 1
        min = 59
    } 
    if (hrs === 0 && mins === 0 && count === 0){
        clearInterval(displayTimer)
    }
console.log(`${hrs} hr ${min}m ${count}s`);
} 
