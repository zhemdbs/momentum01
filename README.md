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