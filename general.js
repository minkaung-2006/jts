// window.addEventListener("scroll", function () {
//   let header = this.document.querySelector("header");
//   header.classList.toggle("sticky", this.window.scrollY > 0);
// });

window.addEventListener("scroll", function () {
  const header = document.querySelector("nav");
  header.classList.toggle("sticky", window.scrollY > 0);
});

// s

function scrollFunction() {
  if (
    document.body.scrollTop > 300 ||
    document.documentElement.scrollTop > 300
  ) {
    document.getElementById("shrink").style.fontSize = "0px";
    // document.getElementById("nav").style.borderBottom = "1px solid #a0a0a099";
    // document.getElementById("nav").style.backgroundColor =
    //   "rgba(255, 255, 255, 0.426)";
  } else {
    document.getElementById("shrink").style.fontSize = "70px";
    // document.getElementById("nav").style.borderBottom = "0px solid #a0a0a099";
  }
}

// const body = document.querySelector("body"),
//   navbar = body.querySelector("nav"),
//   card = body.querySelector(".card"),
//   cardheader = body.querySelector(".cardheader"),
//   modeSwitch = body.querySelector("#flexSwitchCheckDefault");

// function modeSwitch() {
//   if (onclick) {
//     body.style.backgroundColor = "#18191A";
//     card.style.backgroundColor = "#18191A";
//   }
// }

// const cities = document.querySelector("#cities");
// const transport = document.querySelector("#transport");
// const plan = document.querySelector("#plan");
// const poeple = document.querySelector("#poeple");
// const book = document.querySelector("#book");
// const ticket = document.querySelector("#ticket");

// calc.addEventListener("submit", function (event) {
//   event.preventDefault();

//   //area = width * breadth
//   const result = cities.innerText + transport.innerText + plan.innerText + poeple;
//   ticket.innerText = result;
// });

// clear.addEventListener("click", function () {
//   result.innerText = null;
//   // width.value = breadth.value = null
//   calc.reset();
// });

// store.addEventListener("click", function () {
//   const tr = document.createElement("tr");
//   tr.innerHTML = `
//         <td>${cities.innerText}</td>
//         <td>${transport.innerText}</td>
//         <td>${plan.innerText}</td>
//         <td>${poeple.valueAsNumber}</td>
//     `;
//   lists.append(tr);

//   result.innerText = null;
//   // width.value = breadth.value = null
//   calc.reset();
// });
