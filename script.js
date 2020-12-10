var togleMenu = document.querySelector(".togle-menu")
var sideBar = document.querySelector(".side-bar")
var mainHeader = document.querySelector(".main-header")

togleMenu.addEventListener("click", function() {
    sideBar.classList.toggle("hide");
    mainHeader.classList.toggle("color")

})