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
