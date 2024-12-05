//Functions

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