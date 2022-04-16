console.log(123412)
const scrollButton = document.querySelector(".scrollButton");
const scrollContainer = document.querySelector(".container");

export function changeColor() {
  scrollButton.addEventListener("click", function (event) {
    scrollContainer.style.backgroundColor = "red";
  });
}
