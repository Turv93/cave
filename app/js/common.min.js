$(function() {

    $('.carousel-reviews').owlCarousel({
        loop: true,
        nav: true,
        smartSpeed: 700,
        dots: false,
        navText: [''],
        responsiveClass: true,
        responsive: {
            0: {
                items: 1
            },
            800: {
                items: 1
            },
            1100: {
                items: 1
            }
        }
    });
    
    
    
    
	$('.carousel-certificate').owlCarousel({
        loop: true,
        nav: true,
        smartSpeed: 700,
        dots: false,
        navText: [''],
        responsiveClass: true,
        responsive: {
            0: {
                items: 1
            },
            800: {
                items: 2
            },
            1100: {
                items: 2
            }
        }
    });

});

$(document).ready(()=>{
    console.log(111);
})
