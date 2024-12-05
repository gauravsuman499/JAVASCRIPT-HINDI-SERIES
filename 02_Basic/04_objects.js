/*

const tinderUser = {} ; // empty objects

tinderUser.id = 4471;
tinderUser.name = "Gaurav Suman";
tinderUser.isLoggedIn = true ;

// console.log(tinderUser);


const regularUser = {
    email : " xyz@gmail.com",
    fullname : {
        userFullName : {
            fisrtName : "gaurav",
            lastName : "Suman"
        }
    }
};

console.log(regularUser.fullname.userFullName.fisrtName);
console.log(regularUser.fullname.userFullName.lastName);


const obj1 = {
    1 : "a",
    2 : "b"
};

const obj2 = {
    3 : "a",
    4 : "b"
};

// const obj3 = {obj1, obj2} ;
// const obj3 = Object.assign({}, obj1, obj2) ; //assign method to join all the objects together
const obj3 = {...obj1, ...obj2} ; // ******* spread oprerator to join all the objects together. *******

console.log(obj3);

//array of objects

const users = [ 
    {},
    {},
    {},
    {}
]


console.log(Object.keys(tinderUser)); //return an array of all the keys of the object
console.log(Object.values(tinderUser)); //return an array of all the values of the object
console.log(Object.entries(tinderUser)); //return an array of all the enteries of the object

console.log(tinderUser.hasOwnProperty("name"));

*/

//destructuring in javascript objects
const course = {
    coursename : "JavaScript in hindi",
    price : 999,
    courseInstructor : "Hitesh Sir"
};

console.log(course.courseInstructor);

const {courseInstructor : Instructor} = course ;

console.log(Instructor);
