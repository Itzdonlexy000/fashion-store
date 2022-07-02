
const  navSlide = () => {
    const burger =document.querySelector('.burger');
    const navLink =document.querySelector('.nav-links');

    burger.addEventListener('click', () => {
        navLink.classList.toggle('nav-active');
        burger.classList.toggle('toggle');
    });
}

navSlide()

var iconEl =document.getElementById("icon")

icon.onclick = function () {
    document.body.classList.toggle("dark-theme");
    if (document.body.classList.contains("dark-theme")) {
        icon.src = "images/sun.png";
    } else {
        icon.src = "images/moon.png";
    }
}
