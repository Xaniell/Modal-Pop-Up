let thesumbit = document.querySelector(".submit");
let nameInput = document.querySelector(".nameInput");
let nameSpan = document.querySelector(".nameSpan");
let theclose = document.querySelector(".close");

document.querySelector(".submit").addEventListener("click", function () {
  let thename = nameInput.value;
  nameSpan.innerText = thename;
  document.querySelector(".modalPop").style.display = "flex";
//   document.querySelector(".welcomeNote").style.display = "none";
  // alert("Welcome " + thename);
  nameInput.value = "";
});

theclose.addEventListener("click", function () {
  document.querySelector(".modalPop").style.display = "none";
  document.querySelector(".welcomeNote").style.display = "flex";
});

