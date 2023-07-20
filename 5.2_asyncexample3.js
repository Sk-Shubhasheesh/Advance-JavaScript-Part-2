console.log("Hello world");
for(let i =0;i<3; i++){  // i = 0;
    setTimeout(function exec(){
        console.log("Timer Done");
    },10);
}
for(let i = 0; i<10000000000; i++){
    // some task -> let's assume this for loop take 10 secnd.
}
console.log("End");
/*      Output
        Hello world
        End
        Timer Done
        Timer Done
        Timer Done
*/


