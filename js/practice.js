//const, let--------------------------------------------------
const a = 5; //절대 바뀌지 않을 변수
const b = 2; //절대 바뀌지 않을 변수
let myName = "yoon"; //바뀔 수도 있는 변수

console.log(a + b);
console.log(a * b);
console.log(a / b);
console.log("hello " + myName);

myName = "jiyoon"; //업데이트 될 변수

console.log("your new name is " + myName);


//null, undefined-----------------------------------------
const amIFat = null;
let something; 
console.log(amIFat); //null의미는 amIFat에 아무것도 없다라는 뜻
console.log(something); //undefined

//null
//없다.
//절대 자연적으로 발생하지 않는다
//변수안에 어떤 것이 없다는 것을 확실히 하기 위해 씀

//undefined
//비어 있음.
//어떤 변수가 메모리에 있는데, 값이 없음

console.clear();

//arrays--------------------------------------------------------
const daysOfWeek = ["mon", "tue", "wed", "thu", "fri", "sat"];

// Get Item from Array
console.log(daysOfWeek);

//Add one more day to the array
daysOfWeek.push("sun"); // 배열안에 추가 하고싶을때 push

console.log(daysOfWeek)

console.clear();

//object-------------------------------------------
const player = {
  name: "yoon",
  points: 10,
  fat: true,
};

console.log(player);

player.fat = false; //object 수정
player.lastName = "potato" //object 추가
player.points = player.points + 15; //points 10에 15를 추가
console.log(player.points);

console.clear();

//function -----------------------------------------
function sayHello(nameOfPerson, age){
  console.log("Hello my name is " + nameOfPerson + " and i'm " + age);
}

sayHello("yoon", 10);
sayHello("dal", 23);
sayHello("pizza", 21);

console.clear();

//계산기
function plus(a, b){
  console.log(a + b); //NaN(Not a Number)
}

function divide(a, b){
  console.log(a / b);
}
//a, b는 function 안에서만 존재

plus(8, 60);
divide(98, 20);



const user = {
  name: "yoon",
  sayHello: function(otherPersonName){
    console.log("Hello! " + otherPersonName + " nice to meet you");
  }
};

console.log(user.name);
user.sayHello("pizza");


console.clear();

//-----------------------------------------------------
const calculator = {
  plus: function(a, b){
    console.log(a + b);
  },
  minus: function(a, b){
    console.log(a - b);
  },
  times: function(a, b){
    console.log(a * b);
  },
  divide: function(a, b){
    console.log(a / b);
  },
  powerOf: function(a, b){
    console.log(a ** b);
  }
};

calculator.plus(2, 3);
calculator.minus(2, 3);
calculator.times(2, 3);
calculator.divide(2, 3);
calculator.powerOf(2, 3);


console.clear();
//------------------------------------------------
const age = 96;
function calculateKrAge(ageOfForeigner){
  return ageOfForeigner + 2; 
};
//function 안에 무언가를 return하면 
//누군가 function 을 실행 할 때, 
//calculaterKrAge(age)를 ageOfForeigner + 2의 결과로 대체할 것
const krAge = calculateKrAge(age);

console.log(krAge);

//즉
const age = 96;
function calculateKrAge(ageOfForeigner){
  return ageOfForeigner + 2; 
};

const krAge = calculateKrAge(age);

console.log(krAge);
// //1. calculateKrAge(age)를 실행시키면, 
// //2. const age = 96에서 96이라는 argument가 age로 대체
// //3. calculaterKrAge(96)
// //4. 그리고 그 96이 calculateKrAge(ageOfForeigner)의 ageOfForeigner자리로 감
// //5. calculateKrAge(96)
// //6. 96 + 2;은 98이 됨
// //7. return함으로써, function을 호출하는 코드는 98이 됨 const krAge = 98;
// //8. console.log(krAge);//98


//조건문---------------------------------------------------
//parseInt는 string -> number로 바꿔줌

const age = parseInt(prompt("How old are you?"));

//무언가가 NaN인지를 판별하는 방법
//그걸 위해서 isNaN이라는 function을 사용
//이 function은 boolean으로 결과값을 알려줌 
//입력값이 숫자가 아니면 true, 숫자면 false출력
//즉, "lalala"를 숫자형으로 바꾸고자 했을때 NaN이란 값이 나오는데 이는, 숫자가 아니다. 라는 의미.

if (isNaN(age)) {
console.log("Please write a number");
/// condition === true 조건이 참이면 이 코드가 실행되고
} else {
console.log("Thank u for writing a number.");
// condition === false 조건이 거짓이면 이 코드가 실행
}

// // 그럼 condition 즉, 조건엔 무엇이 들어가야 하는가? 
// //boolean으로 판별가능한 것이 들어가야 한다!


if (isNaN(age)) {
  console.log("Please write a number");
  } else if (age < 18) {
    console.log("You are too young.");
  } else {
    console.log("You can drink"); //실행되기 위해서는 위에 두가지의 조건이 모두 false여야 함
  }


//&&----------------------------------------------------------

//&&(AND)의 역할은 JS에게 왼쪽 조건과 오른쪽 조건이 모두 true여야 하는 것이라고 알려줌
//둘중 하나라도 false면 그 두개의 조건 모두 false
//true && false === false
//false && true === fasle
//false && false === false
//true && true ===  true

//||(OR)은 둘 중 하나만 true인지 확인
//둘 중 하나라도 true이면 결과는 true, 둘 모두 false라면 false
//true || false === true
//false || true === true
//false || false === false
//true || true === true

if (isNaN(age) || age < 0) {  //숫자가 아니거나 || 0보다 작을때(음수)
  console.log("Please write a real positive number");
  } else if (age < 18) { 
    console.log("You are too young");
  } else if (age >= 18 && age <= 50) { //18보다 크거나 작고 && 50보다 작거나 같다
    console.log("You can drink");
  } else if (age > 50 && age <= 80) { //50보다 크고 && 80보다 작거나 같다
    console.log("You should exercise");
  } else if (age === 100) {
    console.log("Wow you are wise");
  } else if(age > 80) {
    console.log("You can do whatever you want.");
  }



//Events


//querySelector, addEventListener-----------------------------------
//querySelector는 element를 css방식으로 검색할 수 있음 

const title = document.querySelector(".hello h1");


console.dir(title)

function handleTitleClick() {
  title.style.color = "blue";
}

function handleMouseEnter(){ //mouse 올렸을때
  title.innerText = "Mouse is here"
}

function handleMouseLeave(){ //mouse 떠났을때
  title.innerText = "Mouse is gone"
}

title.addEventListener("click", handleTitleClick);
title.addEventListener("mouseenter", handleMouseEnter); //mouse 올렸을때
title.addEventListener("mouseleave", handleMouseLeave); //mouse 떠났을때


//onclick, onmouseleave, onmouseenter----------------------------------------

//title.addEventListener("click", handleTitleClick);
title.onclick = handleTitleClick; //위와 같은 뜻

//title.addEventListener("mouseenter", handleMouseEnter);
title.onmouseenter = handleMouseEnter;

title.addEventListener("mouseleave", handleMouseLeave);
//title.onmouseleave = handleMouseLeave;


//resize, copy, offline, online -----------------------------------------------
//window영역에서 가능

function handleWindowResize(){
  document.body.style.backgroundColor = "tomato";
}

function handleWindowCopy(){
  alert("copier!")
}

function handleWindowOffline(){
  alert("SOS no WIFI");
}

function handleWindowOnline(){
  alert("ALL GOOOD");
}


window.addEventListener("resize", handleWindowResize); //window사이즈 조정했을때
window.addEventListener("copy", handleWindowCopy); //ctrl + c
window.addEventListener("offline", handleWindowOffline); //wifi연결 끊어졋을때
window.addEventListener("online", handleWindowOnline); //wifi연결 됫을때

//------------------------------
const h1 = document.querySelector(".hello h1");

function handleTitleClick() {
  const currentColor = h1.style.color;
  let newColor;
  if (currentColor === "blue") {
    newColor = "tomato";
  } else {
    newColor = "blue"
  }
  h1.style.color = newColor;
}

h1.addEventListener("click", handleTitleClick);

//h1 클릭, className active------------------------
const h1 = document.querySelector(".hello h1");

function handleTitleClick() {
  if(h1.className === "active") {
    h1.className = "";
  } else {
    h1.className = "active";
  }
}
h1.addEventListener("click", handleTitleClick);

//같은 내용, 같은 결과 도출
const h1 = document.querySelector(".hello h1");

function handleTitleClick() {
  const clickedClass = "clicked"
  if(h1.classList.contains(clickedClass)) {
    h1.classList.remove(clickedClass);
  } else {
    h1.classList.add(clickedClass);
  }
}

h1.addEventListener("click", handleTitleClick);

//toggle
const h1 = document.querySelector(".hello h1");

function handleTitleClick() {
  h1.classList.toggle("clicked");
}

h1.addEventListener("click", handleTitleClick);