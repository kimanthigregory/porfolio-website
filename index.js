// alert("hello");
document.querySelector(".close").addEventListener("click",function() {
    document.querySelector(".side-bar").classList.toggle("side-bar-close");
    console.log(this.attr("class"))
});
document.querySelector(".menu-icon").addEventListener("click",function() {
    document.querySelector(".side-bar").classList.add("side-bar-close");
    console.log(this.attr("class"))
});
for (var i=0; i<document.querySelectorAll(".nav a").length; i++) {
    document.querySelectorAll(".nav a")[i].addEventListener("click",function (event) {
        event.preventDefault();
        var getSectionId = this.getAttribute("href");
        var sectionId = document.querySelectorAll("getSectionId");
        
        if (sectionId) {
            var ofsetTop = sectionId.getBoundingClientRect().top;
            window.scrollTo({
                top:ofsetTop + window.scrollY,
                behavior:"smooth"
            });
        }
    })
}