// Get the grades
const cs = document.getElementById("grade1");
const me = document.getElementById("grade2");
const fa = document.getElementById("grade3");
const man = document.getElementById("grade4");
const it = document.getElementById("grade5");
const acad = document.getElementById("grade6");
const ma = document.getElementById("grade7");
let allGrades = document.getElementsByClassName("grade");
// Get the GPA
const totalGPA = document.getElementById("GPA");
const totalDeg = document.getElementById("degree");
////////////////////////////////////////////////////////////////////

// Grades Map
const gradesmap = {
  "A+": 4,
  A: 3.75,
  "B+": 3.4,
  B: 3.1,
  "C+": 2.8,
  C: 2.5,
  "D+": 2.25,
  D: 2,
  F: 0,
};

// Drop down menu
let gradeMenu = document.querySelectorAll(".grade");
gradeMenu.forEach(function (ele) {
  ele.addEventListener("click", function (e) {
    e.stopPropagation();
    e.target.lastElementChild.classList.toggle("active-grade");
    e.target.firstElementChild.classList.toggle("rotate180");
  });
});

// Choose item form drop down menu
let activeGrade = document.getElementsByClassName("active-grade");

// Calculate Grades function
function gpaCalc() {
  let totalPoints = 0;
  for (let i = 0; i > allGrades.length; i++) {
    console.log(allGrades[i]);
  }

  let myGpa = (4 * 3 + 4 * 3 + 4 * 3 + 4 * 3 + 4 * 3 + 4 * 3 + 4 * 3) / 21;
  return myGpa.toFixed(2);
}

// Degree Calculate function
function degreeCalc() {
  if (gpaCalc() === (4).toFixed(2)) {
    let myDegree = "A+";
    return myDegree;
  } else if (gpaCalc() >= 3.75) {
    let myDegree = "A";
    return myDegree;
  } else if (gpaCalc() >= 3.4) {
    let myDegree = "B+";
    return myDegree;
  } else if (gpaCalc() >= 3.1) {
    let myDegree = "B";
    return myDegree;
  } else if (gpaCalc() >= 2.8) {
    let myDegree = "C+";
    return myDegree;
  } else if (gpaCalc() >= 2.5) {
    let myDegree = "C";
    return myDegree;
  } else if (gpaCalc() >= 2.25) {
    let myDegree = "D+";
    return myDegree;
  } else if (gpaCalc() >= 2) {
    let myDegree = "D";
    return myDegree;
  } else {
    totalDeg.style.color = "red";
    totalGPA.style.color = "red";
    let myDegree = "F";
    return myDegree;
  }
}

totalGPA.innerText = gpaCalc();
totalDeg.innerText = degreeCalc();
