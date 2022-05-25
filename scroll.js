window.addEventListener("scroll", function() {
    var header = document.querySelector("header");
    header.classList.toggle("abajo", this.window.scrollY>400);
})