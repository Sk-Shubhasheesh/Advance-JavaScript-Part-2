console.log("Hello world");
setTimeout(function exec(){
    console.log("Timer Done");
},0);

for(let i = 0; i<100000000000; i++){
    // some task -> let's assume this for loop take 10 secnd.
}
console.log("End");

/*  Output
    Hello world
    End
    Timer Done

*/





