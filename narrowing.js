// NARROWING <---  we narrow a variable or refine the type of a variable below in the narrowing.
//          NARROWING
// let password: string | number;
//          REFINING  THE VALUE OF THE VARIABLE
// password = 530452;
// console.log(password);
//           REFINING  THE VALUE OF THE VARIABLE 
// password= "ssssmmmaai"
// console.log(password);
//.................................................
// We can also use either methods of number or string with narrowing
//      NARROWING
// let password: string | number;
//      REFINING  THE VALUE OF THE VARIABLE
// password = 530452;
// console.log(password.toFixed(1));
//      REFINING  THE VALUE OF THE VARIABLE
// password= "ssssmmmaai"
// console.log(password.toUpperCase());
//.........................................................
let val = "sami";
function getType(val) {
    if (typeof val === "string") {
        return val.toUpperCase();
    }
    else {
        val + 2;
    }
}
console.log(val);
export {};
