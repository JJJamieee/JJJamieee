var $gar = $('#garfield')

// 切換成跑步
var run = () => {
    $gar.removeClass('garfield-jump')
    $gar.addClass('garfield-run')
}

// 切換成跳躍
var jump = () => {
    $gar.removeClass('garfield-run')
    $gar.addClass('garfield-jump')
}

// 判斷是否撞到障礙物
var collide = (gar, obs) => {
    let inRangeX = obs.position().left < gar.position().left + gar.innerWidth() - 10;
    let inRangeY = (obs.position().top - gar.position().top) < 50;
    if (obs.position().left > gar.position().left) {
        return inRangeX && inRangeY
    } else {
        return false
    }
}

$(() => {
    var $gar = $('#garfield')

    // 判斷是否有按空白鍵，有的話切換成跳躍
    $(document).keydown(() => {
        if (event.keyCode == 32 && $gar.length > 0) {
            jump()
            setTimeout(run, 600)
        }
    })

    // 檢查是否撞到障礙物，有的話遊戲結束
    var start_time = new Date()
    var interval = setInterval(() => {
        var cur_time = new Date()
        var duration = (cur_time - start_time) / 1000
        $('#run-time').val(duration + 's')
        for (i = 1; i <= 3; i++) {

            // 計時器
            var $o = $('#obstacle>div:nth-child(' + i + ')')
            var $g = $('#garfield')
            if ($o.length > 0) {
                over = collide($g, $o)
                if (over) {
                    console.log("撞到了")
                    for (j = 1; j <= 3; j++) {
                        var $stop_obs = $('#obstacle>div:nth-child(' + j + ')')
                        if ($stop_obs.length > 0) {
                            $stop_obs.attr('style', 'animation-play-state:paused;')
                        }
                    }
                    setTimeout(() => {
                        // 讓加菲貓和障礙物停下來
                        clearInterval(obs_inter)
                        $g.attr('style', 'animation-play-state:paused;')
                        $('#game-over').removeClass('gameover-hide')
                        $('#game-over').addClass('gameover-show')
                    }, 500);
                    clearInterval(interval)
                }
            }
        }
    }, 30);
})