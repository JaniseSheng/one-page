
$(document).ready(function () {
    console.log("我的第一个jQuery代码!");

    $('body').imagesLoaded( function() {
        $('.loading').remove();
    });
    var swiper = new Swiper('.swiper-container', {
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        spaceBetween: 30,
        effect: 'fade'
    });
});