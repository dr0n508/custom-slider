$(document).ready(function() {

    var width = $('.slide-container').width();

    $('.slides>li').width(width);
    $('.slides').width(width*$('.slides>li').length);



    $('.slides').css('left',-width);
    $('.slides>li:last-child').prependTo('.slides');

    function nextSlide(){
        $('.slides').animate({
            'margin-left':-width
        },500, function(){
            $('.slides>li:first-child').appendTo('.slides');
            $('.slides').css('margin-left', 0);
        });
    }

    function prevSlide(){
        $('.slides').animate({
            'margin-left':width
        },500, function(){
            $('.slides>li:last-child').prependTo('.slides');
            $('.slides').css('margin-left', 0);
        });
    }


    $('.next').click(nextSlide);
    $('.prev').click(prevSlide);







    $( ".search" ).click(function() {
        $( ".search-form" ).fadeToggle( "slow", "linear" );
    });





});