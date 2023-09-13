"use strict";

// function test(a, b, ...datas) {
//   datas.forEach((element) => {
//     console.log(element);
//   });
// }

// test(1, 2, 3, 4, 5);

// let name = "Fidan";

// let result = [...name];

// console.log(result);

// let ages1 = [1, 2, 3, 4, 5];

// let ages2 = [6, 7, 8];

// let result = [...ages1, ...ages2];
// console.log(result);

// function test(a, b, c) {
//   console.log(a + b + c);
// }

// let nums = [1, 2, 3, 4, 5];

// test(...nums);

//DOM

// let elems = document.getElementsByTagName("h1");
// let elems = document.getElementsByClassName("test");
// let elem = document.getElementById("head");
// let elem = document.querySelector("#head");
// let elems = document.querySelectorAll("h1");

// console.log(elems);

// console.log(span);
// let p = document.querySelector(".header p");
// console.log(p);
// let span = document.querySelector(".header .header-item span");

// let elems = document.querySelectorAll(".header p");

// console.log(span.innerHTML);
// console.log(span.innerText);

// span.innerText = "Azerbaycan";
// span.innerHTML = "Azerbaycan";
// console.log(span.innerText);

// let elem = document.getElementById("test");
// console.log(elem.innerText);

// console.log(elems);

// elems.forEach((element) => {
//   console.log(element);
// });

// for (const item of elems) {
//   console.log(item);
// }

// for (let i = 0; i < elems.length; i++) {
//   //   console.log(elems[i].innerText);
//   if (elems[i].innerText == "salam") {
//     // console.log("yes");
//     elems[i].style.backgroundColor = "green";
//   } else {
//     // console.log("no");
//     elems[i].style.backgroundColor = "red";
//   }
// }

// let h1 = document.querySelector("h1");

// h1.style.color = "magenta";
// h1.style.marginTop = "100px";

// let elems = document.querySelectorAll("h1");

// for (const elem of elems) {
//   elem.style.color = "magenta";
//   elem.style.marginTop = "100px";
// }

// elems[0].style.color = "magenta";

// let elem = document.getElementById("head");
// elem.innerHTML = "<a>salamlar</a>";
// elem.innerText = "<a>salamlar</a>";

// elem.className = "header-color mt-5";

// elem.classList.add("header-color");
// elem.classList.add("mx-5");

// elem.classList.remove("mt-5");

// let button = document.querySelector("button");
// console.log(button);

// console.log(button.classList.contains("btn"));

// if (button.classList.contains("btn-primary")) {
//   button.classList.remove("btn-primary");
//   button.classList.add("btn-success");
// } else {
//   button.classList.add("btn-warning");
// }

// let button = document.querySelector("button");

// button.onclick = function () {
// console.log("hello world1");

//   alert("hello world");
// };

// button.onclick = function () {
// console.log("hello world2");

//   alert("bye  bye");
// };

// button.addEventListener("click", function () {
//   console.log("hello world1");
//   //   alert("hello world");
// });

// button.addEventListener("click", function () {
//   console.log("hello world2");

//   // alert("bye bye");
// });

// button.addEventListener("click", function () {
//   console.log("hello world3");

//   // alert("vay vay");
// });

// let btnOn = document.querySelector(".buttons button:nth-child(1)");
// let btnOff = document.querySelector(".buttons button:nth-child(2)");

// let body = document.querySelector("body");

// btnOn.addEventListener("click", function () {
//   if (!body.classList.contains("body-on")) {
//     body.classList.add("body-on");
//     body.classList.remove("body-off");
//   }
// });

// btnOff.addEventListener("click", function () {
//   if (!body.classList.contains("body-off")) {
//     body.classList.add("body-off");
//     body.classList.remove("body-on");
//   }
// });

let body = document.querySelector("body");

let button = document.querySelector(".buttons button");

button.addEventListener("click", function () {
  if (body.classList.contains("body-off")) {
    body.classList.remove("body-off");
    this.innerText = "On";
  } else {
    body.classList.add("body-off");
    this.innerText = "Off";
  }
});
