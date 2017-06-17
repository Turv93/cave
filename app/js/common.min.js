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
    parallaxInit();
    sliderInit();
    acmoInit();
});


function parallaxInit(){
    $('#diamonds').parallax();
}

function acmoInit(){
    $.ajax({
        url: 'http://beta.json-generator.com/api/json/get/EyTiVz0GQ',
        methd: 'GET'
    }).done((data)=>{
        debugger
    })
}

function sliderInit(){
    
    let calcVals = {};
    
    let calc = (vals)=>{
        let result = 0;
        
        result = (calcVals['r1'] + 1  - calcVals['r2']) * calcVals['r3'];

        return result;
    }
    
    let refresh = function(e,ui){
            let val = $(this).slider('value') || 0;
            calcVals[e.target.id] = val;
            $('#i1').val(calc(calcVals) || 0);
        };
    
    $('#r1, #r2, #r3').slider({
        min: 5,
        max: 205,
        value: 15,
        change: refresh,
        create: refresh
    });
}
