/*var*/
var course = "zero to hero";
console.log(window.course);

function abc(){
    var anotherCourse = "hero in lwc";
    console.log(anotherCourse);
}

abc();

if(2 == 2){
    var x = 10;
}
console.log(window.x);

/*let*/
let course = "zero to hero";
console.log(course);
course = "zero to hero in lwc";
console.log(window.course);

function abc(){
    let x = "Madhurima";
    console.log(x);
}

abc();

if(2 == 2){
    let y = "Madhurima Bhowmick";
    console.log(y); 
}

/*const*/
const course = "lwc";
console.log(course);

function abc(){
    const x = 20;
    console.log(x);
}
abc();
const x = 200;
console.log(x);

if(2 == 2){
    const y = 30;
    console.log(y);
}
const y = 300;
console.log(y);

/*global scope example*/
var x = "global - x";
let y = "global - y";
console.log(this.x);
console.log(this.y);

/*Data Types*/
var x = 10.1;
console.log(typeof x);

var y = 10n;
console.log(typeof y);

var name = 'Madhurima';
console.log(typeof name);

var isMonday = false;
console.log(typeof isMonday);

var z ;
console.log(typeof z);

var obj = {};
console.log(typeof obj);

var arr = [];
console.log(typeof arr);

var sym = Symbol("id");
console.log(typeof sym);

console.log(typeof new String("Hello"));

/*null vs underfined*/
console.log(3=="3");
console.log("madhurima"=="madhurima");

console.log(3===3);

var x ;
console.log(x);

var y = null;
console.log(y);

console.log(x===y);

/*Array vs Object*/
var arr = ["a", "b", "c"];
console.log(arr);
console.log(arr[0]);
console.log(arr[1]);

var obj = {
    "name" : "salesforce",
    "age" : 23,
    "full name" : "Madhurima Bhowmick"
}

console.log(obj.name);
console.log(obj.age);

console.log(obj["name"]);
console.log(obj["age"]);
console.log(obj["full name"]);

obj.hobbies = "Tennis";
console.log(obj);

/*Spread Operator*/
var greeting = "Hello Everyone";
let charList = [...greeting];
console.log(greeting);
console.log(charList);
console.log(charList[10]);

let arr1 = ["amazon", "google"];
let arr2 = ["meta", "salesforce"];

let arr3 =  [...arr1, ...arr2];
console.log(arr3);

let arr4 = ['a', 'b', 'c'];
let arr5 = ["madhurima", ...arr4];
console.log(arr5);

let obj1 ={
    name : "salesforce",    
    age : 23,
    date :"23/10/1990"
}

let obj2 ={
    name : "facebook",
    age : 25
}

var obj3 = {...obj1, ...obj2};
console.log(obj3);

var arr10 = ["x", "y", "z"];
var arr11 = [...arr10];
arr11.push("madhurima");
console.log(arr10);
console.log(arr11);

var arrObj = [{ name : "madhurima"}, { name : "mb"}];
var arrObj1 = [...arrObj];
console.log(JSON.parse(JSON.stringify(arrObj)));

arrObj1[0].name = "superman";
console.log(arrObj1); 
console.log(arrObj); 

// var arrObj1 = JSON.parse(JSON.stringify(arrObj));
// console.log(arrObj);

// arrObj1[0].name = "superman";
// console.log(arrObj1); 
// console.log(arrObj); 

/*String and array destructuring*/
let arr = ["amazon", "google"];


let [company1, company2] = arr;
console.log(company1);
console.log(company2);

let options = {
    title : "zero to hero",
    age : 23,
    type : "CRM"
}

let {title, age, type} = options;
console.log(title);
console.log(age);
console.log(type);

/*String interpolation*/
let name = "Madhurima";

console.log(`Hello, my name is ${name}`);

let a = 10;
let b = 20;

console.log(`The sum of ${a} and ${b} is ${a+b}`);

/*String methods*/
let str = "Hello guys, I hope you all are doing well";
console.log(str.includes("hope"));

console.log(str.indexOf("hopes"));

console.log(str.startsWith("Hello"));

console.log(str.slice(0, 5));

let x = "My name is Madhurima";
console.log(x.toUpperCase());

console.log(x.toLowerCase());

let searchText = '       salesforce ';
console.log(searchText);
console.log(searchText.trim());

/*Object/JSON operations*/
let obj = {
    name : "Salesforce",
    age : 23,
    dob : "23/10/1990"
}

console.log(Object.keys(obj));

console.log(Object.values(obj));

console.log(JSON.stringify(obj));

/*Array methods*/
let arr = [2, 3, 5, 7, 9, 10];

let newArr = arr.map(function(currentItem, index, array){
    console.log(`currentItem is ${currentItem} wit index ${index} of array ${array}`);
    return (currentItem * 2);
});
console.log(newArr);

let filteredValues = arr.filter(function(currentItem, index, array){
    return currentItem > 5;
});
console.log(filteredValues);

let age = [32, 33, 18, 40];
let isAllAdult = age.every(function(currentItem){
    return currentItem >= 18;
});
console.log(isAllAdult);

let isAdult = age.some(function(currentItem){
    return currentItem > 32;   
});
console.log(isAdult);

let name = ["Madhurima", "madhurima", "John", "smith"];
console.log(name.sort());

var points = [122, 10, 39, 12, 89, 54];
console.log(points.sort());
var sortedArray = points.sort(function(a, b){
    return a - b;
});
console.log(sortedArray);

let num = [12, 78, 30];

let sum = num.reduce(function(total, currentItem){
    return total + currentItem;
}, 0);

console.log(sum);

num.forEach(function(currentItem){
    console.log(currentItem);
});

/*Promise*/
/*Promise*/



