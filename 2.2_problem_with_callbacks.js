/*
                 Biggest Problem with Callbacks
1. Inversion of Control
2. Callback hell -> The phenomenon which happens when we nest multiple callbacks within a function is called a 
callback hell. To be very honest it does not hamper the logic or flow of code. It is a readability problem.  
*/

function doTask(fn, x){
    // whole implemenation is done by team A
    fn(x*x); // calling my callback with squre of x
}

// here team B tries to use it
doTask(function exec(num){ /*due to callback , I am passing constrol of how exex function should be called to
          doTask. This is called Inversion of control. If suppose you write  the callback function exec for 
          charge payment for user if someone change in doTask function and write in place of sqaure anothne write 
          debugg this than it is problematic for us. */
    console.log("Woah name is", num)
},9)





