//global scope
var c = 900 ;

//local scope
if(1){
    let a = 10 ;
    const b = 33;
    var c = 90 ;    
}
// console.log(a); //not accessible outside of the scope -> which is good 
// console.log(b); //not accessible outside of the scope-> which is good
// console.log(c); //accessible outside of the scope -> which is not good



//part 2(scope level and mini hoisting)

function one(){
    const userName = " Gaurav";
    function two(){
        const ytName = "Chai aur code" ;
        console.log(userName) ;
    }

    // console.log(ytName) ; //cannot be accessed outside the scope
    two() ;
}

// one() ;



/************************************* Hoisting ******************************/

console.log(one(5)) ; // this will not give any error

function one(val){
    return val + 2 ;
}

// console.log(one(5)) ;//this will not give any error


// console.log(two(50)) ; // this will  give  error -> as we are trying to accesss a function variable before its declaration(not support hoisting)

const two = function (val){
    return (val * 2 );
}

// console.log(two(50)) ; // this will not give any error