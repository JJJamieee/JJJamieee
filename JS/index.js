var cnt = 1
var changePhoto = () => {
    var person1 = $('#photo1')
    var person2 = $('#photo2')
    cnt %= 2
    if (cnt == 0) {
        person1.attr('src', './img/person1.jpg')
        person2.attr('src', './img/person2.png').attr('class', 'p21')
    } else {
        person2.attr('src', './img/person1.jpg').attr('class', 'p12')
        person1.attr('src', './img/person2.png')
    }
    cnt++
}

$(() => {
    setInterval(changePhoto, 3000)

    $('.card').hover(
        function() {
            $(this).addClass("card-hover");
        },
        function() {
            $(this).removeClass("card-hover");
        }
    );

    $(window).scroll(function() {
        var win_h = $(document).scrollTop();
        if (win_h >= ($('#nav').height() * 4)) {
            $('#nav').removeClass('nav-color1').addClass('sticky-top').addClass('nav-color2');
        } else {
            $('#nav').removeClass('nav-color2').removeClass('sticky-top').addClass('nav-color1');
        }
    });

})