const navSlide = () => {
    const thing = document.querySelector('.thing');
    const nav = document.querySelector('.nav-links');
    const navlinks = document.querySelectorAll('.nav-links li');

    thing.addEventListener('click', () => {
        nav.classList.toggle('nav-active');

   
    navLinks.forEach((link, index) => {
        if (link.style.animation) {
            link.style.animation = '';
        } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5 }s`;
        }
    });
 });
}
navSlide();
