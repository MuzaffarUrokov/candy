
$(document).ready(function(){
    $('.pruduct-carousel').owlCarousel({
        center: true,
        items:2,
        loop:false,
        margin:50,
        nav:false,
        dots:false,         
        responsive:{
            0:{
                items:1,nargin:10
            },
            600:{
                items:2,margin:10
            },
            1000:{
                items:3,margin:40
            }
        }
    });
});

$(document).ready(function(){
    $('.custom').owlCarousel({
        animateOut: 'fadeOutUp',
        animateIn: 'fadeInUp',
        autoplay:true, 
        autoplayTimeout:5000,
        items:1,
        margin:30,
        stagepadding:30,
        dots:false,
        loop:true

    });
});

$('.owlcenter').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    dots:false,
    responsive:{
        0:{
            items:1,margin:0,center:true
        },
        600:{
            items:2,margin:100
        },
        1000:{
            items:2,margin:100
        },
        1100:{
            items:3
        }
    }
});
var owl = $('.owlcenter');
owl.owlCarousel();

$('.owl-next').click(function() {
    owl.trigger('next.owl.carousel');
})

$('.owl-prev').click(function() {
    owl.trigger('prev.owl.carousel', [300]);
});



