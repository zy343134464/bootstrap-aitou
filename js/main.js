$(document).ready(function(){
    $('.owl-carousel').owlCarousel()

    $('.owl-carousel2').owlCarousel()

    setTimeout(function () {
        loading.classList.remove("active")
    }, 1000)

    tab.init($(".tab"));

    $('.shopping').on('mouseenter','li',function(){
        $(this).children('.model').css('display','block');
    })
    $('.shopping').on('mouseleave','li',function(){
        $(this).children('.model').css('display','none');
    })
});