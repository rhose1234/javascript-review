//first task
// const firstName = "Rose";
// const lastName = "Akorede";
// const age = 22;
// const hobbies = "Exploring"
// const houseAddress = "Ashi Bodija"
// const sentence = "My name is " + " " + firstName + " " + lastName + "," + "i am " + " " 
// + age + " " + " years old " + "," + " I live at " + " " + houseAddress + " " + "I love" + " " + hobbies + ". " 
// + "I want to be a good developer but things might not be going well at the moment but i am sure i will be fine, I guess everyone goes through this same stage of their life but i am very certain i didn't make a mistake."
// console.log(sentence)

//second task
// const num1 = 30;
// const num2 = 23;
// const num3 = 12;
// const num4 = 10;

// const result = num1 * num2 + num3 % num4;
// console.log(result)



// //Asssignment
// const student1Name = "Marvelous"
// const student1Age = 22;
// const student1Ageby2030 = 2030 - 2022;
// const actualAge = student1Ageby2030 + student1Age
// document.writeln(student1Name + " : " + " " + student1Name + " would be " + actualAge + " "+ "by 2030" + "<br>") 
// console.log(student1Name + " : " + " " + student1Name + " would be " + actualAge + " "+ "by 2030" ) 

// //second student
// const student2Name = "Bako"
// const student2Age = 23;
// const student2Ageby2030 = 2030 - 2022;
// const actualstudent2Age = student2Ageby2030 + student2Age
// document.writeln(student2Name + " : " + " " + student2Name +" would be " + actualstudent2Age + " "+ "by 2030" + "<br>")
// console.log(student2Name + " : " + " " + student2Name +" would be " + actualstudent2Age + " "+ "by 2030")

// //third student
// const student3Age = "David"
// const age3 = 16;
// const studentAgeby20303 = 2030 - 2022;
// const actualAge3 = studentAgeby20303 + age3
// document.writeln(student3Age + " : " + " " + student3Age + " would be " + actualAge3 + " "+ "by 2030" + "<br>")
// console.log(student3Age + " : " + " " + student3Age + " would be " + actualAge3 + " "+ "by 2030" )

// //fourth student
// const studentName4 = "Amazing"
// const age4 = 24;
// const studentAgeby20304 = 2030 - 2022;
// const actualAge4 = studentAgeby20304 + age4
// document.writeln(studentName4 + " : " + " " + studentName4 + " would be " + actualAge4 + " "+ "by 2030" + "<br>")
// console.log(studentName4 + " : " + " " + studentName4 + " would be " + actualAge4 + " "+ "by 2030")



// //diffferent way
// const randomStudent = "Mr Adebayo"
// const realAge = 30;
// const currentYear = 2022
// const estimatedYear = 2030
// const YearLeft = estimatedYear - currentYear
// const caculatedAge = realAge + YearLeft
// const sentence = randomStudent + " " + "would be" + " " + caculatedAge + " " + "by 2030"
// document.writeln(sentence)
// console.log(sentence)

// write a code that takes in cpism 3 student name, age and gender dynamically 
//  and give an output of the student name, age, gender 
// and the student age by 2030 assunming this is 2022


// const studentName = prompt("Enter Student name");
// const studentAge = Number(prompt("Enter Student Age"));
// const studentGender = prompt("Enter Student gender");
// const estimatedYear = 2030;
// const currentYear = 2022;
// const remainYear = estimatedYear - currentYear;
// const yearby2030 = remainYear + studentAge;

// const output = studentName + " " + "is" + " " + studentAge + ", " + "a" + " " + studentGender + " " + "and would be" + " " + yearby2030 + " " + "by" + " " + estimatedYear;


// console.log(output);
// alert(output);


//global, local, and block scope

// let profiles = "Marvelous"
// let profiles = "Amazing"
// console.log(profiles)
// function myfunction() {
//    const profiles = "David"
//     console.log(profiles)
// }
// myfunction();
// {
//     profiles = "rukayat"
//     console.log(profiles)
// }

// //Accessing anywhere, only one works
// console.log(profiles)

//objects

// const person = {
//     name : "Marvelous",
//     age :  22,
//     gender : "female",
//     married : false
// };
// console.log(person)
// // Dot notation to access property in an object
// console.log(person.name);

// // Bracket notation to access property in an object
// console.log(person["age"]);
// console.log(Object.values(person));
// console.log(Object.keys(person));
// console.log(Object.entries(person));

// const profiles = 
// {
// name : "Rose"
// }
// profiles["lastName"] = "Marvelous"
// profiles.age = 30
// console.log(profiles)

// // Arrays
// const items = ["Marvelous", 7, 8, 9, {firstName : "Rose"}, 10, [2, 3, 4, 5], null, undefined]
// console.log(items)
// console.log(items[0])
// console.log(items[6][2])

// create an array of data for phone and must not be less than 10, put all of the following properties
// into consideration phonename, phone os version, phone version, phone storage capacity, phone camera 
// resolution, phone is new or used, phone color, ramsize and color dynamically , output all phones using console.log and document.writeln

// const phones = [
//     {
//         phonename : "Iphone",
//         osVersion : "Ios",
//         cameraResolution : "1800mp",
//         isNew : false,
//         storageCapacity: "500gb"
    
//     } ,
//     {
//         phonename : "Samsung",
//         osVersion : "Andriod 14",
//         cameraResolution : "1800mp",
//         isNew : true,
//         storageCapacity: "500gb"
    
//     } ,
//      {
//         phonename : "Redmi",
//         osVersion : "Andriod 14",
//         cameraResolution : "1800mp",
//         isNew : true,
//         storageCapacity: "500gb"
    
//     } ,
//      {
//         phonename : "Tecno",
//         osVersion : "Andriod 14",
//         cameraResolution : "1800mp",
//         isNew : true,
//         storageCapacity: "500gb"
    
//     } ,
//      {
//         phonename : "Nokia",
//         osVersion : "Andriod 14",
//         cameraResolution : "1800mp",
//         isNew : true,
//         storageCapacity: "500gb"
    
//     }, 
//      {
//         phonename : "Samsung",
//         osVersion : "Andriod 14",
//         cameraResolution : "1800mp",
//         isNew : true,
//          storageCapacity: "500gb"
//     },
//      {
//         phonename : "Xaomi",
//         osVersion : "Andriod 14",
//         cameraResolution : "1800mp",
//         isNew : true,
//          storageCapacity: "500gb"
    
//     } ,
//      {
//         phonename : "Vivo",
//         osVersion : "Andriod 14",
//         cameraResolution : "1800mp",
//         isNew : true,
//          storageCapacity: "500gb"
    
//     }, 
//      {
//         phonename : "Oppo-Reno",
//         osVersion : "Andriod 14",
//         cameraResolution : "1800mp",
//         isNew : true,
//         storageCapacity: "500gb"
    
//     } , 
//      {
//         phonename : "OnePlus",
//         osVersion : "Andriod 14",
//         cameraResolution : "1800mp",
//         isNew : true,
//         storageCapacity: "500gb"
    
//     }  

// ];

// phones[0] ["ramSize"] = "40gb";

// phones[0].phoneColor = "red";

// phones[1]["phoneColor"] = "purple";
// phones[1] ["ramSize"] =  "50gb";

// phones[2]["phoneColor"] = "teal";
// phones[2] ["ramSize"] =  "60gb";

// phones[3]["phoneColor"] = "Pink";
// phones[3] ["ramSize"] = "70gb";

// phones[4]["phoneColor"] = "Green";
// phones[4] ["ramSize"] = "80gb";

// phones[5]["phoneColor"] = "aqua";
// phones[5]["ramSize"] = "90gb";

// phones[6]["phoneColor"] = "Coral";
// phones[6] ["ramSize"] = "100gb";

// phones[7]["phoneColor"] = "ox-blood";
// phones[7] ["ramSize"] = "120gb";

// phones[8]["phoneColor"] = "Nude";
// phones[8] ["ramSize"] = "180gb";

// phones[9]["phoneColor"] = "black";
// phones[9] ["ramSize"] = "200gb";

// console.log(phones);


// function by declaration and function without parameters
// function addNumbers() {
//     let num1 = 30;
//     let num2 = 50;
//     let sum = num1 + num2;
//     console.log(sum);
// }
// addNumbers();

//function by declaration and functions with parameters
// function sumNumbers(num1, num2){
// let sum = num1 + num2
// console.log(sum)
// }
// sumNumbers(40,90)
// sumNumbers(30,90)
// sumNumbers(3,4)
// sumNumbers(50,50)

//functions by expression without parameters
// const subtract =  function (){
//     let a = 30;
//     let b = 20;
//     let minus = a-b;
//     console.log(minus)
// }
// subtract();

//function by expression with parameters

// const subtractNumbers = function (a, b) {
//     let sum = a-b;
//     return sum;
// }
// console.log(subtractNumbers(40, 20))
// document.writeln(subtractNumbers(50,20))

//function hoisting: invoking a function before declaring it
// greetings("Marvelous");
// function greetings(name) {
//     console.log("Hello" + " " + name + ", " + " " + "how are you doing today?" )
// }

//function hoisting: using function by declaration and not function by expression invoking a function before declaring it using the return keyword
console.log(greet("Marvelous"));
alert(greet("Marvelous"));
function greet(name)  {
    return `Hello ${name}, how are you doing?`

}

console.log(addNumbers(10,20))
function addNumbers(num1, num2) {
    sum = num1 + num2;
    return `The sum of ${num1} and ${num2} is ${sum}`
}

