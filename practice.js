// NESTED IF ELSE
// let userName = "sami";
// let pin = 1234;
// if(userName === "sami"){
//     console.log("Name is valid please enter your pin");
//     if(pin === 1234){
//         console.log("Your pin is valid");    
//     }
//     else{
//         console.log("Invalid pin");
//     }
// }
// else{
//     console.log("Invalid");
// }
//                     .................................................
//input + nested if else
// import inquirer from "inquirer";
// let userData =  await inquirer.prompt([{
//     name:"userInput",
//     message:"kindly enter your registered name \n",
//     type:"input"
// }])
// let userData1 =  await inquirer.prompt([{
//     name:"userInput1",
//     message:"kindly enter your pin \n",
//     type:"number"
// }])
// if(userData.userInput ==="sami"){
//     console.log("Your name is valid");
//     if(userData1.userInput1 === 1234){
//         console.log("Your pin is valid");    
//     }
//     else{
//         console.log("Your pin is not valid");
//     }
// }
// else{
//     console.log("Your name is not registered");
// }
//                   ..................................
// import inquirer from "inquirer";
// let userData =  await inquirer.prompt([{
//     name:"userInput",
//     message:"kindly enter your registered name \n",
//     type:"input"
// }])
// let userData1 =  await inquirer.prompt([{
//     name:"userInput1",
//     message:"kindly enter your pin \n",
//     type:"number"
// }])
// if(userData.userInput ==="sami"){
//     console.log("Your name is sami it is registered");
//     if(userData1.userInput1 ===1234){
//         console.log("This is sami's pin, valid! ");
//     }
//     else{
//         console.log("This is not sami's pin, invalid!");
//     }    
// }
// else if(userData.userInput === "junaid"){
//     console.log("Your name is junaid. You are registered");
//     if(userData1.userInput1 ===12345){
//         console.log("This is junaid's pin, valid!");
//     }
//     else{
//         console.log("This is not junaid's pin, invalid!");
//     }
// }
// else{
//     console.log("You are not registered");
// }
//...............................................................................
//SWITCH STATEMENT  jb hmry pas multiple conditions hotu hm swatch case ko use krty hain if else-if and switch 2no same hai hain
// let marks: number = 80;
// switch (marks){
//     case marks=80:
//     console.log("Your grade is 'A'");
//     break;
//     case marks=70:
//         console.log("Your grade is 'B'");
//         break;
//     case marks=60:
//         console.log("Your grade is 'C'");
//         break;
//     case marks = 50:
//         console.log("your grade is 'D'");
//         break;
//     case marks = 40:
//         console.log("Your grade is 'C'");
//         break;
//     default:
//         console.log("You are failed!");        
// }
//               ......................................
// import inquirer from "inquirer";
// let studentData1 = await inquirer.prompt([{
//     name:"question1",
//     message:"Kindly enter your name \n",
//     type:"input"
// }])
// let studentData2 = await inquirer.prompt([{
//     name:"question2",
//     message:"Kindly enter your CNIC \n",
//     type:"number"
// }])
// let studentData3 = await inquirer.prompt([{
//     name:"question3",
//     message:"Kindly enter your seat number \n",
//     type:"input"
// }])
// import students from "./studentsNames.js";
// import cnic from "./studentsCnics.js";
// import seatNumbers from "./studentsSeatNumbers.js";
// if(students.includes(studentData1.question1)){
//     console.log(`Your name is ${studentData1.question1}`);
//     if(cnic.includes(studentData2.question2)){
//         console.log(`Your CNIC is ${studentData2.question2}`);    
//     }
//     else{
//         console.log("Invalid CNIC");
//     }
//     if(seatNumbers.includes(studentData3.question3)){
//         console.log(`Your seat Number is ${studentData3.question3}`);
//     }
//     else{
//         console.log("Invalid Seat Number!");
//     }
// }
// else{
//     console.log("Invalid Data!");
// }
// let ans = studentData1.question1 + studentData2.question2 + studentData3.question3;
// switch(ans){
//     case "sami"+11110000+"1111":
//         console.log("You are sami and your marks are 90");
//         break;
//     case "junaid" + 22220000 +"2222":
//         console.log("You are Junaid and your marks are 80");
//         break;
//     case "sana" + 33330000+"3333":
//         console.log("You are Sana and your marks are 70");
//         break;
//     case "faizan" +44440000+"4444":
//         console.log("You are faizan and your marks are 60");
//         break;
//     case "khurram" + 55550000+"5555":
//         console.log("You are Khurram and your marks are 50");
//         break;
//     case "salman" + 66660000+"6666":
//         console.log("You are Salman and your marks are 40");
//     default:
//         console.log("Didn't attempt the test.");
// }
//.....................................................................
//          NAME FUNCTION
// function speaking(): string{
//     console.log("I can speak English");    
// }
// speaking()             
// speaking()
// speaking()
// I can speak English
// I can speak English
// I can speak English
//                       .......................................
// function Singing() {
//     console.log("I can sing songs beautifully.");   
// }
// function listening(){
//     console.log("I like listening songs while working");   
// }
// function cricket(){
//     console.log("I used to love playing cricket.");
// }
// function stories() {
//     console.log("I want to read stories.");
// }
// import inquirer from "inquirer";
// import ListPrompt from "inquirer/lib/prompts/list.js";
// let yourChoice = await inquirer.prompt([{
//     name:"userChoice",
//     message:"Kindly select your choice",
//     type:"list",
//     choices:["Singing songs","Listening to songs","Playing cricket","Reading stories"]
// }])
// if(yourChoice.userChoice ==="Singing songs"){
//     Singing()
// }
// else if(yourChoice.userChoice === "Listening to songs"){
//     listening()
// }
// else if(yourChoice.userChoice === "Playing cricket"){
//     cricket()
// }
// else if(yourChoice.userChoice === "Reading stories"){
//     stories()    
// }
// else{
//     console.log("Invalid");
// }
//....................................................
//  ARROW FUNCTION OR ANONYMOUS FUNCTION
// let num1= 20;
// let num2= 40;
// let add = () =>{
//     return num1+num2
// }
// let sub = () =>{
//     return num1 - num2
// }
// let multi = () =>{
//     return num1 * num2
// }
// let div = () =>{
//     return num1 / num2
// }
// import inquirer from "inquirer";
// let yourOperation = await inquirer.prompt([{
//     name:"operations",
//     message:"Kindly select your operation",
//     type:"list",
//     choices:["Addition","Subtraction","Multiplication","Division"]
// }])
// if(yourOperation.operations ==="Addition"){
//     console.log(add());
// }
// else if(yourOperation.operations === "Subtraction"){
//     console.log(sub());
// }
// else if(yourOperation.operations === "Multiplication"){
//     console.log(multi());    
// } 
// else if (yourOperation.operations === "Division"){
//     console.log(div());
// } 
//                   ............................................
//ERROW FUNCTION WITH PARAMETERS AND ARGUMENTS
// let sum =(val1: number, val2: number)=>{      //<--- parameters
//     return console.log(val1 + val2);
// }
// sum(3,4)                 // arguments
//...................................................
//    UNION TYPE
// let password: string | number | undefined;
// password = 1233;
// password = "gogo";
// console.log(password);
//...................................................
// MODULES     <-- yani program ko different files m bna kr kahi or import krna
// import { singing,listening,run } from "./function.js";
// console.log(singing());
// console.log(listening());
// console.log(run());
//...........................................
//              ARRAY
// let studentsName: string [] = ["Ali","Noman","Salman","Faiza","Salma"]
// console.log(studentsName);
// console.log(studentsName[2]);
//                    ...................................
// let arr1: string [] = ["Rehan","Salman","Anas","Faizan","Sufiyan"]
// console.log("Array1",arr1);
// let arr2: string [] = new Array("Sami","Junaid")
// console.log("Array2",arr2);
// let arr3 = Array.of("Ali","Jawaid")
// console.log("Array3",arr3);
// ......................................................................
//                  SLICE & SPLICE    <---- These are array methods
// let studentsName: string [] = ["Rehan","Salman","Anas","Faizan","Sufiyan"]
// let updated = studentsName.slice(0,2,)
// console.log(studentsName);
// console.log(updated);
//                .........................................
//                ..................................
// let studentsName: string [] = ["sami","junaid","sana","Faizan","salman"]
// studentsName.splice(1,2)
// console.log(studentsName);
//                ........................................
// let studentsName: string [] = ["sami","junaid","sana","Faizan","salman"]
// studentsName.splice(1,3,"sana")
// console.log(studentsName);
//.........................................................................
//                  PUSH  <--- last main add krny k liye
// let studentsName: string [] = ["sami","junaid","sana","Faizan","salman"]
// let addedName= studentsName.push("fareed")
// console.log(studentsName);       [ 'sami', 'junaid', 'sana', 'Faizan', 'salman', 'fareed' ]
// console.log(addedName);    6
// ................................................................
//    POP   <--- last sy delete krny k liye
// let studentsName: string [] = ["sami","junaid","sana","Faizan","salman"] 
// let deletedName = studentsName.pop()
// console.log(deletedName);                 salman
// console.log(studentsName);            [ 'sami', 'junaid', 'sana', 'Faizan' ]
//.................................................................
//         SHIFT <---- start sy name delete krny liye
// let studentsName: string [] = ["sami","junaid","sana","Faizan","salman"] 
// let removingName= studentsName.shift()
// console.log(removingName);                    sami
// console.log(studentsName);                [ 'junaid', 'sana', 'Faizan', 'salman' ]
//...........................................................
//              UNSHIFT  <--- starting main add krny k liye
// let studentsName: string [] = ["sami","junaid","sana","Faizan","salman"] 
// let addedName = studentsName.unshift("shafique")
// console.log(addedName);                                       6
// console.log(studentsName);                                    [ 'shafique', 'sami', 'junaid', 'sana', 'Faizan', 'salman' ]
//............................................................................
//                  FOR LOOP
// for(let i=0; i<=10; i++){
//     console.log(i);              1...10
// }
//                      ..................................
//                negative infinite for loop
//  for (let i=0; i<=4; i--){
//     console.log(i);                 
//  }
//                       ..............................
//          positive infinite loop
// for(let i=0; i>=-1; i++){
//     console.log(i);
// }
//                    ..................................
// for (let i=10; i>=1; i--){
//     console.log(i);
// }                           10...1
//                     ...................................
//      TABLE OF TWO
// let n1: number = 2;
// for(let i=1; i<=10; i++){
//     console.log(`${n1} x ${i} = ${n1*i}`);    
// }         
//..................................................................
//               OBJECT
// let obj ={
//         myName:"Sami hussain",
//         fatherName:"Ghulam hussain",
//         caste: "Shaikh",
//         age:22,
//         salary:() => 40000   // ye funtion bnaya ha mny object m
// }
// console.log(obj.salary());
//                          ....................................
// let myData = {
//         name:"Sami Hussain",
//         fatherName:"Ghulam Hussain",
//         caste:"Shaikh",
//         address:"House no: E-45  building musa Khaki pacca qila (hyd)",
//         salary:"40k plus",
//         maritalStatus:"Single",
//         personal:{
//         email:"samihussainpk@gmail.com",
//         pin:123
//            }
// }                
// console.log(myData,"\n"); 
// console.log(myData.name,"\n");
// console.log(myData.personal.pin,"\n");
//                ........................................
//       KEYS IN OBJECTS
// let myData = {
//         name:"Sami Hussain",
//         fatherName:"Ghulam Hussain",
//         caste:"Shaikh",
//         address:"House no: E-45  building musa Khaki pacca qila (hyd)",
//         salary:"40k plus",
//         maritalStatus:"Single",
//         personal:{
//         email:"samihussainpk@gmail.com",
//         pin:123
//            }
// }                
// for(let key in myData){
//         console.log(key);       // only, all keys will print i.e name,fatherName
// }
//....................................................................................
//          Math.round()  <--- ye number ko round off kr dega
// let x: number = Math.round(10.7)
// console.log(x);                   11
// .......................................................
//      Math.ceil        <--- agr kisi number k bad decimal m value hogi tu ye us number ki value ko bhra kr round off kry ga mtlb k agr 10.2 bhi hoga tu ye usko 11 kr dega
// let x: number = Math.ceil(10.1)
// console.log(x);           // 11
//.............................................................
//      Math.floor   <---- ye values ko minimum round off krta hai yani k ye sirf decimal sy pehly wali value ko consider kry ga
// let x: number = Math.floor(11.7)
// console.log(x);     11
//.........................................................
//            Math.trunc  <--- ye decimal k bd ki values ko consider nhi krta hai
// let x:number = Math.trunc(11.7)
// console.log(x);               11
//.......................................................
//              Math.pow <---- ye power k liye use hota hai
// let x: number = Math.pow(2,3)    //2 number hai or 3 power hai 2 k upr        
// console.log(x);         //8
//.....................................................
//          Math.sqrt       <---sqrt ka mtlb hai square root and ye kisi bhi number ka square root nikal deta ha
// let x: number = Math.sqrt(9)
// console.log(x);                3
//.................................................
//          Math.min   <-- ye hmy sub values main sy sub sy minimum value deta hai
// let x: number = Math.min(10,5,100,54,66)
// console.log(x);            5
//..............................................
//   Math.max  <-- ye hmy sub values sy sub sy bari value deta ha
let x = Math.max(10, 5, 100, 54, 66);
console.log(x);
export {};
