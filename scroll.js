window.addEventListener("scroll", function() {
    var back = document.querySelector(".back");
    back.classList.toggle("active", this.window.scrollY>800);
    back.classList.toggle("active", this.window.scrollY >= 800);
})