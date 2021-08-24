const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const editBtn = document.querySelector(".fa-edit")

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";


//submit 누르면 해당 값을 출력하고 저장
function onLoginSubmit(ev) {
  ev.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  paintGreetings(username);
}

//greeting show or none
function toDisplay(element, boolean) {
  if (boolean) {
    element.style.display = "block";
  } else {
    element.style.display = "none";
  }
}

function editName(ev) {
  ev.preventDefault();

  // localstorage로부터 현재 유저 삭제
  localStorage.removeItem(USERNAME_KEY);

  // Reload the loadname function
  loadName();
}

function paintGreetings(username) {
  greeting.innerText = `Hello! ${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
  toDisplay(editBtn, true)

  editBtn.addEventListener('click', editName);
}

function loadName() {
  const savedUsername = localStorage.getItem(USERNAME_KEY);

  if(savedUsername == null) {
    //show the form
    toDisplay(editBtn, false)
    greeting.innerText = '';
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
  } else {
    //show the greetings
    paintGreetings(savedUsername);
  }
}

loadName();
