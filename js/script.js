let bars = document.querySelector(".fa-bars");
let myul = document.querySelector(".mylist");
bars.addEventListener("click", function () {
  myul.classList.contains("mobile")
    ? myul.classList.remove("mobile")
    : myul.classList.add("mobile");
});
