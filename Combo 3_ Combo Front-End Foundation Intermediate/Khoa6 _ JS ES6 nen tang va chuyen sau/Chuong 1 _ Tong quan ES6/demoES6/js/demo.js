//ES5
var firstName1 = 'Cybersoft';
//cho phép gán lại giá trị
firstName1 = 'Cybersoft1';
//Cho phép khai báo trùng tên biến
var firstName1 = 'Cybersoft2';
// console.log(firstName1);

//ES6
let firstName2 = 'Cybersoft new';
//cho phép gán lại giá trị
firstName2 = 'Cybersoft new2';
//không cho phép khai báo trùng tên biến
// let firstName2 = 'Cybersoft new3';
// console.log(firstName2);

const PI = 3.14;
//Không được phép gán giá trị
// PI = 3.1414;
//Không được khai báo trùng tên
// const PI = 3.15;
// console.log(PI);

/**
 * Hoisting
 */
//ES5 var


//Gọi hàm và biến
// console.log(sum(2,3));
// console.log(city);
//undefined : chưa gán giá trị
//chưa được khai báo/ khởi tạo

//Khai báo hàm
// function sum(x,y){
//     return x + y;
// }
//Khai báo biến
// var city = "Ho Chi Minh";
// console.log(city);


//ES6 let/const

// var city;
// console.log(NAME); //initialization
//console.log(address); //initialization
//console.log(city);// undefined

// const NAME = "Cybersoft"; 
// let address = "456 Su van hanh"; 
// var city = "HCM";

//Scope

//global
// let name ="Bé Heo";
// function weight(){
//     //local 
//     let w = 100;   
//     if(w > 60){
//         //local
//         // var nickName = "Bé Na";
//         //Block
//         let nickName = "Bé Na";

//         console.log(nickName + " nặng: "+w+ "kg");
//     }

//     console.log(nickName + " hơi gầy! Ráng ăn thêm.");
// }

// weight();
// console.log(nickName);


//Arrow function
//ES5
// function tenham(thamso){
//     //xử lý
// }

// let hello = function(name){
//     return "Hello" + name;
// }
// console.log(hello("Bé Heo"));

//ES6

// let hello1 = (name) =>{
//     return "Hello1" + name;
// }
// console.log(hello1("Mị"));

//chỉ có tham số, có thể bỏ dấu ()
// let hello1 = name =>{
//     return "Hello1" + name;
// }
// console.log(hello1("Mị"));

//Nếu chỉ có 1 lệnh return, thì bỏ dấu {} và từ khóa return
// let hello1 = name => "Hello1" + name;

// console.log(hello1("Mị"));

//Lỗi cú pháp

// let hello = (name)=>{
//     return "Hello:" + name;
// }
// console.log(hello("Mị"));

// let hello = (name)
// =>{
//     return "Hello:" + name;
// }
// console.log(hello("Mị"));

// let hello = name 
// =>"Hello:" + name;

// console.log(hello("Mị"));


// let hello = (name) => {
//     return "Hello:" + name;
// }

// let hello = (name) => {
//     return "Hello:" + name;
// }

// let hello = name =>
//     "Hello:" + name;

// let hello = (
//     name
// ) => {
//     return "Hello:" + name;
// }

// console.log(typeof () => "Hello Mị");


// console.log(typeof (() => "Hello Mị"));

// let hello = () => "hello Mị";
// console.log(typeof hello);

//This
//ES5
// let hocVien = {
//     hoTen:"Nguyễn Thị Học Viên",
//     lop:"Ngữ văn 12",
//     diemThi:[10,9,8],
//     // layThongTinHocVien:function(){       
//     //     //C1: biến tạm:
//     //     //this là hocVien
//     //     //_bind là hocVien
//     //     // var _bind = this;
//     //     this.diemThi.map(function(diem,index){
//     //     // context
//     //         console.log("Họ tên:"+ _bind.hoTen + "- Lớp"+ _bind.lop);
//     //         console.log("Điểm thi "+index+":"+diem);
//     //     });
//     // }
//     layThongTinHocVien:function(){       
//            //C2: sử dụng hàm bind() để định nghĩa lại ngữ cảnh của this
//             this.diemThi.map(function(diem,index){
//             // context
//                 console.log("Họ tên:"+ this.hoTen + "- Lớp"+ this.lop);
//                 console.log("Điểm thi "+index+":"+diem);
//             }.bind(this));
//         }
// }

// hocVien.layThongTinHocVien();


//ES6
// let hocVien = {
//         hoTen:"Nguyễn Thị Học Viên",
//         lop:"Ngữ văn 12",
//         diemThi:[10,9,8],        
//         layThongTinHocVien:function(){       
//             // console.log(this.diemThi);
//                 this.diemThi.map((diem,index)=>{
//                 // context
//                     console.log("Họ tên:"+ this.hoTen + "- Lớp"+ this.lop);
//                     console.log("Điểm thi "+index+":"+diem);
//                 });
//             }
//     }
    
// hocVien.layThongTinHocVien();

// hello();
//Khai báo
// function hello(){
//     console.log("hello");
// }

// hello();

//khai báo
// let hello = ()=>{
//     console.log("hello");
// }

// hello();

// ES5
// function getUserInfo(name,age){
//     //C1: dùng if else
//     // if(name == undefined || age == undefined){
//     //     console.log("giá trị không hợp lệ");
//     //     name = "default name";
//     //     age = 18;
//     // }
//     // C2: ternary operator
//     // name = name == undefined ? "default name" : name;
//     // age = age == undefined ? 18 : age;
//     // C3: toán tử ||
//     //undefined, null, NaN
//     // name = name || "default name";
//     // age = age || 40;

//     if(age >= 18 && age < 30){
//         console.log(name + " đang còn trẻ." + name + " nên đi chơi nhiều.")
//     }else{
//         console.log(name + " đã "+ age +" tuổi. Nên ở nhà đi!")
//     }
// }

// getUserInfo();

//ES6
// let getUserInfo = (name = "Mị",age = 40)=>{   
//     if(age >= 18 && age < 30){
//         console.log(name + " đang còn trẻ." + name + " nên đi chơi nhiều.")
//     }else{
//         console.log(name + " đã "+ age +" tuổi. Nên ở nhà đi!")
//     }
// }

// getUserInfo();

//Rest Parameter

// let tinhDTB = (...danhSachDiem)=>{
//     // console.log(danhSachDiem);
//     let tongDiem = 0;
//     for(let i = 0; i < danhSachDiem.length;i++){
//         // tongDiem = tongDiem + danhSachDiem[i];
//         tongDiem += danhSachDiem[i];
//     }
//     let dtb = tongDiem / danhSachDiem.length;
//     console.log(dtb);

// }

// tinhDTB(9,8,10,7,6,4);

//Spread Operator

//Thêm phần tử vào mảng 
// let danhSachKH = [1,2,3,4];
// let danhSachCopy = [...danhSachKH];
// danhSachCopy.push(5);
// danhSachCopy.push(6);
// console.log(danhSachCopy);

//Thêm thuộc tính cho đối tượng
// let pet = {
//     name:"Bé Na",
//     bread:"Snake"
// };

// let newPet = {
//     age:1,
//     ...pet
// }

// console.log(newPet);

//Destructuring

//Array
// let programs = ['JavaScript','Java','Python'];

//ES5
// console.log(programs[0]);
// console.log(programs[1]);
// console.log(programs[2]);

//ES6
// let [first,second,third] = programs;
// console.log(first);
// console.log(second);
// console.log(third);


//Object
// let pet = {
//     name: 'Gâu Đần',
//     age:3,
//     breed: 'Golden',
//     size:{
//         weight:'30kg',
//         height: '56cm'
//     }
// }

//ES5
// var name = pet.name;
// var age = pet.age;
// var size = pet.size;

// console.log(name,age);
// console.log(size);

//ES6 
// let {name,age} = pet;

// let {weight,height} = pet.size;

// console.log(name,age);
// console.log(weight,height);

// let {weight: w,height: h} = pet.size;
// console.log(w,h);

//Template String
// let pet = "Cá";
// let action = "bơi";

// Mình là cá, việc của mình là bơi
//ES5

// console.log("Mình là "+pet+"," 
//         +"việc của mình là "+action+".");

//ES6
// console.log(`Mình là ${pet},
// việc của mình là ${action}.`);

// let a =2;
// let b = 3;

// console.log(`Sum = ${a + b}`);

// document.getElementById("section1").innerHTML = `
//     <div class="class1">
//         <p>Mình là ${pet},
//         việc của mình là ${action}.</p>
//     </div>
// `;

//Object literal
//ES5
// var name = "Mị";
// var myObject = {
//     name: name,
//     sayHi: function(){
//         console.log("Hi, my name is "+this.name);
//     }
// }

// myObject.sayHi();

//ES6
// let name = "Mị";
// let myObject = {
//     name,
//     sayHi(){
//         console.log("Hi, my name is "+this.name);
//     }
// }

// myObject.sayHi();

// let name = "ten";
// let myObject = {
//     //ten:"Mị"
//     [name]: "Mị",
//     sayHi(){
//         console.log("Hi, my name is "+this.ten);
//     }
// }

// myObject.sayHi();

//for
//empty element
let currencies = ['VND',,'USD','SGN'];
//index
// for(let i = 0; i < currencies.length; i++){
//     console.log(i, currencies[i]);
// }

//ES5
//for ...in
//index
// for(let i in currencies){
//     console.log(i, currencies[i]);
// }

//ES6
//for ... of
//value
// for(let value of currencies){
//     console.log(value);
// }

// for(let [index,value] of currencies.entries()){
//     console.log(index, value);
// }


