//Destructuring of objects

//creating object as course

const course = {
courseName:"js in hindi",
price: 999,
courseInstructor: "Hitesh"
}

//Now if you want to get value of any object param like courseInstructor you may need to write like below--

console.log(course.courseInstructor);

console.log("using square bracket");

console.log(course["courseInstructor"]);

//Now if we want to refer or print courseInstructor many times, we might need to call program like above which is little cumbersome
//so we follow below to refer to 

const{courseInstructor}=course
console.log("Printing using destructure of objects");
console.log(courseInstructor);

//In case if you want to give customized name to any object params that also can be done as follows:

console.log("In case if you want to give customized name to any object params that also can be done as follows:");
const{courseName: nm}=course

console.log("cousrsename is--",nm);