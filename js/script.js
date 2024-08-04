//  const name = prompt(`What is your name?`)
//  alert(`Welcome ${name}!!! I hope you are having a wonderful day!`)
function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

// document.title = "Title";

// document.body.innerHTML = "<h1>Hello, world</h1>";
// const treeHouse = document.querySelector("h5");
// body.addEventListener("click", () => {
//   treeHouse.insertAdjacentElement("afterbegin", `<h5>This is cool</h5>`);

// if (treeHouse.document === "front-end-web-dev") {
//   body.innerHTML = `<img src="img/css-3.svg">`;
// } else {
//   body.innerHTML = `none`;
// }
// });
// body.removeEventListener("mouseout");

// let frontEnd = document.getElementById("front-end-web-dev");

// frontEnd.addEventListener("mouseover", () => {
//   frontEnd = `<h1>Hello</h1>`;
// });

// document.getElementById(
//   "front-end-web-dev"
// ).innerHTML = `<img height="20px" width="20px" src="img/css-3.svg">`;

// const treeHouse = document.querySelector("h2"); //This will remove the content from the HTML.
// body.addEventListener("mouseover", () => {
//   treeHouse.remove();
// });
// *** Show hide Function ****
// function showhide() {
//   var div = document.getElementById("about-me");
//   if (div.style.display !== "block") {
//     div.style.display = "block";
//   } else {
//     div.style.display = "none";
//   }
// }

// function showhideTwo() {
//   var div = document.getElementById("projects-hide");
//   if (div.style.display !== "block") {
//     div.style.display = "block";
//   } else {
//     div.style.display = "none";
//   }
// }

// const canvas = document.getElementById("cw");
// const context = canvas.getContext("2d");
// context.globalAlpha = 0.5;

// const cursor = {
//   x: innerWidth / 2,
//   y: innerHeight / 2,
// };

// let particlesArray = [];

// generateParticles(101);
// setSize();
// anim();

// addEventListener("mousemove", (e) => {
//   cursor.x = e.clientX;
//   cursor.y = e.clientY;
// });

// addEventListener(
//   "touchmove",
//   (e) => {
//     e.preventDefault();
//     cursor.x = e.touches[0].clientX;
//     cursor.y = e.touches[0].clientY;
//   },
//   { passive: false }
// );

// addEventListener("resize", () => setSize());

// function generateParticles(amount) {
//   for (let i = 0; i < amount; i++) {
//     particlesArray[i] = new Particle(
//       innerWidth / 2,
//       innerHeight / 2,
//       4,
//       generateColor(),
//       0.02
//     );
//   }
// }

// function generateColor() {
//   let hexSet = "0123456789ABCDEF";
//   let finalHexString = "#";
//   for (let i = 0; i < 6; i++) {
//     finalHexString += hexSet[Math.ceil(Math.random() * 15)];
//   }
//   return finalHexString;
// }

// function setSize() {
//   canvas.height = innerHeight;
//   canvas.width = innerWidth;
// }

// function Particle(x, y, particleTrailWidth, strokeColor, rotateSpeed) {
//   this.x = x;
//   this.y = y;
//   this.particleTrailWidth = particleTrailWidth;
//   this.strokeColor = strokeColor;
//   this.theta = Math.random() * Math.PI * 2;
//   this.rotateSpeed = rotateSpeed;
//   this.t = Math.random() * 150;

//   this.rotate = () => {
//     const ls = {
//       x: this.x,
//       y: this.y,
//     };
//     this.theta += this.rotateSpeed;
//     this.x = cursor.x + Math.cos(this.theta) * this.t;
//     this.y = cursor.y + Math.sin(this.theta) * this.t;
//     context.beginPath();
//     context.lineWidth = this.particleTrailWidth;
//     context.strokeStyle = this.strokeColor;
//     context.moveTo(ls.x, ls.y);
//     context.lineTo(this.x, this.y);
//     context.stroke();
//   };
// }

// function anim() {
//   requestAnimationFrame(anim);

//   context.fillStyle = "rgb(0 0 0 / 5%)";
//   context.fillRect(0, 0, canvas.width, canvas.height);

//   particlesArray.forEach((particle) => particle.rotate());
// }

/***** EVENT LISTENER ******/

// document.body.addEventListener("click", () => {
//   console.log("You clicked the boyd of the page");
//   body.innerHTML = `<h2> Hello World<h2>`;
// });

// const navigation = document.getElementById("navigation");

// navigation.addEventListener("click", () => {
//   navigation.style.border = "solid 2px red";
// });

// const borderChangeGreen = document.getElementsByTagName(`h5`);
// borderChangeGreen.style.color = "green";

// const borderChange = document.getElementsByClassName(`.links`);

// for (let i = 0; i < borderChange.length; i++) {
//   borderChange.style.color = "yellow";
// }

// const btnUpdate = document.querySelector("#btn-main");

// btnUpdate.addEventListener("click", () => {
//   const headline = document.getElementById("title");
//   const input = document.getElementById("main");
//   // document.body.textContent = `${input.value}`;
//   input.value = "";
// });

/*********  Hide and show the about me section */

// const button = document.getElementById("picture");
// const changeText = document.getElementById("mainLabel");
// button.addEventListener("click", () => {
//   const about = document.getElementById("about-me");
//   if (about.style.display === "block") {
//     about.style.display = "none";
//     changeText.textContent = "The about me section is hiden";
//   } else {
//     about.style.display = "block";
//     changeText.textContent = "The about me section is showing";
// }})

/**** Creating new items in the DOM  append and prepend  */
// const btnCreate = document.getElementById("btn-main");

// btnCreate.addEventListener("click", () => {
//   const input = document.getElementById("main");
//   const newItem = document.createElement("a");
//   const naviG = document.getElementById("navigation");
//   newItem.textContent = input.value;
//   naviG.append(newItem);
//   input.value = "";
// });

/**** Insert HTML at Specified Positions with insertAdjacentHTML() */
// const btnCreate = document.getElementById("btn-main");

// btnCreate.addEventListener("click", () => {
//   const input = document.getElementById("main");
//   const naviG = document.getElementById("navigation");
//   naviG.insertAdjacentHTML("beforebegin", `<p>${input.value}</p>`);

//   input.value = "";
// });

// ***** Remove Nodes from The DOM *****////

// const btnRemove = document.getElementById("navigation");

// btnRemove.addEventListener("mouseover", () => {
//   const navG = document.querySelector("a:last-child");
//   navG.remove();
// });

/***** Call back functions  */
// function executeCallback(callback) {
//   callback();
// }

// executeCallback(() => console.log(`Goodbye`));

// setTimeout(() => {
//   document.getElementById("title").textContent = "Suprice!!!";
// }, 3000);

// // setInterval(setTimeout, 3000);

// function makeGreen(element) {
//   element.style.backgroundColor = green;
// }

// addStyleToElement(div3, makeGreen);

const inputFiled = document.getElementById("main");
const buttonAdd = document.getElementById("btn-main");

inputFiled.addEventListener("click", (event) => {
  event.target.className = "border";
});
