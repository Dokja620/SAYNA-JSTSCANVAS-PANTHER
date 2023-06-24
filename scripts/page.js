//Nav bar
const menuBurger = document.querySelector('.menu-burger')
const navLinks = document.querySelector ('.nav-links')

menuBurger.addEventListener('click', () => {
    navLinks.classList.toggle('mobile-menu')
})

//animation on scroll... Using next-gen css feature
//Intersection Observer... It tell if an element is visible in the DOM
//I'll apply style to it
const observer = new IntersectionObserver((entries) =>{
    entries.forEach((entry) =>{
        console.log(entry)
        if (entry.isIntersecting){
            entry.target.classList.add('appear')
        } else{
            entry.target.classList.remove('appear')
        }
    })
})
const toscrollElements = document.querySelectorAll('.scroll')
toscrollElements.forEach((el) => observer.observe(el))