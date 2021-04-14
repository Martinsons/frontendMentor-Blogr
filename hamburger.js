const btn = document.querySelector("#btn");
const navbar = document.querySelector(".navbar");
const active = document.querySelector(".active");

btn.addEventListener("click", function () {
	if(navbar.style.display === "none"){
    navbar.style.display = "block";
    console.log("Hello")
  } else {
    navbar.style.display = "none";
  }
});
