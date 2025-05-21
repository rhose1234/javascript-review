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

// Arrays
const items = ["Marvelous", 7, 8, 9, {firstName : "Rose"}, 10, [2, 3, 4, 5], null, undefined]
console.log(items)
console.log(items[0])
console.log(items[6][2])

