$(() => {
    var $card = $('.card');

    $card.hover(
        function() {
            $(this).addClass("card-hover-color");
            $(this).find('img').addClass("card-img-hover");
        },
        function() {
            $(this).removeClass("card-hover-color");
            $(this).find('img').removeClass("card-img-hover");
        }
    );

    $(window).scroll(() => {
        var win_h = $(document).scrollTop();
        if (win_h >= ($('#nav').height() * 4)) {
            $('#nav').removeClass('nav-color1').addClass('sticky-top').addClass('nav-color2');
        } else {
            $('#nav').removeClass('nav-color2').removeClass('sticky-top').addClass('nav-color1');
        };
    });

});
