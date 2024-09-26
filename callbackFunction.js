// callback function  <--- if we call a function into arguments of any other function so it is called call back function.
// This is a callback function.
// function hello (myCallback: any){
//     myCallback()
// }
// // This is an arrow function.
// let arrowFunction = () =>{
//     console.log("Hello  callback function.");
// }
// hello(arrowFunction)
// ............................................
function printingName(callbackName) {
    callbackName("Sami");
}
let myName = (name) => {
    console.log(`My name is ${name}`);
};
printingName(myName);
export {};
