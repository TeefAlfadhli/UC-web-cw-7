/* ------------------------------------------ */
let grades = [90, 94, 65, 80, 39, 55, 83, 92, 39, 93, 43, 70, 57, 0]; //المصفوفة

let all_grades_div = document.getElementById("all-grades");
let random_grade_div = document.getElementById("random-grade");
/* لا تقم بتعديل الأسطر المكتوبة بالأعلى */


/*  الجزء الأول والثاني من التمرين */
grades.pop()
console.log(grades)

grades.push = 99;
console.log(grades)

grades.forEach((grades) => (all_grades_div.innerHTML += `${grades}`+ " "));

let randomIndex = Math.floor(Math.random()*grades.length);
// console.log(randomIndex)
grades.forEach((grades) => (random_grade_div.innerHTML += `${randomIndex}: ${grades[randomIndex]}`));





/* الجزء الثالث من التمرين */
//Change studentsCount,track property here

let course = {
  name: "UniCODE",
  track : "web",
  studentsCount : 40,
  location : "Kuwait University"
}





//Console log here
console.log(document.getElementById("MyDiv").innerText += "Hello my name is taif " +"i'm in "+ course.track+ " at "+course.name);




//Create student object here
let student = 
{
  Name:"Taif",
  university: "AUM"
}
