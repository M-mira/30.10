//1
// function arrSquare(arr){
//     let result = [];
//     for (let num of arr){
//         result.push(num ** 2);
//     }
//     return result;
// }
// let numbers = [5, 1, 2, 7, 9];
// arrSquare(numbers);


//2 
//  let arr = [6, 4, 8, 15, 5, 13];
//  let evenArr = arr.filter(n => n % 5 == 0);
//  console.log(evenArr)

//3 
// let user = {
//     name: "Anna",
//     age: 56,
//     isAdmin: True
// }
// console.log(user.name);
// console.log(user.isAdmin ? "Администратор" : "Не администратор");

//4 
// function sumArray(arr){
//     let sum = 0;
//     for(let num of arr){
//     sum += num;
//     }
//     return sum;
// }
// console.log("Сумма:" + sumArray([5, 7, 9, 13]));


//5 
// function lengths(arr){
//     return arr.map(str => str.length);
// }
// console.log(lengths(["строка", "hello"]));

//6
// function toUpperCase(arr){
//     return arr.map(str => str.toUpperCase());
// }
// console.log(toUpperCase(["строка", "hello"]));

//7 
//  let arr = [6, 4, 8, 15, 5, 13];
//  let evenArr = arr.filter(n => n > 10);
//  console.log(evenArr)

//8 
// function checkAge(age){
//     return (age >= 18) ? "Больше 18" : "Меньше 18";
// }
// console.log(checkAge(19));

//9 
// let students = [
//     {
//         name: "Михаил",
//         grade: 85
//     }, 
//     {
//         name: "Анна",
//         grade: 90
//     }, 
//     {
//         name: "Михаил",
//         grade: 72

//     }, 
//     {
//        name: "Ольга",
//        grade: 88
//     }
// ]

// students.forEach((student) => {
//     console.log(student.name + " - " + student.grade);
// })

// let sum = 0;
// for (let student of students){
//     sum += student.grade;
// }
// let sr = sum / students.length;
// console.log(sr);

// let maxGrade = students[0];
// for (let student of students){
//     if (student.grade > maxGrade.grade){
//         maxGrade = student
//     }
// }
// console.log("Максимальный балл у студента - " + maxGrade.name)
