# 前端程設期末報告-自製小恐龍遊戲

## 遊戲構想
仿製google chrome離線時的小恐龍遊戲，以加菲貓為主角，按空白鍵跳過障礙物，碰到障礙物則遊戲結束

## 遊戲設計
- 背景：
    - 天空使用多張圖片循環向左移動，製造主角往前跑的效果
    - 地板固定不動
- 障礙物：
    - 隨機出現1-3個連續障礙物，連續障礙物間間隔一秒
    - 每個障礙物都以等速向左邊移動，製造主角往前跑的效果
    - 障礙物的種類也是隨機出現
- 主角：
    - 在原地跑步
    - 按空白鍵後垂直上下跳躍

## 技術說明
- 背景：
    - 天空圖片使用jQuery把圖片產生在網頁上，再利用setImterval()每隔1秒變換圖片位置
    - 圖片位置變換方法是將每個位置圖片的src換成下一個位置的，製造往左移的效果
- 障礙物：
    - new_obs()可以產生一個隨機的障礙物，用到了上課教的random函數和產生圖片的方法
    - random_obs()可以隨機決定要產生幾個(1-3)連續的障礙物，連續障礙物間間隔一秒，產生障礙物的部分用new_obs()，障礙物之間的時間間隔使用了Promise的方法
    - 用setInterval()每隔5秒執行一次random_obs()
- 主角：
    - run()是將加菲貓切換到跑步的動畫，jump()是將加菲貓切換到跳躍的動畫
    - collide()可以傳入兩個物件，判斷兩個物件是否相撞
    - 用jQuery的keydown()判斷使用者是否按下空白鍵，是的話將加菲貓切換到跳躍的動畫，跳躍結束後再切回跑步動畫
    - 用setInterval()每30秒用collide()檢查加菲貓是否撞到障礙物，是的話將加菲貓和障礙物的動畫、計時器都暫停，並跳出Game Over的畫面
    - 用javascript的Date()做計時器的部分，放在上一點的setInterval()裡，計時器的顯示則是用了bootstrap的form
- 主角和障礙物動畫：
    - 兩個都是用css的animation完成
    - 加菲貓的跑跟跳用了sprite圖加上css的animation做出逐格動畫的效果

## 參考資料
- 判斷是否碰到障礙物：https://iter01.com/71410.html
- 像素圖片來源：https://hpgpixer.jp/
- 加菲貓sprite來源：https://www.spriters-resource.com/
- CSS動畫：https://www.oxxostudio.tw/articles/201803/css-animation.html
- 角色跑步：https://blog.devdon.com/?p=3924
- javascript delay效果(Promise)：https://www.oxxostudio.tw/articles/201706/javascript-promise-settimeout.html
- 跳出setIterval()：http://caibaojian.com/setinterval-times.html
- 計時器：http://www.eion.com.tw/Blogger/?Pid=1148


# 林佳勳, Chia-Hsun Lin 的個人網頁

## 網站設計

沒有使用別人的模板，使用html、css、javascript、jquery、bootstrap，為一頁式網站，分成四個部分：Home、About Me、Project & Activities、Contact。

## 特別功能

- Navbar
    - 滑動到頁面不同區塊不同標籤會變active
    - 點擊標籤可跳到頁面不同區塊

- Home
    - 用JavaScript自製幻燈片效果

- About Me
    - 用CSS的linear-gradient在背景圖上再套上一個漸層圖層

- Project & Activities
    - 用JavaScript製作hover放大和變色效果
    - 點擊各個card會跳出modal或新的一頁展示更多內容

- Contact
    - 用CSS的linear-gradient在背景圖上再套上一個漸層圖層
    - 點擊email連結可直接寄信至所留信箱

## 參考資料

- Bootstrap：https://getbootstrap.com/
- 導覽列：https://www.minwt.com/webdesign-dev/html/15054.html
- 圖片素材：https://www.pexels.com/
- 小圖示：https://fontawesome.com/
