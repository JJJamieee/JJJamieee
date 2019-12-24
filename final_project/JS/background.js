var init_pic = (n) => {
    // 產生 img 的 jQuery 物件在變數 $img
    var $img = $('<img>').attr('src', './img/sky' + n + '.png')

    // 產生 div 的 jQuery 物件在變數 $div
    $div = $('<div>').addClass('col').addClass('sky-pic')

    // 將 $img 插入到 $div 內
    $div.append($img)

    // 將 $div 插入到網頁 id=sky 的html element 裡面
    $('#sky').append($div)
}

var cnt = 1

// 讓天空圖片輪流交換位置，製造動畫效果
var sky_move = () => {
    for (i = 1; i <= 3; i++) {
        let $curImg = $('div#sky>div.sky-pic:nth-child(' + i + ')>img')
        r = (cnt + i) % 4
        if (r == 0) {
            r = 4
        }
        $curImg.attr('src', './img/sky' + r + '.png')
    }
    cnt++
    if (cnt > 4) {
        cnt = 1
    }
}



$(() => {
    // 一開始產生三張天空圖片
    for (i = 1; i <= 3; i++) {
        init_pic(i)
    }

    // 讓天空圖片循環移動
    setInterval(sky_move, 1500);
})
