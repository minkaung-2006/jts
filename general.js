// window.addEventListener("scroll", function () {
//   let header = this.document.querySelector("header");
//   header.classList.toggle("sticky", this.window.scrollY > 0);
// });

window.addEventListener("scroll", function () {
  const header = document.querySelector("nav");
  header.classList.toggle("sticky", window.scrollY > 0);
});

window.onscroll = function () {
  scrollFunction();
};

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
