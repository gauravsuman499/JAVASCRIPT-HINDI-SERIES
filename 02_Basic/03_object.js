//objects
const mysymbl = Symbol("key1") ; //symbol

// console.log(typeof mysymbl);


const newUser = {
    "first name" : "Gaurav" ,
    "last name" : "Suman" ,
    [mysymbl] : "key2",
    age : 28,
    uid : "20BCS4471",
    location : "Hyderabad" 
};

// console.log(  newUser["age"]);
// console.log(  newUser["first name"]);
// console.log(  newUser["last name"]);

// console.log(newUser.uid);
// newUser.uid = "20BCS4465";
// console.log(newUser.uid);

// Object.freeze(newUser) ; // freezes the object , thus no new changes can be done to the object data and properties
// newUser.uid = "20BCS4455";
// console.log(newUser.uid);
// console.log(newUser);


newUser.greetings =  function(){
    console.log("Good morning user");
}
console.log(newUser.greetings() );

newUser.greetingsTwo = function(){
    console.log(`Good Morning ${this["first name"]} ${this["last name"]}`);    
}

console.log(newUser.greetingsTwo());



