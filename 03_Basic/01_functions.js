//Functions

/*
const addtwoNumbers = function(num1, num2){
    return (num1 + num2) ;
}

const sum = addtwoNumbers(5,4) ;
console.log(sum) ;


const logginUserMessage = function(username = "Sam"){ //username = "Sam" -> default parameter 
                                                    // (if no arguments is passed to the function when calling then it will directly get the value as "Sam" )
    return `${username} just logged in.` ;
}

console.log(logginUserMessage("Gaurav")) ;
console.log(logginUserMessage()) ; //no argument is passed


*/


//function part-02
const calculatePrice = function(...num){ //(...) rest operator
    return num ;
}

console.log(calculatePrice(5, 20, 25, 260) ) ;


// const user = {
//     username : "Gaurav Suman" ,
//     age : 20
// };

const handleObject = function(anyObject){
    return `${anyObject.username} is ${anyObject.age} years old`;
}


//passing object directly as arguments to the function
console.log(handleObject({
    username : "Gaurav Suman" ,
    age : 20}));


const myArr = [10,20,30,40,50] ;

const handleArray = function (arry){
    return arry ;
}


//passing array directly as an argument to the function
console.log(handleArray([10,20,30,50,60]));
