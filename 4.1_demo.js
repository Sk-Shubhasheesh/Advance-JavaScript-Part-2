function timeConsumingByLoop(){
    console.log("loop starts")
    for(let i=0; i<10000000000; i++){
        // some task
    }
    console.log("loop ends");
}

function timeConsumingByRuntimeFunction(){
    console.log("Starting timer");
    setTimeout(function exex(){
        console.log("Completed the timer")
    }, 5000)
}

console.log("Hi");

timeConsumingByLoop();
timeConsumingByRuntimeFunction();
timeConsumingByLoop();

console.log("By..")

/*             Output
      Hi
      loop starts
      loop ends
      Starting timer
      loop starts   
      loop ends
      By..
      Completed the timer
*/