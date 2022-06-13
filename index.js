const navSlide = () => {
    const burger = document.querySelector('.burger')
    const nav = document.querySelector('.nav-links')
    // Toggle Now
    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');

    // buger animation
        burger.classList.toggle('toggle')    
    });
}

navSlide()

var icon =document.getElementById("icon")

icon.onclick = function () {
    document.body.classList.toggle("dark-theme");
    if (document.body.classList.contains("dark-theme")) {
        icon.src = "images/sun.png";
    } else {
        icon.src = "images/moon.png";
    }
}