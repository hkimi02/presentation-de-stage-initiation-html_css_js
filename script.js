var hov = document.querySelector("#hover_image");
var pho = document.querySelector("#photo");
hov.addEventListener("mouseover", show_photo);

function show_photo() {
    pho.classList.remove("no");
}
hov.addEventListener("mouseout", hide_photo);

function hide_photo() {
    pho.classList.add("no");
}
/************************************************************************* */
var hov1 = document.querySelector("#hover_image1");
var pho1 = document.querySelector("#photo1");
hov1.addEventListener("mouseover", show_photo1);

function show_photo1() {
    pho1.classList.remove("no1");
}
hov1.addEventListener("mouseout", hide_photo1);

function hide_photo1() {
    pho1.classList.add("no1");
}
/************************************************************************* */
var hov2 = document.querySelector("#hover_image2");
var pho2 = document.querySelector("#photo2");
hov2.addEventListener("mouseover", show_photo2);

function show_photo2() {
    pho2.classList.remove("no2");
}
hov2.addEventListener("mouseout", hide_photo2);

function hide_photo2() {
    pho2.classList.add("no2");
}

function see_moore() {
    document.write("<div><h1></h1></div>")
}
/********************************************************************** */
let buton1 = document.querySelector("#but1");
let hide_article = document.querySelector("#hidden_article1");
buton1.addEventListener("click", () => {
    hide_article.classList.remove("hide_now");
})
let exit1 = document.querySelector("#exit_logo");
exit1.addEventListener("click", () => {
        hide_article.classList.add("hide_now");
    })
    /********************************************************************* */

let buton2 = document.querySelector("#but2");
let hide_article1 = document.querySelector("#hidden_article2");
buton2.addEventListener("click", () => {
    hide_article1.classList.remove("hide_now1");
})
let exit2 = document.querySelector("#exit_logo1");
exit2.addEventListener("click", () => {
        hide_article1.classList.add("hide_now1");
    })
    /********************************************************************* */

let buton3 = document.querySelector("#but3");
let hide_article2 = document.querySelector("#hidden_article3");
buton3.addEventListener("click", () => {
    hide_article2.classList.remove("hide_now2");
})
let exit3 = document.querySelector("#exit_logo2");
exit3.addEventListener("click", () => {
    hide_article2.classList.add("hide_now2");
})
var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}