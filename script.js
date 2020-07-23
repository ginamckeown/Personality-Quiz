//Global Variables
//This is where you will define the variables you will be using in your project.
//#TODO: Create four variables to track each possible quiz outcome
var questionCount = 0;

var youngScore = 0;
var youngAdultScore = 0;
var midAgedScore = 0;
var oldScore = 0;

var result = document.getElementById("result");


//#TODO: Use the DOM to create variables for the first quiz question.
// variables for answer choice buttons for question 1
var oatmeal = document.getElementById("oatmeal");
var eggs = document.getElementById("eggs");
var pancakes = document.getElementById("pancakes");
var fridge = document.getElementById("fridge");

// variables for answer choice buttons for question 2
var tokyo = document.getElementById("tokyo");
var paris = document.getElementById("paris");
var la = document.getElementById("la");
var miami = document.getElementById("miami");

// variables for answer choice buttons for question 1
var simple = document.getElementById("simple");
var traditional = document.getElementById("traditional");
var playful = document.getElementById("playful");
var modern = document.getElementById("modern");



//#TODO: Add Event Listeners to your answer choice variables.
oatmeal.addEventListener("click", old);
eggs.addEventListener("click", youngAdult);
pancakes.addEventListener("click", young);
fridge.addEventListener("click", midAged);

tokyo.addEventListener("click", midAged);
paris.addEventListener("click", young);
la.addEventListener("click", youngAdult);
miami.addEventListener("click", old);

simple.addEventListener("click", midAged);
traditional.addEventListener("click", old);
playful.addEventListener("click", young);
modern.addEventListener("click", youngAdult);


//#TODO: Define quiz functions here
function young(){
  youngScore+=1;
  questionCount+=1;
  if (questionCount >= 3){
      updateResult();
  }
}

function youngAdult() {
  youngAdultScore+=1;
  questionCount+=1;
  if (questionCount >= 3){
      updateResult();
  }
}

function midAged() {
  midAgedScore+=1;
  questionCount+=1;
  if (questionCount >= 3){
      updateResult();
  }
}

function old() {
  oldScore+=1;
  questionCount+=1;
  if (questionCount >= 3){
      updateResult();
  }
}

// assesing results
function updateResult(){
 if (youngScore >= 2){
    result.innerHTML = "You are between the ages of 0-16!";
 }
 else if(youngAdultScore >=2){
    result.innerHTML = "You are between the ages of 16-25!";
 }
 else if(midAgedScore >=2){
    result.innerHTML = "You are between the ages of 25-50";
 }
 else if (oldScore>= 2){
    result.innerHTML = "You are 50+";
 }
 else{
    result.innerHTML = "You are a good mix!!";
 }
}