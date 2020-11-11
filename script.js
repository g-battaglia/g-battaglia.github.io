var toglemenu = document.querySelector(".togle-menu")
var sidebar = document.querySelector(".side-bar")
var mainheader = document.querySelector(".main-header")

toglemenu.addEventListener("click", function() {
    sidebar.classList.toggle("hide");
    mainheader.classList.toggle("color")

})