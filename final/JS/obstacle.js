var rand = (start, end) => {
    var r
    var n = end - start + 1 //求亂數的範圍 
    r = Math.random() * n // 放大
    r = Math.floor(r) // 去除小數點
    r += start // 位移
    return r
}

var delay = function(s) {
    return new Promise(function(resolve, reject) {
        setTimeout(resolve, s)
    })
}

// 產生隨機障礙物到畫面上
var new_obs = () => {
    let obs_num = rand(1, 1000) % 4 + 1

    // 產生 img 的 jQuery 物件在變數 $img
    var $obs = $('<img>').attr('src', './img/obstacle' + obs_num + '.gif')

    // 產生 div 的 jQuery 物件在變數 $div
    if (obs_num != 2) {
        $div = $('<div>').addClass('obstacle-move1')
    } else {
        $div = $('<div>').addClass('obstacle-move2')
    }

    // 將 $img 插入到 $div 內
    $div.append($obs)

    // 將 $div 插入到網頁 id=data 的html element 裡面
    $('#obstacle').append($div)

    return obs_num
}

// 隨機產生1-3個連續的障礙物，連續障礙物間間隔1秒
var random_obs = () => {
    $('#obstacle').empty()
    let adjac_obs = rand(1, 1000) % 3 + 1
    switch (adjac_obs) {
        case 1:
            new_obs()
            break;

        case 2:
            delay().then(function() {
                new_obs()
                return delay(1000) // 延遲ㄧ秒
            }).then(function() {
                new_obs()
            })
            break;

        case 3:
            delay().then(function() {
                new_obs()
                return delay(1000) // 延遲ㄧ秒
            }).then(function() {
                new_obs()
                return delay(1000) // 延遲一秒
            }).then(function() {
                new_obs()
            })
            break;

        default:
            break;
    }
}

var obs_inter
$(() => {
    obs_inter = setInterval(random_obs, 5000)
})
