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
//1. calculateKrAge(age)를 실행시키면, 
//2. const age = 96에서 96이라는 argument가 age로 대체
//3. calculaterKrAge(96)
//4. 그리고 그 96이 calculateKrAge(ageOfForeigner)의 ageOfForeigner자리로 감
//5. calculateKrAge(96)
//6. 96 + 2;은 98이 됨
//7. return함으로써, function을 호출하는 코드는 98이 됨 const krAge = 98;
//8. console.log(krAge);//98
