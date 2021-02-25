let navBar = document.querySelector('.navbarslar')
let hamBurger = document.querySelector('#hamburger')

hamBurger.addEventListener('click', () => {
    navBar.classList.toggle('active')
})

let dropDawn = document.querySelector('.dropdawn')
let dropdawnMenu = document.querySelector('.dropdawn-menu')
let dropDawnToggle = document.querySelector('#dropdawn')
let dropDawns = document.querySelector('.dropdawns')

dropDawn.addEventListener('mouseover', () => {
    dropDawn.classList.add('active')
})

dropDawn.addEventListener('mouseleave', () => {
    dropDawn.classList.remove('active')
})

dropDawnToggle.addEventListener('click', () => {
    dropDawns.classList.toggle('active')
})


var mybutton = document.querySelector("#backToTop");

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 200) {
        mybutton.style.display = 'block'
    } else {
        mybutton.style.display = 'none'
    }
})

$('.responsive').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: $(`#angel-right`),
    prevArrow: $(`#angel-left`),
    autoplay: true,
    autoplaySpeed: 7000,
    responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: false,
                nextArrow: $(`#angel-right`),
                prevArrow: $(`#angel-left`),
            }
        },
        {
            breakpoint: 982,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                dots: false,
                nextArrow: $(`#angel-right`),
                prevArrow: $(`#angel-left`),
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 2,
                nextArrow: $(`#angel-right`),
                prevArrow: $(`#angel-left`),
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ]
});


$('.carousel-inner').slick({
    dots: false,
    infinite: true,
    speed: 500,
    fade: true,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: 'linear',
    nextArrow: $(`#right-side`),
    prevArrow: $(`#left-side`),
});

let langBlok = document.querySelector('.lang-blok')
let langMenu = document.querySelector('.lang-menu')

langBlok.addEventListener('mouseover', ()=>{
    langMenu.classList.add('actives')
})

langBlok.addEventListener('mouseleave', ()=>{
    langMenu.classList.remove('actives')
})

langBlok.addEventListener('click', ()=>{
    langMenu.classList.toggle('actives')
})