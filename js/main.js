import newUserObj from "./NewObjCreator.js";
import render from "./render.js";

let form = document.getElementById("form");
let userName = document.getElementById("name");
let userSurname = document.getElementById("surname");
let userGroup = document.getElementById("group");
let userGender = document.getElementById("gender");
let table = document.getElementById("tableBody");

let database = window.localStorage;
let info;

if (database.getItem("participiants")) {
  info = JSON.parse(database.getItem("participiants"));
} else {
  info = [];
}

form.addEventListener("submit", function (event) {
  event.preventDefault();

  if (userName.value.trim() === "" || userName.value.trim().length < 3) {
    alert(
      "If you really want to participate, then write your original name!!!"
    );
    return;
  } else if (
    userSurname.value.trim() === "" ||
    userSurname.value.trim().length < 4
  ) {
    alert(
      "If you really want to participate, then write your original surname!!!"
    );
    return;
  } else if (
    userGroup.value.trim() === "" ||
    userGroup.value.trim().length < 2
  ) {
    alert(
      "If you really want to participate, then write your original group or u will be banned forever!!!"
    );
    return;
  } else if (userGender.value.trim().length < 4) {
    alert("You must enter your gender!!!");
    return;
  }

  let newUser = new newUserObj(
    userName.value,
    userSurname.value,
    userGroup.value,
    userGender.value
  );

  info.push(newUser);
  database.setItem("participiants", JSON.stringify(info));

  render(table, info);
});

render(table, info);
