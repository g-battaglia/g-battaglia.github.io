var toglemenu = document.querySelector(".togle-menu")
var sidebar = document.querySelector(".side-bar")

toglemenu.addEventListener("click", function() {
    sidebar.classList.toggle("open")
})