// SYNCHRONOUS  <---In synchronous programming, code executes line by line.

// let a = 10;
// let b = 20;
// let c = 30;
// console.log(a,b,c);

//..............................................................


//ASYNCHRONOUS  <--- In ansyncornous programming code does not execute line by line.
            // setTimeout <-- is an asynchronous method

// console.log(1);
// console.log(2);
// setTimeout (function(){
//     console.log(3);
    
// },1000)
// console.log(4);
// console.log(5);
//.............................................

// let a = 1;
// let b = 2;

// setTimeout(function(){
//     console.log(a);
    
// },1000);
// console.log(b);

// // the value of 'a' has been updated
// a = 10;
        //    output is 2,10 
//..............................................

// console.log(1);
// console.log(2);

// setTimeout(function(){
//     console.log(3);     // "3" will execute after the execution of loop
    
    
// },500);

// for (let i=1; i<=10; i++){
//     console.log(`Loop is runnig ${i}`);
    
// }
        