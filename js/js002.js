function sayHello() {
    //console.log("Hello");

    // 取得 input 的值
    var str = $("#input").val();

    // 將 str 設定到 output 
    $("#output").text(str);
}

// 將 id名為 test 的 button，綁定 click 事件 
$("#test").bind('click', sayHello);
function BMI() {
    // 取得身高值
    var h = $('#height').val();
    console.log(h);
    
    // 取得體重值
    var w = $('#weight').val();
    console.log(w);

    // 將公分單位換成公尺單位
    h = h / 100.0;
    
    // 計算 BMI
    var bmi = w / (h * h);
    console.log(bmi);
  
    // 顯示到畫面上
    $('#output').text(bmi);
}

$('#test').bind('click', BMI);