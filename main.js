// Get the grades
let allGrades = document.getElementsByClassName("grade").innerText;
// Get the GPA
const totalGPA = document.getElementById("GPA");
const totalDeg = document.getElementById("degree");
////////////////////////////////////////////////////////////////////
// Grades Map
const gm = {
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
gradeMenu.forEach((e) => {});
gradeMenu.forEach(function (ele) {
  if (ele.firstElementChild.textContent === "Grade") {
    ele.firstElementChild.style = "color:#808080";
  }
  ele.addEventListener("click", function (e) {
    // e.stopPropagation();
    e.currentTarget.lastElementChild.classList.toggle("active-grade");
    e.currentTarget.children[1].classList.toggle("rotate180");
  });
});

// Choose item form drop down menu
document.addEventListener(
  "click",
  function (e) {
    if (e.target.matches(".active-grade li")) {
      document.querySelector(
        ".active-grade"
      ).parentElement.children[0].innerText = e.target.innerText;
      document.querySelector(".active-grade").parentElement.children[0].style =
        "color:black";
    }
  },
  { capture: true }
);

// Calculate Grades Function
document.addEventListener("click", function (e) {
  if (e.target.matches(".btn")) {
    let cs = document.getElementById("grade1").firstElementChild.textContent;
    let me = document.getElementById("grade2").firstElementChild.textContent;
    let fa = document.getElementById("grade3").firstElementChild.textContent;
    let man = document.getElementById("grade4").firstElementChild.textContent;
    let it = document.getElementById("grade5").firstElementChild.textContent;
    let acad = document.getElementById("grade6").firstElementChild.textContent;
    let ma = document.getElementById("grade7").firstElementChild.textContent;
    let myGpa =
      (gm[cs] * 3 +
        gm[me] * 3 +
        gm[fa] * 3 +
        gm[man] * 3 +
        gm[it] * 3 +
        gm[acad] * 3 +
        gm[ma] * 3) /
      21;
    totalGPA.innerText = myGpa.toFixed(2);
    function degreeCalc() {
      if (myGpa === 4) {
        let myDegree = "A+";
        totalDeg.style.color = "#00dc25";
        totalGPA.style.color = "#00dc25";
        return myDegree;
      } else if (myGpa >= 3.75) {
        let myDegree = "A";
        totalDeg.style.color = "#00dc25";
        totalGPA.style.color = "#00dc25";
        return myDegree;
      } else if (myGpa >= 3.4) {
        let myDegree = "B+";
        totalDeg.style.color = "#00dc25";
        totalGPA.style.color = "#00dc25";
        return myDegree;
      } else if (myGpa >= 3.1) {
        let myDegree = "B";
        totalDeg.style.color = "#00dc25";
        totalGPA.style.color = "#00dc25";
        return myDegree;
      } else if (myGpa >= 2.8) {
        let myDegree = "C+";
        totalDeg.style.color = "#00dc25";
        totalGPA.style.color = "#00dc25";
        return myDegree;
      } else if (myGpa >= 2.5) {
        let myDegree = "C";
        totalDeg.style.color = "#00dc25";
        totalGPA.style.color = "#00dc25";
        return myDegree;
      } else if (myGpa >= 2.25) {
        let myDegree = "D+";
        totalDeg.style.color = "#00dc25";
        totalGPA.style.color = "#00dc25";
        return myDegree;
      } else if (myGpa >= 2) {
        let myDegree = "D";
        totalDeg.style.color = "#00dc25";
        totalGPA.style.color = "#00dc25";
        return myDegree;
      } else {
        totalDeg.style.color = "red";
        totalGPA.style.color = "red";
        let myDegree = "F";
        return myDegree;
      }
    }
    totalDeg.innerText = degreeCalc();
  }
});

// Degree Calculate function

// totalGPA.innerText = gpaCalc();
// totalDeg.innerText = degreeCalc();
