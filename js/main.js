let navBar = document.querySelector('#navbar')
let hamBurger = document.querySelector('#hamburger')

hamBurger.addEventListener('click', () =>{
    navBar.classList.toggle('active')
})