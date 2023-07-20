
function f(x, fn){
    /* 
     x-> number
     fn -> function 
    */
   console.log(x);
   fn();

   // if print  fn than
   console.log(fn)   // [Function: exec]

}
// calling the function
f(10, function exec(){
    console.log("I am an expression passed to a Higher Order Function");

})

/* output
10
I am an expression passed to a Higher Order Function
[Function: exec]  */

let arr = [1,10,9,100,1000,11,12,13,14,2,3] // Unsorted array

arr.sort(); // it sorts the given array // [expectation] -> This might arrabge elements in increasing order but
console.log(arr) // Output -> [ 1, 10, 100, 1000, 11, 12,  13,   14, 2,  3,   9]

/* You might be thinking what happens here so defalult impletation of arr.sort() is going to sort my array in 
lexicographical order.lexicographical order is alphabetical order.Those values are in lexicographical order. 
10 comes after 2 in numerical order, but 10 comes before 2 in "alphabetical" order.

Now how can we make sure that your sorting is done in increasing order not in lexicographical order. 

*/
let b = [1,10,9,100,1000,11,12,13,14,2,3] // Unsorted array & want to sort b in increasing order and
// now technically javascript sort function is a Highr order function so i can pass a function as an argument

b.sort(function(a,b){
    // if a < b -> a-b will be negative -> if cam. function gives negative then a is placed before b
   // if a > b -> a-b will be possitive -> if cam. function gives positive then b is placed before a
    
    return a-b;  
})
/* so here  the sort function takes a comparator function as argument. A comparator is a function that takes two 
arguments x and y and returns a value indicating the relative order in which x and y should be sorted. In simple
word if we segregate the comperesion logic inside a function and whenever you want to do sorting you just used
that function thats the comparator function. So here inside this comparator function we can write the logic so 
that instead of comparing two values lexicographical it starts comparing the two value numerically. 
*/

console.log(b); // [1,2,3,9,10,11,12,13,14, 100, 1000]



