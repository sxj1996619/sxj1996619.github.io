var canvas;
var ctx;
var dx = 5; //每次按下所移動的量
var dy = 5;
var x = 200;
var y = 5;
var WIDTH = 482; //地圖尺寸
var HEIGHT = 482;
var img = new Image();
var collision = 0;

function rect(x, y, w, h) {
    ctx.beginPath(); //開始畫圖
    ctx.rect(x, y, w, h); //其實座標和長寬
    ctx.closePath();
    ctx.fill();
}

function clear() {
    ctx.clearRect(0, 0, WIDTH, HEIGHT);
    ctx.drawImage(img, 0, 0);
}

function init() {
    canvas = document.getElementById("canvas"); //id為canvas的tag將使用此函式
    ctx = canvas.getContext("2d");
    img.src = "maze.gif"; //地圖
    return setInterval(draw, 10); //每10 millisecond更新一次
}

function doKeyDown(evt) {
    switch (evt.keyCode) {
        case 38:
            /* Up arrow was pressed */
            if (y - dy > 0) { //檢測是否超出上邊界
                y -= dy; //如果未超出，改變方塊座標
                clear();
                checkcollision(); //呼叫測試障礙函式 
                if (collision == 1) { //如果翻回值為1
                    y += dy; //退回移動前的值
                    collision = 0; //並且將碰撞值歸零
                }
            }

            break;
        case 40:
            /* Down arrow was pressed */
            if (y + dy < HEIGHT) { //檢測是否出下邊界
                y += dy;
                clear();
                checkcollision();
                if (collision == 1) {
                    y -= dy;
                    collision = 0;
                }
            }

            break;
        case 37:
            /* Left arrow was pressed */
            if (x - dx > 0) { //檢測是否超出左邊界
                x -= dx;
                clear();
                checkcollision();
                if (collision == 1) {
                    x += dx;
                    collision = 0;
                }
            }
            break;
        case 39:
            /* Right arrow was pressed */
            if ((x + dx < WIDTH)) { //檢測是否超出右邊邊界
                x += dx;
                clear();
                checkcollision();
                if (collision == 1) {
                    x -= dx;
                    collision = 0;
                }
            }
            break;
    }
}

function checkcollision() {
    var imgd = ctx.getImageData(x, y, 15, 15); //獲取移動后方塊的所佔用的座標信息
    var pix = imgd.data; //收集圖像的RGBA值，
    for (var i = 0; n = pix.length, i < n; i += 4) { //依次檢查每個點的像素值，RBGA各佔一個Byte，i+4為進入下一個點
        if (pix[i] == 0) { //如果區塊佔用的點包含了黑色區塊
            collision = 1; //碰撞值就為1
        }
    }
}

function draw() {
    clear();
    ctx.fillStyle = "purple";//畫出紫色區塊
    rect(x, y, 15, 15);
}
init();
window.addEventListener('keydown', doKeyDown, true); //如果有按鈕按下 ，進入到doKeyDown這個程式里。