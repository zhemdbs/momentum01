# momentum01


# # Login
- **preventDefault**
```js
const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");

function onLoginSubmit(event) {
  event.preventDefault(); //어떤 event의 기본 행동이 발생되지 않도록 막아줌
  console.log(event);
}

loginForm.addEventListener("submit", onLoginSubmit);
//addEventListner안에 있는 함수는 직접 실행하지 않음(브라우저가 함)
```

- **classList.add, classList.remove**
```js
const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden"; 
//본인이 생성한 string을 반복해서 사용하게 될 경우, 
//반복되는 string들을 대문자 변수로 저장해 놓는 것이 좋음(실수X, string기억 상기)

function onLoginSubmit(event) {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME); //classname 추가
  const username = loginInput.value;
  greeting.innerText = `hello ${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAME); //classname 삭제
}

loginForm.addEventListener("submit", onLoginSubmit);
```

- **localStorage**
<br>브라우저 상의 DB
```
localStorage.setItem(key, value); //local storage에 정보를 저장
localStorage.getItem(key) //저장한 값 불러오기
localStorage.removeItem(key) //저장된 값 지우기
```

- *Login code 내용*
1. savedUsername에 유저정보가 있다면, paintGreetings에서 유저정보를 받아 argument로 넣어줌
2. savedUsername에 유저정보가 없다면, loginForm의 submit(onLoginSubmit)을 기다리고
3. onLoginSubmit되면 loginInput.value(input)으로부터 username(유저정보)를 받고, 
4. paintGreetings(username)을 호출
```js
function onLoginSubmit(event) {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  paintGreetings(username);
}

function paintGreetings(username) {
  greeting.innerText = `hello ${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername == null) {
  //show the form
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  //show the greetings
  paintGreetings(savedUsername);
}
```
<br/>

____________
# # Clock
- **setInterval**
<br>1. 기본 동작이 반복적으로 일어남
<br>2. '매번' 일어나야 하는 무언가
```js
const clock = document.querySelector("h2#clock");

function sayHello() {
  console.log("hello");
}

setInterval(sayHello, 5000);
// setInterval(function, time) 
//처음에는 아무것도 없다가 5초 뒤에 console에 hello가 뜸
```

- **setTimeout**
<br>기본 동작이 한번 일어남
```js
const clock = document.querySelector("h2#clock");

function sayHello() {
  console.log("hello");
}

setTimeout(sayHello, 5000);
// setTimeout(function, time)

```
|-----|설명|종료 방법|
|:---------:|:--------:|:--------:|
|setInterval|기본 동작이 반복적으로 일어남|clearInterval();|
|setTimeout|기본 동작이 한번 일어남|clearTimeout();|

<br/>

```js
const clock = document.querySelector("h2#clock");

function getClock() {
  const date = new Date();
  clock.innerText = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
}

getClock();
setInterval(getClock, 1000);
```


- **Date**
<br>날짜나 시간을 얻는 함수
```
Date.getDate();
Date.getDay();
Date.getFullYear();
Date.getHours();
Date.getTime();
⋯⋯
```

- **padStart**
<br>- 현재 문자열의 시작을 다른 문자열로 채워, 주어진 길이를 만족하는 새로운 문자열을 반환
<br>- 채워넣기는 대상 문자열의 좌측부터 적용
```js
//예를 들어, 1이라는 숫자를 01로 하고 싶을때
//"1".padStart(2, "0"); -> "01"

//padStart(원하는길이, "현재 문자열에 채워넣을 다른 문자열");

//만약, 뒷부분""에 문자열이 너무 길어 목표 문자열 길이를 초과한다면 좌측 일부를 잘라서 넣음


//예시
'abc'.padStart(10, "foo");  // "foofoofabc"
'abc'.padStart(6,"123465"); // "123abc"
'abc'.padStart(8, "0");     // "00000abc"
```
- **padEnd**
<br>- 뒤쪽에 문자를 추가
```
//예시
'abc'.padEnd(10, "foo");   // "abcfoofoof"
'abc'.padEnd(6, "123456"); // "abc123"
```

- *clock code 내용*
1. getClock이란 함수를 만들어, 그 안에 date 객체를 생성하여
2. date를 호출하는 당시의 현재 날짜, 시간을 알려주게 함
3. getHours, getMinutes, getSeconds를 통해 시,분,초를 얻어오되,
4. number타입으로 얻어온 걸 string으로 바꾸고
5. 1~9까지는 예를들어 10:15:1로 호출되니 padStart를 통해 두자리수일때 앞에 0이 오게 함
```js
const clock = document.querySelector("h2#clock");

function getClock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");

  clock.innerText = `${hours}:${minutes}:${seconds}`;
}

getClock();
setInterval(getClock, 1000);
```

<br/>

____________
# # Quotes and Background
- **Math.module**
```
- Math.random() : 0 ~ 1사이의 랜덤한 숫자
- Math.round() : 입력값을 반올림한 수와 가장 가까운 정수 값을 반환
- Math.ceil() : 주어진 숫자보다 크거나 같은 숫자 중 가장 작은 숫자를 integer로 반환
//예로 들어
Math.ceil(1.0) -> 1을 반환
Math.ceil(1.01) -> 2

- Math.floor() : 주어진 숫자와 같거나 작은 정수 중에서 가장 큰 수를 반환
//예로 들어
Math.floor(1.9) -> 1
Math.floor(1.999999) -> 1
```
```js
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)]; 
//Math.floor(Math.random() * quotes.length)은 전부 number로 되며,
//객체가 랜덤으로 나옴
```
- ***HTML 요소 추가***
- **Document.createElement()**
<br>JS에서 tagName의 HTML요소를 만들어 반환
```
.createElement('h1')은
HTML에 
<h1></h1>을 생성
```

- **.appendChild()**
<br>선택한 요소 안에 자식요소를 추가
```js
const chosenImage = images[Math.floor(Math.random() * images.length)];
//img를 랜덤으로 보여줌

const bgImage = document.createElement("img"); //img라는 코드를 생성

bgImage.src = `img/${chosenImage}`; //이미지를 선택하고 src로 img폴더 뒤에 추가
//<img src="img/01.jpg">랑 같음

document.body.appendChild(bgImage); //bgImage를 body 내부에 추가
//append는 가장 뒤에 오고, 반대로 prepend는 가장 위에 오게 함
```

<br/>

____________
# # To do list
```js
const toDoForm = document.querySelector("#todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.querySelector("#todo-list");

function paintToDo(newTodo) {
  
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value;//input value를 비우기 전에 그 값 저장
  toDoInput.value = ""; //value를 작성하고 enter을 하면 입력한 것이 비워짐
  paintToDo(newTodo); //그 입력값을 paintToDo에 넣어서 호출

  //toDoInput.value가 지워진다 해서 newTodo가 지워지는것이 아님
  //input의 value를 새로운 변수 newTodo에 복사하는 것
  //toDoInput.value에 무엇을 하던 newTodo에는 아무런 영향이 없음
}

toDoForm.addEventListener("submit", handleToDoSubmit);
```

<br/>

____________
# # Weather