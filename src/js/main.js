
$(document).ready(function () {
    console.log("我的第一个jQuery代码!");
    $('body').imagesLoaded( function() {
        $('.loading').remove();
    });

    var swiper = new Swiper('.swiper-container', {

        onInit: function(swiper){
            $('.img-wrapper').removeClass('active');
            $('.img-wrapper').eq(swiper.activeIndex).addClass('active');
        },

        onSlideChangeEnd: function(swiper){
            $('.img-wrapper').removeClass('active');
            $('.img-wrapper').eq(swiper.activeIndex).addClass('active');
        }
    });

    var body_height = $('body').height();
    var body_width = $('body').width();
    if((body_width / body_height) > 0.5622188905547226){
        var width = body_height * 0.5622188905547226;
        $('.img-box').css('width', width + 'px');
    }
});