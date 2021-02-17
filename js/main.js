let navBar = document.querySelector('.navbarslar')
let hamBurger = document.querySelector('#hamburger')

hamBurger.addEventListener('click', () => {
    navBar.classList.toggle('active')
})


$('.responsive').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: $(`#angel-right`),
    prevArrow: $(`#angel-left`),
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
                slidesToShow: 2,
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