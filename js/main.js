$( document ).ready(function() {

    $('.burger').click(function() {
        $('.nav').toggleClass('nav--show');
    })  


    $('.owl-carousel').owlCarousel({
        loop:false,
        margin:10,
        nav:true,
        navClass: ['slider__nav--left', 'slider__nav--right'],
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            900:{
                items:3
            },
            1200:{
                items:4
            }
        }
    })

});