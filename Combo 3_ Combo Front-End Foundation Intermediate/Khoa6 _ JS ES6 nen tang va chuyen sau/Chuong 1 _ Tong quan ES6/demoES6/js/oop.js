//OOP
//ES5

//class: lớp đối tượng
//function: camel getInfo
//pascal camel GetInfo
// function Student(name,address){
//     this.name = name;
//     this.address = address;
// }

// var st = new Student("Hoc Vien 1","456 Su Van Hanh");
// console.log(st.name,st.address);

//ES6
// class Student{
//     constructor(name,address){
//         this.name = name;
//         this.address = address;
//     }
// }

// let student = new Student("Hoc Vien 2","456 Su Van Hanh");
// console.log(student.name,student.address);

//Extend
//ES5
// function Father(name){
//     this.name = name;
// }

// Father.prototype.createColorEyes = function(){
//     console.log("Black");
// }

// function Childrend(name){
//     //Kế thừa thuộc tính từ Father
//     Father.apply(this,arguments);
// }
//Kế thừa phương thức từ Father
// Childrend.prototype = new Father;
// Childrend.prototype.createColorEyes = function(){
//     console.log("Brown");
// }
// Childrend.prototype.createColorSkin = function(){
//     console.log("Brown");
// }

// var child = new Childrend('Con');
// console.log(child.name);
// child.createColorEyes();
// child.createColorSkin();

//ES6
// class Father{
//     constructor(name){
//         this.name = name;
//     }
//     createColorEyes(){
//         console.log("Black");
//     }
// }
// // extends
// //kế thừa thuộc tính và phương thức từ class Father
// class Childrend extends Father{
//     createColorSkin(){
//         console.log("Brown");
//     }
// }
// let child = new Childrend("Con");
// console.log(child.name);
// child.createColorEyes();
// child.createColorSkin();

//Method Overriding
// class Person{
//     constructor(name){
//         this.name = name;
//     }
// }
// Person.prototype.getName = function(){
//     return this.name;
// }

// class Student extends Person{
//     //super
//     getPersonName(){
//         return super.getName();
//     }
// }
// Student.prototype.getName = function(){
//     return "Hello "+ this.name;
// }

// let st = new Student("Truc");
// console.log(st.getName());
// console.log(st.getPersonName());

//Proxy

let pet ={
    name:"cau vang",
    age:2,
    breed:'shiba'
}

// let pet1 = new Proxy(pet,{
//     get(target,prop, receiver){
//         if(typeof target[prop] ==='string'){
//             return target[prop].toUpperCase();
//         }

//         return target[prop];
//     }
// });

// console.log(pet1.name);
// console.log(pet1.age);
// console.log(pet1.breed);

// let pet1 = new Proxy(pet,{
//     set(target,prop,val){
//         if(prop === 'age' && typeof val !== 'number'){
//             throw new TypeError('Age must be a number');
//         }

//         target[prop] = val;
//         return true;
//     }
// });

// // pet1.age = '123';
// pet1.age = 10;
// console.log(pet1.age);